const inputs = document.querySelectorAll('.code')  ;

inputs.forEach( (input, index) => {

    input.addEventListener('input', () => {
        if( input.value.match(/[0-9]/) ){

            if( index < inputs.length - 1 ){
                inputs[index + 1].focus() ;
            }

        } else {
            input.value = '' ;
        }

    } ) ;

    input.addEventListener('keydown', (e) => {
             if( e.key === 'Backspace' ){

            if( !input.value && index > 0 ){
                inputs[index - 1].focus() ;
            }

        }

    } ) ;

}) ;

window.onload = function() {
  document.getElementById('code-1').focus();
}
