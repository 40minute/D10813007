let topicsArray = [
    "課程簡介",
    "隨機選擇",
    "隨機選擇2",
    "自動排課",
    "自動排課2",
    "自動排課3",
    "遠距教學演習",
    "心理測驗",
    "期中考",
    "RPG",
    "RPG2",
    "YouTube點唱機",
    "網頁整合",
    "網頁整合2",
    "網站上線",
    "期末發表",
    "期末發表2",
    "期末發表3"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1, startDay);
    //時間先忽略,設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0); 
}


setMonthAndDay(3,2);