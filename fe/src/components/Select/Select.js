import styled from "styled-components";

export default styled.select`
    width:100%;
    border: none;
    outline: none;
    background: #fff;
    border: 2px solid #fff;
    box-shadow: 8px 4px 18px rgba(0,0,0, 0.4);
    height: 52px;
    border-radius: 4px;
    padding: 0 16px;
    font-size: 16px;
    transition: border-color 0.2s ease-in;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary[500]};
    }
`;