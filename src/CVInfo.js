import React from "react";

export class CVInfo extends React.Component {

    constructor (props) {
        super (props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit (e) {
        e.preventDefault();
        this.props.formSubmission(e.target);
    }
    
    addEle (ele, count, key, formInputs) {
        if(ele === "Description"){
            formInputs.push (
                <div>
                    <label htmlFor={ele}>{ele}</label>
                    <input id={`${key.slice(0,3)}-${ele}-${count}`} type="text" name={ele} className="des"/>
                </div>
            )
        }else {
            formInputs.push (
                <div>
                    <label htmlFor={ele}>{ele}</label>
                    <input id={`${key.slice(0,3)}-${ele}-${count}`} type="text" name={ele}/>
                </div>
            )
            }
    }

    render () {
        let formInputs = [];

        for (let key in this.props.formData){
            let sectionKey = this.props.formData[key];
            formInputs.push(<h3 key={key}> {key} </h3>);
            for(let i = 0; i<sectionKey.times; i++){
                sectionKey.data.forEach(ele => {
                    this.addEle(ele, i, key, formInputs);
                })
                if(i <= sectionKey.times - 2){
                    formInputs.push(
                        <hr></hr>
                    )
                }
            }
            
            /* Features to Explore (1) */

        }

        return (
            <div className="cvInfo">
                <h1 className="sectionHeader"> Content Now, Design Next</h1>
                <p>
                    Information written here will be rendered on the CV. Any field left blank will be omitted.
                </p>
                <form onSubmit={this.formSubmit}>
                    {formInputs}
                    <button> Confirm </button>
                </form>
            </div>
        )
    }
}

/*
    Features to Explore

    (1) To generate input fields on button click. 
        For example:
            if(key !== "Personal Information"){
                formInputs.push(<button id={key.slice(0,3)} onClick={this.addSection}> Add </button>)
            } 
        At the moment, rendering additional fields without losing user data is unsolved (by me).

*/