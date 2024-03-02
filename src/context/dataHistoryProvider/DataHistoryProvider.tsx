import { createContext, useState } from "react";

export const DataHistoryCtx = createContext({});

interface HistoryDataType {
  query: {
    dataKey1: string;
    dataKey2: string;
    dataKey3: string;
  };
}

const DataHistoryProvider = ({ children }: any) => {
  const [dataHistoryArr, setDataHistoryArr] = useState<HistoryDataType[]>([]);

  //   const arr = [
  //     {
  //       query: {
  //         dataKey1: "value1",
  //         dataKey2: "value2",
  //         dataKey3: "value3",
  //       },
  //     },
  //   ];

  return (
    <DataHistoryCtx.Provider value={{ dataHistoryArr, setDataHistoryArr }}>
      {children}
    </DataHistoryCtx.Provider>
  );
};

export default DataHistoryProvider;
