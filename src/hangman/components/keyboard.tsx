import { memo, MouseEvent } from "react"
import { alphabets } from "@/hangman/utils/alphabet-list"
import KeyboardKey from "./keyboard-key"

type KeyboardProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    selectedWords: string[],
    matchLoss: boolean,
    matchWon: boolean,
}

function Keyboard({ onClick, selectedWords, matchLoss, matchWon }: KeyboardProps) {

    return (
        <div className="flex justify-center gap-4 flex-wrap p-2 pt-6">
            {
                alphabets.map((alphabet) => {
                    return (
                        <>
                            <KeyboardKey key={alphabet} alphabet={alphabet} onClick={onClick} selectedWords={selectedWords} matchLoss={matchLoss} matchWon={matchWon} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default memo(Keyboard)
