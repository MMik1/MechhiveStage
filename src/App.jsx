import './App.css'
import Login from './Login.jsx'
import {Route, Routes} from "react-router-dom";
import Register from "./Register.jsx";

function App() {
    return (
        <div
            className='text-white h-[100vh]  w-[100vw] overflow-hidden flex justify-center items-center bg-cover  bg-gradient-to-br from-blue-700 via-purple-600 to-white-500'>
<Routes>
    <Route path='Login' element={ <Login/>}/>
    <Route path='Register' element={ <Register/>}/>
</Routes>
        </div>
    )
}

export default App
