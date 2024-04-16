import { init, loadRemote } from '@module-federation/runtime'

init({
    name: 'container',
    remotes: window.config.remotes,
})

const initCsa = () => {
    loadRemote('app_csa/AppInit', { from: 'runtime' })
        .then((app) => {
            app.init(document.getElementById('root'))
        })
        .catch((e) => {
            console.error(e)
        })
}

const initDashboard = () => {
    loadRemote('app_dashboard/AppInit', { from: 'runtime' })
        .then((app) => {
            app.init(document.getElementById('root'))
        })
        .catch((e) => {
            console.error(e)
        })
}

const main = () => {
    console.log('A')
    window.addEventListener('storage', (event) => {
        console.log(event)
        if (event.key === 'logged') {
            console.log(event.key, event.newValue)
            if (event.newValue === 'da') {
                initDashboard()
            } else {
                initCsa()
            }
        }
    })

    if (window.config.useStoredLogin) {
        initDashboard()
    } else {
        initCsa()
    }
}

main()
