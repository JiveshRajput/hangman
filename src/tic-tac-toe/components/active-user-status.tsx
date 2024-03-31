import { memo } from "react"
import { getActiveUserName, getGameStatus } from "../utils/helpers"
import { ActiveUserType, GameWonStatusType } from "../utils/types"

type ActiveUserStatusType = {
    activeUser: ActiveUserType,
    status: GameWonStatusType,
}

function ActiveUserStatus({ activeUser, status }: ActiveUserStatusType) {
    return (
        <div className={`text-center mb-4 font-semibold ${status ? 'text-green-700' : 'text-red-600'}`}>
            {status ? getGameStatus(status) : getActiveUserName(activeUser)}
        </div>
    )
}

export default memo(ActiveUserStatus)
