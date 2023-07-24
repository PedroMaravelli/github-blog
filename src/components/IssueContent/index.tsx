import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IssueContentContainer } from "./style";
import { useParams } from "react-router-dom";


export function IssueContent () {
    const [issueContent, setIssueContent] = useState<string>('')

    const {id} = useParams()

    useEffect(() => {
        api.get(`/repos/PedroMaravelli/github-blog/issues/${id}`)
        .then((response) => {
            setIssueContent(response.data.body)
            

        })
    },[id])
    return(
        <IssueContentContainer>
            <p>
                {issueContent}
            </p>
            

        </IssueContentContainer>
    )
}