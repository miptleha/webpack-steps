import { errorFunc, hello } from './hello'

hello('guest')

window.addEventListener('load', () => {
    document.getElementById('err-button').addEventListener('click', errorFunc)
})