import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectDetail from './components/ProjectDetail';
import { Router, Route } from './components/Navigation';

function App() {
    return (
        <div className="dot-grid min-h-screen flex flex-col bg-dark-950 text-gray-50">
            <Header />
            <main className="flex-grow">
                <Router>
                    <Route path="/" component={<HomePage />} />
                    <Route path="/projects" component={<ProjectsPage />} />
                    <Route path="/about" component={<AboutPage />} />
                    <Route path="/contact" component={<ContactPage />} />
                    <Route path="/projects/wave-tracker" component={<ProjectDetail id="wave-tracker" />} />
                    <Route path="/projects/surf-shop" component={<ProjectDetail id="surf-shop" />} />
                </Router>
            </main>
        </div>
    );
}

export default App;