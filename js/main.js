// Testing calendar class
// AUTHOR: Diwen Zhang
// EMAIL:  zhangdiw@sheridancollege.ca
// CREATED: 2021-06-05
// UPDATED: 2021-06-12

//global variables
let go={};
//main entry point
document.addEventListener("DOMContentLoaded",main);

function main(){
    go.cal = new Calendar();

    //get "cal_date" element
    go.domDate = document.getElementById("cal_dates");
    go.domMonth = document.getElementById("cal_months");
    go.domYear = document.getElementById("cal_years");
    go.domMonth.innerHTML = go.cal.getMonthString();
    go.domYear.innerHTML = go.cal.year;
    //keep the today object as a global properties
    go.today = {
        year:new Date(Date.now()).getFullYear(),
        month:new Date(Date.now()).getMonth()+1,
        date:new Date(Date.now()).getDate()
    };
    buildCalendar();
    go.domPrev = document.getElementById("btn_prev");
    go.domNext = document.getElementById("btn_next");
    go.domPrev.addEventListener("click", () => changeMonth(-1));
    go.domNext.addEventListener("click", () => changeMonth(1));
    
}


function buildCalendar(){
    
    let dateCount = go.cal.getDaysOfMonth();
    let firstDay = go.cal.getFirstDayOfMonth();
    let prevLastDate = go.cal.getLastDateOfPreviousMonth();
    let html="";
    // //previous month
    for(let i=1;i<firstDay;++i){
        let date = prevLastDate - firstDay + 1 + i;
        html+= "<div class='cal_prev'>"+date+"</div>";
    }

    //current month
    for(let i=1; i<=dateCount;++i){
        if(go.today.date==i && go.cal.year == go.today.year && go.cal.month == go.today.month){
            html += "<div class='cal_today'>"+i+"</div>";
        }else{
            html += "<div class='cal_curr'>"+i+"</div>";
        }
        
    }
    // //next month
    for(let i=1; (dateCount+firstDay-1)%7 && i<=7-(dateCount+firstDay-1)%7;++i){
        html+="<div class='cal_next'>"+i+"</div>";
    }
    //insert html to the parent
    go.domDate.innerHTML = html;
}

// the callback of click event 
function changeMonth(num){
    if(num<0 && go.cal.month==1){
        go.cal.set(go.cal.year-1,11,go.cal.date);
        buildCalendar();
        go.domMonth.innerHTML = go.cal.getMonthString();
        go.domYear.innerHTML = go.cal.year;
    }else if(num>0 && go.cal.month==12){
        go.cal.set(go.cal.year+1,0,go.cal.date);
        buildCalendar();
        go.domMonth.innerHTML = go.cal.getMonthString();
        go.domYear.innerHTML = go.cal.year;
    }else{
        go.cal.setMonth(go.cal.month+num-1);
        buildCalendar();
        go.domMonth.innerHTML = go.cal.getMonthString();
    }
    
}