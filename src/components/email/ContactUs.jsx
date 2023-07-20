import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RiCloseFill } from "react-icons/ri";
import './ContactUs.scss'

export const ContactUs = ({contactShowHandler}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const form = useRef();

    const nameHandler = (e) => {
        const inputName = e.target.value;
        const formattedName = inputName.replace(/[0-9~!@#$%^&*()_+={}[\]|\\:;"'<>,.?/]/g, '');
    
        // 이름에 허용되지 않는 문자가 있으면 오류 메시지를 표시
        if (formattedName !== inputName) {
            alert('이름은 숫자와 특수 문자를 포함할 수 없습니다.');
            return;
        }
    
        setUserName(formattedName);
    };
    
    const phoneHandler = (e) => {
        // remove hyphen
        const inputNumber = e.target.value.replace(/-/g, '');
        // Can write only Number
        const formattedNumber = inputNumber.replace(/\D/g, '');
    
        // add hyphen
        let formattedPhoneNumber = '';
        if (formattedNumber.length <= 3) {
            formattedPhoneNumber = formattedNumber;
        } else if (formattedNumber.length <= 7) {
            formattedPhoneNumber = `${formattedNumber.slice(0, 3)}-${formattedNumber.slice(3)}`;
        } else {
            formattedPhoneNumber = `${formattedNumber.slice(0, 3)}-${formattedNumber.slice(3, 7)}-${formattedNumber.slice(7, 11)}`;
        }
    
        // Update field
        setPhoneNumber(formattedPhoneNumber);
    
        // Check if phone number is valid
        if (formattedNumber.length > 11) {
            alert('유효한 전화번호를 입력해주세요 (최대 11자리).');
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const userName = formData.get('user_name');
        const userEmail = formData.get('user_email');
        const userPhone = formData.get('user_phone');
        const userMessage = formData.get('message');

            // Check if all required fields are filled correctly
        if (userName.length < 3) {
            alert('Name must be at least 3 characters long.');
            return;
        }
    
        if (!userPhone.match(/^\d{3}-\d{4}-\d{4}$/)) {
            alert('Please enter a valid phone number (e.g., 010-1234-1234).');
            return;
        }
    
        if (!userEmail) {
            alert('Email is required.');
            return;
        }
    
        if (!userMessage) {
            alert('Message is required.');
            return;
        }

        if (!userName || !userEmail || !userMessage || !userPhone) {
            alert('Please fill in all required fields.');
            return; // If blank the input anyone, can submit
        }


        const serverId = process.env.REACT_APP_SERVICE_ID
        const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID
        const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY

        emailjs.sendForm(serverId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        contactShowHandler();
    };

    return (
        <form className='contact_wrap' ref={form} onSubmit={sendEmail}>
            <div className='contact_header'>
                <h2>Contact Me</h2>
                <div onClick={contactShowHandler}><RiCloseFill /></div>
            </div>
            <div className='contact_name'>
                <label className='contact_title'>Name</label>
                <input className='contact_input' type="text" name="user_name" placeholder='Mac' maxLength={10} value={userName} onChange={nameHandler}/>
            </div>
            <div className='contact_phone'>
                <label className='contact_title'>Phone</label>
                <input className='contact_input' type="tel" name="user_phone" placeholder='010-1234-1234(Only Number)' value={phoneNumber} onChange={phoneHandler} maxLength={13}/>
            </div>
            <div className='contact_email'>
                <label className='contact_title'>Email</label>
                <input className='contact_input' type="email" name="user_email" placeholder='your-email@email.com' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            </div>
            <div className='contact_massage'>
                <label className='contact_title'>Message</label>
                <textarea className='contact_input' name="message" placeholder='write your message' value={userMessage} onChange={(e) => setUserMessage(e.target.value)}/>
            </div>
            <input className='contact_submit' type="submit" value="Send" />
        </form>
    );
};
