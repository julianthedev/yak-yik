import React, {Component} from 'react'
import Comment from '../presentations/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component{
  constructor(){
    super()
    this.state={
        comment: {
            username:'',
            body: '',
            timestamp: ''
        },
        list: [

        ]
    }
  }
  componentDidMount(){ //funtion override. like render() and constructor()
      console.log('componentDidMount: ')

      superagent
      .get('/api/comment') //we're giving superagent the url access to get the objects from
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

  submitComment(){
    console.log('submit comment' + JSON.stringify(this.state.comment))
    let updatedList = Object.assign([], this.state.list) //copying an array
    updatedList.push(this.state.comment) //added new comment to list
    this.setState({
      list: updatedList
    })
  }

  updateUsername(event){
    console.log('updateUsername: '+event.target.value)
    //this.state.comment['username'] = event.target.vale // WRONG !!!!!!!
    let updatedComment = Object.assign({}, this.state.comment) //we make a copy of the state instead,  in order to use it
    updatedComment['username'] = event.target.value

    this.setState({
        comment: updatedComment // like copying and saving over current comment
    })
  }

  updateBody(event){
    console.log('updateBody: '+event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value

    this.setState({
        comment: updatedComment
    })
  }

  updateTimestamp(event){
    let updatedComment = Object.assign({}, this.state.comment)
    // time = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate()
    updatedComment['timestamp'] = event.target.value

    this.setState({
        comment: updatedComment
    })
  }

  render(){
    const commentList = this.state.list.map((comment, i) => {
        return(
            <li key={i}><Comment currentComment={comment} /></li>
        )
    })

    return(
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comments.commentsBox}>
          <ul style={styles.comments.commentsList}>
            {commentList}
          </ul>
          <input style={styles.comment.commentInput} onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" />
          <input style={styles.comment.commentInput} onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" />
          <input style={styles.comment.commentInput} onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Timestamp" />
        <button style={styles.comment.commentInput} onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments
