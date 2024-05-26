import React from 'react';

const App = () => {
  return (
    <div
      className="im-a-parent"
      onClickCapture={(e) => {
        e.stopPropagation();
        console.log('Gp');
      }}
    >
      <button
        className="im-a-child"
        onClickCapture={() => {
          console.log('parent');
        }}
      >
        parent
      </button>
      <button
        className="im-a-child"
        onClickCapture={() => {
          console.log('child');
        }}
      >
        child
      </button>
      <button
        className="im-a-child"
        onClickCapture={(e) => {
          e.stopPropagation();
          console.log('gc');
        }}
      >
        gc
      </button>
    </div>
  );
};

export default App;
