const STRINGS = {
    DEFAULT: {
        title: 'Hangman Game',
        tailwind: '',
    },
    MATCH_WON: {
        title: 'Hurray!!! You won the match.',
        tailwind: 'text-green-600',
    },
    MATCH_LOSS: {
        title: 'Ooo ho!!! You lost the match.',
        tailwind: 'text-red-500',
    },
}

export function getHeaderTitle(matchWon: boolean, matchLoss: boolean): { title: string, tailwind: string } {
    let stringCase: 'DEFAULT' | 'MATCH_WON' | 'MATCH_LOSS' = 'DEFAULT';
    if (matchWon) stringCase = 'MATCH_WON';
    if (matchLoss) stringCase = 'MATCH_LOSS';


    return STRINGS[stringCase];
}