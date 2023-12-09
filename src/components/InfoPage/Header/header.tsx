import { HeaderContainer } from "./styles/header";

export function Header() {
    return (
        <HeaderContainer>
            <div className="left-content" >
                <strong>
                    FetchCompany
                </strong>
            </div>
            <div className="right-content">
                <a href="https://github.com/BrenoPorfirio/FetchCompany.git" target="_blank">
                    <strong>
                        Sobre
                    </strong>
                </a>
                <a href="">
                    <strong>
                        Contatos
                    </strong>
                </a>
            </div>

        </HeaderContainer>
    )
}