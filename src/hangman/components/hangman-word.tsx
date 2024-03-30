
type HangmanWordTypes = {
    word: string,
    selectedWords: string[],
    matchLoss: boolean,
    matchWon: boolean,
}

function HangmanWord({ word = '', selectedWords = [], matchLoss, matchWon }: HangmanWordTypes) {
    return (
        <div className="py-4">
            <h1 className='text-3xl text-center'>
                {word.split('').map((letter: string) => {
                    const isLetterSelected = selectedWords.includes(letter);

                    const css = !matchLoss ? isLetterSelected ? "visible" : "invisible" : !isLetterSelected ? "text-red-500 visible" : "visible";

                    return (
                        <span className={`uppercase mx-1 font-bold border-b-4 ${matchLoss && !isLetterSelected ? "border-red-500" : "border-black"}`}>
                            <span className={`${css} ${matchWon ? 'text-green-600' : ''}`}>
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
