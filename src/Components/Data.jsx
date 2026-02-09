export const skills = [
    //Backend
    { name: "C++", useFrequency: "often", category: "backend" },
    { name: "C#", useFrequency: "sometimes", category: "backend" },
    { name: "Java", useFrequency: "rarely", category: "backend" },
    { name: "Python", useFrequency: "sometimes", category: "backend" },
    { name: "SQL", useFrequency: "sometimes", category: "backend" },
    { name: "Node.js (Express)", useFrequency: "rarely", category: "backend" },

    //Frontend
    { name: "HTML", useFrequency: "rarely", category: "frontend" },
    { name: "CSS", useFrequency: "rarely", category: "frontend" },
    { name: "React", useFrequency: "rarely", category: "frontend" },
    { name: "Tailwind", useFrequency: "rarely", category: "frontend" },
    { name: "JavaScript", useFrequency: "rarely", category: "frontend" },
    { name: "JSX", useFrequency: "rarely", category: "frontend" },
    { name: "Vite", useFrequency: "rarely", category: "frontend" },

    //Tools
    { name: "Bash", useFrequency: "sometimes", category: "tools" },
    { name: "Git", useFrequency: "often", category: "tools" },
    { name: "GitHub", useFrequency: "often", category: "tools" },
    { name: "GitLab", useFrequency: "rarely", category: "tools" },
    { name: "CMake", useFrequency: "sometimes", category: "tools" },
    { name: "Make", useFrequency: "sometimes", category: "tools" },
    { name: "Qt / QtCreator", useFrequency: "often", category: "tools" },
    { name: "WinForms", useFrequency: "rarely", category: "tools" },
    { name: "Arduino", useFrequency: "sometimes", category: "tools" },
    { name: "MySQL Connector/C++", useFrequency: "sometimes", category: "tools" },
    { name: "React Three Fiber", useFrequency: "sometimes", category: "tools" },
    { name: "JSON", useFrequency: "sometimes", category: "tools" },
    { name: "Unreal", useFrequency: "sometimes", category: "tools" },

    //Data Structures im familar with
    { name: "Stacks", useFrequency: "sometimes", category: "datastructures" },
    { name: "Queues", useFrequency: "rarely", category: "datastructures" },
    { name: "Priority Queue", useFrequency: "rarely", category: "datastructures" },
    { name: "Hash Maps", useFrequency: "rarely", category: "datastructures" },
    { name: "LinkedList", useFrequency: "sometimes", category: "datastructures" },
    { name: "Binary Trees", useFrequency: "rarely", category: "datastructures" },

    //Algorithims
    { name: "A* Search", useFrequency: "rarely", category: "algorithims" },
    { name: "DFS", useFrequency: "rarely", category: "algorithims" },
    { name: "BFS", useFrequency: "rarely", category: "algorithims" },

    //OS
    { name: "Windows", useFrequency: "often", category: "platforms" },
    { name: "Linux", useFrequency: "sometimes", category: "platforms" },
    { name: "Ubuntu 24.04", useFrequency: "sometimes", category: "platforms" },
    { name: "Red Hat Linux", useFrequency: "sometimes", category: "platforms" },

    //Soft skills
    { name: "Interpersonal Communication", useFrequency: "often", category: "softskills" },
    { name: "Problem Solving", useFrequency: "often", category: "softskills" },
    { name: "Critical Thinking", useFrequency: "sometimes", category: "softskills" },
    { name: "Teamwork", useFrequency: "often", category: "softskills" },
    { name: "Empathy", useFrequency: "often", category: "softskills" },
    { name: "Time Management", useFrequency: "often", category: "softskills" },
    { name: "Accountability", useFrequency: "often", category: "softskills" },
    { name: "Patience & Persistence", useFrequency: "often", category: "softskills" },
    { name: "Learning New Tools", useFrequency: "sometimes", category: "softskills" },
];

export const freqOrder= {
    often: 0, 
    sometimes: 1, 
    rarely: 2
};

export const categoryOrder= {
    backend: 0, 
    frontend: 1, 
    tools: 2,
    datastructures: 3,
    algorithims: 4,
    platforms: 5,
    softskills: 6
};

export const freqClass = {
    often: "bg-green-500/15 text-green-200 ring-1 ring-green-400/30",
    sometimes: "bg-yellow-500/15 text-yellow-200 ring-1 ring-yellow-400/30",
    rarely: "bg-orange-500/15 text-orange-200 ring-1 ring-orange-400/30",
};

