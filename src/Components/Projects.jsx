import { useState } from "react";
import { skills, freqClassNotOpaq, freqOrder, categoryOrder, projects } from "../Components/Data";

export const Projects = ({onClose}) => {
const [openProject, setOpenProject] = useState(null);
const [openVideo, setOpenVideo] = useState(null);

function ExpandProject(project) {
    setOpenProject((prev) => (prev === project.name ? null : project.name));
}

function ProjectGenerator() {
    return (
        projects.map((projects) =>
        <div key={projects.name} className={`flex flex-col items-center cardCanvas bg-card/50 mt-6 w-full 
        transition-all duration-500 ease-in-out
        ${openProject === projects.name ? "max-h-full opacity-100 mt-4" : "max-h-16 opacity-100"}`}>{/*currently max-h-x needs to be set as animating doesent work on auto properties like h-fit/full*/}
            <button onClick={() => ExpandProject(projects)} className="card-hover bg-blue-500 rounded-4xl px-4 py-2 w-[calc(70%)]">
                {projects.name}
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out
            ${openProject === projects.name ? "max-h-full opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}>
                <div className="flex flex-col items-center">
                    <p className="mt-4 text-4xl">
                        {projects.projectDescription}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <ImageCards imageArr={projects.Photos}/>
                        <VideoCard vidArr={projects.Videos} onOpen={setOpenVideo}/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <FeatureCards featureArr={projects.projectFeature}/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <SkillCard skillArr={projects.Skills}/>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <p>Section for downloads - like sokoban algo maps</p>
                    </div>
                </div>
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
        <div key={item.name} className={`cardCanvas card-hover rounded-xl ${freqClassNotOpaq[item.useFrequency]}`}>
            {item.name}
        </div>
        )
    );
}

function VideoCard({vidArr = [], onOpen}) {
    if (vidArr.length >= 1 && vidArr[0].src != null) {
        return (
            vidArr.map((item) =>
                <div key={item.src}>
                    <button type="button" className={`relative block h-100 w-[calc(100%)] overflow-hidden rounded-2xl group`} onClick={ () => onOpen(item.src)}>
                        <img src={item.thumb} alt="" className={`block h-full w-full object-cover overflow-hidden opacity-70 group-hover:opacity-50 transition`}/>
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            
                            {/* Makes everything grow inside */}
                            <div className="bg-white/90 rounded-full p-4 shadow-xl group-hover:scale-110 transition">
                                
                                {/* White Circle */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                                    
                                    {/* Black Triangle */}
                                    <path d="M8 5v14l11-7z" /> 
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            )
        );
    }
}

function ImageCards({imageArr = []}) {
    return (
        imageArr.map((item) =>
            <img key={item} src={`${item}`} alt="Nothing Yet" className={`block h-100 w-[calc(30%)] object-cover overflow-hidden rounded-2xl`}/>
        )
    );
}

function FeatureCards({featureArr = []}) {
    return (
        featureArr.map((item) =>
            <div key={item} className="px-3 py-1 rounded-xl bg-blue-400 text-xl">
                {item}
            </div>
        )
    );
}

    return (
        // Screen dimmer is the main div //
        <div className="fixed inset-0 bg-black opacity-99 z-2">
            {/* Close Projects menu below */}
            <button onClick={onClose} className="px-15 py-4 rounded-xl bg-red-600 text-black shadow-xl">
                CLOSER
            </button>
            {/* Put projects below */}
            <div className="h-screen overflow-y-auto flex flex-col items-center">
                <div className={`w-[calc(60%)] text-xl flex flex-col mt-2 pb-24 items-center gap-10`}>
                    {ProjectGenerator()}
                </div>
            </div>
            {openVideo && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative w-[90%] max-w-4xl">
                        <button
                            onClick={() => setOpenVideo(null)}
                            className="absolute -top-10 right-0 text-white text-xl"
                        >
                            CLOSE
                        </button>

                        <video controls autoPlay className="w-full rounded-xl">
                            <source src={openVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
}