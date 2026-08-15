import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MusicPage from './pages/MusicPage';
import ThoughtListPage from './pages/ThoughtListPage';
import ThoughtDetailPage from './pages/ThoughtDetailPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="dot-grid min-h-screen flex flex-col bg-dark-950 text-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thoughts" element={<ThoughtListPage />} />
          <Route path="/thoughts/:slug" element={<ThoughtDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
