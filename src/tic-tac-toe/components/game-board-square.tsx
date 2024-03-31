import { BlockType } from "../utils/types"

type GameBoardSquareType = {
    block: BlockType,
    index: number,
    onClick: (e: number) => void,
}

function GameBoardSquare({ block, onClick, index }: GameBoardSquareType) {
    return (
        <div
            className='bg-white aspect-square flex justify-center items-center text-4xl cursor-pointer select-none font-bold'
            onClick={() => onClick(index)}
        >
            {block}
        </div>
    )
}

export default GameBoardSquare
