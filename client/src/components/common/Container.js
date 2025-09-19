// client/src/components/common/Container.js
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1280px; /* Max width for content */
    margin: 0 auto; /* Center the container */
    padding: 0 ${({ theme }) => theme.spacing(4)}; /* Padding on left/right */

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 ${({ theme }) => theme.spacing(3)};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 ${({ theme }) => theme.spacing(2)};
    }
`;

export default Container;