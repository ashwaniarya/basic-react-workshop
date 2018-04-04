import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
class Post extends Component{
    render(){
        return(
        <div className="post">
            <div className="post-header">
                <h1>{this.props.title}</h1>
            </div>
            <div className="post-body">
                <p>{this.props.content}</p>
            </div>
            <div className="post-footer">
                <Link to="/">read more</Link>
            </div>
        </div>
        )
    }
}

export default Post