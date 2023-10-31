import styled from "styled-components"


export const TaskConteiner = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 4rem;

`

export const Task = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    width: 736px;


    border-radius: 8px;
    border: 1px solid  ${props => props.theme["gray-400"]};
    background:  ${props => props.theme["gray-500"]};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

    


    p {
        max-width: 630px;
        color: ${props => props.theme["gray-100"]};
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

    i {
        cursor: pointer;
    }

    i:first-child {
        color: ${props => props.theme["blue"]};
    }


`

