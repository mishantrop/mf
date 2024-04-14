import init from "app1/App1Init"

const initContainerApp = () => {
    const containerRootElement = document.getElementById('container-root')
    init(containerRootElement)
}

export default initContainerApp
