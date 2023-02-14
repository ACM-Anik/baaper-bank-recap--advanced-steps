// DRY--> Do not Repeat Yourself

document.getElementById('btn-deposit').addEventListener('click', function(){
    /*
    1. Get the element by id
    2. Get the value from the element
    3. Convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');

    // 1. Get previous deposit total by Id
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // 1.2: Calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // 1.3: Set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // 2. Get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    // 2.2: Calculate the new balance total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // 2.3: Set the total balance value
    setTextElementValueById('balance-total', newBalanceTotal);

})