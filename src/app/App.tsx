import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Registro from './components/Registro';
import MapaDonaciones from './components/MapaDonaciones';
import DashboardDonante from './components/DashboardDonante';
import DashboardBeneficiario from './components/DashboardBeneficiario';
import DashboardAdmin from './components/DashboardAdmin';
import Privacidad from './components/Privacidad';

type View = 'landing' | 'login' | 'registro' | 'mapa' | 'dashboard-donante' | 'dashboard-beneficiario' | 'dashboard-admin' | 'privacidad';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

  const handleLogin = (role: string) => {
    if (role === 'donante') {
      setCurrentView('dashboard-donante');
    } else if (role === 'beneficiario') {
      setCurrentView('dashboard-beneficiario');
    } else if (role === 'admin') {
      setCurrentView('dashboard-admin');
    }
  };

  const navigate = (view: string) => {
    setCurrentView(view as View);
  };

  return (
    <div className="size-full">
      {currentView === 'landing' && <LandingPage onNavigate={navigate} />}
      {currentView === 'login' && <Login onNavigate={navigate} onLogin={handleLogin} />}
      {currentView === 'registro' && <Registro onNavigate={navigate} />}
      {currentView === 'mapa' && <MapaDonaciones onNavigate={navigate} />}
      {currentView === 'dashboard-donante' && <DashboardDonante onNavigate={navigate} />}
      {currentView === 'dashboard-beneficiario' && <DashboardBeneficiario onNavigate={navigate} />}
      {currentView === 'dashboard-admin' && <DashboardAdmin onNavigate={navigate} />}
      {currentView === 'privacidad' && <Privacidad onNavigate={navigate} />}
    </div>
  );
}
