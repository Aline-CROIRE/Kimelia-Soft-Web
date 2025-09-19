// client/src/components/common/Button.js
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme, primary }) => (primary ? theme.colors.secondary : theme.colors.primary)};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)}; /* 1.5rem 3rem */
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: ${({ theme }) => theme.typography.bodyLarge.fontSize};
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-align: center;
    display: inline-block; /* Allows padding and width adjustments */
    text-decoration: none; /* For when used as a link */

    &:hover {
        background-color: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.secondary)};
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.white};
        outline-offset: 3px;
    }
`;

export default Button;