import { useEffect, useState } from 'react'
import { generateRandomWords } from '@/hangman/utils/generate-random-words';
import HangmanWord from '@/hangman/components/hangman-word';
import Keyboard from '@/hangman/components/keyboard';
import HangmanModel from './hangman-model';
import HeaderTitle from './header-title';
import { checkIsMatchWon, getIncorrectWords } from '@/hangman/utils/helpers';

function Hangman() {
    const [word, setWord] = useState<string>(generateRandomWords);

    const [clickedWords, setClickedWords] = useState<string[]>([]);

    const incorrectWords: number = getIncorrectWords(clickedWords, word);
    const matchLoss: boolean = incorrectWords > 5;
    const matchWon: boolean = checkIsMatchWon(word, clickedWords);
    const addWords = (e: any) => {
        setClickedWords((prev) => [...prev, e.nativeEvent.srcElement.dataset.alphabet])
    }

    useEffect(() => {
        if (matchWon) {
            setTimeout(() => {
                setWord(generateRandomWords);
                setClickedWords([]);
            }, 2000)
        }
    }, [matchWon])

    return (
        <div className="max-w-[1140px] mx-auto p-3">
            <HeaderTitle matchLoss={matchLoss} matchWon={matchWon} />
            <HangmanModel incorrectWords={incorrectWords} />
            <HangmanWord word={word} selectedWords={clickedWords} matchLoss={matchLoss} matchWon={matchWon} />
            <Keyboard onClick={addWords} selectedWords={clickedWords} matchLoss={matchLoss} matchWon={matchWon} />
        </div>
    )
}

export default Hangman
