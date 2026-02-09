import { categories, skills, freqClass, freqOrder } from "../Components/Data";
const maxWidth=275;
///Generates a skill card for each item in skills specfically
//the way .sort works is essentially it grabs 2 random items, probably starts at index 0 and 1 who knows then it does is freqOrder[a.u] - freqOrder[b.u] postive
// if yes then it goes after if no then it stays, once it loops through everything over and over bascially bubble sort
function SkillCardsGenerator({category = ""}) {
    return skills
    .filter((item) => item.category == category)
    .sort((a,b) => freqOrder[a.useFrequency] - freqOrder[b.useFrequency])
    .map((item, key) => (
        <button key={key} className={`cardCanvas card-hover rounded-xl mt-4 ${freqClass[item.useFrequency]} w-[calc(20%-1rem)] text-center`}>
            {item.name}
        </button>
    ));
    
}

function CreateSkills() {
    return categories.map((category, key) => (
        <div key={key} className="flex flex-col mt-6 items-center w-[calc(60%)]">
            <button className={`cardCanvas card-hover rounded-xl mt-8  w-[calc(95%)]`}>
                {category}
            </button>
            <div className={`flex flex-wrap gap-4 w-[calc(95%)]`}>
                <SkillCardsGenerator category={category}/>
            </div>
        </div>
    ));
}

export const Skills = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-black opacity-99 z-2">
            <button onClick={onClose} className="px-15 py-4 rounded-xl bg-blue-600 text-black shadow-xl">
                CLOSER
            </button>
             {/* Forces all objects center of the screen inside here */}
            <div className="scrollable-container">
                <div className="w-screen text-xl flex flex-col mt-2 pb-24 items-center">
                    {CreateSkills()}
                </div>
            </div>
        </div>
    )
}