import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Appointment from './Pages/Appointment.jsx';
import Update from './Pages/Update.jsx';
import Delete from './Pages/Delete.jsx';
import Enquiry from './Pages/Enquiry.jsx';
import Doctors from './Pages/Doctors.jsx';
import Navbar from './Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Administration from './Pages/Administration.jsx';
import PatientData from './Pages/PatientData.jsx';
import EnquiryPatientData from './Pages/EnquiryPatientData.jsx';
import EnquiryDelete from './Pages/EnquiryDelete.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patientdata" element={<PatientData />} />
          <Route path="/update/:patientID" element={<Update />} />
          <Route path="/delete/:patientID" element={<Delete />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/enquirypatientdata" element={<EnquiryPatientData />} />
          <Route path="/delete/enquiry/:patientID" element={<EnquiryDelete />} />


          <Route path="/administration" element={<Administration />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
