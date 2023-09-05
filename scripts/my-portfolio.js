var inputs = document.getElementsByClassName('formulary-label');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if(this.value.length >= 1) {
            this.classList.add('fix');
        } else {
            this.nextElementSibling.classList.remove('fix');
        }
    })
}

