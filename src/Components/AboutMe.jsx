import { AboutMe1, AboutMe2, AboutMe3, AboutMe4 } from "./Data"
// const maxWidth=`[calc(20%)]`; //not sure why this does not work in as w-${maxWidth} ????
// const maxHeight=`[calc(50%)]`;
export const AboutMe = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-black opacity-99 z-2">
            <button onClick={onClose} className="px-15 py-4 rounded-xl bg-pink-400 text-black shadow-xl">
                CLOSER
            </button>
            <div className="scrollable-container flex flex-col gap-5 pb-24">

                {/* Below Each item is a Banner with 2 img on the left and right with a infomational in the middle */}

                <div className="w-screen flex flex-row gap-0.5">
                    <img src="AztecGizmo.jpg" alt="My Cat :)" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                    <div className="cardCanvas bg-amber-300/90 w-full flex flex-col items-center">
                        <h1 className={`text-4xl text-white cardCanvas card-hover rounded-xl text-center h-fit w-[calc(90%-1rem)]`}>
                            About Me
                        </h1>
                        <p className="text-2xl whitespace-pre-line">
                            {`${AboutMe1}`}
                        </p>
                    </div>
                    <img src="SNHU-LearningCenter.webp" alt="My Cat :)" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                </div>

                <div className="w-screen flex flex-row gap-0.5">
                    <img src="IEEE_Photo.jpg" alt="My Cat :)" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                    <div className="cardCanvas bg-blue-300/90 w-full flex flex-col items-center">
                        <h1 className="text-4xl text-white cardCanvas card-hover rounded-xl text-center h-fit w-[calc(90%-1rem)]">
                            Learn About IEEE
                        </h1>
                        <p className="text-2xl whitespace-pre-line">
                            {`${AboutMe2}`}
                        </p>
                    </div>
                    <img src="Trunks.jpg" alt="Wolak Learning Center" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                </div>

                <div className="w-screen flex flex-row gap-0.5">
                    <img src="ServerRack.jpg" alt="My Cat :)" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                    <div className="cardCanvas bg-red-300/90 w-full flex flex-col items-center">
                        <h1 className="text-4xl text-white cardCanvas card-hover rounded-xl text-center h-fit w-[calc(90%-1rem)]">
                            Learn About My Server Specs
                        </h1>
                        <p className="text-2xl whitespace-pre-line">
                            {`${AboutMe3}`}
                        </p>
                    </div>
                    <img src="Robot_Drawing.jpg" alt="Wolak Learning Center" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                </div>

                <div className="w-screen flex flex-row gap-0.5">
                    <img src="OkemoTrip.jpg" alt="My Cat :)" className={`block h-[calc(100%)] w-[calc(20%)] object-cover overflow-hidden rounded-2xl`}/>
                    <div className="cardCanvas bg-green-300/90 w-full flex flex-col items-center">
                        <h1 className="text-4xl text-white cardCanvas card-hover rounded-xl text-center h-fit w-[calc(90%-1rem)]">
                            TBD
                        </h1>
                        <p className="text-2xl whitespace-pre-line">
                            {`${AboutMe4}`}
                        </p>
                    </div>
                    <img src="CleanDesk.jpg" alt="Wolak Learning Center" className={`block h-[calc(100%)] w-[calc(20%)]  overflow-hidden rounded-2xl`}/>
                </div>
            
            
            </div>
        </div>
    )
}