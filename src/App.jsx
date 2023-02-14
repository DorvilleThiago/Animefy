import '/index.css'
import LeftBar from './components/LeftBar'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'

function App() {

  return (<div style={{display: 'flex'}}>
    <TopBar />
    <BottomBar />
    <LeftBar />
  </div>)
}

export default App
