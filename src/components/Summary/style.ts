import styled, { keyframes } from "styled-components";

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 80%;
    min-height: 8rem;
    margin: -4rem auto;

    animation: ${show} .4s;
`

export const SummaryContent = styled.div`
    background-color: #fff;
    border-radius: .25rem;
    padding: 1rem 1rem 2rem 1rem;
    width: 32%;

    animation: ${show} .8s;
`

export const SummaryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 1rem 0;

    animation: ${show} .8s;

    i{
        font-size: 1.5rem;
    }
`

export const SummaryBody = styled.div`
    padding: 1rem 0 0 0;
    word-break: break-all;
`