// 1-based Gregorian Calendar class using JS Data object
// AUTHOR: Diwen Zhang
// EMAIL:  zhangdiw@sheridancollege.ca
// CREATED: 2021-06-05
// UPDATED: 2021-06-12

class Calendar{
    //init call member properties
    constructor(y,m,d){
        if(arguments.length != 3){
            this.time = new Date(Date.now());
        }else{
            this.time = new Date(y,m-1,d);
        }
        this.year = this.time.getFullYear();
        this.month = this.time.getMonth()+1;
        this.date = this.time.getDate();
        this.day = this.time.getDay()+1;
    }

    set(year=1970,month=1,date=1){
        this.time = new Date(year,month-1,date);
        //set other properies using this.time
        this.year = this.time.getFullYear();
        this.month = this.time.getMonth()+1;
        this.date = this.time.getDate();
        this.day = this.time.getDay()+1;
    }

    setYear(year){
        this.set(year,this.month,this.date);
    }

    setMonth(month){
        let time = new Date(this.year,month-1,this.date);
        if(month == (time.getMonth()+1)){
            this.set(this.year,month,this.date);
        }else{
            this.set(this.year,month,1);
        } 
    }

    setDate(date){
        this.set(this.year,this.month,date);
    }
    
    //return current month as string
    getMonthString(){
        switch(this.month) {
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4: return "April";
            case 5: return "May";
            case 6: return "June";
            case 7: return "July";
            case 8: return "August";
            case 9: return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    //return current weekday as string
    getDayString(){
        switch(this.day) {
            case 1: return "Sunday";
            case 2: return "Monday";
            case 3: return "Tuesday";
            case 4: return "Wednesday";
            case 5: return "Thursday";
            case 6: return "Friday";
            case 7: return "Saturday";
        }
    }

    //return the number of days of current month
    getDaysOfMonth(){
        return new Date(this.year, this.month, 0).getDate();
    }

    //return the 1st weekday of current month
    getFirstDayOfMonth(){
        return new Date(this.year, this.month-1, 1).getDay()+1;
    }
    //return the weekday (numeric) of the last date of the month

    getLastDayOfMonth(){
        return new Date(this.year,this.month,0).getDay()+1;
    }
    //return the last date of the previous month
    getLastDateOfPreviousMonth(){
        return new Date(this.year,this.month-1,0).getDate();
    }
}
