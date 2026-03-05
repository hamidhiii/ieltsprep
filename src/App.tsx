import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MockTests from './pages/MockTests';
import Practice from './pages/Practice';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ExamView from './pages/ExamView';
import IELTSListeningTest from './components/IELTSListeningTest';
import IELTSReadingTest from './components/IELTSReadingTest';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isTestMode = location.pathname.startsWith('/listening-test') || location.pathname.startsWith('/reading-test');

  return (
    <div className="min-h-screen bg-white">
      {!isTestMode && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/mock-tests"
          element={
            <ProtectedRoute>
              <MockTests />
            </ProtectedRoute>
          }
        />
        <Route
          path="/test/:id"
          element={
            <ProtectedRoute>
              <ExamView />
            </ProtectedRoute>
          }
        />
        <Route path="/practice" element={<Practice />} />
        <Route path="/listening-test/:id" element={<IELTSListeningTest />} />
        <Route path="/reading-test/:id" element={<IELTSReadingTest />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isTestMode && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
