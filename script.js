'use strict';

// document.querySelector('.number').textContent = 7;

// document.querySelector('.btn-uzb').addEventListener('click', function () {
//   document.querySelector('h1').textContent = "Men o'ylagan raqamni toping";
//   document.querySelector('.again').textContent = 'Yana!';
//   document.querySelector('.check').textContent = 'Tekshiring';
//   document.querySelector('.between').textContent = '1 dan 20 gacha';
//   document.querySelector('.message').textContent = 'Taxmin qilishni boshlang';
//   document.querySelector('.label-score').textContent = '💯 ball :20';
//   document.querySelector('.label-highscore').textContent = 'Yuqori ball';
//   document.querySelector('.score').textContent = '20';
// });


///  js style berish

let compuyternewnamber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let lenguage ='eng';

let engToUzb={
  "❗No namber":"❗Raqam kiritilmadi",
  " 📉  Too hight":" 📉  Katta son",
  "📈  Too low" :"📈  Kichik Son",
  "✅ Correct Number":"✅ To'g'ri Raqam",
  "❌ You lost the game !":"❌ O'yinni yutqazdingiz !",
  "Start guessing...":"Topishni boshlang.."
}

function showMessage (massage){
  if(lenguage=='uzb'){
  document.querySelector('.message').textContent=engToUzb[massage];
}
else{
  document.querySelector('.message').textContent=massage;
}
}
///   ? -- uchun tek shirish uchun sonni beramiz

 document.querySelector('.number').textContent = compuyternewnamber;

document.querySelector('.check').addEventListener('click', () => {
  //  foydalanuvchi kiritilgan son
  let guessNumber = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guessNumber) {
      showMessage('❗No namber');
      // document.querySelector('.message').textContent = '❗No namber';
    } else if (guessNumber !== compuyternewnamber) {

      showMessage((guessNumber>compuyternewnamber)? '📉  Too hight':' 📈  Too low');

      score--;
      document.querySelector('.score').textContent = score;
    } 
   else {
    showMessage('✅ Correct Number');
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';

      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
else {
  showMessage('❌ You lost the game !')
    
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click',()=>{
  let compuyternewnamber = Math.trunc(Math.random() * 20) + 1;
  score =20;

  document.querySelector('.guess').value = "";
  showMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

})
document.querySelector('.btn-uzb').addEventListener('click', ()=>{

  lenguage ='uzb';
  document.querySelector('.again').textContent='Qayta';
  document.querySelector('.between').textContent='1 dan 20 gacha';
  document.querySelector('h1').textContent="O'ylangan sonni toping";
  document.querySelector('.check').textContent='Tekshir';
  document.querySelector('.message').textContent="Topishni boshlang";
  document.querySelector('.label-score').innerHTML='💯 Ball: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML= '🥇 Yuqori ball: <span class="highscore">0</span>';
})

document.querySelector('.btn-eng').addEventListener('click', function () {
  lenguage ='eng';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = 'Between 1 and 20';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.label-score').innerHTML = '💯 Score: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML = '🥇 Highscore: <span class="highscore">0</span>';
});