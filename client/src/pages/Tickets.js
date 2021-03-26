import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {DayJS} from 'react-dayjs';

import Sidebar from '../components/Sidebar';
import DropdownSmall from '../components/DropdownSmall';
import DropdownLarge from '../components/DropdownLarge';
import TicketList from '../components/TicketList';

function Tickets() {
    const {isLoggedIn} = useSelector(state => state.auth);
    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if (!isLoggedIn) {
            // redirect unauthenticated users
            history.push('/login');
        }
    }, [isLoggedIn, history]);

    const toggleSidebar = () => setSidebar(!sidebar);
    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <div className="h-screen flex overflow-hidden bg-white">
            {isLoggedIn &&
            <React.Fragment>
                <Sidebar
                    sidebar={sidebar}
                    toggleSidebar={toggleSidebar}
                />
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <DropdownSmall
                        dropdown={dropdown}
                        toggleSidebar={toggleSidebar}
                        toggleDropdown={toggleDropdown}
                        setDropdown={setDropdown}
                    />
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                        <div
                            className="lg:border-b lg:border-gray-200 px-3 py-4 flex items-center justify-between">
                            <div className="lg:flex justify-end w-full hidden">
                                <DropdownLarge
                                    dropdown={dropdown}
                                    toggleDropdown={toggleDropdown}
                                    setDropdown={setDropdown}
                                />
                            </div>
                        </div>
                        <TicketList/>
                    </main>
                </div>
            </React.Fragment>
            }
        </div>
    )
}

export default Tickets;