export const init = (root) => {
    console.log('app1.init()')

    const button = document.createElement('button')
    button.innerText = 'app1 button!!!'

    root.appendChild(button)
}
