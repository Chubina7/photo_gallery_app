import React, { useContext, useState } from "react";
import styles from "./SearchBtn.module.css";
import { SearchBtnProps } from "../../types/interfaces";
import { DataHistoryCtx } from "../../context/dataHistoryProvider/DataHistoryProvider";

const SearchBtn = ({ querySetterFunc, numSetterFunc }: SearchBtnProps) => {
  const { dataHistoryArr } = useContext(DataHistoryCtx);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout((): void => {
      const inputValue = e.target.value.trim();

      if (inputValue === "") return;
      querySetterFunc(inputValue);
      numSetterFunc(1);
      // localStorage.setItem("data", JSON.stringify(dataHistoryArr));
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <input
      className={styles.inputField}
      type="text"
      placeholder="ძებნა"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBtn;
