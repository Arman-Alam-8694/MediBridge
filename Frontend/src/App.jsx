
import { Route, Routes } from 'react-router-dom';
import Doctor from './pages/Doctor';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Appointments from './pages/Appointments';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myappointment" element={<MyAppointments />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/appointment/:doc_id" element={<Appointments />} />



      </Routes>
      <Footer />
    </div>
  );
};

export default App;
