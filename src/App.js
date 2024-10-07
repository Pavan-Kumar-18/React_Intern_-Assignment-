import React from 'react';
import FloatingButton from './FloatingButton';

function App() {
 
  const scrollToBottom = async () => {
    let totalHeight = document.body.scrollHeight;
    while (window.scrollY + window.innerHeight < totalHeight) {
      window.scrollBy(0, window.innerHeight);
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      totalHeight = document.body.scrollHeight; 
    }
  };
  const upvoteAllComments = async () => {
    const upvoteButtons = document.querySelectorAll('[aria-label="upvote"]');
    if (upvoteButtons.length === 0) {
      console.log("No comments or replies to upvote");
      return;
    }
    for (let button of upvoteButtons) {
      if (!button.classList.contains('upvoted')) { 
        button.click(); 
        await new Promise(resolve => setTimeout(resolve, Math.random() * (3000 - 1000) + 1000)); 
      }
    }
  };
  
  const handleUpvoteClick = async () => {
    await scrollToBottom();
    await upvoteAllComments();
    console.log("Upvoting complete!");
  };
  

  return (
    <div>
      <FloatingButton onClick={handleUpvoteClick} />
    </div>
  );
}

export default App;
