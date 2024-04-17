document.addEventListener('DOMContentLoaded', () => {
    let counterValue = 0;
    let timerInterval;
  
    const counterElement = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const submitButton = document.getElementById('submit');
  
    const updateCounter = () => {
      counterElement.textContent = counterValue;
    };
  
    const incrementCounter = () => {
      counterValue++;
      updateCounter();
    };
  
    const decrementCounter = () => {
      counterValue--;
      updateCounter();
    };
  
    const likeCounter = () => {
      const likeItem = document.createElement('li');
      likeItem.textContent = `Number ${counterValue} has been liked`;
      likesList.appendChild(likeItem);
    };
  
    const togglePause = () => {
      if (pauseButton.textContent === 'pause') {
        clearInterval(timerInterval);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
      } else {
        timerInterval = setInterval(incrementCounter, 1000);
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'pause';
      }
    };
  
    const addComment = (event) => {
      event.preventDefault();
      const comment = commentInput.value;
      const commentItem = document.createElement('p');
      commentItem.textContent = comment;
      const commentsDiv = document.getElementById('list');
      commentsDiv.appendChild(commentItem);
      commentInput.value = '';
    };
  
    // Initial setup
    timerInterval = setInterval(incrementCounter, 1000);
  
    minusButton.addEventListener('click', decrementCounter);
    plusButton.addEventListener('click', incrementCounter);
    heartButton.addEventListener('click', likeCounter);
    pauseButton.addEventListener('click', togglePause);
    commentForm.addEventListener('submit', addComment);
  });
  