import { useNavigate } from 'react-router-dom';
import { Container, StartNowButton } from '../Content/styles/content';
import { UsersThree, Buildings, Archive } from 'phosphor-react';
import { useState } from 'react';

export function Content() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleStartNowClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/auth/*');
            setLoading(false);
        }, 1000);
    };

    const contentItems = [
        { text: "Desperte o Poder do Controle: Gerencie usuários com eficiência, empresas com maestria e transforme a gestão para o próximo nível! ", icon: <UsersThree size={32} color="#FFF" /> },

        { text: "Domine o Mundo Empresarial: Usuários empoderados, empresas otimizadas, gestão aprimorada. Seu sucesso começa aqui! ", icon: <Buildings size={32} color="#FFF" /> },

        { text: "Enfrente Desafios com Confiança: usuários, empresas, excelência em cada detalhe. Domine o poder do gerenciamento e supere os obstáculos com facilidade! ", icon: <Archive size={32} color="#FFF" /> }
    ];
    return (
        <Container>
            <div className="content-container">
                {contentItems.map((item, index) => (
                    <div key={index} className="text-container">
                        {item.icon}
                        {item.text}
                    </div>
                ))}
                <div className="start-now-container">
                    <StartNowButton onClick={handleStartNowClick} disabled={loading}>
                        {loading ? 'Aguarde...' : 'Começar agora'}
                    </StartNowButton>
                </div>
            </div>
        </Container>
    );
}