export const freqClassNotOpaq = {
    often: "bg-green-500/70 text-green-200 ring-1 ring-green-400/95",
    sometimes: "bg-yellow-500/60 text-yellow-200 ring-1 ring-yellow-400/95",
    rarely: "bg-orange-500/60 text-orange-200 ring-1 ring-orange-400/95",
};

export const categories = ["backend", "frontend", "tools", "platforms", "softskills"];

export const projects = [
    {name: "Paxel", Skills: ["Qt / QtCreator", "Git", "C++ Connector", "C++", "Bash", "CMake", "SQL"],
        projectDescription: "A reddit inspired casual board discussion app for college students"},
    {name: "Sokoban Algorithims", Skills: ["C++", "AStar", "BFS", "DFS", "LinkedList"],
        projectDescription: "Based on Sokoban, this project uses algorithims like bfs, dfs, astar to solve the game and return the map states it took"},
    {name: "Website Portfolio", Skills: ["Json", "Node.js (Express)", "HTML", "CSS", "React", "Tailwind", "Git", "React-Three"],
        projectDescription: "This project is meant to allow a wider audience to see my skills and learn about me"},
    {name: "Food Crawler", Skills: ["WinForms", "C#"],
        projectDescription: "A School group project where you go through a ever expanding dungeon with different enemies and music based on current fight to level up and defeat the boss"},
    {name: "VS Code Utils", Skills: ["VSCode", "Make", "Bash"],
        projectDescription: "This project allows me to build C# pointing the build bin to the visual studios compiler to be able to use runtime DLLS and also build C++ projects on VS code rather than an IDE", },
    {name: "C Sharp TicTacToe", Skills: ["WinForms", "C#"], 
        projectDescription: "This project was a Graphical User Interface version of TicTacToe"},
    {name: "Arduino Weather Station", Skills: ["Arduino"], 
        projectDescription: "This project was my final in Eng 110 which uses a greedy cup cup that fills up and every 10 seconds it calculates rainfall per minutes"},
    {name: "Arduino IR Communication Towers", Skills: ["Arduino"], 
        projectDescription: "This project would rotate the arduino towers until it found a signal then turn until the signal was clear and then the two towers could communicate via keyboard typing to eachother"},
    {name: "Json Array String Check Wiper", Skills: ["C++", "Json"], 
        projectDescription: "This project which mainly is used for minecraft crafting json takes a input string and wipe anything that does not pass and also a KV pair checker which also wipes non passes from the file"},
    {name: "Black Jack", Skills: ["C++"],
        projectDescription: "Play some terminal Black Jack"},
    // {name: "", Skills: [],
    //     projectDescription: ""},
];

