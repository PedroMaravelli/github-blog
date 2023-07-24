import { zodResolver } from "@hookform/resolvers/zod";
import { PublicationsCount, SearchForm } from "./style";
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";


const searchFormSchema = z.object({
    query: z.string()
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchPublications() {
    const {register, handleSubmit} = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const { fetchSearchIssues } = useContext(UserContext)

    function handleSearchIssues(data: SearchFormInputs){
        fetchSearchIssues(data.query)
    }



    return(
        <div>
            <PublicationsCount>
                <span>Publicações</span>
                <span>6 Publicações</span>

            </PublicationsCount>
            <form method="get" onSubmit={handleSubmit(handleSearchIssues)}>
                <SearchForm 
                    type="text" 
                    placeholder="Buscar conteúdo"
                    {...register('query')}>

                </SearchForm>
            </form>

        </div>
    )

}