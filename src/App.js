import './App.css';
import { Header } from './Header';
import { CVInfo } from './CVInfo';

let formData = {
  "Personal Information": [
      "Name", "Title", "DOB" 
  ],
  "Contact": [
      "Phone", "Email"
  ],
  "Education": [
      "Institution", "Duration", "Degree/Certificate"
  ],
  "Job Experience": [
      "Company", "Duration", "Role", "Description"
  ],
  "Skills": [
      "Title", "Description"
  ]
}

function App() {
  return (
    <div className="App">
      <Header />
      <CVInfo formData = {formData} />
    </div>
  );
}

export default App;
