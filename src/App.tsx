import { useState } from 'react';
import Navigator from './layouts/Navigator';
import TodayPage from './pages/TodayPage';
import CalendarPage from './pages/CalendarPage';
import NewPage from './pages/NewPage';
import OverviewPage from './pages/OverviewPage';
import ProfilePage from './pages/ProfilePage';

type View = 'today' | 'calendar' | 'new' | 'overview' | 'profile';

function App() {
    const [currentView, setCurrentView] = useState<View>('today');

    const renderCurrentComponent = () => {
        switch (currentView) {
            case 'today':
                return <TodayPage />;
            case 'calendar':
                return <CalendarPage />;
            case 'new':
                return <NewPage />;
            case 'overview':
                return <OverviewPage />;
            case 'profile':
                return <ProfilePage />;
            default:
                return <TodayPage />;
        }
    };

    return (
        <div className="app-container">
            <div className="content">
                {renderCurrentComponent()}
            </div>
            <Navigator currentView={currentView} onUpdateView={setCurrentView} />
        </div>
    );
}

export default App;