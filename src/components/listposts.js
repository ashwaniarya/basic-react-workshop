import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../global'
import Post from './post'
class ListPost extends Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        fetchPosts((data)=>{
            this.setState({data})
        })
    }
    shouldComponentUpdate(nextState){
        console.log(nextState.state);
        return true;
        /*if(nextState.data.length > this.props.data.length)
            return true
        else
            return false*/
    }
    renderPost = ()=>{
        if(this.state.data.length === 0){
            return <div>Loading</div>
        }
        else{
            return this.state.data.map(post=>{
                //add unique key 
                return <Post title={post.title} content={post.content}></Post>
            })
        }
        
    }
    
    render(){
        return(
        <div>
            <div className="navbar">
                <div className="navbar-title">
                    <h2>React Blog App</h2>
                </div>
                <div className="navbar-links">
                    <Link className="navbar-link-item" to="/addpost">ADD POST</Link>
                </div>

            </div>
            <div className="post-container">
                {this.renderPost()}
            </div>
        </div>
        )
    }
}

export default ListPost