import React, { useState } from'react';

// 定义组件类型
type ToggleComponentProps = {};

const ToggleComponent: React.FC<ToggleComponentProps> = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="bg-white p-4 border border - red - 500">
      <h2 className="text - 2xl font - bold mb - 4">组员2组件作品(带状态)</h2>
      <p className="text - lg">{isOn? '开关已开启' : '开关已关闭'}</p >
      <button
        className={`bg - ${isOn? 'green' : 'gray'} - 500 hover:bg - ${isOn? 'green' : 'gray'} - 700 text - white font - bold py - 2 px - 4 rounded`}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn? '关闭开关' : '打开开关'}
      </button>
    </div>
  );
};

export default ToggleComponent;