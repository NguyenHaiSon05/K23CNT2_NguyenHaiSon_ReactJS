import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NhsNavBar from './components/NhsNavBar';
import NhsHome from './components/NhsHome';
import NhsListUsers from './components/NhsListUsers';
import NhsCreateUser from './components/NhsCreateUser';
import NhsEditUser from './components/NhsEditUser';


export default function NhsApp() {
    return (
        <Router>
            <div>
                <NhsNavBar />
                <Routes>
                    <Route path="/" element={<NhsHome />} />
                    <Route path="/users" element={<NhsListUsers />} />
                    <Route path="/add-user" element={<NhsCreateUser />} />
                    <Route path="/edit-user/:id" element={<NhsEditUser />} />
                </Routes>
            </div>
        </Router>
    );
}