export const workExperienceData = [
    {
        name: "BAE", 
        Skills: [""],
        JobTitle: "Software Engineer Intern 1 Summer 2025",
        JobRequirements: [
            "Enrollment in undergraduate program for CS, CE, or related field", 
            "Complete Freshman Year prior to summer 2025", 
            "Programming experience in at least one or more of the following languages: C, C++, Java, Python.",
            "Strong interpersonal and written and verbal communication skills",
            "Experience with Microsoft Office Suite (e.g., Excel, PowerPoint, Word, etc.)",
            "Demonstrated self-motivation and ability to work independently (this one is to be taken seriously from my experience)",
            "Must be eligible for a US DoD security clearance",
            "Preferred: Knowledge of Data Structures and Object-Oriented Design/Development",
            "Preferred: Knowledge of AGILE based development",
            "Preferred: Experience with Windows and/or Linux Operating Systems",
            "Preferred: Experience using common software version control tools such as Git",
            "Preferred: Security clearance (secret or higher)",
        ],
        Status: "Completed",
        Time: ""
    },
        
    {
        name: "BAE", 
        Skills: [""],
        JobTitle: "Software Engineer Intern 2 Summer 2026",
        JobRequirements: [
            "Enrollment in undergraduate program for CS, CE, or related field", 
            "Complete Sophmore Year prior to summer 2026", 
            "Programming experience in at least one or more of the following languages: C, C++, Java, Python.",
            "Strong interpersonal and written and verbal communication skills",
            "Experience with Microsoft Office Suite (e.g., Excel, PowerPoint, Word, etc.)",
            "Demonstrated self-motivation and ability to work independently (this one is to be taken seriously from my experience)",
            "Must be eligible for a US DoD security clearance",
            "Preferred: Knowledge of Data Structures and Object-Oriented Design/Development",
            "Preferred: Knowledge of AGILE based development",
            "Preferred: Experience with Windows and/or Linux Operating Systems",
            "Preferred: Experience using common software version control tools such as Git",
            "Preferred: Security clearance (secret or higher)",
        ],
        Status: "Accepted Offer",
        Time: ""
    },

    {
        name: "US ARMY", 
        Skills: ["Soft Skills"],
        JobTitle: "11B",
        JobRequirements: [
            "Meet eligibility requirements for enlistment in the U.S. Army (age, citizenship/legal status, background screening)",
            "Qualify for Infantry MOS (11B) through ASVAB and medical screening (MEPS)",
            "Complete Basic Combat Training (BCT) and Infantry One Station Unit Training (OSUT) at Fort Moore, GA",
            "Maintain physical fitness standards (ACFT) and height/weight requirements",
            "Demonstrate discipline, teamwork, and ability to perform under high-stress conditions",
            "Train in individual and small-unit tactics, land navigation, and weapons handling",
            "Follow safety procedures and maintain accountability of sensitive equipment",
            "Ability to deploy and operate in field environments for extended periods",
            "Security Clearance: Not required for initial entry (varies by assignment)"
        ],
        Status: "Completed",
        Time: "4 Years 6 months"
    },

    {
        name: "US National Guard", 
        Skills: ["Soft Skills"],
        JobTitle: "11B Team leader",
        JobRequirements: [
            "Meet eligibility requirements for enlistment in the Army National Guard (age, citizenship/legal status, background screening)",
            "Qualify for Infantry MOS (11B) through ASVAB and medical screening (MEPS)",
            "Complete Basic Combat Training (BCT) and Infantry One Station Unit Training (OSUT) at Fort Moore, GA",
            "Maintain readiness standards including ACFT, medical/dental readiness, and annual training requirements",
            "Participate in monthly drill weekends and annual training cycles",
            "Demonstrate reliability, teamwork, leadership, and strong communication in a unit environment",
            "Train in small-unit tactics, weapons qualification, field operations, and mission readiness tasks",
            "Ability to support state missions (emergency response) and federal mobilization if required",
            "Security Clearance: Not required for initial entry (varies by unit/mission)"
        ],
        Status: "Ongoing",
        Time: "2 Years"
    },
];

export const AboutMe1=
`
Hello, First I would like to thank you for taking the time to view my portfolio. The cat you see on the left here is named Gizmo and trust me I can also see him plotting our demise.
My name is Trunks and yes it is my real name, I'm an avid computer science student currently in my sophomore year progressing through school learning new concepts

`;
export const AboutMe2=
`
While I have enjoyed my time at SNHU, seeing the level at which the school currently conducts it's Computer Science degree has inspired me to join the IEEE club.
In the IEEE clubs members are motivated in their offtime to learn extra computer science concepts either through study or doing personal projects
Being apart of the IEEE club has also granted us a students some power to motivate other students through events and club meetings
Some of the events we have planned is a Git tutorial hosted by myself, having IEEE young profesionals and potentially tech recruiters hold mock interviews and much more.
I do enjoy almost all faceits of computer science be it Frontend which im learning with this or be it Backend and algorithims other peoples projects motivate me to work harder.
see if you can find me on the left image using the right as context
`;
export const AboutMe3=
`
Some of my other interest besides programming or sometimes it feels like brogramming is messing around with server stuff, infact on the left here is my server on this rack.
Some things some might not consider like myself is the electrcity cost of running a enterprise server my Dell-R730 and MD1400 with 10 3TB hardrives cost around $3 a day to run.
However if I could reccomend anything to fellow CS enjoyers is to get a server as the amount of knowledge gained by owning one and using it will surely benfit them I hope.
Another hobby i avidly enjoyed was drawing infact the image on the right is a reference drawing of a image online I saw, Drawing taught me that with hard work comes results.
`;

export const AboutMe4=
`
I also enjoy Skiing and Snowboarding albeit I'm a noob in learning on the second one, this picture was from a trip to okemo I went on with some friends.
Of course this dosen't just extend to winter trips but I also enjoy hiking many peaks, here hoping to hit the appalachine this summer for about a week.
Another faceit of mine is attempting to be relativly neat I defintly take some pride in my desk setup albeit a bit bare it gets the job done.

`;



// export const freqLabel = {  
//     often: "Often",
//     sometimes: "Sometimes",
//     rarely: "Rarely",
// };