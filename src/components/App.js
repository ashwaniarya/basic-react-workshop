import React , { Component } from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import '../style/App.css'
import ListPosts from './listposts'
import AddPost from './addpost'
class App extends Component{
  render(){
    return(
    <div>
      <Router>
        <Switch>
          <Route path="/addpost" component={AddPost}/>
          <Route exact path="/" component={ListPosts}/> 
        </Switch>
      </Router>
    </div>)
  }
}

export default App 