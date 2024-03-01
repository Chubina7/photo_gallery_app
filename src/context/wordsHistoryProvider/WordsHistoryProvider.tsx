import { createContext, useState } from "react";

// Type definition
interface testType {
  wordsArr: string[];
  setWordsArr: React.Dispatch<React.SetStateAction<string[]>>;
}

// Context
export const WordsHistoryContext = createContext<testType>({
  wordsArr: [],
  setWordsArr: () => {},
});

const WordsHistoryProvider = ({ children }: any) => {
  const [wordsArr, setWordsArr] = useState(["t", "e", "s", "t"]);

  return (
    <WordsHistoryContext.Provider value={{ wordsArr, setWordsArr }}>
      {children}
    </WordsHistoryContext.Provider>
  );
};

export default WordsHistoryProvider;
