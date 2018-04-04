import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { addPost } from '../global'
class AddPost extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"",
            content:""
        }
    }

    backToMain = ()=>{
        this.props.history.push("/")
    }
    render(){
        return(
            <div>
                <div className="navbar">
                    <div className="navbar-title">
                        <h2>React Blog App</h2>
                    </div>
                    <div className="navbar-links">
                        <Link className="navbar-link-item" to="/">CANCEL</Link>
                    </div>

                </div>
            <form className="form-post-add" 
                onSubmit={
                    (e)=>{
                        e.preventDefault()
                        let { title , content } = this.state
                        if(title !== "" && content !== ""){
                            addPost(this.state,this.backToMain())
                        }
                        console.log("Submit is called")
                    }
                }
            >
                <label>Title</label>
                <input value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} />
                <label>Content</label>
                <textarea value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} />
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default AddPost