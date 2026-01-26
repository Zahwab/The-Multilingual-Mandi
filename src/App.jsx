import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import MarketplacePage from './pages/MarketplacePage.jsx';

function App() {
  // No local state needed currently

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
