const form = document.getElementById('form-number')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const numberA = document.getElementById('number-a')
    const numberB = document.getElementById('number-b')

    if (numberA.value > numberB.value) {
        document.querySelector('.success-msg').style.display = 'none'
        document.querySelector('.error-msg').style.display = 'block'
    } else {
        document.querySelector('.success-msg').style.display = 'block'
        document.querySelector('.error-msg').style.display = 'none'
    }
})