// client/src/components/layout/Footer.js
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import BrandLogo from '../common/BrandLogo'; // <<< NEW: Import the shared BrandLogo component

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary}; /* Deep Tech Blue for authority */
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing(8)} 0; /* Ample padding */
    margin-top: ${({ theme }) => theme.spacing(12)}; /* Space from content above */
    text-align: center;
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1); /* Shadow for separation */
`;

const FooterContent = styled(Container)`
    p {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.8;
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
    a {
        color: ${({ theme }) => theme.colors.secondary};
        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
    }
`;

const SocialLinks = styled.div`
    margin-top: ${({ theme }) => theme.spacing(4)};
    a {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.spacing(6)}; /* Larger icons */
        margin: 0 ${({ theme }) => theme.spacing(3)};
        transition: color 0.3s ease;
        &:hover {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <BrandLogo /> {/* <<< Use the imported BrandLogo component */}
                <p>Where Ideas Become Software</p>
                <p>Empowering Rwandan communities and businesses with world-class software solutions.</p>
                <SocialLinks>
                    {/* Placeholder for social media icons */}
                    <a href="https://linkedin.com/company/kimelia-soft" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/kimeliasoft" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="mailto:info@kimeliasoft.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </SocialLinks>
                <p>
                    &copy; {new Date().getFullYear()} Kimelia Soft Ltd. All rights reserved. | Built with{' '}
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>,{' '}
                    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>, &amp;{' '}
                    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>
                </p>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;