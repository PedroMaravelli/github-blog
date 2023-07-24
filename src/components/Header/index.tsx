import { HeaderContainer } from "./style";
import logo from '../../assets/logo.svg'
import efect from '../../assets/header.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={efect}></img>
            <div>
                <img src={logo}></img>
            </div>
            <img src={efect}></img>

            

        </HeaderContainer>
    )
}