import React, { createContext, useState } from "react";

// Type definition
interface CtxTypes {
  wordsArr: string[];
  setWordsArr: React.Dispatch<React.SetStateAction<string[]>>;
}

// Context
export const WordsHistoryContext = createContext<CtxTypes>({
  wordsArr: [],
  setWordsArr: () => {},
});

const WordsHistoryProvider = React.memo(({ children }: any) => {
  const [wordsArr, setWordsArr] = useState<string[]>([]);

  return (
    <WordsHistoryContext.Provider value={{ wordsArr, setWordsArr }}>
      {children}
    </WordsHistoryContext.Provider>
  );
});

export default WordsHistoryProvider;
