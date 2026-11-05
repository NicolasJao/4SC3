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

def totalRoadLength(M):
    n = len(M)
    total = 0
    for i in range(n):
        for j in range(i + 1, n):
            total += M[i][j]
    return total

print(totalRoadLength(M))
# Output should be 1730
