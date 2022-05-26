import {useState} from 'react';
import axios from 'axios';

const Register=()=>{
    const [name,setName] = useState("");
    // const [id,setId] = useState("");
    // const[username,setUname]=UseState("");
    const [email,setEmail] = useState("");
     const [username,setUname] = useState("");
     const[password,setPass]=useState("");

    const handleForm=(e)=>{
        e.preventDefault();
        var obj = {name:name,username:username,email:email,password:password};
        axios.post("http://localhost:8000/api/register",obj).then((resp)=>{
            debugger;
        },(err)=>{});

    }
    return(
        <form onSubmit={handleForm}>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name'></input> <br/>
            <input type="text" value={username} onChange={(e)=>{setUname(e.target.value)}} placeholder='Username'></input> <br/>

            {/* <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder='student Id'></input><br/> */}
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input><br/>
            {/* <input type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} placeholder='dob'></input><br/> */}
            <input type="text" value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder='Password'></input><br/>
            <input type="submit" value="Add"/>
        </form>
    )

}
export default Register;
