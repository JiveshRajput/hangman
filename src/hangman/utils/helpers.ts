export const getIncorrectWords = (clickedWords: string[], word: string): number => {
    let totalIncorrectWords: number = 0;
    clickedWords.forEach((clickedWord) => {
        if (!word.includes(clickedWord)) {
            totalIncorrectWords += 1;
        }
    })

    return totalIncorrectWords;
}

export function checkIsMatchWon(word: string, clickedWords: string[]): boolean {
    return word.split('').every((alphabet) => clickedWords.includes(alphabet))
}