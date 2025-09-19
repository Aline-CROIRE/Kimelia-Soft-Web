// client/src/components/sections/MissionVision.js
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const MissionVisionWrapper = styled.section`
    padding: ${({ theme }) => theme.spacing(12)} 0;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MVContent = styled(Container)`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(8)}; /* 4rem gap */
    flex-wrap: wrap;

    h2 {
        width: 100%; /* Take full width for main heading */
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: ${({ theme }) => theme.spacing(8)};
    }

    div {
        flex: 1;
        min-width: 300px; /* Ensure columns don't get too small */
        max-width: 500px;
        background-color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.spacing(6)};
        border-radius: ${({ theme }) => theme.borderRadius};
        box-shadow: ${({ theme }) => theme.shadows.md};
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Pushes title and content apart */
    }

    h3 {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.typography.h3.fontSize};
        margin-bottom: ${({ theme }) => theme.spacing(4)};
    }

    p {
        font-size: ${({ theme }) => theme.typography.body.fontSize};
        color: ${({ theme }) => theme.colors.textPrimary};
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
    }
`;

const MissionVision = () => {
    return (
        <MissionVisionWrapper id="mission-vision">
            <MVContent>
                <h2>Our Drive & Future</h2>
                <div>
                    <h3>Mission</h3>
                    <p>
                        To empower Rwandan communities and businesses with world-class software solutions — combining deep local understanding, human-first design, and modern engineering.
                    </p>
                </div>
                <div>
                    <h3>Vision</h3>
                    <p>
                        To make Kimelia Soft the leading African innovation studio known for trusted products, scalable impact, and design-led engineering.
                    </p>
                </div>
            </MVContent>
        </MissionVisionWrapper>
    );
};

export default MissionVision;