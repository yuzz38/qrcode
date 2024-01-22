const Form = document.querySelector('#Form');
const Url = document.querySelector('#url');

Form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('submit');
    console.log(Url.value);
    const api = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&data='
    const request =  api + Url.value
 
    const card = document.querySelector('#card');
    card.innerHTML = `<img src=${request} alt='QR'>`
})