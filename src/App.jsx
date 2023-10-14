
import Loginform from './Components/Loginform'
import { Routes, Route } from "react-router-dom"
import Profile from './Components/Profile'
import Viewmore from './Components/Viewmore'
import Profile2 from './Components/Mainprofiles'
import Mainprofiles from './Components/Mainprofiles'

function App() {

  return (
    <>
      <Routes>
        <Route path = '/*' element={<Loginform/>}/>
        <Route path = '/Profile' element={<Profile/>}/>
        <Route path = '/mainprofiles' element={<Mainprofiles/>}/>
        <Route path = '/viewmore/:characterID' element={<Viewmore/>}/>
      </Routes>
    </>
  )
}

export default App
