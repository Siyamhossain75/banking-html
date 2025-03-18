document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const depositInput = depositField.value;

    if (depositInput === "") {
        alert("Something went wrong");
        return; 
    }

    const depositTotalField = document.getElementById('deposit-total');
    const depositTotalNumber = parseInt(depositTotalField.innerText);
    const newDepositTotal = depositTotalNumber + parseInt(depositInput);
    depositTotalField.innerText = newDepositTotal;

    // Balance update
    const balanceInputField = document.getElementById('balance-total');
    const totalBalanceAmount = parseInt(balanceInputField.innerText) ;
    const newBalance = totalBalanceAmount + parseInt(depositInput);
    balanceInputField.innerText = newBalance;

    depositField.value = ""; // Clear input field
})

    // Withdraw Section
    // Withdraw section
    document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawAmount = parseInt(withdrawInputText);

    const withdrawTotalAmountText = document.getElementById('withdraw-total').innerText;
    const withdrawTotalAmount = parseInt(withdrawTotalAmountText);

    const newWithdrawTotal = withdrawAmount + withdrawTotalAmount;
    document.getElementById('withdraw-total').innerText = newWithdrawTotal;

    // Balance update (subtracting withdrawal from balance)
    const BalanceInputField = document.getElementById('balance-total');
    const TotalBalanceAmount = parseInt(BalanceInputField.innerText);

    const NewBalance = TotalBalanceAmount - withdrawAmount;
    BalanceInputField.innerText = NewBalance;

    // Clear input field after transaction
    withdrawInputField.value = '';
});



