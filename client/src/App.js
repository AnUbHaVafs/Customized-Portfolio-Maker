import { Route, Routes } from 'react-router-dom'; 
import Home from "components/Home";
import About from "components/About";
import UserProfile from 'components/UserProfile';
import HackerrankProfile from 'components/UserProfile/Hackerrank';

function App(){
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/:username/profile'>
                <Route path='' element={<UserProfile />} />
                <Route path='hackerrank' element={<HackerrankProfile />} />
            </Route>
        </Routes>
    )
}

export default App