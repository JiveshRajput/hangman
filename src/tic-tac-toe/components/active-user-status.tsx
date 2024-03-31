import { memo } from "react"
import { getActiveUserName } from "../utils/helpers"
import { ActiveUserType } from "../utils/types"

type ActiveUserStatusType = {
    activeUser: ActiveUserType,
}

function ActiveUserStatus({ activeUser }: ActiveUserStatusType) {

    return (
        <>
            <div className="text-center mb-4 font-semibold text-pink-600">
                {getActiveUserName(activeUser)}
            </div>
        </>
    )
}

export default memo(ActiveUserStatus)
