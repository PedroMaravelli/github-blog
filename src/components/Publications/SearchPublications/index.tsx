import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSearch, PublicationsCount, SearchForm } from "./style";
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { UserContext } from "../../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";



const searchFormSchema = z.object({
    query: z.string()
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchPublications() {
    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const { fetchSearchIssues, issues } = useContext(UserContext)

    const [countPublications, setCountPublications] = useState<number>()


    
    async function handleSearchIssues(data: SearchFormInputs){
        await fetchSearchIssues(data.query)
    }

    const countIssues = () => {
        issues.map((_issues, index) => {
            setCountPublications(index + 1)
        })

    }

    useEffect(() => {
        countIssues()
    }, [issues])


    return(
        <div>
            <PublicationsCount>
                <span>Publicações</span>
                <span>{countPublications} Publicações</span>

            </PublicationsCount>
            <form method="get" onSubmit={handleSubmit(handleSearchIssues)}>
                <SearchForm 
                    type="text" 
                    placeholder="Buscar conteúdo"
                    {...register('query')}>

                </SearchForm>
                <ButtonSearch type="submit">Buscar</ButtonSearch>
                
            </form>

        </div>
    )

}