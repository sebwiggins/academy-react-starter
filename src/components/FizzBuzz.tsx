import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
  const [numArrayValue, reRenderNewArrayValue] =
    useState<number[]>([]);
  const [currentValue, newCurrentValue] =
    useState<number>(1);

  const incrementValueByOne = () => {
      const numHistoryArray: number [] = []
      newCurrentValue(currentValue + 1)
      reRenderNewArrayValue([...numHistoryArray,currentValue])
  };

  const FizzBuzzGame = (numHistoryArray:number) => {
      const gameResultArray = []
      for (const number of numArrayValue){
        if (number % 3 === 0){
          gameResultArray.push("Fizz")}
        if (number % 5 === 0){
            gameResultArray.push("Buzz")}
        else{
            gameResultArray.push(number)
        }
      }
    return gameResultArray
  }

  return (
    <>
      <h1>Fizz Buzz</h1>
      <p>Fizz Buzz Results: {FizzBuzzGame}</p>
      <button onClick={incrementValueByOne}>+1</button>
    </>
  );
}

