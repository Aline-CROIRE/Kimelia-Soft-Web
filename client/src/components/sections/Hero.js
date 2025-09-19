// client/src/components/sections/Hero.js
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Button from '../common/Button';

const HeroWrapper = styled.section`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.neutral} 100%);
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing(16)} 0; /* 8rem top/bottom */
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(circle at top left, rgba(8, 145, 178, 0.2) 0%, transparent 50%),
                          radial-gradient(circle at bottom right, rgba(10, 22, 40, 0.3) 0%, transparent 50%);
        opacity: 0.7;
        z-index: 0;
    }
`;

const HeroContent = styled(Container)`
    position: relative;
    z-index: 1;
`;

const HeroTitle = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    margin-bottom: ${({ theme }) => theme.spacing(2)}; /* Reduced margin to bring tagline closer */
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 3rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 2.5rem;
    }
`;

const HeroTagline = styled.p`
    font-size: ${({ theme }) => theme.typography.h2.fontSize}; /* Make tagline more prominent */
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
    color: ${({ theme }) => theme.colors.secondary}; /* Use innovation teal for tagline */
    margin-bottom: ${({ theme }) => theme.spacing(8)}; /* 4rem */

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1.8rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.5rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: ${({ theme }) => theme.typography.bodyLarge.fontSize};
    line-height: ${({ theme }) => theme.typography.bodyLarge.lineHeight};
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    margin: 0 auto ${({ theme }) => theme.spacing(8)}; /* 4rem */

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 1rem;
    }
`;

const HeroButton = styled(Button)`
    margin: ${({ theme }) => theme.spacing(2)};
`;

const Hero = () => {
    return (
        <HeroWrapper id="top">
            <HeroContent>
                <HeroTitle>
                    Kimelia Soft
                </HeroTitle>
                <HeroTagline>
                    Where Ideas Become Software
                </HeroTagline>
                <HeroSubtitle>
                    Your trusted innovation studio for enterprise-grade solutions, incubating cutting-edge products, and delivering transformative client projects that empower communities.
                </HeroSubtitle>
                <div>
                    <HeroButton primary as="a" href="#contact">Get in Touch</HeroButton>
                    <HeroButton as="a" href="#services">Our Services</HeroButton>
                </div>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;