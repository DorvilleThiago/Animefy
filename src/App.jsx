import '/index.css'
import LeftBar from './components/LeftBar'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import Song from './components/Song'
function App() {

  return (<div >
    <TopBar />
    <BottomBar />
    <LeftBar />
    <h1 id ='title' style={{fontSize: 23,position: 'absolute', left: 275,top: 70, zIndex: -1}}>Épico</h1>
    <span id ='linha' style={{
      paddingTop: 138,
      display: 'flex',
      overflow: 'hidden',
      flexWrap: 'wrap',
      zIndex: -1,
      paddingLeft: 275,
      marginBottom: 34
    }}>
      <Song/>
      <Song/>
      <Song />
      <Song />
      <Song />
      <Song />
    </span>
    <h1 id ='title' style={{fontSize: 23, marginLeft: 275, maginTop: 47, zIndex: -1}}>Emocionante</h1>
    <span id ='linha' style={{
      top: 518,
      display: 'flex',
      overflow: 'hidden',
      flexWrap: 'wrap',
      zIndex: -1,
      paddingLeft: 275,
      marginBottom: 100,
    }}>
      <Song/>
      <Song/>
      <Song />
      <Song />
      <Song />
      <Song />
    </span>
    
  </div>)
}

export default App
