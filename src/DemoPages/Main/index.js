import React from 'react'
import AppMain from './AppMain';

const Main = () => {
    var user = localStorage.getItem('login');
    var expiry = localStorage.getItem('expiry')
    return <div>
        {
            <AppMain />
        }
    </div>
}
export default Main;