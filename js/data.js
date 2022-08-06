const qnaList = [
    {
        q: "1. 정아의 최애 과자는 ABC 초코쿠키이다.",
        img:"./img/abcChoco.png",
        a: [
            {answer : '네', type: 1},
            {answer : '아니요', type: 0}
        ]
    },
    {
        q: "2. 정아의 최애 아이스크림은 메로나이다.",
        img:"./img/icecream.png",
        a: [
            {answer : '네', type: 0},
            {answer : '아니요', type: 1}
        ]
    },
    {
        q: "3. 정아의 최애 스벅 음료는 자바칩 프라푸치노이다.",
        img:"./img/starbucks.png",
        a: [
            {answer : '네', type: 0},
            {answer : '아니요', type: 1}
        ]
    },
    {
        q: "4. 정아는 맥북이 있다.",
        img:"./img/mac.png",
        a: [
            {answer : '네', type: 1},
            {answer : '아니요', type: 0}
        ]
    },
    {
        q: "5. 정아의 최애 라면은 너구리이다.",
        img:"./img/ra.png",
        a: [
            {answer : '네', type: 1},
            {answer : '아니요', type: 0}
        ]
    },
    {
        q: "6. 정아가 가장 자주 이용하는 지하철은 2호선이다.",
        img:"./img/sub.png",
        a: [
            {answer : '네', type: 0},
            {answer : '아니요', type: 1}
        ]
    },
    {
        q: "7. 정아의 생일은 6일이다.",
        img:"./img/birth.png",
        a: [
            {answer : '네', type: 0},
            {answer : '아니요', type: 1}
        ]
    },
    {
        q: "8. 정아가 여름에 주로 입는 옷 색깔은 검정이다.",
        img:"./img/clo.png",
        a: [
            {answer : '네', type: 1 },
            {answer : '아니요', type: 0}
        ]
    },
    {
        q: "9. 정아의 침대에 있는 그리즐리는 총 3마리이다.",
        img:"./img/sub.png",
        a: [
            {answer : '네', type: 0},
            {answer : '아니요', type: 1}
        ]
    },
    {
        q: "10. 정아가 좋아하는 음식 중 하나는 샤브샤브이다.",
        img:"./img/fav.png",
        a: [
            {answer : '네', type: 1},
            {answer : '아니요', type: 0}
        ]
    },
]

const infoList = [
//0,1
    {
        name: "누구세요?",
        img: "",
        desc: "이름만 알고 모르는 사이입니다. \n제 나이는 아시죠?\n 제 연락처는?..ㅠㅠ"
    },
//2,3
    {
        name: "어색한 사이...",
        img: "",
        desc: "아직 아는게 없는 어색한 사이...\n 만나면 인사는 합시다^^!"
    },    
//4,5
    {
        name: "만나면 인사는 하는 사이",
        img: "",
        desc: "지나가다가 만나면 인사정도는 하는 사이\n 더 친해져요^^...ㅎㅎ"
    },
//6,7
    {
        name: "오.. 좀 치는 사이",
        img: "",
        desc: "저에 대해 좀 아시는 분이군요\n아니면 운이 좋으시네요\n 아직 부족하니 더 알아가도록...\n 감사합니다"
    },
//8,9
{
    name: "이정도면 찐친",
    img: "",
    desc: "저에 대해 꽤 많이 아시네요?\n 2%정도 부족하지만 거의 완벽합니다.\n 감사합니다!"
},
//10
{
    name: "곽정아학 1급 수료",
    img: "",
    desc: "곽정아학 1급 수료되었습니다.  늘 저와 친하게 지내주셔서 감사합니다.\n 앞으로도 잘부탁드립니다!<3"
},
]