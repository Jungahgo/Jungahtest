const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 11;
var point = 0;


function setResult(value){
    
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[value].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    resultImg.src = infoList[value].img;
    resultImg.alt = value

    imgDiv.appendChild(resultImg)

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[value].desc

}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeout 1s";

    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";

        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)})

    console.log(point);

    if (point<2){
        setResult(0);
    }else if(point<4){
        setResult(1);
    }else if(point<6){
        setResult(2);
    }else if(point<8){
        setResult(3);
    }else if(point <10){
        setResult(4);
    }else{
        setResult(5);
    }

}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add("my-5");
    answer.classList.add("py-3");
    answer.classList.add("mx-auto");
    answer.classList.add("fadeIn");
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');

        for (let i = 0; i<children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].animation = "fadeOut 1s"
            
        }

        setTimeout(() => {
            point = point+qnaList[qIdx].a[idx].type


            for (let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
        
    },false);
}

function goNext(qIdx){

    if (qIdx+1 == endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    
    var img = document.createElement("img");
    img.src = qnaList[qIdx].img;
    
    q.appendChild(img);

    for (let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
    
}

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeout 1s";

    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        qna.style.animation = "fadeIn 0.5s";

        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    }, 450);

    
 
}

