import React, { useEffect, useState } from 'react'

function Form() {
    const data = {name:"",password:""};

    const [inputData, setInputData] = useState(data);

    const [flag,setFlag] = useState(false)

    useEffect( ()=>{
            console.log("Registerd");
    },[flag])


    function handleData(e){

        setInputData({...inputData, [e.target.name]:e.target.value})
    
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        if(!inputData.name || !inputData.password)
        {
            alert("ALL FILIED IS MANDETORY")
        }
        else{
            setFlag(true)
        }
    }

  return (

    <>
    <pre>
         { (flag)? <h2  className='ui-define'>Hello {inputData.name}, You are Registerd Succesfully </h2>: ""}
    </pre>
    
    <form className="Container" onSubmit={handleSubmit}>
    <div className='header'>       
           <h1>Login Form</h1>
    </div>

    <div>
        <input type='text' placeholder='Username' value={inputData.name} onChange={handleData} name="name"></input>
    </div>
    
    <div>
        <input type='password' placeholder='Password'value={inputData.password} onChange={handleData} name='password'></input>
    </div>

    <div>
        <button type='submit' placeholder='submit' name='submit'>Submit</button>
    </div>


    </form>

    </>

  )
}

export default Form