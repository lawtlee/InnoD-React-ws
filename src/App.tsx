import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import HTML from './screens/Html'

function App() {

  return (
    <BrowserRouter basename='/InnoD-React-ws/'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/HTML" element={<HTML/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
