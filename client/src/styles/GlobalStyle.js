// client/src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* Import Google Fonts (Poppins) */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily};
        background-color: ${({ theme }) => theme.colors.backgroundLight};
        color: ${({ theme }) => theme.colors.textPrimary};
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden; /* Prevent horizontal scroll due to padding/margins */
    }

    h1 {
        font-size: ${({ theme }) => theme.typography.h1.fontSize};
        font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
        line-height: ${({ theme }) => theme.typography.h1.lineHeight};
        color: ${({ theme }) => theme.colors.primary}; /* Main headings use primary blue */
        margin-bottom: ${({ theme }) => theme.spacing(3)}; /* 1.5rem */
    }

    h2 {
        font-size: ${({ theme }) => theme.typography.h2.fontSize};
        font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
        line-height: ${({ theme }) => theme.typography.h2.lineHeight};
        color: ${({ theme }) => theme.colors.textPrimary};
        margin-bottom: ${({ theme }) => theme.spacing(5)}; /* 2.5rem */
    }

    h3 {
        font-size: ${({ theme }) => theme.typography.h3.fontSize};
        font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
        line-height: ${({ theme }) => theme.typography.h3.lineHeight};
        color: ${({ theme }) => theme.colors.textPrimary};
        margin-bottom: ${({ theme }) => theme.spacing(3)}; /* 1.5rem */
    }

    h4 {
        font-size: ${({ theme }) => theme.typography.h4.fontSize};
        font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
        line-height: ${({ theme }) => theme.typography.h4.lineHeight};
        color: ${({ theme }) => theme.colors.textPrimary};
        margin-bottom: ${({ theme }) => theme.spacing(2)}; /* 1rem */
    }

    p {
        font-size: ${({ theme }) => theme.typography.body.fontSize};
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
        color: ${({ theme }) => theme.colors.textSecondary};
        margin-bottom: ${({ theme }) => theme.spacing(3)}; /* 1.5rem */
    }

    a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.colors.primary}; /* Hover effect for links */
            text-decoration: underline;
        }
    }

    ul, ol {
        list-style: none; /* Reset list styles */
        margin-left: ${({ theme }) => theme.spacing(4)};
        p {
            margin-bottom: ${({ theme }) => theme.spacing(1)};
        }
    }

    li {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
        font-size: ${({ theme }) => theme.typography.body.fontSize};
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
        color: ${({ theme }) => theme.colors.textPrimary};
    }

    /* Accessibility improvements */
    :focus {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 2px;
    }
`;