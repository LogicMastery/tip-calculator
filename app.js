/* We first created a function */
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