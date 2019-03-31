import React, {Component} from "react"
import data from  "./data"

class PersonalInfo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let index = this.props.index
    return(
        <div>
                  <h4>From: {data[index].city}, {data[index].country}</h4>
                  <h4>Job Title: {data[index].title}</h4>
                  <h4>Employer: {data[index].employer}</h4>
                
        </div>
    )
    }
}

export default PersonalInfo