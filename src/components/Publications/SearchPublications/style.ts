import styled from "styled-components";

export const PublicationsCount = styled.div`
    display: flex;
    justify-content: space-between;
    
    :first-child{
        color:#C4D4E3 ;
        font-size:1.125rem;
        font-weight: 700;
    }
    :last-child{
        color: #7B96B2 ;
        font-size: 0.875rem;
        font-weight: 400;
    }

`
export const SearchForm = styled.input`
    width: 90%;
    background-color: #040F1A ;
    margin-top: 0.8rem;
    border-radius: 6px;
    border: 1px solid #1C2F41;
    padding: 0.8rem;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 3rem;
    color: white;
`
export const ButtonSearch = styled.button`
    margin-left: 1rem;
    border-radius: 8px;
    padding: 0.8rem;
    background-color: #112131;
    border: 1px solid #1C2F41;
    font-weight:400;
    

    &:hover{
        color:#C4D4E3 ;
        
    }

`