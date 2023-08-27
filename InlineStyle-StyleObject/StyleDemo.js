import React from 'react';

function StyleDemo() {
  return (
    <>
      <h1 style={{ background: 'lightgreen', color: 'darkgreen' }}>Style This With Inline Styling</h1>
      <h1 style={ myStyle }>Style This With Style Object Variable</h1>
    </>
  );
}

const myStyle = {
  background: 'lightblue',
  color: 'darkblue'
};

export default StyleDemo