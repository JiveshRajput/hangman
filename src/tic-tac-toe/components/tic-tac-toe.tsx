import { useEffect, useState } from "react"
import { GameWonStatusType, ActiveUserType, BlockType } from "../utils/types"
import GameBoard from "./game-board";
import ActiveUserStatus from "./active-user-status";
import { calculateWinner } from "../utils/helpers";

const initialValue = {
    activeUser: "O",
    blocks: new Array(9).fill(null),
}

function TicTacToe() {
    const [activeUser, setActiveUser] = useState<ActiveUserType>("O");
    const [blocks, setBlocks] = useState<BlockType[]>(initialValue.blocks);
    const winnerValue: GameWonStatusType = calculateWinner(blocks);

    const setBlockValue = (index: number) => {
        if (blocks[index] || winnerValue) { return; }
        setBlocks((prev) => prev.map((val, ind) => ind === index ? activeUser : val));
        setActiveUser((prev) => prev === "O" ? "X" : "O");
    }

    const resetGame = () => {
        setActiveUser("O");
        setBlocks(initialValue.blocks)
    }

    useEffect(() => {
        if (winnerValue) {
            setTimeout(() => {
                resetGame();
            }, 2000)
        }
    }, [winnerValue])

    return (
        <div className='max-w-[1140px] m-auto p-2'>
            {/* heading */}
            <h1 className='text-center text-3xl font-bold text-blue-700 mb-4'>Tic Tac Toe </h1>
            {/* Active User Status */}
            <ActiveUserStatus activeUser={activeUser} status={winnerValue} />
            {/* Game Board */}
            <GameBoard blocks={blocks} onBlockClick={setBlockValue} />
        </div>
    )
}

export default TicTacToe
