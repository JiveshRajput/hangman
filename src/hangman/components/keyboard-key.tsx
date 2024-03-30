import { MouseEvent } from "react"

type KeyboardKeyProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    selectedWords: string[],
    alphabet: string,
    matchLoss: boolean,
    matchWon: boolean,
}

function KeyboardKey({ onClick, alphabet, selectedWords, matchLoss, matchWon }: KeyboardKeyProps) {
    const isButtonDisabled = selectedWords.includes(alphabet) || matchLoss || matchWon;
    return (
        <>
            <button
                type="button"
                onClick={onClick}
                data-alphabet={alphabet}
                className={`aspect-square w-10 bg-slate-300 hover:bg-slate-400 rounded-lg uppercase ${isButtonDisabled ? "opacity-25" : ""}`}
                disabled={isButtonDisabled}
            >
                {alphabet}
            </button>
        </>
    )
}

export default KeyboardKey
