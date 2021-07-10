import styled from "styled-components"; 
import { FaSearch } from "react-icons/fa";


export const SearchContainer=styled.div`
    display: flex;
    /* flex-direction: column;
    align-items: center;
    justify-content: center; */
    @media screen and (max-width: 768px){
        padding: 2rem;
        width: 100%;
    }
`

export const SearchContent=styled.div`
    position: relative;
    width: 400px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 300px;
    }
`

export const FormSearch=styled.form`
`;

export const InputSearch=styled.input`
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: #000;
    border-radius: 6px;
    outline: none;
    border: none;
    path {
        color: var(--deep-dark);
      }
      @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`;

export const FaSearchCustom=styled(FaSearch)`
    position: absolute;
    width: 1.5rem;
    right: 1rem;
    top: 1rem;
    color: #808080;

`