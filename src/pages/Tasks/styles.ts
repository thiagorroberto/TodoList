import styled from "styled-components";

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 7rem;
`

export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 736px;

    div {
        display: flex;
        gap: 10px;

        label {
            color: ${props => props.theme["blue"]};
            font-size: 14px;
        }

        span {
            color: ${props => props.theme["purple"]};
            font-size: 14px;
        }
    }
`
export const Counter = styled.div`
    background-color: ${props => props.theme["gray-400"]};
    display: flex;
    padding: 2px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 999px;

    p {
        color: var(--Gray-200, #D9D9D9);
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`

export const NewTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  `;

  export const NewTaskBox = styled.div`
    display: flex;
    align-items: center;
    width: 736px;
    gap: 8px;
    margin-top: -1.725rem;


    input {
        display: flex;
        padding: 16px;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
        border-radius: 8px;
        border: ${props => props.theme["gray-700"]};
        background-color: ${props => props.theme["gray-500"]};
        color: ${props => props.theme["gray-200"]};
    }

    button {
        display: flex;
        padding: 16px 20px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: none;
        border-radius: 8px;
        background: ${props => props.theme["blue-dark"]};
        color: ${props => props.theme["gray-100"]};
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
`

  

export const TaskConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 4rem;

`

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    margin: .5rem auto;
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


    button {
        color: ${props => props.theme["blue"]};
        background-color: transparent;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

    }

    button:hover {
        color: ${props => props.theme["blue-dark"]};
        background-color: #10212a;
        transition: background-color 0.1s;
        border: none;
        border-radius: 999px;
        padding: 0;
        outline: none;
    }

    
    

    i{
        color: ${props => props.theme["gray-300"]};
    }

    i:hover {
        border-radius: 4px;
        background: ${props => props.theme["gray-400"]};
        color: ${props => props.theme["danger"]};
        cursor: pointer;
        outline: none;
        transition: background-color 0.1s;
    } 

`




