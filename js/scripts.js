// Validação simples do formulário de contato
document.querySelector('form').addEventListener('submit', function(event) {
    alert('Mensagem enviada com sucesso!');
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();
});
