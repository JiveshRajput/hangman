const HEAD = (
    <div className="absolute w-20 border-4 border-black rounded-full aspect-square"></div>
)

const BODY = (
    <div className="absolute w-1 bg-black left-1/2 top-20 h-20"></div>
)
const LEFT_HAND = (
    <div className="absolute w-1 left-1/2 origin-top rotate-[110deg] bg-black top-24 h-14"></div>
)

const RIGHT_HAND = (
    <div className="absolute w-1 left-1/2 origin-top rotate-[250deg] bg-black top-24 h-14"></div>
)

const LEFT_LEG = (
    <div className="absolute w-1 left-1/2 origin-top rotate-[30deg] bg-black top-40 h-14"></div>
)
const RIGHT_LEG = (
    <div className="absolute w-1 left-1/2 origin-top rotate-[330deg] bg-black top-40 h-14"></div>
)


const BODY_PARTS = [
    HEAD,
    BODY,
    LEFT_HAND,
    RIGHT_HAND,
    LEFT_LEG,
    RIGHT_LEG
]

type HangmanModelTypes = {
    incorrectWords: number
}

function HangmanModel({ incorrectWords = 0 }: HangmanModelTypes) {
    return (
        <>
            <div className="w-[350px] aspect-square mx-auto relative">
                <div className="absolute right-1/3 top-[16.666%] translate-x-1/2 w-1/5">
                    <div className="relative">
                        {BODY_PARTS.slice(0, incorrectWords)}
                    </div>
                </div>

                {/* HANDLE TOP */}
                <div className="absolute left-1/3 bg-black w-1/3 h-2 top-0"></div>

                {/* HANDLE HANG */}
                <div className="absolute right-1/3 bg-black w-2 h-1/6 top-0"></div>

                {/* STAND */}
                <div className="absolute left-1/3 bg-black h-full w-2"></div>

                {/* BOTTOM */}
                <div className="absolute bg-black w-full h-2 bottom-0"></div>
            </div>
        </>
    )
}

export default HangmanModel
