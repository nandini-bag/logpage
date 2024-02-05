import React, { useState } from 'react';
import img2 from './images/newpass.png';
import { useNavigate } from 'react-router-dom';


const ForgotPassword=()=>{
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({password:'' ,newPassword:'' ,confirmPassword:'' ,});
    
    const [flag, setFlag] = useState(false);
    const inputEvent=(e)=>{
        const {name,value}=e.target;
        setInputData((preV)=>{
            return ({...preV,
                     [name]:value})
        })
    }
    const onSubmits=(e)=>{
        e.preventDefault();
        navigate('/')
        if(inputData.newPassword === inputData.confirmPassword){
            alert("you successfully change your password");
        }
        else{
            setFlag(true);
            alert("try again")
        }
    }
    return (
        <>
            <section className='hero_section'>
                <div className='inner_div'>
                    <div className='leftSide'>
                        <img src={img2} alt='logimage'/>
                    </div>
                    <div className='rightSide'>
                        <h1>New Password</h1>
                        
                        <form className='container' onSubmit={onSubmits}>
                            <div className='input_box'>
                            <input type='password' placeholder='Enter your Password'
                                name='password'
                                value={inputData.password}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <input type='password' placeholder='Enter your new Password'
                                name='newPassword'
                                value={inputData.newPassword}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <input type='password' placeholder='Enter your Confirm Password'
                                name='confirmPassword'
                                value={inputData.confirmPassword}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <button type='submit'>Reset Password</button>
                            </div>
                            
                        </form>
                    </div>
                </div>            
            </section>
        </>
    );
}
export default ForgotPassword;