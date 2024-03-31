type GameBoardType = {
    blocks: string[],
    onBlockClick: (e: number) => void,
}

function GameBoard({ blocks, onBlockClick }: GameBoardType) {
    return (
        <div className='max-w-[250px] mx-auto bg-black grid grid-cols-3 gap-1 mb-4'>
            {
                blocks.map((blockValue, index) => {
                    return (
                        <>
                            <div
                                className='bg-white aspect-square flex justify-center items-center text-2xl cursor-pointer select-none'
                                onClick={() => onBlockClick(index)}
                            >
                                {blockValue}
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default GameBoard
