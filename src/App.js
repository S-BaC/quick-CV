import './App.css';
import React from 'react';
import { Header } from './Header';
import { CVInfo } from './CVInfo';
import { CVOutput } from './CVOutput';

let formData = {
  "Personal Information": [
      "Name", "Title", "DOB" 
  ],
  "Contact": [
      "Phone", "Email"
  ],
  "Education": [
      "Institution", "Duration", "Degree"
  ],
  "Job Experience": [
      "Company", "Duration", "Role", "Description"
  ],
  "Skills": [
      "Title", "Description"
  ]
}
let userData = {
  "PersonalInformation": {
      "Name": ["Morgan"],
      "Title": ["Web Dev"],
      "DOB": ["1998"]
  },
  "Contact": {
      "Phone": ["09123123"],
      "Email": ["abc@gmail.com"]
  },
  "Education": {
      "Institution": ["UoPeople"],
      "Duration": ["2015-2020"],
      "Degree": ["B.Comp.Sci"]
  },
  "JobExperience": {
      "Company": ["MWZ"],
      "Duration": ["2 years"],
      "Role": ["supervisee"],
      "Description": ["Manages stuff"]
  },
  "Skills": {
      "Title": ["English", "Nihongo"],
      "Description": ["fluent", "just the best"]
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <CVInfo formData = {formData} />
//       <CVOutput userData = {userData} />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CVInfo formData = {formData} />
        <CVOutput userData = {userData} />
      </div>
    );
  }
}

export default App;
