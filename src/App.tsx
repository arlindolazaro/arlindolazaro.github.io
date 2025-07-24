import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="relative min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog-details" element={<BlogDetails />} />
          </Routes>
          
          {/* Botão de voltar ao topo - Aparece em todas as páginas */}
          <ScrollToTop />
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;