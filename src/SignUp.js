import React, {useState} from 'react';
import img2 from './images/logpage.jpg';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    const navigate = useNavigate();
    
    const [inputData,setInputData] = useState({fullName:'' ,phnNum:'' ,email:'' ,password:'' ,});

    const [flag,setFlag]= useState(false);

    const inputEvent=(e)=>{
        const {name,value} = e.target;
        setInputData((preV)=>{
            return ({...preV,
                    [name]:value,})
        });

    }
    const onSubmits=(e)=>{
        e.preventDefault();
        navigate('/')
        if(!inputData.fullName || !inputData.phnNum || !inputData.email || !inputData.password){
            alert('all box are mandatory.');
        }else{
            setFlag(true);
            alert('Congratullation!! You are successfully registred.');

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
                        <h1><span>sign-up</span></h1>
                        
                        <form className='container' onSubmit={onSubmits} >
                            <div className='input_box'>
                            <input type='text' placeholder='Enter your name'
                                name='fullName'
                                value={inputData.fullName}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <input type='number' placeholder='Enter your phone number...'
                                name='phnNum'
                                value={inputData.phnNum}
                                onChange={inputEvent}
                            />
                            </div>
                            <div className='input_box'>
                            <input type='email' placeholder='Enter your email'
                                name='email'
                                value={inputData.email}
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
                            <button type='submit'>Submit</button>
                            </div>
                            
                        </form>
                        <div className='btm_section'>
                        <div className='chkbox_div'>
                        <label><Checkbox size='small'/>Remember me.</label>                        
                        </div>
                            <div className='btm_section_div'>
                                <p>By clicking register,you are agree on our 
                                <a href='#'> Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
        </>
    )}
export default SignUp;