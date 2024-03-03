import { ReactNode, createContext, useEffect, useState } from "react";
import { ImageAttributeTypes } from "../../types/interfaces";

interface historyObjectType {
  searchedQuery: string;
  pageNums: number;
  data: Array<ImageAttributeTypes>;
}

interface HistoryDataType {
  dataHistoryArr: Array<historyObjectType>;
  setDataHistoryArr: React.Dispatch<
    React.SetStateAction<Array<historyObjectType>>
  >;
}

export const DataHistoryCtx = createContext<HistoryDataType>({
  dataHistoryArr: [],
  setDataHistoryArr: () => {},
});

const DataHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [dataHistoryArr, setDataHistoryArr] = useState<historyObjectType[]>(
    () => {
      const localData = localStorage.getItem("data");
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dataHistoryArr));
  }, [dataHistoryArr]);

  return (
    <DataHistoryCtx.Provider value={{ dataHistoryArr, setDataHistoryArr }}>
      {children}
    </DataHistoryCtx.Provider>
  );
};

export default DataHistoryProvider;
