import { PublicationsCount, SearchForm } from "./style";

export function SearchPublications() {
    return(
        <div>
            <PublicationsCount>
                <span>Publicações</span>
                <span>6 Publicações</span>

            </PublicationsCount>
            <form>
                <SearchForm type="text" placeholder="Buscar conteúdo"></SearchForm>
            </form>

        </div>
    )

}