// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Nicolas Jao",
    program: "BTech Automation Systems Engineering Technology - Smart Systems / Engineering",
    university: "McMaster University, Canada",
    email: "jaon@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#232A33",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Investigating Steeles Ave W-Keele St Traffic Conditions Using SUMO Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "10 seconds of HDV base scenario simulation and 10 seconds of AV scenario simulation"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"The study area is the intersection of Steeles Avenue West and Keele Street in Vaughan, Ontario, where two major arterials meet at the Vaughan-Toronto boundary.",
      "A digital roadway-and-traffic model built in SUMO lets us test conditions that are repeatable and cannot be run on a live road.",
      "A 100% autonomous vehicle (AV) scenario could change the speed-density relationship through shorter headways and smoother driving, but the direction of the effect is unknown.",
      "Signal timing can improve flow without new construction, so a longer east-west green is a reasonable first measure to test."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"Problem 1: The study needs a complete digital baseline of the intersection, including network, demand, and signal timing.",
      "Problem 2: AV behavior on the selected edge cannot be inferred from the human-driven vehicle (HDV) model alone.",
      "Problem 3: There is no before-and-after evidence on whether a signal timing change improves conditions on the selected edge."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Objective 1: Develop a digital road network and traffic model of the intersection and characterize the 100% HDV baseline.",
      "Objective 2: Compare the speed-density relationship of the selected edge under 100% AV versus 100% HDV traffic.",
      "Objective 3: Select, implement, and evaluate a signal change (east-west green from 27 s to 41 s) by comparing speed-density results before and after."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Road Network Development (SUMO)",
        text: "Build the Steeles Ave W and Keele St network from GIS data and check its junction geometry.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: 100% HDV Baseline Scenario",
        text: "Add traffic demand and signal timing, then run the base scenario and fit edge E78's speed-density curve.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: 100% AV Scenario",
        text: "Change only the vehicle behavior parameters and compare the result with the baseline on the same edge.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: Signal Timing Intervention",
        text: "Raise the east-west green from 27 s to 41 s and compare speed-density results before and after.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps",
    modules: [
      {
        title: "Module 1: Road Network Development (SUMO)",
        bullets: [
          { text: "Build the network from GIS data, including major roads, local roads, and lanes." },
          { text: "Model junction geometry, turning lanes, and lane-to-lane connections." },
          { text: "Run connectivity and visual checks so the geometry is fixed for every scenario." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: 100% HDV Baseline Scenario",
        bullets: [
          { text: "Assign 450 veh/h east-west and 300 veh/h north-south, with 27 s of green each." },
          { text: "Use SUMO default passenger car parameters with the LC2013 lane-change model." },
          { text: "Collect edgeData output and fit the speed-density diagram for edge E78." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: 100% AV Scenario",
        bullets: [
          { text: "Keep geometry, demand, routes, signals, and the selected edge identical to the baseline." },
          { text: "Use AV parameters: 0.6 s time headway, 1.5 m minimum gap, and 0.05 speed deviation." },
          { text: "Compare the AV and HDV speed-density fits on the same edge." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Signal Timing Intervention",
        bullets: [
          { text: "Increase the east-west green from 27 s to 41 s and keep the north-south green at 27 s." },
          { text: "Run Scenario 2 with 100% HDVs and change nothing else." },
          { text: "Compare speed, density, and implied capacity on edge E78 against the baseline." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
    title: "Results & Potential Improvements",
    subtitle:
      "Speed-density results on edge E78 for the HDV baseline, the 100% AV scenario, and the signal timing intervention. Results are simulation-based and for educational purposes only.",

    charts: {
      left: {
        title: "Base (100% HDV) vs Scenario 1 (100% AV): Speed-Density on Edge E78",
        src: "assets/img/image6.jpg",
        alt: "Speed-density observations on edge E78 for the 100% HDV base scenario and the 100% AV scenario"
      },
      right: {
        title: "Base vs Scenario 2 (Signal Change): Speed-Density on Edge E78",
        src: "assets/img/image7.jpg",
        alt: "Speed-density observations on edge E78 before and after the east-west green time increase"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "The AV scenario shows no clear change: fitted values differ by 2% or less (R² 0.841 vs 0.836, capacity about 816 vs 822 veh/h).",
      "The signal controls speed on this edge, with speeds below 7 m/s, so shorter AV headways have little room to matter at this demand.",
      "The signal change gives a mixed result: implied capacity rises about 2.5% (816 to 837 veh/h) and the densest observations are less severe.",
      "However, the fit weakens (R² falls from 0.841 to 0.744) and scatter grows at 40 to 55 veh/km.",
      "Limitations include assumed demand and signal data, a single run, a single edge, and no field calibration, so the evidence supports further study, not implementation."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Nicolas Jao", role: "Results Analysis and Visualization" }
      { name: "Jacob Kwan", role: "SUMO Road Network Development" }
      { name: "Haonan Ouyang", role: "Traffic Demand and Signal Configuration" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/NicolasJao/4SC3"
  }
};