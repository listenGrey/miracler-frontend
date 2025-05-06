import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';

function Layout() {
    return (
        <div className="app-container">
            <div className="content">
                <Outlet />
            </div>
            <Navigator />
        </div>
    );
}

export default Layout;
