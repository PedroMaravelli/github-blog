import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Publications } from "../../components/Publications";

import { HomePageContainer } from "./style";

export function HomePage () {
    return (
        <main>
            <HomePageContainer>
                <Header></Header>
                <Profile></Profile>
                <Publications></Publications>
            </HomePageContainer>
        </main>
    )
}