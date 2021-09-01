const arrJPWord = new Map();
  arrJPWord.set('1', '一')
.set('2', '二')
.set('3', '三')
.set('4', '四')
.set('5', '五')
.set('6','六')
.set('7','七')
.set('8','八')
.set('9','九')
.set('10','十')
.set('a','あ')
.set('i','い')
.set('u','う')
.set('e','え')
.set('o','お')
.set('ka','か')
.set('ki','き')
.set('ku','く')
.set('ke','け')
.set('ko','こ')
.set('sa','さ')
.set('shi','し')
.set('su','す')
.set('se','せ')
.set('so','そ')
.set('ta','た')
.set('chi','ち')
.set('tsu','つ')
.set('te','て')
.set('to','と')
.set('na','な')
.set('ni','に')
.set('nu','ぬ')
.set('ne','ね')
.set('no','の')
.set('ha','は')
.set('hi','ひ')
.set('fu','ふ')
.set('he','へ')
.set('ho','ほ')
.set('ma','ま')
.set('mi','み')
.set('mu','む')
.set('me','め')
.set('mo','も')
.set('ya','や')
.set('yu','ゆ')
.set('yo','よ')
.set('ra','ら')
.set('ri','り')
.set('ru','る')
.set('re','れ')
.set('ro','ろ')
.set('wa','わ')
.set('wo','を')
.set('n','ん'); 


var arrJPWordValue = Array.from(arrJPWord.values());
var arrTransWord = Array.from(arrJPWord.keys());
console.log(arrTransWord);
const chieurong = window.innerWidth - 100;
const chieucao = window.innerHeight;
var end = false;
var rdCreateBall ;
console.log("rong"+chieurong+"Cao"+chieucao);


 function createbuble(){
     var toadoX = Math.random() * (chieurong - 0) + 0;
     var ramdom = Math.floor(Math.random() * (arrJPWord.size - 0 + 1) + 0);
    console.log(ramdom);
    $('.cover-all').append(`<span value='${arrTransWord[ramdom]}' class="buble" style="left:${toadoX}px" >${arrJPWordValue[ramdom]}</span>`);
}

var divcha = document.querySelector('.cover-all');
divcha.addEventListener('animationend',(e)=>{
   console.log("end");
})


var interval = setInterval(()=>{
 rdCreateBall  = Math.random(0,1);
    if(rdCreateBall<0.3){
        createbuble();
    }
},200);



document.querySelector('#input-text').addEventListener('keypress',(e)=>{
    if(e.key ==='Enter'){
   let   allbong = document.querySelectorAll('.buble');
      allbong.forEach(element => {
            if(e.target.value == element.getAttribute('value')){
                element.remove();
                pointup();
               
            }
      });
      e.target.value = "";
    }
})


window.addEventListener('click',(e)=>{
    let cb = document.querySelector('#cb');
    if(cb.checked && e.target.getAttribute('class') == 'buble'){
       e.target.remove();
       pointup();
    }
})

function pointup(){
    let score = (Number)(document.querySelector('.score').innerHTML);
    score+=1;
    document.querySelector('.score').innerHTML = score;
    var audio  = new Audio('./music/Tieng-bong-bong-no-www_tiengdong_com.mp3');
    audio.play();
}