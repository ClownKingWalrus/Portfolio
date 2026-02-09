import { projects, workExperienceData } from "./Data";
const maxWidth=275;
function JobRequirementPrinter( {JobRequirement = [""]} ) {
    return (JobRequirement.map( (item) =>
        <div>
            {item}
        </div>
        )
    )
}

function WorkExperienceGenerator() {
    return (
        workExperienceData.map( (work) =>
            <div className={`flex flex-col items-center gap-2 cardCanvas bg-card/50 mt-6 w-${maxWidth}`}>
                <button key={work.name} className="cardCanvas card-hover text-3xl w-[calc(95%-1rem)] mt-1">
                    {work.name}
                </button>
                <div>
                    <h className="text-4xl">{work.JobTitle}</h>
                    <h1 className="text-3xl">Requirements:</h1>
                    <div>
                        <JobRequirementPrinter JobRequirement={work.JobRequirements}/>
                    </div>
                    <h2 className="text-2xl bg-amber-300/50 w-fit px-2 py-2 rounded-xl">Status: {work.Status}</h2>
                </div>
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
            <div className="scrollable-container">
                <div className="w-screen text-xl flex flex-col mt-2 pb-24 items-center">
                    {WorkExperienceGenerator()}
                    
                </div>
            </div>
        </div>
    )
}