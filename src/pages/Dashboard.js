import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

function Dashboard() {
    const { logOut, user, roleId } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div>
            {user && user.email}
            <Navbar drawer='true' />
            <br />
            {roleId}
            <Button variant="primary" onClick={handleLogout}>
                Log out
            </Button>
        </div>
    )
}

export default Dashboard
