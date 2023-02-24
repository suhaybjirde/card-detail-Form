let inputs = document.querySelectorAll('.input')
const gridForm = document.querySelector('.grid__form');
const form = document.querySelector('.form');

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    if(check()) {
        loadThank()
    } else {
        emptyInputs()
    }
})




function loadThank() {
    let thankYouTemp = `<div class="thankyou">
    <div class="thankyou__img__container">
    <img src="./app/assets/images/icon-complete.svg" alt="">
    </div>
    <h1>Thank You!</h1>
    <p>We've added your card details</p>
    <button class="btn" id="continue">Continue</button>
    </div>`
    const template = document.createElement('template')
    template.innerHTML = thankYouTemp.trim();
    
    let thankYou = template.content.firstElementChild;
    let btn = thankYou.querySelector('#continue');
    
    form.style.display = 'none'
    
    gridForm.appendChild(thankYou)
    
    btn.addEventListener('click', ()=> {
        
    })
}


function check() {
    let inputArray = []
    inputs.forEach(input => {
        inputArray.push(input)
        if (input.classList.contains('error') && (input.id == 'month' || input.id == 'year')) {
            inviled(input, 'Wrong Format, Number Only')
        }
    })
    let check = inputArray.every(input => {
        return input.value && !(input.parentElement.getAttribute('data-error'))
    })
    return check
}

function emptyInputs() {
    let inputs = document.querySelectorAll('.input')
    inputs.forEach(input => {
        if (!input.value) {
            inviled(input, 'Can\'t be black')
        }
        input.addEventListener('keydown', ()=> {
            valid(input)
        })
    })
}


numberInputvalidation()

function numberInputvalidation() {
    let nunberInputArray = [document.querySelector('#month'), document.querySelector('#year'), document.querySelector('#cv'), document.querySelector('#number')]
    let name = document.querySelector('#name')
    nunberInputArray.forEach(input => {
        input.addEventListener('keyup', function () {
            if ((input.value/input.value) !== 1) {
                inviled(input, 'Wrong Format, Number Only')
            } else {
                valid(input)
            }
        });
    })
    const number  = nunberInputArray[3];
    number.addEventListener('focusout', ()=> {
        if (number.value.length < 14) inviled(number,'At least 14 characters');
    })
    name.addEventListener('focusout', ()=> {
        if (name.value.length < 6) inviled(name,'Name is too short (at least 6 characters)');
    })
}

changeInnerHtml()

function changeInnerHtml() {

    inputs = document.querySelectorAll('.input'); 
    let cardNumber = document.querySelector('.card__front__number');
    let cardName = document.querySelector('.card__front_name');
    let cardDate = document.querySelector('.card__font__date');
    let cardBack = document.querySelector('.card__back__cv');
    let month;
    inputs.forEach((input, index) => {
        input.addEventListener('keyup', ()=> {
            if (input.id == 'cv') cardBack.innerHTML = input.value
        })
        input.addEventListener('keyup', ()=> {
            if (input.id == 'name') cardName.innerHTML = input.value;
        })
        input.addEventListener('keyup', ()=> {
            if (input.id == 'number')  cardNumber.innerHTML = input.value;
        })
        input.addEventListener('keyup', ()=> {
            if (input.id == 'month')  {
                cardDate.innerHTML = input.value;
                month = input.value
            }
        })
        input.addEventListener('keyup', ()=> {
            if (input.id == 'year')  cardDate.innerHTML =`${month}/${input.value}`;
        })
    })
}

function inviled(element, error) {
    let wrapper = element.parentElement;
    element.classList.add('error')
    wrapper.setAttribute('data-error', error)
}

function valid(element) {
    let wrapper = element.parentElement;
    element.classList.remove('error')
    wrapper.removeAttribute('data-error')
}
