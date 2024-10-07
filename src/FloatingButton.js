import React from 'react';

function FloatingButton({ onClick }) {
  return (
    <div 
      style={{
        position: 'fixed', // Make sure the button is fixed on the screen
        bottom: '20px', 
        right: '20px', // Keep it at the bottom right of the screen
        zIndex: 9999,  // Ensure it's always on top of other elements
        background: 'blue', 
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      <button onClick={onClick}>Upvote All</button>
    </div>
  );
}

export default FloatingButton;
