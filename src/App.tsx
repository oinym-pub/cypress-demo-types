import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SplitPane } from 'react-multi-split-pane'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <SplitPane split='vertical'>
                <SplitPane split='horizontal'>
                    <div>left pane</div>
                    <div>right pane</div>
                </SplitPane>
                <div>footer pane</div>
            </SplitPane>
        </div>
    )
}

export default App
