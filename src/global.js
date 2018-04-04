const USER_ID = '5ac3a5cadcba10000431b2bb'
export const BASE_URL = `https://code-scenes.herokuapp.com/post/${USER_ID}`
export let data = [
    {
        title:"The world of reactjs",
        content:"Reatjs is extreamliy powerfull javascript librar\n \n\
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
    },
    {
        title:"React and Server Side Scripting",
        content:"Use react to render dom on server side only"
    },
    {
        title:"Parable of pipeline",
        content:"Every person must have to create pipeline"
    },
    {
        title:"Parable of pipeline",
        content:"Every person must have to create pipeline"
    },
    {
        title:"Parable of pipeline",
        content:"Every person must have to create pipeline"
    },
    {
        title:"Parable of pipeline",
        content:"Every person must have to create pipeline"
    },
    ]


export function fetchPosts(callback){
    fetch(BASE_URL,{
        method:"GET"
    })
        .then(respose=>{
            if(respose.status !== 200){
                throw "error"
            }

            respose.json().then(data=>{
                callback(data);
            })
           
            
        })
        .catch(e=>{
            console.log("Some error on fetching posts");
            
        })
}

export function addPost(values,callback){
    fetch(BASE_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
        .then(respose=>{
            if(respose.status === 200){
                console.log("Status is ok");
                
                callback()
            }
            else{
                throw "error"
            }

            
           
            
        })
        .catch(e=>{
            console.log("Some error on adding posts");
            
        })
}