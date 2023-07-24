import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { HeaderIssue, InfosIssues, IssueContainer, IssueContentTitle, IssueHeaderContent } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";


export function IssueTitle () {
    const { name } = useContext(UserContext)


    const [title, setTitle] = useState<string>('')
    const [comments, setComments] = useState<number>(0)
    const [createdAt, setCreatedAt] = useState<Date>()




    const {id} = useParams()

    useEffect(() => {
        api.get(`/repos/PedroMaravelli/github-blog/issues/${id}`)
        .then((response) => {
            setTitle(response.data.title)
            setComments(response.data.reactions.total_count)
            setCreatedAt(response.data.created_at)

        })

        
    },[id])

    return (
        <IssueContainer>
            <IssueHeaderContent>
                <HeaderIssue to='/'>
                    <CaretLeft size={18} /><span>Voltar</span>
                </HeaderIssue>
                <HeaderIssue to='https://github.com/'>
                    <span>VER NO GITHUB</span><ArrowSquareOut size={18} />
                </HeaderIssue>
            </IssueHeaderContent>
                        <IssueContentTitle>
                            <span>{title}</span>
                            <InfosIssues>
                                <GithubLogo size={18}/>{name}
                                <CalendarBlank size={18} />{createdAt}
                                <ChatCircle size={18} />{comments} Comentários
                            </InfosIssues>
                        </IssueContentTitle>

            
            
        </IssueContainer>
    )
}