import React from "react";

export class CVInfo extends React.Component {

    constructor (props) {
        super (props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit (e) {
        e.preventDefault();
        console.log(e.target)
    }
    
    render () {
        let formInputs = [];

        for (let key in this.props.formData){
            formInputs.push(<h3 key={key}> {key} </h3>)
            let inputArr = [];
            this.props.formData[key].forEach(ele => {
                if(ele === "Description"){
                    inputArr.push (
                        <div>
                            <label htmlFor={ele}>{ele}</label>
                            <input type="text" name={ele} className="des"/>
                        </div>
                    )
                }else {
                    inputArr.push (
                        <div>
                            <label htmlFor={ele}>{ele}</label>
                            <input type="text" name={ele}/>
                        </div>
                    )
                }
                
            })
            inputArr.forEach(ele => {
                formInputs.push(ele);
            })
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

