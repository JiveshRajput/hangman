import { BlockType } from "../utils/types"
import GameBoardSquare from "./game-board-square"

type GameBoardType = {
    blocks: BlockType[],
    onBlockClick: (e: number) => void,
}

function GameBoard({ blocks, onBlockClick }: GameBoardType) {
    return (
        <div className='max-w-[250px] mx-auto bg-black grid grid-cols-3 gap-1 mb-4'>
            {
                blocks.map((block, index) => {
                    return (
                        <>
                            <GameBoardSquare index={index} block={block} onClick={onBlockClick} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default GameBoard
