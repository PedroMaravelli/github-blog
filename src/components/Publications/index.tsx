
import { useContext } from "react";
import { SearchPublications } from "./SearchPublications";
import { CardPublication, PublicationsContainer, PublicationsContents } from "./style";
import { UserContext } from "../../contexts/UserContext";

export function Publications() {

    const { issues } = useContext(UserContext)
    // const [ id, setId] = useState<number>(0)


    // function directScreenIssues (id: number){
    //     getIssuesForId(id)
    //     return id
    // }
    
    return(
        <PublicationsContainer>
            <SearchPublications/>

              
                <PublicationsContents>
                    {
                        issues.map((issue, index) => {
                            return (
                                <CardPublication key={index}  to={`/publication/${issue.number}`}>
                                    <div>
                                        <span>{issue.title}</span>
                                        <p>Há 1 dia</p>
                                    </div>
                                    <p>{issue.body}</p>
                                </CardPublication>

                            )
                        })
                    }
                
                    
                    
                
                </PublicationsContents>
            

        </PublicationsContainer>
    )
}