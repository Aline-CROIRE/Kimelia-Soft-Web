
export const theme = {
    colors: {
        primary: '#0A1628', 
        secondary: '#0891B2', 
        white: '#FFFFFF', 
        success: '#059669', 
        warning: '#D97706', 
        neutral: '#475569', 

    
        backgroundLight: '#F8FAFC', 
        textSecondary: '#64748B',  
        textPrimary: '#1E293B', 
        border: '#E2E8F0', 
    },
    typography: {
        fontFamily: "'Poppins', sans-serif", 
        h1: { fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }, // For main page titles
        h2: { fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.25 }, // For section titles
        h3: { fontSize: '2rem', fontWeight: 600, lineHeight: 1.3 },  // For sub-section titles/card titles
        h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
        bodyLarge: { fontSize: '1.125rem', lineHeight: 1.7 }, // For prominent body text
        body: { fontSize: '1rem', lineHeight: 1.6 }, // Standard body text
        small: { fontSize: '0.875rem', lineHeight: 1.5 }, // For captions, footer text
    },
    breakpoints: {
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    // Helper function for consistent spacing
    spacing: (factor) => `${factor * 0.5}rem`, // spacing(1) = 0.5rem, spacing(2) = 1rem, spacing(4) = 2rem etc.
    // Box shadows for depth
    shadows: {
        sm: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        md: '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',
        lg: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
    },
    borderRadius: '8px',
};
