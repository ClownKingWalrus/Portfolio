import { projects, workExperienceData } from "./Data";

function WorkExperienceGenerator() {
    return (
        workExperienceData.map( (work) =>
            <div className="flex flex-col items-center gap-2 cardCanvas bg-card/50 mt-6">
                <button key={work.name} className="cardCanvas text-3xl">
                    {work.name}
                </button>
            </div>
        )
    );
}

export const WorkExperience = ({onClose}) => {
    return (
        // Screen dimmer is the main div //
        <div className="fixed inset-0 bg-black opacity-99 z-2">
            {/* Close Projects menu below */}
            <button onClick={onClose} className="px-15 py-4 rounded-xl bg-green-600 text-black shadow-xl">
                CLOSER
            </button>
            {/* Put projects below */}
            <div className="h-screen overflow-y-auto">
                <div className="w-screen text-xl flex flex-col mt-2 pb-12 items-center">
                    {}
                    
                </div>
            </div>
        </div>
    )
}