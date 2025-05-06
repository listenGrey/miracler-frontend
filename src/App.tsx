import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Today from './features/today/Today';
import Calendar from './features/calendar/Calendar';
import New from './features/new/New';
import Overview from './features/overview/Overview';
import Profile from './features/profile/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Today />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="new" element={<New />} />
                    <Route path="overview" element={<Overview />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
