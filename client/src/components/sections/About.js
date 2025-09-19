// client/src/components/sections/About.js
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';

const AboutWrapper = styled.section`
    padding: ${({ theme }) => theme.spacing(12)} 0; /* 6rem vertical */
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

const AboutContent = styled(Container)`
    h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: ${({ theme }) => theme.spacing(8)}; /* More space below main heading */
    }
`;

const StoryBlock = styled.div`
    max-width: 900px;
    margin: ${({ theme }) => theme.spacing(10)} auto; /* Space between story blocks */
    padding: ${({ theme }) => theme.spacing(8)};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    text-align: left;

    h3 {
        color: ${({ theme }) => theme.colors.secondary}; /* Teal for sub-headings */
        margin-bottom: ${({ theme }) => theme.spacing(4)};
        text-align: center;
    }

    p {
        margin-bottom: ${({ theme }) => theme.spacing(4)};
        font-size: ${({ theme }) => theme.typography.body.fontSize};
        line-height: ${({ theme }) => theme.typography.body.lineHeight};
        color: ${({ theme }) => theme.colors.textPrimary};

        &:last-of-type {
            margin-bottom: 0; /* No margin on the last paragraph */
        }
    }

    strong {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const About = () => {
    return (
        <AboutWrapper id="about">
            <AboutContent>
                <h2>Unveiling Kimelia Soft: Our Story</h2>

                <StoryBlock>
                    <h3>The Essence of Our Name</h3>
                    <p>
                        The name <strong>“Kimelia”</strong> is a unique creation, symbolizing the harmony between design and technology. It encapsulates creativity, elegance, and innovation, serving as a bridge between imaginative ideas and impactful solutions. For us, Kimelia signifies <strong>beauty in innovation</strong>, a principle that drives our commitment to developing software that is both highly functional and truly inspiring.
                    </p>
                </StoryBlock>

                <StoryBlock>
                    <h3>Kimelia Soft: Our Innovation Studio</h3>
                    <p>
                        As the parent innovation studio, Kimelia Soft proudly stands by its motto: <strong>"Where Ideas Become Software."</strong> We are dedicated to building enterprise-grade solutions for complex challenges, fostering in-house product incubation with ventures like Kimelia Luxe, ItekaRise, and Rwanda Digital Twin, and delivering transformative client projects designed to empower communities.
                    </p>
                </StoryBlock>

            </AboutContent>
        </AboutWrapper>
    );
};

export default About;