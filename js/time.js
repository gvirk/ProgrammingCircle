function showTime(){
    var currentDate = new Date();    
    var futureDate = new Date("2016/03/04 12:30:00");//YYYY/MM/DD HH:MM:SS
    //Customise futureDate for your required future time
    var days, hours, minutes, seconds;
    
    var difference = (futureDate - currentDate)/1000;
    difference = (Math.floor(difference));
    
    if(difference<0){
        days=0;
        hours=0;
        minutes=0;
        seconds=0;
    }
    else{
        days = Math.floor(difference/(24*60*60));
        seconds = difference - days * 24*60*60;
        
        hours = Math.floor(seconds/(60*60));
        seconds = seconds - hours * 60*60;
        
        minutes = Math.floor(seconds/(60));
        seconds = seconds - minutes * 60;
        
        
    }
    
    if(days<2){
        document.getElementById("days").innerHTML =  ('0' + days).slice(-2) + " day ";
    }
    else{
        document.getElementById("days").innerHTML =  ('0' + days).slice(-2) + " days ";
    }
    
    if(hours<2){
        document.getElementById("hours").innerHTML = ('0' + hours).slice(-2) + " hour ";    
    }
    else{
        document.getElementById("hours").innerHTML = ('0' + hours).slice(-2) + " hours ";
    }
    
    if(minutes<2){
        document.getElementById("mins").innerHTML = ('0' + minutes).slice(-2) + " minute";    
    }
    else{
        document.getElementById("mins").innerHTML = ('0' + minutes).slice(-2) + " minutes";
    }
    
    if(seconds<2){
        document.getElementById("secs").innerHTML = ('0' + seconds).slice(-2) + " second";    
    }
    else{
        document.getElementById("secs").innerHTML = ('0' + seconds).slice(-2) + " seconds";
    }
      
      if(difference>0)
        setTimeout(showTime,1000);
}


$(document).ready(function()
{
    showTime();
});
