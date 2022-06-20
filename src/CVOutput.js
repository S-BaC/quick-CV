import React from "react";

export class CVOutput extends React.Component {

    render() {

        let personal = this.props.userData.PersonalInformation;
        let contact = this.props.userData.Contact;
        let education = this.props.userData.Education;
        let job = this.props.userData.JobExperience;
        let skills = this.props.userData.Skills;

        let phoneContact = [];
        let emailContact = [];
        let eduInfo = [];
        let jobInfo = [];
        let skillsInfo = [];

        contact.Phone.forEach(phoneNo => {
            phoneContact.push(
                <div className="phoneWrapper" key={phoneNo}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>{phoneNo}</p>
                </div>
            )
        })

        contact.Email.forEach(emailAdd => {
            emailContact.push(
                <div className="emailWrapper" key={emailAdd}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>{emailAdd}</p>
                </div>
            )
        })

        let len = education.Institution.length;
        for(let i = 0; i<len; i++){
            try{
                eduInfo.push(
                    <div className="eduWrapper">
                        <p className="eduIns">{education.Institution[i]}</p>
                        <p className="eduDur">{education.Duration[i]}</p>
                        <p className="eduDeg">{education.Degree[i]}</p>
                    </div>
                )
            }catch {
                console.log('error');
            }
        }

        len = job.Company.length;
        for(let i = 0; i<len; i++){
            try{
                jobInfo.push(
                    <div className="jobWrapper">
                        <p className="jobCom">{job.Company[i]}</p>
                        <p className="jobDur">{job.Duration[i]}</p>
                        <p className="jobRol">{job.Role[i]}</p>
                        <p className="jobDes">{job.Description[i]}</p>
                    </div>
                )
            }catch {
                console.log('error');
            }
        }
        len = skills.Title.length;
        for(let i = 0; i<len; i++){
            try{
                skillsInfo.push(
                    <div className="skillsWrapper">
                        <p className="skillsCom">{skills.Title[i]}</p>
                        <p className="skillsTitle">{skills.Description[i]}</p>
                    </div>
                )
            }catch {
                console.log('error');
            }
        }

        return (
            <div className="cvOutput">
                <div className="cvHead">
                    <p className="perName">{personal.Name[0]}</p>
                    <p className="perTitle">{personal.Title[0]}</p>
                </div>
                <div className="cvContact">
                    {phoneContact}
                    {emailContact}
                </div>
                <div className="cvEdu">
                    {eduInfo}
                    {jobInfo}
                    {skillsInfo}
                </div>
            </div>
        )
    }
}

let userData = {
    "Personal-Information": {
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
        "Degree/Certificate": ["B.Comp.Sci"]
    },
    "Job-Experience": {
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
let userData1 = {
    "Per-Name": ["Morgan"],
    "Per-Title": ["Web Dev"],
    "Per-DOB": ["1998"],
    "Con-Phone": ["09123123"],
    "Con-Email": ["morganblackaoe318@gmail.com"],
    "Edu-Institution": ["UoPeople"],
    "Edu-Duration": ["2015-2020"],
    "Edu-Degree" : ["BCompSci"],
    "Job-Company": ["MWZ"],
    "Job-Duration": ["2 years"],
    "Job-Description": ["Manages stuff"],
    "Ski-Title": ["English", "Japanese"],
    "Ski-Description": ["Fluent, really.", "N3 Level, or as they say, lelbelru"]
}