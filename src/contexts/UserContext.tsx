import { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

interface issues{
    title: string
    body:string
    number:number
}

interface UserContextProps{
    name: string
    avatarUrl: string
    followers: number
    bio: string
    issues:issues[]

}
interface UserProviderProps{
    children: ReactNode
}

export const UserContext = createContext({} as UserContextProps )

export function UserProvider({ children }: UserProviderProps){

    const [name, setName] = useState<string>('')
    const [avatarUrl, setAvatarUrl] = useState<string>('')
    const [followers, setFollowers] = useState<number>(0)
    const [bio, setBio] = useState<string>('')
    const [issues, setIssues] = useState<[]>([])
    




    function getName () {
        api.get('/users/PedroMaravelli')
        .then((response) => {
            setName(response.data.name)
        })
    }
    function getAvatarUrl () {
        api.get('/users/PedroMaravelli')
        .then((response) => {
            setAvatarUrl(response.data.avatar_url)
        })
    }
    function getFollowers() {
        api.get('/users/PedroMaravelli')
        .then((response) => {
            setFollowers(response.data.followers)
        })
    }
    function getBio() {
        api.get('/users/PedroMaravelli')
        .then((response) => {
            setBio(response.data.bio)
        })
    }

    function getIssues(){
        api.get('/repos/PedroMaravelli/github-blog/issues')
        .then((response) => {
            setIssues(response.data)

        })
    }

    

    useEffect(() => {
        getName()
        getAvatarUrl()
        getFollowers()
        getBio()
        getIssues()
       

    },[])





    return (
        <UserContext.Provider value={{
            name,
            bio,
            followers,
            avatarUrl,
            issues,
        }}>
            {children}
        </UserContext.Provider>
    )
}