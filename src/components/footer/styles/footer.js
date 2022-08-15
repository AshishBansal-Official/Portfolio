import styled from "styled-components/macro";

export const Wrapper = styled.div`
    width: 100%;
    padding: 2vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1680px) {
        padding: 4vw;
    }

    @media (max-width: 1024px) {
        padding: 6vw;
    }

    @media (max-width: 768px) {
        padding: 10vw 2vw;
    }
`;
