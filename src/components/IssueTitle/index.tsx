/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { HeaderIssue, InfosIssues, IssueContainer, IssueContentTitle, IssueHeaderContent } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from "dayjs/plugin/relativeTime";



dayjs.extend(updateLocale)
dayjs.extend(relativeTime);


dayjs.updateLocale('PT-BR', {
  relativeTime: {
    future: "em %s",
    past: "%s atrás",
    s: 'a poucos segundos',
    m: "Há minutos",
    mm: "%d minutos",
    h: "Há hora",
    hh: "%d horas",
    d: "Há dias",
    dd: "%d dias",
    M: "Há mês",
    MM: "%d Mês",
    y: "Há ano",
    yy: "%d ano"
  }
})






export function IssueTitle () {
    const { name } = useContext(UserContext)


    const [title, setTitle] = useState<string>('')
    const [comments, setComments] = useState<number>(0)
    const [createdAt, setCreatedAt] = useState<Date>()
    const [formatterDate, setFormatterDate] = useState<string>()

    const {id} = useParams()

    
    useEffect(() => {
        api.get(`/repos/PedroMaravelli/github-blog/issues/${id}`)
        .then((response) => {
            setTitle(response.data.title)
            setComments(response.data.reactions.total_count)
            setCreatedAt(response.data.created_at)
        })

        formatteANewDate()
    },[formatteANewDate, id])

    function formatteANewDate(){
        const formatterCreatedAt = dayjs(createdAt).fromNow(true)
        setFormatterDate(formatterCreatedAt)
    }



   

    return (
        <IssueContainer>
            <IssueHeaderContent>
                <HeaderIssue to='/'>
                    <CaretLeft size={18} /><span>Voltar</span>
                </HeaderIssue>
                <HeaderIssue to={`https://github.com/PedroMaravelli/github-blog/issues/${id}`}>
                    <span>VER NO GITHUB</span><ArrowSquareOut size={18} />
                </HeaderIssue>
            </IssueHeaderContent>
                        <IssueContentTitle>
                            <span>{title}</span>
                            <InfosIssues>
                                <GithubLogo size={18}/>{name}
                                <CalendarBlank size={18} />Há {formatterDate} 
                                <ChatCircle size={18} />{comments} Comentários
                            </InfosIssues>
                        </IssueContentTitle>

            
            
        </IssueContainer>
    )
}