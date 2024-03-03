import { Dispatch, SetStateAction } from "react";

export interface ImageAttributeTypes {
    id: string;
    urls: {
        small: string;
        full: string;
    };
    likes: number;
    alt_description: string;
}
export interface ImageComponentsTypes {
    id: string;
    src: string;
    alt: string;
    idSetter: Dispatch<SetStateAction<string | null>>;
    modalToggler: Dispatch<SetStateAction<boolean>>;
}

export interface MessageProps {
    data: ImageAttributeTypes[];
    isLoading: boolean;
    error: boolean;
}

export interface SearchBtnProps {
    querySetterFunc: Dispatch<SetStateAction<string>>;
    numSetterFunc: Dispatch<SetStateAction<number>>;
}

export interface WordsHistoryCtxTypes {
    wordsArr: string[];
    setWordsArr: Dispatch<SetStateAction<string[]>>;
}
export interface PhotosArrHookTypes {
    data: ImageAttributeTypes[];
    error: boolean;
    isLoading: boolean;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}
export interface historyObjectType {
    searchedQuery: string;
    pageNums: number;
    data: Array<ImageAttributeTypes>;
}

export interface HistoryDataType {
    dataHistoryArr: Array<historyObjectType>;
    setDataHistoryArr: React.Dispatch<
        React.SetStateAction<Array<historyObjectType>>
    >;
}