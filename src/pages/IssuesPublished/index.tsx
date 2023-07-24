import { Header } from "../../components/Header";
import { IssueContent } from "../../components/IssueContent";
import { IssueTitle } from "../../components/IssueTitle";
import { IssuesPublishedContainer } from "./style";

export function IssuesPublished (){
    return(
        <IssuesPublishedContainer>
            <Header/>
            <IssueTitle/>
            <IssueContent/>
        </IssuesPublishedContainer>
    )

}