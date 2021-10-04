import styled, { keyframes } from "styled-components";

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;

    animation: ${show} .4s;

    h2{
        text-align: center;
        margin: 1rem 0;
    }

    input{
        background-color: #e7e9ee;
        border: 1px solid #d7d7d7;
        border-radius: .25rem;
        height: 4rem;
        padding: 0 1rem;
        margin: .5rem 0;

        transition: filter .2s;

        &:focus{
            outline: none;
            filter: brightness(.9);
        }
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    button{
        background-color: var(--yellow);
        height: 4rem;
        border-radius: .25rem;
        padding: 0 1rem;
        margin: .5rem 0;

        transition: filter .5s;

        &:hover{
            filter: brightness(.9);
        }
    }

    .fa-times{
        cursor: pointer;
        position: absolute;
        top: 1rem;
        right: 1rem;

        transition: filter .2s;

        &:hover{
            filter: opacity(.8);
        }
    }

`

export const SwitchFinance = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 48%;
    height: 5rem;

    i{
        font-size: 1.5rem;
    }
`