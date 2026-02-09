export const AboutMe = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-black opacity-99 z-2">
            <button onClick={onClose} className="px-15 py-4 rounded-xl bg-pink-400 text-black shadow-xl">
                CLOSER
            </button>
            <p>WORDSWORDSWORDSWORDS</p>
        </div>
    )
}