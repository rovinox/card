import React, {Component} from "react"
import data from  "./data"

class Name extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let index = this.props.index
    return(
        <div>
          <h2 style = {{textDecorationLine: 'underline', textDecorationColor: 'blue'}}> {data[index].name.first} {data[index].name.last}</h2>
                
        </div>
    )
    }
}

export default Name

// return(
//     <div>
//       <h2 style = {{textDecorationLine: 'underline', textDecorationColor: 'blue'}}> {data[index].name.first} {data[index].name.last}</h2>
//               <h4>From: {data[index].city}, {data[index].country}</h4>
//               <h4>Job Title: {data[index].title}</h4>
//               <h4>Employer: {data[index].employer}</h4>
//               <br />
//               <h4>Favorite Movies:</h4>
//               <ol>
//                   <li>{data[index].favoriteMovies[0]}</li>
//                   <li>{data[index].favoriteMovies[1]}</li>
//                   <li>{data[index].favoriteMovies[2]}</li>
//               </ol> 


//     </div>
// )
