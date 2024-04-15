/* We first created a function and we name it Calculate(), then we created a new variable called billAmount is getting the id from HTML called billAmount
then we made it Number() and added .value at the end, then after that we created a new variable in a next line called tipAmount in this variable
we're getting the ID tipAmount from the HTML document, then we called the tipAmount and we set it to Number(tipAmount.value) then we set the 
tipAmount variable to tipAmount / 100; 9 -> 0.09.

Next we created totalTip variable and set it billAmount * tipAmount it multiplies the value of billAmount and the tipAmount.
Then we created a variable called tipHTML we set the tipHTML to "<h3> Total tip: <small>$" then concatenate it to totalTip.toFixed(2) + "</small></h3>"
toFixed means we add a decimal points at the end of the value plus 2 zeros.
Next, we then create a document.querySelector(".tip-amount").innerHTML = tipHTML - we are calling the class called tip-amount and then we set it to inner.HTML
and we call the tipHTML variable to show the total tip in my web page

*/
function Calculate(){
    var billAmount = Number(document.getElementById("billAmount").value)
    var tipAmount = document.getElementById("tipAmount")
        tipAmount = Number(tipAmount.value)
        tipAmount = tipAmount / 100; // 9 -> 0.09

    var totalTip = billAmount * tipAmount
    var tipHTML = "<h3> Total tip: <small>$" + totalTip.toFixed(2) + "</small></h3>"
        document.querySelector(".tip-amount").innerHTML = tipHTML;

    var totalBillAmount = totalTip + billAmount
    var billHTML = "<h3> Total bill with tip: <small>$" + totalBillAmount.toFixed(2) + "</small></h3>"
        document.querySelector(".total-with-tip").innerHTML = billHTML;
}