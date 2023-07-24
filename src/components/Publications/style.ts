import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PublicationsContainer = styled.div`
    margin-top: 6rem ;
    width: 54rem;
    margin-bottom: 3rem;
`
export const PublicationsContents = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

`
export const CardPublication = styled(Link)`
    background-color: #112131;
    border-radius: 10px;
    width: 26rem;
    padding: 2rem;
    text-decoration: none;

    > div span{
        width: 60%;
        color: #E7EDF4;
        font-size: 1.25rem;
        font-weight: 700;
    }

    div{
        display: flex;
        justify-content: space-between;
        gap: 2rem ;
    }
    div p{
        color: #7B96B2;
        font-size: 0.875rem;
        font-weight: 400;
    }

    p{
        margin-top: 1rem;
        color: #AFC2D4;
        font-weight: 400;
    }
;
`