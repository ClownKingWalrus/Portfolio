import { skills, freqClassNotOpaq, freqOrder, categoryOrder, projects } from "../Components/Data";

function ProjectGenerator() {
    return (
        projects.map((projects) =>
        <div className="flex flex-col items-center cardCanvas bg-card/50 mt-6 "> 
            <button className="card-hover bg-blue-500 rounded-4xl px-4 py-2">
                {projects.name}
            </button>
            <p className="mt-4">
                {projects.projectDescription}
            </p>
            <div className="flex flex-row gap-4">
                <SkillCard skillArr={projects.Skills}/>
            </div>
        </div>
        )
    );
}

function SkillCard({skillArr = []}) { // the = [] is not nessesary but forces the default to be arr so it dosent crash
    return (
        skills
        .filter((item) => skillArr.includes(item.name))
        .sort((a,b) => categoryOrder[a.category] - categoryOrder[b.category])
        .sort((a,b) => freqOrder[a.useFrequency] - freqOrder[b.useFrequency])
        .map((item) =>
        <div className={`cardCanvas card-hover rounded-xl mt-4 ${freqClassNotOpaq[item.useFrequency]}`}>
            {item.name}
        </div>
        )
    );
}

export const Projects = ({onClose}) => {
    return (
        // Screen dimmer is the main div //
        <div className="fixed inset-0 bg-black opacity-99 z-2">
            {/* Close Projects menu below */}
            <button onClick={onClose} className="px-15 py-4 rounded-xl bg-red-600 text-black shadow-xl">
                CLOSER
            </button>
            {/* Put projects below */}
            <div className="h-screen overflow-y-auto">
                <div className="w-screen text-xl flex flex-col mt-2 pb-12 items-center">
                    {ProjectGenerator()}
                    
                </div>
            </div>
        </div>
    )
}