import { init, loadRemote } from '@module-federation/runtime'

init({
    name: 'container',
    remotes: [
        {
            name: "app1",
            entry: "http://127.0.0.1:8001/remoteEntry.js",
            // alias: "app1",
        },
    ],
})

loadRemote('app1/App1Init', { from: 'runtime' })
    .then((app1) => {
        console.log('[CONTAINER] then')
        app1.init(document.getElementById('container-root'))
    })
    .catch((e) => {
        console.log('[CONTAINER] error')
        console.error(e)
    })
