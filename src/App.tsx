import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import ContactForm from "./components/ContactForm";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
