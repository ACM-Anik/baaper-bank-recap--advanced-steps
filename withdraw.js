/*
1. add event handler with the withdraw button
2. get the withdraw amount by using getElementValueById function
3. Get previous withdraw Total by using getTextElementValueById function
4. Calculate new total withdraw and set the value
4.5. Set new total withdraw by using setTextElementValueById function4
5.Get the previous balance total by using getTextElementValueById
6. Calculate new balance total
7. Set the new balance total by using setTextElementValueById
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
  
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})