import styled from "styled-components";

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