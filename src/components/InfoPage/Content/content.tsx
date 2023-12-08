import { Container } from '../Content/styles/content';

export function Content() {
    const texts =
        [
            "Desperte o Poder do Controle: Gerencie Usuários com Eficiência, Empresas com Maestria e Transforme a Gestão para o Próximo Nível!",
            "Domine o Mundo Empresarial: Usuários Empoderados, Empresas Otimizadas, Gestão Aprimorada. Seu Sucesso Começa Aqui!",
            "Enfrente Desafios com Confiança: Usuários, Empresas, Excelência em Cada Detalhe. Domine o Poder do Gerenciamento e Supere os Obstáculos com Facilidade!"
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
