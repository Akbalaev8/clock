const hours =  document.querySelector('.h');
const minutes =  document.querySelector('.m');
const seconds =  document.querySelector('.s');
const checkMeridiem = document.querySelector('.meridiem') 
const day = document.querySelector('.Day')
const date = document.querySelector('.Date')


const tick = () =>{
    const current = new Date();
    
    
    let ss =current.getSeconds();
    let mm = current.getMinutes()
    let hh = current.getHours();
    let meridiem = 'Күндүзү';
    let currentDay = current.getDay();


    //Converting the 24 hours formate into 12 hour formate 
    if(hh === 00){
        hh = 12
        meridiem = 'Күндүзү';
    }
    else if( hh === 12 ){
        meridiem = 'Кечки';
    }
    else if( hh > 12){
        hh = hh - 12
        meridiem = 'Кечки';
    }



    hours.textContent = `${hh<10? `0${hh}`:hh}`;
    minutes.textContent =`${mm<10? `0${mm}`:mm}`;
    seconds.textContent =`${ss<10? `0${ss}`:ss}`
    checkMeridiem.textContent = meridiem;
    date.textContent = current.toLocaleDateString();
    day.textContent = getDayName(currentDay);
    // day.textContent = 
    
}

const getDayName = (value) =>{
    const DayNames = [
        'Жекшемби',
        'Дүйшөмбү',
        'Шейшемби',
        'Шаршемби',
        'Бейшемби',
        'Жума',
        'Ишемби',
    ]
    return DayNames[value];
}


setInterval(tick,1000)