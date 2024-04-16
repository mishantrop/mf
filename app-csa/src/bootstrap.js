import React from 'react'
import ReactDOM from 'react-dom/client'

export const init = (container) => {
    console.log('app-csa/bootstrap/init()')

    const login = () => {
        localStorage.setItem('logged', 'da')
    }

    const App = () => {
        return (
            <div style={{
                backgroundColor: '#edd',
                border: '1px solid #f00',
                borderRadius: '12px',
                padding: '16px',
            }}>
                <div>CSA React App Component</div>

                <button onClick={login}>
                    Enter
                </button>
            </div>
        )
    }

    const root = ReactDOM.createRoot(container)
    root.render(<App />)
}
