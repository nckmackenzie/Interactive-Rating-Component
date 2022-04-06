const submitBtn = document.querySelector('.submit');
const scoreBtns = document.querySelectorAll('.btn');
const ratingArticle = document.querySelector('.rating');
const scoreArticle = document.querySelector('.score');
const scoreInfo = document.querySelector('.score__info');
let message;
let score;

scoreBtns.forEach(element => {
  element.addEventListener('click', () => {
    score = Number(element.innerText);
  });
});

//submit handler
submitBtn.addEventListener('click', () => {
  if (!score) {
    alert('Select score');
    return;
  }
  ratingArticle.classList.remove('active');
  ratingArticle.classList.add('slideLeft');
  scoreArticle.classList.remove('inactive');
  scoreArticle.classList.add('active');
  message = `You selected ${score} out of 5`;
  scoreInfo.innerText = message;
});
