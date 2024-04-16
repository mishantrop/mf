import React from 'react'
import ReactDOM from 'react-dom'

export const init = (container) => {
    console.log('app-dashboard/bootstrap/init()')

    const App = () => {
        return (
            <div style={{
                backgroundColor: '#dee',
                border: '1px solid #f00',
                borderRadius: '12px',
                padding: '16px',
            }}>
                <div>Dashboard React App Component</div>

                <button>
                    Hello, User
                </button>
            </div>
        )
    }

    const root = ReactDOM.createRoot(container)
    root.render(<App />)
}
