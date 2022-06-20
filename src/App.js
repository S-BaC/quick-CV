import './App.css';
import React from 'react';
import { Header } from './Header';
import { CVInfo } from './CVInfo';
import { CVOutput } from './CVOutput';

let formData = {
  "Personal Information":{
    "data" : [
              "Name", "Title", "DOB" 
            ],
    "times" : 1
  },
  "Contact":{
    "data" : [
              "Phone", "Email"
            ],
    "times" : 2
  },
  "Education":{
    "data" : [
              "Institution", "Duration", "Degree"
            ],
    "times" : 2
  },
  "Job Experience":{
    "data" : [
              "Company", "Duration", "Role", "Description"
            ],
    "times" : 2
  },
  "Skills":{
    "data" : [
              "Title", "Description"
            ],
    "times" : 3
  }
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

  constructor (props) {
    super (props);
    this.formSubmission = this.formSubmission.bind(this);
  }

  formSubmission (data) {
    console.log("received");
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CVInfo formData = {formData} formSubmission = {this.formSubmission}/>
        <CVOutput userData = {userData} />
      </div>
    );
  }
}

export default App;
