import {useState,useEffect} from 'react';
//npm install axios
import axios from 'axios';
const Posts =()=>{
    const [st,setSt] = useState({});

    /*useEffect(()=>{

    },[]);*/
    useEffect(function(){
        axios.get("https://localhost:8000/api/student/1").then(function(rsp){
            setSt(rsp.data);
        },function(err){

        });
    },[]);

    return (
        <div>
            <span>{st.Name}</span>
        </div>
    )
}

export default Posts;