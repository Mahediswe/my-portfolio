

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        try {
            const result = await emailjs.sendForm(
                serviceID,
                templateID,
                form.current,
                publicKey
            );
            console.log('✅ Success:', result.text);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', telephone: '', message: '' });
        } catch (error) {
            console.error('❌ EmailJS error:', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className='px-4 py-16 bg-gray-950 text-white' id='contact'>
            <div className='max-w-3xl mx-auto'>
                <h2 className='text-4xl font-bold text-center text-blue-500 mb-10'>
                    Contact Me
                </h2>
                <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <input
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='telephone'
                            placeholder='Your Phone Number'
                            value={formData.telephone}
                            onChange={handleChange}
                            className='w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <textarea
                            name='message'
                            rows='6'
                            placeholder='Your Message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className='w-full px-5 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
