
const curr_ency = document.querySelector('#takacheck');
const name = document.querySelector('#name');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const result = document.querySelector('#result');


curr_ency.addEventListener('click', () => {

    if(name.value == '' || amount.value == '' || currency.value == ''){
        result.innerHTML=`<p class = 'alert alert-danger'> you are requerd</p>`;
    }else{
        result.innerHTML = currencycal(name.value, amount.value, currency.value);

        name.value = '';
        amount.value = '';
        currency.value = '';
    }

  
});
