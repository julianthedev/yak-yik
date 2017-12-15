import React, {Component} from 'react' //es6 javascript importing react lib and sub lib: components
// es5: var React = require('react')
import ReactDOM from 'react-dom' //this library renders the react code
import Home from './components/layouts/Home'

class App extends Component{
    render(){
        return(
            <div>
              <Home />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
