import { ChangeEvent, useState } from 'react'
import { generateRandomWords } from '@/utils/generate-random-words';
import HangmanWord from '@/components/hangman-word';
import Keyboard from '@/components/keyboard';
import HangmanModel from './hangman-model';
import HeaderTitle from './header-title';

function Hangman() {
    const [word, setWord] = useState<string>('banana');
    // const [word, setWord] = useState<string>(generateRandomWords);
    const [clickedWords, setClickedWords] = useState<string[]>([]);

    // const clickedWordsCount = clickedWords.length;



    const addWords = (e: any) => {
        setClickedWords((prev) => [...prev, e.nativeEvent.srcElement.dataset.alphabet])
    }

    return (
        <div className="max-w-[1140px] mx-auto p-3">
            <HeaderTitle />
            <HangmanModel />
            <HangmanWord word={word} selectedWords={clickedWords} />
            <Keyboard onClick={addWords} selectedWords={clickedWords} />
        </div>
    )
}

export default Hangman
