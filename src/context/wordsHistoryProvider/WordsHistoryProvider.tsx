import React, { ReactNode, createContext, useState } from "react";
import { WordsHistoryCtxTypes } from "../../types/interfaces";

export const WordsHistoryContext = createContext<WordsHistoryCtxTypes>({
  wordsArr: [],
  setWordsArr: () => {},
});

const WordsHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [wordsArr, setWordsArr] = useState<string[]>(() => {
    const cachedWords = localStorage.getItem("words");
    return cachedWords ? JSON.parse(cachedWords) : [];
  });

  return (
    <WordsHistoryContext.Provider value={{ wordsArr, setWordsArr }}>
      {children}
    </WordsHistoryContext.Provider>
  );
};

export default WordsHistoryProvider;
