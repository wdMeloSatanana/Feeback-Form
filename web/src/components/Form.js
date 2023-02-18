import styles from './Form.module.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addNewForm } from '../features/formSlice'; 
/*
import { createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
*/
export function Form(){
    const dispatch=useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formCheck, setFormCheck] = useState(true);
 
    const onNameChanged = (e)  => setName(e.target.value);
    const onEmailChanged = (e)  => setEmail(e.target.value);
    const onMessageChanged = (e)  => setMessage(e.target.value);

    const extraParagraph = <p id={styles.errorMsg}>Invalid input. Please check if you submitted a valid email, name and message.</p>
/*
    const sendFeedback = createAsyncThunk(
        'forms/postStatus',
        async (formJson) => {
        const response = await axios.post('locahost:3000/forms', formJson)
        console.log(response);
        console.log(response.data);
        console.log(response.status)   
        return response.data
        }
    )*/

    const onSendMessageClicked = ()=>{
        /*
        const nameRegex = /\w{6,}/gi;
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const messageRegex = /\w{20,}/gi;
        */
        console.log('matched the regex, trying to send to db...')
        try{
            console.log({name, email, message});
            dispatch(addNewForm({name, email, message})) 
           
     
        } catch(err){
            console.error('Failed to send the form', err)
        }
             
        }
     
    
    
    return (
        <div id={styles.container}>  
            <h1>Reach out to us!</h1>
            <form >
                <input type="text" placeholder="Your name*" value={name} onChange={onNameChanged}/>
                <input type="text" placeholder="Your e-mail*" value={email} onChange={onEmailChanged} />
                <textarea id={styles.messageBox} placeholder="Your message*" value={message} onChange={onMessageChanged}  />
                <button type="text"  onClick={onSendMessageClicked}  >Send message</button>
                {!formCheck && extraParagraph}
            </form>
        </div>
    )
}