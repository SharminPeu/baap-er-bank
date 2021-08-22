// using function 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //  clear input field
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousTotalAmount = parseFloat(totalText);
    totalField.innerText = previousTotalAmount + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;

    }
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        // get current deposit 
        updateTotalField('deposit-total', depositAmount);

        // update balance 
        updateBalance(depositAmount, true);
    }

});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get withdraw 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        // update withdraw total
        updateTotalField('withdraw-total', withdrawAmount);

        // update balance after withdraw
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('you can not withdraw more than what you have in your account');
    }
})




// details way without using function 

/*
// handle deposit
document.getElementById('deposit-button').addEventListener('click',function()
{
     // console.log('deposite button clicked');
    const depositInput=document.getElementById('deposit-input');
    // console.log(depositInput);
    const depositAmountText=depositInput.value;
     const depositAmount=parseFloat(depositAmountText);
        //  console.log(depositAmount);

 // get current deposit
        const depositTotal=document.getElementById('deposit-total');
        const depositTotalText=depositTotal.innerText;
        const previousDepositTotalAmount=parseFloat(depositTotalText);
        // console.log(depositTotalText)

         depositTotal.innerText= previousDepositTotalAmount+depositAmount;
        //  console.log(depositTotalAmount);

// update balance
const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotalText);
balanceTotal.innerText=previousBalanceTotal+depositAmount;

      //  clear input field
        depositInput.value='';

})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function()
{
    // console.log('withdraw button clicked');
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const withdrawAmount=parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);

    // update withdraw total
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawTotalText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText=previousWithdrawTotal+withdrawAmount;
    // update balance after withdraw
    const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotalText);
balanceTotal.innerText=previousBalanceTotal-withdraw;

    // clear withdraw input field
    withdrawInput.value='';
}) */