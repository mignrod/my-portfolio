var inputs = document.getElementById('label');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if(this.CSSMathValue.length>=1) {
            this.nextElementSiblings.classList.add('fix');
        } else {
            this.nextElementSiblings.classList.remove('fix');
        }
    })
}