// calculate the interest and give back the value with text
function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <font style='background-color:yellow'>"+principal+"</font>,\<br\>at an interest rate of <font style='background-color:yellow'>"+rate+"%</font>\<br\>You will receive an amount of <font style='background-color:yellow'>"+interest+",</font>\<br\>in the year <font style='background-color:yellow'>"+year+"</font>\<br\>"
}

// update the value of the slider on the side of it
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}    
    
// validate the input values
function validate() {
    var principal = document.getElementById("principal").value;
    if( principal <= 0.0  ) {
        alert( "Enter a positive number" );
        document.getElementById("principal").focus() ;
        return false;
     }

     return( true );
}