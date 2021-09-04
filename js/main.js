const arrJPWord = new Map();
  arrJPWord.set('1', '一')
// .set('2', '二')
// .set('3', '三')
// .set('4', '四')
// .set('5', '五')
// .set('6','六')
// .set('7','七')
// .set('8','八')
// .set('9','九')
// .set('10','十')
// .set('a','あ')
// .set('i','い')
// .set('u','う')
// .set('e','え')
// .set('o','お')
// .set('ka','か')
// .set('ki','き')
// .set('ku','く')
// .set('ke','け')
// .set('ko','こ')
// .set('sa','さ')
// .set('shi','し')
// .set('su','す')
// .set('se','せ')
// .set('so','そ')
// .set('ta','た')
// .set('chi','ち')
// .set('tsu','つ')
// .set('te','て')
// .set('to','と')
// .set('na','な')
// .set('ni','に')
// .set('nu','ぬ')
// .set('ne','ね')
// .set('no','の')
// .set('ha','は')
// .set('hi','ひ')
// .set('fu','ふ')
// .set('he','へ')
// .set('ho','ほ')
// .set('ma','ま')
// .set('mi','み')
// .set('mu','む')
// .set('me','め')
// .set('mo','も')
// .set('ya','や')
// .set('yu','ゆ')
// .set('yo','よ')
// .set('ra','ら')
// .set('ri','り')
// .set('ru','る')
// .set('re','れ')
// .set('ro','ろ')
// .set('wa','わ')
// .set('wo','を')
.set('n','ん'); 
var bongno  = new Audio('./music/Tieng-bong-bong-no-www_tiengdong_com.mp3');

var music = document.querySelector('#musicnen');
var arrJPWordValue = Array.from(arrJPWord.values());
var arrTransWord = Array.from(arrJPWord.keys());
var have_Music = false;

const chieurong = window.innerWidth - 100;
const chieucao = window.innerHeight;
var end = false;
var rdCreateBall ;
// code logic refesh and level up ... 
var time_Ball_Fall = 5;
var time_LoopInteval = 3000;




// 
 function createbuble(color,timefall,type){
     var toadoX = Math.random() * (chieurong - 0) + 0;
     var ramdom = Math.floor(Math.random() * (arrJPWord.size - 1 + 1) + 0);  
     if(type == 'yes')
     {
        $('.cover-all').append(`<span diem='${type}'  value='${arrTransWord[ramdom]}' class="buble sao" style="left:${toadoX}px;background:${color}; animation-duration: ${timefall}s;" >${arrJPWordValue[ramdom]}</span>`);
     }
     else if(type ==  'no'){
       $('.cover-all').append(`<span diem='${type}'  value='${arrTransWord[ramdom]}' class="buble" style="left:${toadoX}px;background:${color};animation-duration: ${timefall}s" >${arrJPWordValue[ramdom]}</span>`);
     }
     else if(type == 'none')
     {
         $('.cover-all').append(`<span diem='${type}'  value='${arrTransWord[ramdom]}' class="buble" style="left:${toadoX}px;background:${color};animation-duration: ${timefall}s" >${arrJPWordValue[ramdom]}</span>`);
     }
}
var divcha = document.querySelector('.cover-all');
divcha.addEventListener('animationend',(e)=>{
   clearInterval(interval);
    alert("Bạn đã thua với số điểm "+document.querySelector('.score').innerHTML);
   let allbong = document.querySelectorAll('.buble');
   allbong.forEach((e)=>{
       e.remove();
   })

})
var interval = setInterval(()=>{
 rdCreateBall  = Math.random(0,1);
    if(rdCreateBall<0.8 && !document.querySelector('#pause').checked ){
        createbuble('blue','7','none');
    }
    else if(rdCreateBall>=0.8 && rdCreateBall<0.9 && !document.querySelector('#pause').checked){
        createbuble('blue','7','yes');
    }
    else if(rdCreateBall>=0.9 && !document.querySelector('#pause').checked){
        createbuble('black','7','no');
    }
},time_LoopInteval);



document.querySelector('#input-text').addEventListener('keypress',(e)=>{
    if(e.key ==='Enter'){
   let   allbong = document.querySelectorAll('.buble');
      allbong.forEach(element => {
            if(e.target.value == element.getAttribute('value')){
               if(element.getAttribute('diem')=='none'){
                element.remove();
                pointup();
               }
               else if(element.getAttribute('diem')=='yes')
               {
                element.remove();
                pointup();
                pointup();
               }
              
            }
      });
      e.target.value = "";
    }
})


window.addEventListener('click',(e)=>{
    let cb = document.querySelector('#cb');
    if(cb.checked && (e.target.getAttribute('class') == 'buble' || e.target.getAttribute('class') == 'buble sao')){
        e.target.remove();
        if(e.target.getAttribute('class') == 'buble')
       pointup();
       else{ pointup();pointup();}
    }
    if(e.target.getAttribute('diem')=='no')
    {
        e.target.remove();
    }
})


document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState === 'visible'){
        document.querySelector('#pause').checked = false;
        let   allbong = document.querySelectorAll('.buble');
        allbong.forEach((element)=>{
            element.style.animationPlayState  = 'running';
        })
    }
    else{
        document.querySelector('#pause').checked = true;
        let   allbong = document.querySelectorAll('.buble');
        allbong.forEach((element)=>{
                element.style.animationPlayState  = 'paused';
        })
    }
},true);



function pointup(){
    let score = (Number)(document.querySelector('.score').innerHTML);
    score+=1;
    document.querySelector('.score').innerHTML = score;
    bongno.play();
}

function changeStatus(status_name,visible){
    let   allbong = document.querySelectorAll('.buble');
    allbong.forEach((element)=>{
            element.style.animationPlayState  = status_name;
            element.style.visibility = visible;
    })
}

document.querySelector('#pause').addEventListener('change',(e)=>{
    if(e.target.checked){
        changeStatus('paused','hidden');
        document.querySelector('#input-text').style.visibility = 'hidden';
             music.pause();
            document.querySelector('.nutpause').querySelector('i').classList = 'fas fa-play';
    }
    else{
        changeStatus('running','visible');
        document.querySelector('#input-text').style.visibility = 'visible'; 
        if(have_Music){ music.play();}
        document.querySelector('.nutpause').querySelector('i').classList = 'fas fa-pause';

    }
})

document.querySelector('.btn-resart').onclick = function(){
    location.reload();
}


document.querySelector('#bgmusic').addEventListener('change',(e)=>{
    if(!e.target.checked){
        music.muted = true;
        document.querySelector('#icon_loa').classList = 'fas fa-volume-mute'
    }
    else{
        music.play();
        music.muted = false;
        have_Music = true;
        document.querySelector('#icon_loa').classList = 'fas fa-volume-up'
        
    }
})


// so cung  - rang buoc logic ..vv
//var socung = 3 ;

