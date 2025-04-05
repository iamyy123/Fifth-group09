import React, { useState } from 'react';

const LotteryComponent: React.FC = () => {
  // 中奖概率（30% 中奖率）
  const WIN_PROBABILITY = 0.3;
  
  // 定义组件状态
  const [isLotteryDone, setIsLotteryDone] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  // 处理抽奖逻辑
  const handleLottery = () => {
    // 生成随机数并判断结果
    const random = Math.random();
    const win = random < WIN_PROBABILITY;
    
    // 更新状态
    setIsWinner(win);
    setIsLotteryDone(true);
  };

  // 重置抽奖
  const resetLottery = () => {
    setIsLotteryDone(false);
    setIsWinner(false);
  };

  return (
    <div className="border-4 border-blue-500 p-8 mb-4 rounded-lg max-w-md mx-auto">
      <h2 className="text-3xl text-blue-600 text-center mb-6 font-bold">
        抽奖时间到
      </h2>

      {!isLotteryDone ? (
        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                     text-white font-bold py-3 px-8 rounded-full text-lg block mx-auto transition-all
                     hover:scale-105 shadow-lg"
          onClick={handleLottery}
        >
          立即抽奖
        </button>
      ) : (
        <div className="text-center">
          <p className={`text-2xl font-semibold mb-4 ${isWinner ? 'text-green-500' : 'text-red-500'}`}>
            {isWinner ? ' 被财神节"拍了拍"' : '滴滴 系统提示:您被财神拉黑3秒'}
          </p>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-md mt-4"
            onClick={resetLottery}
          >
            再试一次
          </button>
        </div>
      )}
    </div>
  );
};

export default LotteryComponent;