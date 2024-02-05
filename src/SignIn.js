import React, { useState } from 'react';
import img1 from './images/loginPage.jpg';
import { Link } from 'react-router-dom';

const SignIn=()=>{
    

    const [inputData,setInputData] = useState({phno:'',password:''});

    const [flag,setFlag] = useState(false);
    const inputEvent=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputData((preV)=>{
            console.log(preV)
            return ({...preV,
                [name]:value})
        });
    }
    const onSubmits=(e)=>{
        e.preventDefault();
        
        if(!inputData.phno || !inputData.password){
            alert('all input are mandatory.');
        }
        else{
            setFlag(true);
            alert(`Congratulation !! you have login successfully.`)
        }
    }
    return (
        <>
            <section className='hero_section'>
                <div className='inner_div'>
                    <div className='leftSide'>
                        <img src={img1} alt='logimage'/>
                    </div>
                    <div className='rightSide'>
                        <h1><span>sign-in</span> to your account</h1>
                        
                        <form className='container' onSubmit={onSubmits} >
                            <div className='input_box'>
                            <input type='number' placeholder='Enter your phn number...'
                                name='phno'
                                value={inputData.phno}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <input type='password' placeholder='Password'
                                name='password'
                                value={inputData.password}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <button type='submit'>login</button>
                            </div>
                            
                        </form>
                        <div className='btm_section'>
                            <Link to='/forgotpassword'>ForgotPassword</Link>
                            {/* <a href='#' className='forgot_pwd'>Forgot Password?</a> */}
                            <div className='btm_section_div'>
                                <p>Don't have an account ? 
                                <Link to='/signup'> SignUp </Link>
                                here.</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
        </>
    );
}

export default SignIn;
