import styled from "styled-components";

export const ProfileContainer = styled.div`
    margin-top: -5rem;
     background-color: #0B1B2B;
     position: relative;
     width: 54rem;
     padding: 3rem ;
     display: flex;
     border-radius: 10px;
     box-shadow:2px 2px 2px 1px rgba(0.2, 0.2, 0.2, 0.2);
     gap: 1rem;
     
     color: white;
`
export const ImgProfile = styled.img`
    width:9.25rem;
    height: 9.25erem;
    border-radius: 8px;
`
export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > span{
        color: #AFC2D4;
    }
`
export const NameProfile = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        font-weight: 700;
        font-size: 1.5rem;
    }
    a{
        display: flex;
        align-items: center;
        gap:0.5rem;
        color:#3294F8 ;
    }
`

export const InfosProfile = styled.div`
    display: flex;
    align-items: center;
    
    color: #C4D4E3 ;

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