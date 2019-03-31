import React, {Component} from "react"
import data from  "./data"

class FavoriteMovies extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let index = this.props.index
    return(
        <div>
          <h4>Favorite Movies:</h4>
                  <ol>
                      <li>{data[index].favoriteMovies[0]}</li>
                      <li>{data[index].favoriteMovies[1]}</li>
                      <li>{data[index].favoriteMovies[2]}</li>
                  </ol> 


        </div>
    )
    }
}

export default FavoriteMovies