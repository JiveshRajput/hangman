import { STRING } from "./strings";
import { ActiveUserType, GameWonStatusType } from "./types";


export function getGameStatus(status: GameWonStatusType): string {
    if (status === undefined) {
        return '';
    } else {
        return STRING[status]
    }
}


export function getActiveUserName(activeUser: ActiveUserType): string {
    return `(${activeUser === "O" ? "O" : "X"}) Turn`
}


export function getWonCases(): number[][] {
    return [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
}