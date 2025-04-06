import React, { useState } from 'react';
// 定义小狗的接口
interface Dog {
  name: string;
  breed: string;
  age: number;
  imageUrl: string;
}

const initialDog: Dog = {
  name: 'Buddy',
  breed: 'dog',
  age: 1,
  imageUrl: 'img/1.png', // 请替换为真实的小狗图片 URL
};

const App: React.FC = () => {
  const [dog, setDog] = useState(initialDog);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const incrementAge = () => {
    setDog(prevDog => ({
      ...prevDog,
      age: prevDog.age + 1
    }));
  };

  return (
    <div className="app-container">
      <div className="dog-image-container">
        < img src={dog.imageUrl} alt={dog.name} />
      </div>
      <div className="dog-info-container">
        <h2>{dog.name}</h2>
        {showDetails && (
          <div>
            <p>Breed: {dog.breed}</p >
            <p>Age: {dog.age} years</p >
          </div>
        )}
        <button onClick={toggleDetails}>
          {showDetails? 'Hide Details' : 'Show Details'}
        </button>
        <button onClick={incrementAge} style={{ marginTop: '10px' }}>
          Increment Age
        </button>
      </div>
    </div>
  );
};

export default App;