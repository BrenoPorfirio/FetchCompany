import { HeaderContainer } from "./styles/header";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <div className="left-content">
                <strong>FetchCompany</strong>
            </div>
            <div className="right-content">
                <a href="https://github.com/BrenoPorfirio/FetchCompany.git" target="_blank">
                    <strong>Sobre</strong>
                </a>
                <Link to="./about">
                    <strong>Contatos</strong>
                </Link>
            </div>
        </HeaderContainer>
    );
}
