import styled, { keyframes } from "styled-components";

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const TransactionsTable = styled.table`
    border-spacing: 0 .5rem;
    width: 80%;
    margin: 0 auto;
    padding-top: 5rem;
    animation: ${show} .4s;

    th{
        font-weight: 400;
        padding: 1rem;
        text-align: left;
        line-height: 1.5rem;
        animation: ${show} .8s;
    }

    td{
        padding: 1rem;
        border: 0;
        background-color: #fff;
        word-break: break-all;

        animation: ${show} .8s;

        &.deposit{
            color: var(--green);
        }
        &.withdraw{
            color: var(--red);
        }
        &:nth-child(1){
            width: 40%;
        }
        &:nth-child(2){
            width: 18%;
        }
        &:nth-child(3){
            width: 14%;
        }
        &:nth-child(4){
            width: 16%;
        }
        &:nth-child(5){
            width: 2%;
            button{
                background-color: transparent;
                font-size: 1.5rem;
                transition: filter .5s;
                &:hover{
                    filter: opacity(.8);
                }
            }
        }
    }
`

export const NoTransitionTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding-top: 5rem;
    opacity: .5;
    

    i{
        font-size: 5rem;
        padding: 5rem 0;

        animation: ${show} .4s;
    }

    h2{
        animation: ${show} .4s;
    }
`