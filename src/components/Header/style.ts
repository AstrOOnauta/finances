import styled from "styled-components";

export const HeaderContent = styled.header`
    background-color: var(--black);
    color: var(--yellow);
    width: 100%;
    height: 10rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
    padding: 1rem 0;

    button{
        background-color: var(--yellow);
        padding: .5rem 1rem;
        border-radius: .25rem;

        transition: filter .2s;

        &:hover{
            filter: brightness(.9);
        }
    }
`