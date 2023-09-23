import { useState, useEffect } from "react";
import { fetchCharacterList } from "./fetchers";
import { Body } from "./components/body";
import { useQuery } from "@tanstack/react-query";
import { Preview } from "./components/preview";
import { Header } from "./components/header";




interface Preview {
  id: number;
  name: string;
  imageUrl: string;
}

type RawData = Preview[];


export const App = () => {
  const { isLoading, data: characterList } = useQuery<RawData>(["characterList"],
   fetchCharacterList,
    {
      select: (response) => {
      const dataWithImage = response.filter((item) => 
        item.imageUrl !== undefined 
        &&!(item.imageUrl.includes('gif') || item.imageUrl.includes('jpg'))
         );
      return dataWithImage
    },
  });

  const [showingList, setShowingList] = useState<RawData>([]);

  const hadleResetClick = () => {
    const indexes = new Set();
    while (indexes.size < 100){
      indexes.add(Math.floor(Math.random() * characterList!.length))
    }
    const newCharacterList = characterList!.filter((_, index) => indexes.has(index))
    setShowingList(newCharacterList);
  }
  useEffect(()=> {
    if(!isLoading && characterList){
    setShowingList(characterList!.slice(0,100));
  }}
  ,[isLoading])

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (<>
        <Header onResetClick={hadleResetClick}/>
        <Body showingList={showingList} />
        </>
        )}
    </>
  );
};
