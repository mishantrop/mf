import { init, loadRemote } from '@module-federation/runtime'

init({
    name: 'container',
    remotes: [
        {
            name: "app_csa",
            entry: "http://127.0.0.1:8001/remoteEntry.js",
            // alias: "app1",
        },
        {
            name: "app_dashboard",
            entry: "http://127.0.0.1:8002/remoteEntry.js",
            // alias: "app1",
        },
    ],
})

loadRemote('app_csa/AppInit', { from: 'runtime' })
    .then((app) => {
        console.log('[CONTAINER] then')
        app.init(document.getElementById('csa-root'))
    })
    .catch((e) => {
        console.log('[CONTAINER] error')
        console.error(e)
    })
