
import { Routes, Route } from 'react-router-dom';
import MaintenancePage from './pages/maintenance/maintenance';
import Home from './pages/landingpage/landingpage';
import SignUp from './pages/signup/signup';
import { SettingsProvider } from './settings/settings.context';
import LoginRedirect from './pages/login-redirect/login-redirect';




function Main() {
  return (
    <SettingsProvider>
      <Routes>
        <Route path="/web-site" Component={Home} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/maintenance" Component={MaintenancePage} />
        <Route path="/login-redirect/google" Component={LoginRedirect}/>
      </Routes>
    </SettingsProvider>
  );
}

export default Main;
