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
    fetchSearchIssues: (query?: string) => void;

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
    




    function getUserInfos () {
        api.get('/users/PedroMaravelli')
        .then((response) => {
            setName(response.data.name)
            setAvatarUrl(response.data.avatar_url)
            setFollowers(response.data.followers)
            setBio(response.data.bio)

        })
    }

    function getIssues(){
        api.get('/repos/PedroMaravelli/github-blog/issues')
        .then((response) => {
            setIssues(response.data)

        })
    }
    function fetchSearchIssues (query?: string){
        api.get(`/search/issues/q${query}/PedroMaravelli/github-blog`)
        .then((response) =>{
            setIssues(response.data)
            console.log(response.data);
            
        })

    }

    

    useEffect(() => {
        getUserInfos()
        getIssues()
        fetchSearchIssues()
       

    },[])





    return (
        <UserContext.Provider value={{
            name,
            bio,
            followers,
            avatarUrl,
            issues,
            fetchSearchIssues,
        }}>
            {children}
        </UserContext.Provider>
    )
}