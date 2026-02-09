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

    //Tools
    { name: "Bash", useFrequency: "sometimes", category: "tools" },
    { name: "Git", useFrequency: "often", category: "tools" },
    { name: "CMake", useFrequency: "sometimes", category: "tools" },
    { name: "Make", useFrequency: "sometimes", category: "tools" },
    { name: "Qt / QtCreator", useFrequency: "often", category: "tools" },
    { name: "WinForms", useFrequency: "rarely", category: "tools" },
    { name: "Arduino", useFrequency: "sometimes", category: "tools" },
    { name: "C++ Connector", useFrequency: "sometimes", category: "tools" },
    { name: "React-Three", useFrequency: "sometimes", category: "tools" },
    { name: "Json", useFrequency: "sometimes", category: "tools" },

    //Data Structures im familar with
    { name: "AStar", useFrequency: "rarely", category: "datastructures" },
    { name: "DFS", useFrequency: "rarely", category: "datastructures" },
    { name: "BFS", useFrequency: "rarely", category: "datastructures" },
    { name: "LinkedList", useFrequency: "sometimes", category: "datastructures" },
    { name: "BinaryTrees", useFrequency: "rarely", category: "datastructures" },
    

    //OS
    { name: "Windows", useFrequency: "often", category: "platforms" },
    { name: "Linux", useFrequency: "sometimes", category: "platforms" },
    { name: "Ubuntu-24.04", useFrequency: "sometimes", category: "platforms" },
    { name: "RedHat", useFrequency: "sometimes", category: "platforms" },

    //Soft skills
    { name: "Interpersonal Communication", useFrequency: "often", category: "softskills" },
    { name: "Problem Solving", useFrequency: "often", category: "softskills" },
    { name: "Teamwork", useFrequency: "often", category: "softskills" },
    { name: "Scheduling", useFrequency: "often", category: "softskills" },
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
    platforms: 4
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

export const categories = ["backend", "frontend", "tools", "platforms"];

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
            "Exist"
        ],
        Status: "Completed",
        Time: "4 Years 6 months"
    },

    {
        name: "US National Guard", 
        Skills: ["Soft Skills"],
        JobTitle: "11B",
        JobRequirements: [
            "Exist"
        ],
        Status: "Ongoing",
        Time: "2 Years"
    },
];

// export const freqLabel = {  
//     often: "Often",
//     sometimes: "Sometimes",
//     rarely: "Rarely",
// };