import { Link } from "react-router-dom";
import { ImgProfile, InfosProfile, NameProfile, ProfileContainer, ProfileContent } from "./style";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export function Profile (){
    const { name, avatarUrl, followers, bio } = useContext(UserContext)




    return(
        <ProfileContainer>
                        
                        <ImgProfile src={avatarUrl}></ImgProfile>
                
                            <ProfileContent>
                                
                            
                                            <NameProfile>
                                                <p>{name}</p>
                                                <Link to='https://github.com/PedroMaravelli'>
                                                    Github
                                                    <ArrowSquareOut size={18}/>
                                                </Link>
                                            </NameProfile>

                                            <span>{bio}</span>
                                            <InfosProfile>
                                                <GithubLogo size={18}/>{name}
                                                <Buildings size={18}/>RocketSeat
                                                <Users size={18} />{followers} Seguidores


                                            </InfosProfile>
                            </ProfileContent>



        </ProfileContainer>
    )
}