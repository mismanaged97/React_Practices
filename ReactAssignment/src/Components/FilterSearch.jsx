// create a component that renders a large list of sentences and includes an input field for filtering these item.
// The goal is to use UseMemo to optimizing the filtering process, ensure the list is only re-calculated when necessary (eg :- when filter criteria changes)

import { useState } from "react";

const words = ["hi", "there", "my", "name", "is", "to", "do", "random", "buy", "macbook", "filter", "s400", "defence", "system", "ensure", "react"];
const TotalLines = 1000;
const All_Words = [];
for (let i = 0; i < TotalLines; i++) {
    let sentence = "";
    for (let j = 0; j <= words.length - 5; j++) {
        sentence += words[Math.floor(Math.random() * words.length)];
        sentence += " ";
    }
    All_Words.push(sentence);
}

export default function FilterSearch() {
    const [inputValue, setInputValue] = useState(All_Words);
    const [words, setWords] = useState(All_Words);

    const filteredSentences = inputValue.filter(x => x.includes(words))

    return (
        <>
            <input type="text" placeholder="Enter words to do filter" onChange={(e) => { setInputValue(e.target.value) }}>{filteredSentences.map(x =>
                <div>
                    {x}
                </div>
            )}</input> <br></br>
        </>
    )
}