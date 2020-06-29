import React from 'react';

import './App.scss';

const App = () => {
  const maze = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const directions = [];

  for (let i = 0; i < 10; i++) {
    directions.push(i);
  };

  const handleSelect = (event: React.MouseEvent<HTMLTableDataCellElement>) => {
    console.log(event.target);
  };

  return (
    <div className="App">
      <table className="table">
        <tbody>
        {maze.map((_, i) => (
          <tr key={i} className="table__row">
            {maze[i].map((item, i) => (
            <td onClick={handleSelect} className="table__digit" key={i}>{item}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>

      <div className="directions">
        {directions.map(item => (
          <div className="directions__step" key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
