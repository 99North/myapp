import React,{useState,useEffect} from 'react'


function UserDetails() {

    const [user,setUser]=useState([]);
    const [pending,setPending]=useState(true);

    const userList=async()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await response.json();
            setUser(data);
            
        }catch(error){
            console.log(error);
        }
    }



    useEffect(()=>{
        userList();
    },[])

   


  return (
    <div>
        <h1>User Details</h1>
        <ul>
            {
                user.map((u,index)=>{
                    return <li key={index}>{u.name}</li>;
                })
            }
        </ul>

        <button onClick={userList}>Show Users</button>

        <ul>
            {
                user.map((ph,index)=>{
                    return <li key={index}>{ph.phone}</li>;
                    
                })
            }
        </ul>



    </div>
  )
}

export default UserDetails