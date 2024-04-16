import React from 'react'
import ReactDOM from 'react-dom'

export const init = (container) => {
    console.log('app-csa/bootstrap/init()')

    const App = React.createElement(
        'div',
        null,
        React.createElement('div', null, 'CSA React App Component'),
    )

    const root = ReactDOM.createRoot(container);
    root.render(App)
}
