const quiz = [
  {
    question: 'ドラえもんが好きな食べ物はどれ',
    answers: [
      'どら焼き',
      '焼き鳥',
      'せんべい',
      'チンジャオロース'
    ],
    correct: 'どら焼き'
  },{
    question: 'ナルトが好きな食べ物はどれ',
    answers: [
      'ラーメン',
      '焼き鳥',
      'せんべい',
      'チンジャオロース'
    ],
    correct: 'ラーメン'
  },{
    question: 'イタリアンはどれ',
    answers: [
      'パスタ',
      '焼き鳥',
      'せんべい',
      'チンジャオロース'
    ],
    correct: 'どら焼き'
  }
];

const quizLenth = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズのセットアップ
const setupQuiz = () => {  
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++
  };  
}

setupQuiz();

// クイズの判定
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解');
    score++;
  } else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLenth){
   setupQuiz();
  }else {
    window.alert('終了' + 'あなたのスコアは' + score + '/' + quizLenth + 'です');
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
   });
   handlerIndex++;
};