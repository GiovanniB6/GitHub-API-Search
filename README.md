# GitHub API Search

## Sobre a Aplicação

A aplicação permite buscar informações sobre usuários do GitHub, como perfil, repositórios e eventos recentes. O usuário pode pesquisar por um nome de usuário do GitHub e visualizar dados como nome, bio, seguidores, repositórios e atividades recentes.

## Funcionalidades

- **Busca de usuário**: Permite ao usuário buscar um perfil do GitHub inserindo o nome de usuário na barra de pesquisa.
- **Exibição de dados do perfil**: Mostra informações como foto, nome, bio, seguidores e seguindo.
- **Repositórios**: Exibe os 10 principais repositórios do usuário, incluindo informações como forks, estrelas, watchers e linguagem de programação utilizada.
- **Eventos recentes**: Exibe os eventos recentes do usuário, como commits e criação de repositórios.
- **Busca interativa**: A busca pode ser feita clicando no botão ou pressionando a tecla Enter.

## Repositórios

A aplicação lista os **10 principais repositórios** de um usuário do GitHub com informações como:

- Nome do repositório
- Link para o repositório
- Quantidade de forks
- Quantidade de estrelas (stars)
- Quantidade de watchers
- Linguagem de programação (se disponível)

## Eventos Recentes

Os **eventos recentes** exibidos incluem:

- **PushEvent**: Mostra o nome do repositório e o commit mais recente.
- **CreateEvent**: Exibe eventos de criação de repositórios.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página e conteúdo.
- **CSS3**: Estilo e layout da aplicação.
  - **Flexbox**: Para estruturação responsiva.
  - **Media Queries**: Responsividade para diferentes tamanhos de tela.
- **JavaScript**:
  - Manipulação do DOM para exibição de dados.
  - **Fetch API**: Para realizar requisições à API do GitHub.
  - **Async/Await**: Para controle assíncrono de requisições.
  - **Modularização**: Código organizado em módulos (ex. `user.js`, `repositories.js`, `events.js`).
- **GitHub API**: Para obter dados de usuários, repositórios e eventos.

## Como Utilizar

1. **Clone o repositório**:

2. **Instale as dependências** (caso necessário) ou apenas abra o arquivo `index.html` diretamente no navegador.

3. **Inicie a aplicação**:
- Abra o arquivo `index.html` no seu navegador.
- Digite o nome de um usuário do GitHub na barra de pesquisa e clique em "Buscar" ou pressione a tecla Enter.

4. **Exemplo de uso**:
- Ao buscar um usuário como `GiovanniB6`, a aplicação exibirá informações sobre o perfil, seus repositórios e eventos recentes.

## Contribuições

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades! Envie um pull request ou crie uma issue para discutir possíveis mudanças.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
