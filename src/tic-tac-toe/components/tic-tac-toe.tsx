import { useState } from "react"
import GameStatus from "./game-status"
import { GameWonStatusType, ActiveUserType } from "../utils/types"
import GameBoard from "./game-board";
import ActiveUserStatus from "./active-user-status";

function TicTacToe() {
    const [wonStatus, setWonStatus] = useState<GameWonStatusType>();
    const [activeUser, setActiveUser] = useState<ActiveUserType>("O");
    const [blocks, setBlocks] = useState<string[]>(new Array(9).fill(''));

    const setBlockValue = (index: number) => {
        if (blocks[index] === '') {
            setBlocks((prev) => prev.map((val, ind) => ind === index ? activeUser : val));
            setActiveUser((prev) => prev === "O" ? "X" : "O");

        }
    }


    
    return (
        <div className='max-w-[1140px] m-auto p-2'>
            {/* heading */}
            <h1 className='text-center text-3xl font-bold text-blue-700 mb-4'>Tic Tac Toe </h1>
            {/* Game Status */}
            <GameStatus status={wonStatus} />
            {/* Game Board */}
            <GameBoard blocks={blocks} onBlockClick={setBlockValue} />
            {/* Active User Status */}
            <ActiveUserStatus activeUser={activeUser} />
        </div>
    )
}

export default TicTacToe
