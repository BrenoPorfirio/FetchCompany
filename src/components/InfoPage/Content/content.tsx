import { Container, StartNowButton } from '../Content/styles/content';
import UsersThree from "../../../assets/users-three.svg"
import ArrowFatRight from "../../../assets/arrow-fat-right.svg"
import Archive from "../../../assets/archive.svg"
import Build from "../../../assets/buildings.svg"

export function Content() {
    const texts =
        [
            "Desperte o Poder do Controle: Gerencie usuários com eficiência, empresas com maestria e transforme a gestão para o próximo nível!",
            "Domine o Mundo Empresarial: Usuários empoderados, empresas otimizadas, gestão aprimorada. Seu sucesso começa aqui!",
            "Enfrente Desafios com Confiança: usuários, empresas, excelência em cada detalhe. Domine o poder do gerenciamento e supere os obstáculos com facilidade!"
        ];

    return (
        <Container>
            <img src={UsersThree} />
            <img src={Build} />
            <img src={Archive} />
            <div className="content-container">
                {texts.map((text, index) => (
                    <div key={index} className="text-container" >
                        {text}
                    </div>
                ))}
                <div>
                    <StartNowButton>
                        Começar agora
                        <img src={ArrowFatRight} height={26} />
                    </StartNowButton>
                </div>
            </div>
        </Container>
    );
}
