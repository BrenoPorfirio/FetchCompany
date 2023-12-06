import { Container } from '../Content/styles/content';

export function Content() {
    const texts = ["Melhore sua empresa 1", "Melhore sua empresa 2", "Melhore sua empresa 3"];

    return (
        <Container>
            <div className="content-container">
                {texts.map((text, index) => (
                    <div key={index} className="text-container" style={{ backgroundColor: getColor(index) }}>
                        {text}
                    </div>
                ))}
            </div>
        </Container>
    );
}

function getColor(index) {
    const colors = ["#ffd700", "#87ceeb", "#90ee90"];
    return colors[index % colors.length];
}
