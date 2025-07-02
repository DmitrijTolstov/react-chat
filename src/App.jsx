import MainChat from './components/chat/MainChat'
import Navbar from './components/Navbar'
import Profile from './components/profile/Profile'



function App() {

  return (
    <>
      <div className="app">
          <Navbar></Navbar>
        <MainChat></MainChat>
        <Profile></Profile>
        </div>
    </>
  )
}

export default App
