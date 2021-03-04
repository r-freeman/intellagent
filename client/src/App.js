import React, {useState, useEffect} from 'react';
import Login from './pages/Login';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        setUser(user);
    }, []);

    return (
        <div className="App">
            <Login/>
        </div>
    );
}

export default App;
