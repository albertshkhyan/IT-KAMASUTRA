import React from 'react';

import './style.css';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <aside>
                <nav>
                    <ul>
                        <li >
                            <a className="item" href="#s">
                                Profile
                            </a>
                        </li> 
                        <li >
                            <a className="item active" href="#s">
                                Messages
                            </a>
                        </li>
                        <li >
                            <a className="item" href="#s">
                                News
                            </a>
                        </li>
                        <li >
                            <a className="item" href="#s">
                                Music
                            </a>
                        </li>
                        <li >
                            <a className="item" href="#s">
                                Settings
                            </a>
                        </li>

                    </ul>
                </nav>
            </aside>
        </div>
    );
}
export default Dashboard;