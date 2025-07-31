document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amountNumber=document.getElementById('input-add-money').value;
    const pinNumber= document.getElementById('input-pin-number').value;
    
    const totalAmount = document.getElementById ('account-balance').innerText;
    if(pinNumber === '123'){
    const convertToNumber1= parseFloat (totalAmount)
    const convertToNumber2= parseFloat( amountNumber);
    const newBalance = convertToNumber1 + convertToNumber2;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;
   }
   else{
    alert('wrong your pin number please tray again')
   }
})