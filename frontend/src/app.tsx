import React from 'react';

interface Person {
  name: string;
  age: number;
}

const App = ({ name, age }: Person) => {
  return (
    <h1>
      Witaj w React + Vite! {name}
      {age}
    </h1>
  );
};

export default App;
