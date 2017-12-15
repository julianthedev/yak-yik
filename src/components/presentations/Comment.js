import React, {Component} from 'react'
import styles from './styles'

class Comment extends Component{
  render(){
    return(
        <div style={styles.comment.commentContainer}>
            <p style={styles.comment.commentBody}>
              {this.props.currentComment.body}
            </p>

            <span style={styles.comment.commentUsername}>{this.props.currentComment.username}</span>
            <span style={styles.comment.commentDivider}>|</span>
            <span>{this.props.currentComment.timestamp}</span>
            <hr />
        </div>
    )
  }
}

export default Comment
