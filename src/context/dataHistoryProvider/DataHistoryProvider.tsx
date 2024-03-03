import { ReactNode, createContext, useState } from "react";

interface HistoryDataType {
  dataHistoryArr: any[];
  setDataHistoryArr: React.Dispatch<React.SetStateAction<any[]>>;
}

export const DataHistoryCtx = createContext<HistoryDataType>({
  dataHistoryArr: [],
  setDataHistoryArr: () => {},
});

const DataHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [dataHistoryArr, setDataHistoryArr] = useState<any[]>([]);

  return (
    <DataHistoryCtx.Provider value={{ dataHistoryArr, setDataHistoryArr }}>
      {children}
    </DataHistoryCtx.Provider>
  );
};

export default DataHistoryProvider;
