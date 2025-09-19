// client/src/components/layout/Navbar.js
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import BrandLogo from '../common/BrandLogo'; // <<< NEW: Import the shared BrandLogo component

const NavWrapper = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary}; /* Deep Tech Blue for professionalism */
    padding: ${({ theme }) => theme.spacing(4)} 0; /* 2rem vertical padding */
    box-shadow: ${({ theme }) => theme.shadows.md}; /* Subtle shadow for depth */
    position: sticky;
    top: 0;
    z-index: 1000; /* Ensure navbar stays on top */
`;

const NavContent = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// <<< REMOVE THIS OLD BRANDLOGO DEFINITION:
// const BrandLogo = styled.a`
//     color: ${({ theme }) => theme.colors.white};
//     font-size: ${({ theme }) => theme.typography.h3.fontSize};
//     font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//     span:first-child {
//         color: ${({ theme }) => theme.colors.white};
//     }
//     span:last-child {
//         color: ${({ theme }) => theme.colors.secondary};
//         font-weight: 400;
//         margin-left: ${({ theme }) => theme.spacing(1)};
//     }
//
//     &:hover {
//         text-decoration: none;
//     }
// `;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none; /* Hide on smaller screens, could add a hamburger menu */
    }
`;

const NavItem = styled.li`
    margin-left: ${({ theme }) => theme.spacing(6)}; /* Ample spacing between links */
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.body.fontSize};
    font-weight: 500;
    position: relative;
    padding-bottom: ${({ theme }) => theme.spacing(1)};

    &:hover {
        color: ${({ theme }) => theme.colors.secondary}; /* Teal hover for navigation */
        text-decoration: none;
        &::after {
            width: 100%;
        }
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: width 0.3s ease-in-out;
    }
`;

const Navbar = () => {
    return (
        <NavWrapper>
            <NavContent>
                <BrandLogo /> {/* <<< Use the imported BrandLogo component */}
                <NavLinks>
                    <NavItem><NavLink href="#about">About Us</NavLink></NavItem>
                    <NavItem><NavLink href="#mission-vision">Our Drive</NavLink></NavItem>
                    <NavItem><NavLink href="#values">Values</NavLink></NavItem>
                    <NavItem><NavLink href="#services">Services</NavLink></NavItem>
                    <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
                </NavLinks>
            </NavContent>
        </NavWrapper>
    );
};

export default Navbar;