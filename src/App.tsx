import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusCardsDemo } from './components/ui/focus-cards-demo';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FocusCardsDemo />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;