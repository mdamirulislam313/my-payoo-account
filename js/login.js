// // console.log('button clicking file added')
// // search: form submit reloading the page
// document.getElementById('button-login').addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('login button')

//     const phoneNumber= document.getElementById('Phone-nuber').value;

//     const pinNumber= document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber).value;

//     // this is temporary . You should do like this
//     if( phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are logged in')
//     }
//     else{
//         alert('Wrong phon number or pin')
//     }

// })

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber= document.getElementById('pin-number').value;
   console.log(phoneNumber,pinNumber)
   if(phoneNumber === '5' && pinNumber === '123'){
    console.log('you are logged in');
    window.location.href = '/home.html'
   }
   else{
    alert('wrong phone number')
   }
})