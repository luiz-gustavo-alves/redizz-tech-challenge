import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}