import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Login from './pages/Login';

function App() {
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    console.log(user);

    return (
        <div className="App">
            <Login/>
        </div>
    );
}

export default App;
