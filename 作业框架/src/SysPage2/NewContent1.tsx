import React, { useState } from'react';

interface Member2ComponentProps {}

const Member2Component: React.FC<Member2ComponentProps> = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
       <div className="border border-red-500 p-4 m-4">
           <h2 className="text-red-500 text-center">组员2组件作品（带状态）</h2>
           <p className="text-center">点击次数: {count}</p>
           <button
               className="bg-green-500 text-white p-2 rounded"
               onClick={handleIncrement}
           >
               增加计数
           </button>
       </div>
    );
};

export default Member2Component;    