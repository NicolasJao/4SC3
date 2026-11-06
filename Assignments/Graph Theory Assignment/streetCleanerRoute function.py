import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

# Since no strict output format has been instructed for this assignment,
# I have chosen to print the results to the console.

def streetCleanerRoute(M): # takes an input of a regular Python 2D list
    # Data preprocessing and visualization
    convert = np.array(M)
    adjacencyMatrix = nx.from_numpy_array(convert)
    pos = nx.spring_layout(adjacencyMatrix, seed=42)
    labels = {i: chr(65 + i) for i in adjacencyMatrix.nodes()}
    nx.draw(
        adjacencyMatrix,
        pos,
        with_labels=True,
        labels=labels,
        node_color="lightblue",
        node_size=800,
        font_size=12,
        font_weight="bold"
    )
    edgeLabels = nx.get_edge_attributes(adjacencyMatrix, "weight")
    nx.draw_networkx_edge_labels(
        adjacencyMatrix, pos, edge_labels=edgeLabels
    )
    plt.title("Original Street Network")
    plt.axis("off")
    plt.show()
    if nx.is_connected(adjacencyMatrix) == False:
        return "Error: Graph must be connected."

    # Odd-degree vertices
    oddDegreeVertices = []
    for node, degree in adjacencyMatrix.degree():
        if degree % 2 == 1:
            oddDegreeVertices.append(node)
    print("Odd degree vertices: ", oddDegreeVertices)

    # Shortest paths
    streets = nx.Graph()
    paths = []
    print("Shortest paths between odd vertices:")
    for x in range(len(oddDegreeVertices)):
        for y in range(x + 1, len(oddDegreeVertices)):
            u = oddDegreeVertices[x]
            v = oddDegreeVertices[y]
            path = nx.shortest_path(adjacencyMatrix, u, v, weight="weight")
            length = nx.shortest_path_length(adjacencyMatrix, u, v, weight="weight")
            streets.add_edge(u, v, weight=length)
            paths.append([u, v, path])
            print(" ", u, "to", v, ":", path, "cost", length)

    # Minimum-cost matching
    matching = nx.min_weight_matching(streets)
    print("Minimum-cost matching:")
    extraRoadLength = 0
    for pair in matching:
        a = pair[0]
        b = pair[1]
        cost = streets[a][b]["weight"]
        print(" ", a, "with", b, "cost", cost)
        extraRoadLength = extraRoadLength + cost
    print("Total extra distance from repeated edges:", extraRoadLength)

    # Making a copy of the graph with repeated edges
    newStreets = nx.MultiGraph(adjacencyMatrix)
    for pair in matching:
        a = pair[0]
        b = pair[1]
        path = []
        for entry in paths:
            if entry[0] == a and entry[1] == b:
                path = entry[2]
            if entry[0] == b and entry[1] == a:
                path = entry[2]
        for k in range(len(path) - 1):
            d = path[k]
            e = path[k + 1]
            f = adjacencyMatrix[d][e]["weight"]
            newStreets.add_edge(d, e, weight=f)

    # Eulerian route
    startingIntersection = 0
    roads = list(nx.eulerian_circuit(newStreets, source=startingIntersection))
    route = [startingIntersection]
    for road in roads:
        route.append(road[1])
    print("Eulerian route:", route)
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    letter_route = []
    for intersection in route:
        letter = alphabet[intersection]
        letter_route.append(letter)
    print("Eulerian route (letters):", letter_route)

    # Cleaning efficiency
    totalRoadDistance = adjacencyMatrix.size(weight="weight")
    totalRoadDistanceTravelled = newStreets.size(weight="weight")
    efficiency = totalRoadDistance / totalRoadDistanceTravelled * 100
    print("Total distance of streets:", totalRoadDistance)
    print("Total distance travelled:", totalRoadDistanceTravelled)
    print("Efficiency:", efficiency)

# original graph:
M = [
    [  0, 120,   0, 150,   0,   0,   0,   0],
    [120,   0, 100,   0, 180,   0,   0,   0],
    [  0, 100,   0, 130,   0, 160,   0,   0],
    [150,   0, 130,   0, 110,   0, 200,   0],
    [  0, 180,   0, 110,   0, 140, 170,   0],
    [  0,   0, 160,   0, 140,   0,   0, 120],
    [  0,   0,   0, 200, 170,   0,   0, 150],
    [  0,   0,   0,   0,   0, 120, 150,   0],
]

print("ORIGINAL GRAPH:")
streetCleanerRoute(M)

# E-F closed:
M = [
    [  0, 120,   0, 150,   0,   0,   0,   0],
    [120,   0, 100,   0, 180,   0,   0,   0],
    [  0, 100,   0, 130,   0, 160,   0,   0],
    [150,   0, 130,   0, 110,   0, 200,   0],
    [  0, 180,   0, 110,   0,   0, 170,   0],
    [  0,   0, 160,   0,   0,   0,   0, 120],
    [  0,   0,   0, 200, 170,   0,   0, 150],
    [  0,   0,   0,   0,   0, 120, 150,   0],
]

print()
print("ROAD E-F CLOSED:")
streetCleanerRoute(M)
