const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    // alert('Deu certo!')
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert('Esse dia já está incluso!')
        return
    }
    nlwSetup.addDay(today)

}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))    
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits'))  || {}
nlwSetup.setData(data)
nlwSetup.load()