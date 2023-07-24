import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const IssueContainer = styled.div`
    margin-top: -5rem;
     background-color: #0B1B2B;
     position: relative;
     width: 54rem;
     padding: 2rem ;
     border-radius: 10px;
     box-shadow:2px 2px 2px 1px rgba(0.2, 0.2, 0.2, 0.2);
     gap: 1rem;
    
`
export const IssueHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;

`
export const HeaderIssue = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #3294F8;
    font-size:0.75rem ;
    font-weight: 700;
    text-decoration: none;

`
export const InfosIssues = styled.div`
    display: flex;
    align-items: center;
    
    color: #7B96B2 ;

    :nth-child(2n+3){
        margin-left: 2rem;
        margin-right: 0.5rem;
    }
    :nth-child(2n+2){
        margin-left: 2rem;
        margin-right: 0.5rem;
    }
    :nth-child(2n+1){
        margin-right: 0.5rem;
    }
`
export const IssueContentTitle = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    span{
        color: #E7EDF4 ;
        font-size: 1.5rem;
        font-weight: 700;

    }
`