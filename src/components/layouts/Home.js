import React, {Component} from 'react'
import styles from './styles'
import Zones from '../containers/Zones'
import Comments from '../containers/Comments'


class Home extends Component {
  render(){
    const zonesStyle = styles.zones
    return(
      <div className="container" style={zonesStyle.container}>
        <div className="row">
          <div className="col-md-4">
              <Zones />
          </div>
          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
