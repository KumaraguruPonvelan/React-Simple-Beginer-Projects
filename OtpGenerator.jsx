import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NUMBERS='0123456789'
const UPPERCASE='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE='abcdefghijklmnopqrstuvwxyz'


export const Otpgenerator=()=>{
    const[otpLength, setOtpLength]=useState(4);
    const[includeLowercase, setIncludeLowercase]=useState
    (false);
    const[IncludeUppercase, setIncludeUppercase]=useState
    (false);
    const[otp,setOtp]=useState("");

    const handleChange=(e)=>{
        setOtpLength(e.target.value);
    }

    const handleUppercase=(e)=>{
        setIncludeUppercase(!!e.target.checked)

    }
    const handleLowercase=(e)=>{
        setIncludeLowercase(!!e.target.checked)
    }
    const generateOtp=()=>{
        let characters=NUMBERS;

        if(IncludeUppercase){
            characters += UPPERCASE
        }
        if(includeLowercase){
            characters += LOWERCASE
        }
        let password="";
        for(let i=0; i<otpLength; i+=1){
            const index =Math.floor(Math.random()*characters.length);
            password+=characters[index];
        }
        setOtp(password);
        toast("OTP Generated Successfully", {
                position: "top-center"
            }
        )

    }

    return(
        <div className="box">
            <div className="card">
                <h1>Random OTP Generator  {otpLength}</h1>
                <div className="otp-container">
                    <h3>{otp}</h3>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="select-box">OTP Length</label>
                    <select id="select-box" value={otpLength} onChange={handleChange}>

                        <option>4</option>
                        <option>6</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numbers">Include Numbers</label>
                    <input type="checkbox" id="uppercase"/>
                </div>

                <div className="form-group">
                    <label htmlFor="uppercase">Include Uppercase</label>
                    <input type="checkbox" id="uppercase" onChange={handleUppercase} checked={IncludeUppercase}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lowercase">Include Lowercase</label>
                    <input type="checkbox" id="lowercase" onChange={handleLowercase} checked={includeLowercase}/>
                </div>

                <button className="generate" onClick={generateOtp}>Generate OTP</button>
            </div>
            <ToastContainer/>
        </div>
    )
}