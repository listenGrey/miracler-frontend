import { NavLink } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
    return (
        <div className="navigator">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>今天</NavLink>
            <NavLink to="/calendar" className={({ isActive }) => isActive ? 'active' : ''}>日历</NavLink>
            <NavLink to="/new" className={({ isActive }) => isActive ? 'active' : ''}>
                <div className="new">+</div>
            </NavLink>
            <NavLink to="/overview" className={({ isActive }) => isActive ? 'active' : ''}>总览</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>我的</NavLink>
        </div>
    );
}

export default Navigator;
