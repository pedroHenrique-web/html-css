// Seleciona o formulário pelo ID
const form = document.getElementById('meuFormulario');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;

    // Exemplo: Exibe os dados no console
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Idade:', idade);

    // Aqui você pode adicionar lógica para enviar os dados para um servidor ou processar como quiser
});