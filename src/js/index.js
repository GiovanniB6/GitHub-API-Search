import { getUser } from './services/user.js';
import { getRepositories } from './services/repositories.js';
import { getEvents } from './services/events.js'; // Importando a função getEvents

import { user } from './objects/user.js';
import { screen } from './objects/screen.js';

// Função para tratar a busca ao clicar no botão
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
});

// Função para tratar a busca ao pressionar a tecla Enter
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    if (e.key === 'Enter' && !validateEmptyInput(userName)) {
        getUserData(userName);
    }
});

// Valida se o campo de entrada está vazio
function validateEmptyInput(userName) {
    if (userName.trim().length === 0) {
        alert('Preencha o campo com o nome do usuário do Github');
        return true;
    }
    return false;
}

// Função assíncrona para obter os dados do usuário, repositórios e eventos
async function getUserData(userName) {
    try {
        const userResponse = await getUser(userName);

        if (userResponse.message === "Not Found") {
            screen.renderNotFound();
            return;
        }

        const repositoriesResponse = await getRepositories(userName);
        const eventsResponse = await getEvents(userName);

        user.setInfo(userResponse);
        user.setRepositories(repositoriesResponse);
        user.setEvents(eventsResponse);

        screen.renderUser(user);
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
}