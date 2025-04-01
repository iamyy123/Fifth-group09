import React, { useState } from 'react';

interface MemberOneProps {}

const MemberOneComponent: React.FC<MemberOneProps> = () => {
  
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border-4 border-red-600 p-8 mb-4">
      <h2 className="text-2xl text-red-600 text-center mb-6">抽奖时间到</h2>
      {isActive ? (
        <p className="text-lg text-gray-700">
          谢谢惠顾
        </p>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsActive(true)}
        >
          开盖有奖
        </button>
      )}
    </div>
  );
};


export default MemberOneComponent;