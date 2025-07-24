import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ScrollToTop />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;