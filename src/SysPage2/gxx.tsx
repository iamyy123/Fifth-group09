import React, { useState } from 'react';

const StatefulComponent = () => {
    // 初始化计数器状态为 0
    const [count, setCount] = useState(0);

    // 定义增加计数器的函数
    const incrementCount = () => {
        setCount(count + 1);
    };

    // 定义减少计数器的函数
    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md w-64 mx-auto mt-8">
            <h2 className="text-xl font-bold mb-2">计数器</h2>
            <p className="mb-4">当前计数: {count}</p>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 text-white p-2 rounded-md"
                    onClick={incrementCount}
                >
                    点击增加
                </button>
                <button
                    className="bg-red-500 text-white p-2 rounded-md"
                    onClick={decrementCount}
                >
                    点击减少
                </button>
            </div>
        </div>
    );
};

export default StatefulComponent;
    