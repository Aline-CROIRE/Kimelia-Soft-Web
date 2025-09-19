// client/src/components/sections/ServicesSection.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Container from '../common/Container';
import { theme } from '../../styles/theme';
const ServicesWrapper = styled.section`
    padding: ${({ theme }) => theme.spacing(12)} 0;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ServicesContent = styled(Container)`
    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
`;

const ServiceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing(6)};
    margin-top: ${({ theme }) => theme.spacing(6)};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr; /* Stack on small screens */
    }
`;

const ServiceCard = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing(6)};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Aligns content from top */
    align-items: flex-start; /* Aligns content from left */

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${({ theme }) => theme.shadows.md};
    }

    h3 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.typography.h4.fontSize};
        margin-bottom: ${({ theme }) => theme.spacing(3)};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: ${({ theme }) => theme.typography.body.fontSize};
        flex-grow: 1; /* Allows paragraph to take up available space */
    }

    i.icon { /* Changed from span.icon to i.icon */
        font-size: ${({ theme }) => theme.spacing(8)};
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: ${({ theme }) => theme.spacing(4)};
        display: block;
        text-align: left; /* Align icon to the left */
    }
`;

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/services');
                setServices(response.data);
            } catch (err) {
                setError('Failed to fetch services. Please ensure the backend server is running and accessible.');
                console.error('Error fetching services:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <ServicesWrapper id="services">
            <ServicesContent>
                <h2>Our World-Class Software Solutions</h2>
                {loading ? (
                    <p>Loading our innovative services...</p>
                ) : error ? (
                    <p style={{ color: theme.colors.warning, fontSize: theme.typography.bodyLarge.fontSize }}>{error}</p>
                ) : (
                    <ServiceGrid>
                        {services.length > 0 ? (
                            services.map(service => (
                                <ServiceCard key={service._id}>
                                    {service.icon && <i className={`icon ${service.icon}`}></i>} {/* Render Font Awesome icon */}
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </ServiceCard>
                            ))
                        ) : (
                            <p>No services currently listed. Check back soon for our offerings!</p>
                        )}
                    </ServiceGrid>
                )}
            </ServicesContent>
        </ServicesWrapper>
    );
};

export default ServicesSection;