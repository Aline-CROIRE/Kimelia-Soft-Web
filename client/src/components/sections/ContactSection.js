

// client/src/components/sections/ContactSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';

const ContactWrapper = styled.section`
    padding: ${({ theme }) => theme.spacing(12)} 0;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ContactContent = styled(Container)`
    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
`;

const ContactInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
    flex-wrap: wrap;

    div {
        flex-basis: 300px;
        text-align: center;
        h4 {
            color: ${({ theme }) => theme.colors.secondary};
            margin-bottom: ${({ theme }) => theme.spacing(2)};
        }
        p {
            margin-bottom: ${({ theme }) => theme.spacing(1)};
            color: ${({ theme }) => theme.colors.textPrimary};
        }
        a {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: 500;
            &:hover {
                color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }
`;

const ContactFormWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    padding: ${({ theme }) => theme.spacing(8)};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.md};
    text-align: left;

    h3 {
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
        margin-bottom: ${({ theme }) => theme.spacing(6)};
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Label = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    font-weight: 500;
`;

const Input = styled.input`
    width: 100%;
    padding: ${({ theme }) => theme.spacing(3)};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0 0 0 2px rgba(8, 145, 178, 0.2); /* Teal focus glow */
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    padding: ${({ theme }) => theme.spacing(3)};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    min-height: 120px;
    resize: vertical;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0 0 0 2px rgba(8, 145, 178, 0.2);
    }
`;

const SubmitButton = styled(Button)`
    width: fit-content;
    margin-top: ${({ theme }) => theme.spacing(4)};
    align-self: flex-end; /* Align button to the right */
`;

const StatusMessage = styled.p`
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(4)};
    font-weight: 500;
    color: ${({ theme, type }) => (type === 'success' ? theme.colors.success : theme.colors.warning)};
`;

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(''); // 'success', 'error', ''

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // In a real application, you would send this to your backend
        // Example: await axios.post('http://localhost:5000/api/contact', formData);
        console.log('Form data submitted:', formData);

        // Simulate API call
        try {
            // Replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } catch (error) {
            console.error('Contact form submission error:', error);
            setStatus('error');
        }
    };

    return (
        <ContactWrapper id="contact">
            <ContactContent>
                <h2>Get in Touch with Kimelia Soft</h2>
                <ContactInfo>
                    <div>
                        <h4>Location</h4>
                        <p>Kigali, Rwanda</p>
                    </div>
                    <div>
                        <h4>Email Us</h4>
                        <p><a href="mailto:info@kimeliasoft.com">info@kimeliasoft.com</a></p>
                    </div>
                    <div>
                        <h4>Call Us</h4>
                        <p><a href="tel:+250788123456">+250 788 123 456</a></p> {/* Placeholder number */}
                    </div>
                </ContactInfo>

                <ContactFormWrapper>
                    <h3>Send Us a Message</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                required
                            />
                        </FormGroup>
                        <SubmitButton primary type="submit">Send Message</SubmitButton>
                        {status === 'success' && <StatusMessage type="success">Your message has been sent successfully!</StatusMessage>}
                        {status === 'error' && <StatusMessage type="error">Failed to send message. Please try again.</StatusMessage>}
                        {status === 'Sending...' && <StatusMessage>Sending...</StatusMessage>}
                    </Form>
                </ContactFormWrapper>
            </ContactContent>
        </ContactWrapper>
    );
};

export default ContactSection;