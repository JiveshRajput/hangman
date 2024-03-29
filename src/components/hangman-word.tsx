
type HangmanWordTypes = {
    word: string,
    selectedWords: string[],
}

function HangmanWord({ word = '', selectedWords = [] }: HangmanWordTypes) {
    return (
        <div className="py-4">
            <h1 className='text-3xl text-center'>
                {word.split('').map((letter: string) => {
                    return (
                        <span className={`uppercase mx-1 font-bold border-b-4 border-black`}>
                            <span className={`${selectedWords.includes(letter) ? "" : "invisible"}`}>
                                {letter}
                            </span>
                        </span>
                    )
                })}
            </h1>
        </div>
    )
}

export default HangmanWord
