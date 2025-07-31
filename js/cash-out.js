document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashUot= document.getElementById('input-cash-out').value;
    const pinNumber= document.getElementById('cash-out-pin').value;
    const balance = document.getElementById('account-balance').innerText;
    if ( pinNumber === '123'){
        const cashUotNumber = parseFloat (cashUot);
        const balanceNumber = parseFloat ( balance);
        const newBalance = balanceNumber - cashUotNumber;
        document.getElementById('account-balance').innerText =newBalance;
    }
    else{
        alert('wrong your pin number! please tray again')
    }
})