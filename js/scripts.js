// Validação simples do formulário de contato
document.querySelector('form').addEventListener('submit', function(event) {
    alert('Mensagem enviada com sucesso!');
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();
});

// Código para a seção do aplicativo

// Array com as informações das telas do aplicativo
// Dados das funcionalidades do app
// Dados das funcionalidades do app
const appScreens = [
    {
        title: 'Configuração de Porções',
        description: 'Ajuste as porções de ração diretamente pelo aplicativo, de forma fácil e intuitiva.',
        controls: `
            <button>Porção Pequena</button>
            <button>Porção Média</button>
            <button>Porção Grande</button>
        `
    },
    {
        title: 'Agendamento de Horários',
        description: 'Defina os horários de alimentação do seu pet e mantenha uma rotina saudável.',
        controls: `
            <button>8:00 AM</button>
            <button>12:00 PM</button>
            <button>6:00 PM</button>
        `
    },
    {
        title: 'Consultoria Nutricional',
        description: 'Consulte profissionais e receba recomendações personalizadas para a dieta do seu pet.',
        controls: `
            <button>Iniciar Chat</button>
            <button>Ver Recomendações</button>
        `
    }
];

let currentIndex = 0;

const appContent = document.getElementById('app-content');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Função para atualizar a tela do app com animação
function updateAppScreen(index) {
    // Animação de fade-out
    appContent.style.opacity = 0;

    setTimeout(() => {
        const screenData = appScreens[index];
        appContent.innerHTML = `
            <h3>${screenData.title}</h3>
            <p>${screenData.description}</p>
            <div class="app-controls">${screenData.controls}</div>
        `;
        // Animação de fade-in
        appContent.style.opacity = 1;
    }, 300);
}

// Eventos dos botões
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + appScreens.length) % appScreens.length;
    updateAppScreen(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % appScreens.length;
    updateAppScreen(currentIndex);
});

// Carrega a primeira tela
document.addEventListener('DOMContentLoaded', () => {
    updateAppScreen(currentIndex);
});
