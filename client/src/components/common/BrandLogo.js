// client/src/components/common/BrandLogo.js
import React from 'react';
import styled from 'styled-components';
const logoSvgPath = '/kimelia-soft-logo.svg';

const StyledBrandLogo = styled.a`
    display: flex;
    align-items: center; /* Align items vertically in the middle */
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap; /* Prevent text from wrapping */
    
    img {
        height: ${({ theme }) => theme.spacing(8)}; /* Adjust SVG size as needed, e.g., 4rem */
        width: auto;
        margin-right: ${({ theme }) => theme.spacing(2)}; /* Space between SVG and text */
        filter: brightness(0) invert(1); /* Makes a colored SVG white for dark backgrounds */

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            height: ${({ theme }) => theme.spacing(6)};
            margin-right: ${({ theme }) => theme.spacing(1)};
        }
    }

    /* Styling for "Kimelia" part */
    span:first-of-type {
        font-size: ${({ theme }) => theme.typography.h3.fontSize}; /* Prominent but not overwhelming */
        font-weight: ${({ theme }) => theme.typography.h1.fontWeight}; /* Bold for impact */
        color: ${({ theme }) => theme.colors.white}; /* Default color for 'Kimelia' part */
        
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: ${({ theme }) => theme.typography.h4.fontSize};
        }
    }

    /* Styling for "Soft" part */
    span:last-of-type {
        color: ${({ theme }) => theme.colors.secondary}; /* Innovation Teal for 'Soft' */
        font-weight: 400; /* Lighter weight as per brand guide */
        margin-left: ${({ theme }) => theme.spacing(1)}; /* Small space */
        font-size: ${({ theme }) => theme.typography.h3.fontSize}; /* Keep consistent size */

        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: ${({ theme }) => theme.typography.h4.fontSize};
        }
    }

    &:hover {
        text-decoration: none; /* No underline on logo hover */
    }
`;

const BrandLogo = ({ href = '#top' }) => {
    return (
        <StyledBrandLogo href={href}>
            {/* The SVG logo image */}
            <img src={logoSvgPath} alt="Kimelia Soft Logo" />
            {/* The text part of the logo */}
            <span>Kimelia</span><span>Soft</span>
        </StyledBrandLogo>
    );
};

export default BrandLogo;
