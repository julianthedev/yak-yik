import React, {Component} from 'react'
import Zone from '../presentations/Zone'
import superagent from 'superagent'

class Zones extends Component{
    constructor(){
      super()
      this.state={
        zone: {
            name: '',
            zipCode: '',
            numComments: 0
        },
        list: [

        ]
      }
    }

    componentDidMount(){ //funtion override. like render() and constructor(). using to implement superagent module
        console.log('componentDidMount: ')

        superagent
        .get('/api/zone') //we're giving superagent the url access to get the objects from
        .query(null)
        .set('Accept', 'application/json') //what kind of data we're getting back
        .end((err, response) => {  //completion callback function
            if(err){
                alert('ERROR: '+err)
                return
            }
            console.log(JSON.stringify(response.body))
            let results = response.body.results
            this.setState({
                list: results
            })
        })
    }

    updateZone(event){
      let updatedZone = Object.assign({}, this.state.zone)
      updatedZone[event.target.id] = event.target.value //way more convenient way of grabbing events via ids
      this.setState({
          zone: updatedZone
      })
    }

    addZone(){
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(this.state.zone)
      this.setState({
          list: updatedList
      })
    }

    render(){
        const listItems = this.state.list.map((zone, i)=> { //function callback in es6
            return(
                <li key={i}><Zone zone={zone}></Zone></li>
            )
        })
        return(
            <div>
              <input id="name"onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="New Zone Name"/>
              <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="New Zone Zipcode"/>
              <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add zone</button>
              <ol>
                {listItems}
              </ol>
            </div>
        )
    }
}
export default Zones
