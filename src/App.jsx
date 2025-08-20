import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChaosGallery from './pages/ChaosGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChaosGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
