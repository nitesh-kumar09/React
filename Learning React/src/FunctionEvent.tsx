import type React from "react";

const FunctionEvent = ()=>{
    const name = "Nitesh"
    const name_1 = "Shreya"

    const getName = (yourname:string):string=>{
        return yourname;
    }
    const handleClick = ()=>{
        alert("Button clicked")
    }

    const handleInput =(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.clear()
        console.log(event.target.value)
    }
    return(
        <>
        <h2>Name:{getName(name)}</h2>
        <h2>Name:{getName(name_1)}</h2>
        <button onClick={handleClick} >click me</button>
        <button onClick={()=>alert("Hello from inline function")} >say Hello</button>

        <input type="text" onChange={handleInput} placeholder="Type Something" />
        </>
    )
}

export default FunctionEvent;