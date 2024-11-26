document.addEventListener('DOMContentLoaded', () =>{

    let textarea = document.getElementById('text')

    let desplazamiento = document.getElementById('desplazamiento')

    let textareaResultado = document.getElementById('text-cifrado')

    textarea.addEventListener('input', () => {

        document.getElementById('message-length').innerHTML = textarea.value.length + '/150'

        cifradoCesar(
            textarea.value,
            desplazamiento.value
        )

        adjustTextareaHeight(textarea)
        adjustTextareaHeight(textareaResultado)
    })

    desplazamiento.addEventListener('input', () => {
        document.getElementById('desplazamiento-value').innerText = desplazamiento.value

        textarea.value === '' ? textareaResultado.value = '' : cifradoCesar(textarea.value, desplazamiento.value)
    })


    const cifradoCesar = (text, desplazamiento) => {
        
        text = text.split('')

        let asci = []

        for(let i = 0; i < text.length; i++){

            if(text[i] === ' '){
                asci.push(' ')
            }else{
                let charCode = text[i].charCodeAt(0)

                // Letras mayúsculas
                if (charCode >= 65 && charCode <= 90) {
                    charCode = ((charCode - 65 + parseInt(desplazamiento)) % 26) + 65
                }
                // Letras minúsculas
                else if (charCode >= 97 && charCode <= 122) {
                    charCode = ((charCode - 97 + parseInt(desplazamiento)) % 26) + 97
                }

                asci.push(charCode)
            }
        }

        let resultado = asci.map((code) => {
            return String.fromCharCode(code)
        })

        textareaResultado.value = resultado.join('')
    }

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
        
        if(textarea.value === ''){
            textarea.style.height = 'min-content'
        }
    }
})