import { Container } from '../Content/styles/content';

export function Content() {
    const texts =
        [
            "Desperte o Poder do Controle: Gerencie usuários com eficiência, empresas com maestria e transforme a gestão para o próximo nível!",
            "Domine o Mundo Empresarial: Usuários empoderados, empresas otimizadas, gestão aprimorada. Seu sucesso começa aqui!",
            "Enfrente Desafios com Confiança: usuários, empresas, excelência em cada detalhe. Domine o poder do gerenciamento e supere os obstáculos com facilidade!"
        ];

    return (
        <Container>
            <div className="content-container">
                {texts.map((text, index) => (
                    <div key={index} className="text-container" >
                        {text}
                    </div>
                ))}
            </div>
        </Container>
    );
}
