import React, {useState} from "react";
const BMI = ()=>{
    const [age,setAge]=useState()
    const[weight,setweight]=useState()
    const[height,setHeight]=useState();
    const[bmi,setBmi]=useState();
    const[msg,setMsg]=useState('');

    const reload=()=>{
        window.location.reload()
    }
    const handleCalculations=(e)=>{
        e.preventDefault()
        if(weight==0 || height===0){
            alert('Hello please enter the valid Number')
        }
        else{
            let bmiFormula=(weight/ (height*height)*703);
            setBmi(bmiFormula.toFixed(2))
        }if(bmi<18.5){
            setMsg("You're Underweight")

        }else if(bmi>=25 || bmi<=30){
            setMsg("You are healthy")
        }
        else{
            setMsg("You are unhealthy")
        }
    }
return(
    <div className="app">
        <div className="container"></div>
        <h1>BMI Calculator</h1>
        <form onSubmit={handleCalculations}>
            <div>
                <label className='labels'>AGE:</label><br />
                <input className="bmi-input" type="number" placeholder="Age..." value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
                <label>WEIGHT:</label><br />
                <input className="bmi-input"  type="number" placeholder="weight..." value={weight} onChange={(e)=>setweight(e.target.value)}/>
            </div>
            <div>
                <label>HEIGHT:</label><br />
                <input className="bmi-input"  type="number" placeholder="Height..." value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div>
                <button className="btn" type="submit">Calculate</button>
                <button className="" type="submit" onClick={reload}>Reset</button>
            </div>
            <div className="result">
                <h3>Age:{age}</h3>
                <h3>Your BMI is :{bmi}</h3>
                <p className="p-msg">{msg}</p>
            </div>
        </form>
    </div>
)
}
export default BMI