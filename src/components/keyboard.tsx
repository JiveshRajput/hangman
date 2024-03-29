import { memo, MouseEvent } from "react"
import { alphabets } from "@/utils/alphabet-list"

type KeyboardProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void,
    selectedWords: string[],
}

function Keyboard({ onClick, selectedWords }: KeyboardProps) {
    return (
        <div className="flex justify-center gap-4 flex-wrap p-2 pt-6">
            {
                alphabets.map((alphabet) => {
                    return (
                        <>
                            <button
                                type="button"
                                onClick={onClick}
                                data-alphabet={alphabet}
                                className={`aspect-square w-10 bg-slate-300 hover:bg-slate-400 rounded-lg uppercase ${selectedWords.includes(alphabet) ? "opacity-25" : ""}`}
                                disabled={selectedWords.includes(alphabet)}
                            >
                                {alphabet}
                            </button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default memo(Keyboard)
