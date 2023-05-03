import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Unauthorized from './components/Unauthorized';
import RequireRole from './components/RequireRole';
import Puzzle from './components/Puzzle';
import Dashboard from './components/puzzleComp/Dashboard';
import Data from './components/adminComp/Data';
import Answers from './components/adminComp/Answers';
import LeaderBoard from './components/puzzleComp/LeaderBoard';


function App() {
    return (
        <main>
            <Routes>
                {/* public routes  */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route element={<RequireRole allowedRole={'user'} notAllowed={'admin'} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/puzzle" element={<Puzzle />} />
                        <Route path='/dashboard' element={<Dashboard/>}></Route>
                        <Route path='/leaderboard' element={<LeaderBoard/>}></Route>

                    </Route>
                    <Route element={<RequireRole allowedRole={'admin'} notAllowed={'user'} />}>
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/admin/dashboard" element={<Data />} />
                        <Route path="/admin/answers" element={<Answers />} />
                    </Route>
                </Route>

                {/* catch all */}
                <Route path="/*" element={<Unauthorized />} />

            </Routes>
        </main>
    );
}

export default App;
