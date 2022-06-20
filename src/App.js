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

    this.state = {
      data : userData
    }
  }

  formSubmission (userInfo) {
    this.setState({
      data: {
        "PersonalInformation": {
            "Name": [userInfo.elements[0].value],
            "Title": [userInfo.elements[1].value],
            "DOB": [userInfo.elements[2].value]
        },
        "Contact": {
            "Phone": 
              [userInfo.elements[3].value, 
              userInfo.elements[5].value],
            "Email": 
              [userInfo.elements[4].value, 
              userInfo.elements[6].value]
        },
        "Education": {
            "Institution": [
              userInfo.elements[7].value,
              userInfo.elements[10].value],
            "Duration": [
              userInfo.elements[8].value,
              userInfo.elements[11].value],
            "Degree": [
              userInfo.elements[9].value,
              userInfo.elements[12].value]
        },
        "JobExperience": {
            "Company": [
              userInfo.elements[13].value,
              userInfo.elements[17].value],
            "Duration": [
              userInfo.elements[14].value,
              userInfo.elements[18].value],
            "Role": [
              userInfo.elements[15].value,
              userInfo.elements[19].value],
            "Description": [
              userInfo.elements[16].value,
              userInfo.elements[20].value]
        },
        "Skills": {
            "Title": [
              userInfo.elements[21].value,
              userInfo.elements[23].value,
              userInfo.elements[24].value],
            "Description": [
              userInfo.elements[22].value,
              userInfo.elements[25].value,
              userInfo.elements[26].value]
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CVInfo formData = {formData} formSubmission = {this.formSubmission}/>
        <CVOutput userData = {this.state.data} />
      </div>
    );
  }
}

export default App;
