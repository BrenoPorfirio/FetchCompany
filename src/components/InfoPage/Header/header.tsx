import { HeaderContainer } from "./styles/infoPage";

export function Header() {
    return (
        <HeaderContainer>
            <div className="left-content" >
                <strong>
                    FetchCompany
                </strong>
            </div>
            <div className="right-content">
                <a href="" >
                    Sobre
                </a>
                <a href="">
                    Contatos
                </a>
            </div>

        </HeaderContainer>
    )
}