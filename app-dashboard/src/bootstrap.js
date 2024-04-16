import React from 'react'
import ReactDOM from 'react-dom/client'

export const init = (container) => {
    console.log('app-dashboard/bootstrap/init()')

    const logout = () => {
        localStorage.removeItem('logged')
    }

    const App = () => {
        return (
            <div style={{
                backgroundColor: '#dee',
                border: '1px solid #f00',
                borderRadius: '12px',
                padding: '16px',
            }}>
                <div>Dashboard React App Component</div>

                <div>
                    Hello, {window.config.userIO}
                </div>
                <button onClick={logout}>
                    Logout
                </button>
            </div>
        )
    }

    const root = ReactDOM.createRoot(container)
    root.render(<App />)
}
