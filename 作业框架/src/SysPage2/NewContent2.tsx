import React, { useState } from "react";

const options = ["石头", "剪刀", "布"];

const App: React.FC = () => {
  // 玩家的选择
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  // 电脑的选择
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  // 游戏结果
  const [result, setResult] = useState<string>("请做出你的选择");

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
    const computerRandomChoice = options[Math.floor(Math.random() * 3)];
    setComputerChoice(computerRandomChoice);

    if (choice === computerRandomChoice) {
      setResult("平局！");
    } else if (
      (choice === "石头" && computerRandomChoice === "剪刀") ||
      (choice === "剪刀" && computerRandomChoice === "布") ||
      (choice === "布" && computerRandomChoice === "石头")
    ) {
      setResult("你赢了！");
    } else {
      setResult("你输了！");
    }
  };

  return (
    <div className="game-container">
      <h1>石头剪刀布游戏</h1>
      <div className="choices">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handlePlayerChoice(option)}
            className="choice-button"
          >
            {option}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="results">
          <p>你的选择: {playerChoice}</p >
          <p>电脑的选择: {computerChoice}</p >
          <p>{result}</p >
        </div>
      )}
    </div>
  );
};

export default App;