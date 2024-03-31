import { memo } from "react"
import { getGameStatus } from "../utils/helpers"
import { GameWonStatusType } from "../utils/types"

type GameStatusType = {
    status: GameWonStatusType,
}

function GameStatus({ status }: GameStatusType) {

    return (
        <>
            <div className="text-center mb-4 font-semibold">
                {getGameStatus(status)}
            </div>
        </>
    )
}

export default memo(GameStatus)

