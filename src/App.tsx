import { Routes, Route, Link } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import ContactForm from "./components/ContactForm";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="h-full bg-red-500">
      <h1 className="text-center bg-[#2e6187] text-white p-2 text-xl">
        Contact Management
      </h1>
      <div className="flex flex-col md:flex-row gap-2 bg-[#ece9e4] h-full">
        <div className="flex flex-row md:flex-col divide-x-2 md:divide-y-2 divide-slate-950 gap-2 w-full md:w-1/6 border-black border-2 text-center">
          <Link className="px-4 py-2" to="/">
            Contact
          </Link>
          <Link className="px-4 py-2" to="/dashboard">
            Charts & Maps
          </Link>
          <div className="px-4 py-2">SideBar</div>
        </div>
        <div className="w-full p-4">
          <Routes>
            <Route path="/" element={<ContactPage />} />
            <Route path="/form/:id?" element={<ContactForm />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
