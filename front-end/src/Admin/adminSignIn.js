import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AdminSignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // replace with api call later
        console.log('Username:', username, 'Password:', password);
        navigate('/adminChoice');
    };

    return (
        <div className="core">
            <div>
                <label>Admin Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label>Admin Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default AdminSignIn;
