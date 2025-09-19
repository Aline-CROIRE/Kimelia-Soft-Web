// client/src/components/sections/CoreValues.js
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const ValuesWrapper = styled.section`
    padding: ${({ theme }) => theme.spacing(12)} 0;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

const ValuesContent = styled(Container)`
    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: ${({ theme }) => theme.spacing(8)};
    }
`;

const ValuesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing(6)}; /* 3rem gap */
    margin-top: ${({ theme }) => theme.spacing(6)};
`;

const ValueCard = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    padding: ${({ theme }) => theme.spacing(6)};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    text-align: center;

    &:hover {
        transform: translateY(-8px);
        box-shadow: ${({ theme }) => theme.shadows.md};
    }

    h3 {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.typography.h4.fontSize};
        margin-bottom: ${({ theme }) => theme.spacing(3)};
    }

    p {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-size: ${({ theme }) => theme.typography.body.fontSize};
    }
`;

const Icon = styled.i` /* Changed from span to i for Font Awesome */
    font-size: ${({ theme }) => theme.spacing(10)}; /* Large icon size */
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    display: block;
`;

const CoreValues = () => {
    const values = [
        { icon: 'fas fa-users-gear', title: 'People-First Design', description: 'Centering human needs and experiences in every solution we craft, ensuring intuitive and impactful software.' }, // Changed icon
        { icon: 'fas fa-cogs', title: 'Technical Excellence', description: 'Upholding the highest standards in engineering, quality, and reliability, delivering robust enterprise-grade solutions.' }, // Changed icon
        { icon: 'fas fa-globe-africa', title: 'Local Impact, Global Quality', description: 'Building solutions that resonate locally within Rwandan communities while meeting international benchmarks of excellence.' }, // Changed icon
        { icon: 'fas fa-handshake-angle', title: 'Transparency & Partnership', description: 'Fostering open communication and collaborative relationships with our clients and communities, built on mutual trust.' }, // Changed icon
    ];

    return (
        <ValuesWrapper id="values">
            <ValuesContent>
                <h2>Our Guiding Principles</h2> {/* Updated title */}
                <ValuesGrid>
                    {values.map((value, index) => (
                        <ValueCard key={index}>
                            <Icon className={value.icon}></Icon> {/* Render Font Awesome icon */}
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </ValueCard>
                    ))}
                </ValuesGrid>
            </ValuesContent>
        </ValuesWrapper>
    );
};

export default CoreValues;