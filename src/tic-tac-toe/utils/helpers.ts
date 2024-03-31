import { wonCases } from "./config";
import { STRING } from "./strings";
import { ActiveUserType, BlockType, GameWonStatusType } from "./types";


export function getGameStatus(status: GameWonStatusType): string {
    return status === undefined ? '' : status != null ? STRING[status] : '';
}

export function getActiveUserName(activeUser: ActiveUserType): string {
    return `(${activeUser === "O" ? "O" : "X"}) Turn`
}

export function calculateWinner(squares: BlockType[]): GameWonStatusType {
    if (!squares.includes(null)) {
        return 'TIE';
    }
    for (let i = 0; i < wonCases.length; i++) {
        const [a, b, c] = wonCases[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}