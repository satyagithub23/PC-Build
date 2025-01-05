import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Admin.css';
import AdminNavbar from './admincomponents/AdminNavbar/AdminNavbar';
import Dashboard from './admincomponents/Dashboard/Dashboard'

const Admin = () => {
    return (
        <div className='Admin'>
            <BrowserRouter>
                <AdminNavbar />
                <Routes>
                    <Route path='/admin' element={<Dashboard />}/>
                    <Route path='/admin/dashboard' element={<Dashboard />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Admin