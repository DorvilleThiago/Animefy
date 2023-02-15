import '/index.css'
import LeftBar from './components/LeftBar'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import Song from './components/Song'
function App() {

  return (<div style={{display: 'flex'}}>
    <TopBar />
    <BottomBar />
    <LeftBar />
    <span style={{ paddingLeft: 290, paddingTop: 90 }}>
      <h1>Olá</h1>
      <Song/>
    </span>
  </div>)
}

export default App
