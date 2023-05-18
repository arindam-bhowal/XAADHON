import './App.css'
import Home from './screens/home/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Overview from './screens/overview/Overview';
import Semester from './components/semester/Semester';
import Notes from './screens/notes/Notes';
import ComingSoon from './components/comingSoon/ComingSoon';
import About from './screens/aboutUs/About';

function App() {

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/notes" exact element={<Home />} />
          <Route path="/questionPapers" exact element={<Home />} />

          <Route path="/notes/:branch/selectyear" exact element={<Overview />} />
          <Route path="/questionPapers/:branch/selectyear" exact element={<Overview />} />

          <Route path="/notes/:branch/:year" exact element={<Notes />} />
          <Route path="/questionPapers/:branch/:year" exact element={<Notes />} />

          <Route path="/about" exact element={<About />} />
          <Route path="/comingSoon" exact element={<ComingSoon />} />

          {/* <Route path="/notes/:branch/:year/:oddeven" exact element={<Notes />} />
          <Route path="/questionPapers/:branch/:year/:oddeven" exact element={<Notes />} /> */}

          {/* <Route path="/selectyear" exact element={<Overview />} /> */}

          {/* <Route path="/selectyear" exact element={<Overview />} />
          <Route path="/note" exact element={<Notes />} />
          <Route path="/earn" exact element={<Earn /> } />
          <Route path='/campaigndetail' exact element={<CampDetail/> } />
          <Route path='/aboutus' exact element={<AboutUs /> } />       
          <Route path='/contribute' exact element={<Contribute />} />
  


          <Route path='/adminlogin' exact element={<AdminLogin/> } />
          <Route path='/admin' exact element={<ASelectCollege /> } />
          <Route path='admin/earn' exact element={<AEarn/> } />
          <Route path='/admin/selectyear' exact element={<ASelectYear /> } />
          <Route path='/admin/note' exact element={<AHome /> } /> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
