const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: 0,
    following: 0,
    repositories: [],
    events: [],

    // Atualiza as informações do usuário
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },

    // Define os repositórios a partir dos dados fornecidos
    setRepositories(repositories) {
        this.repositories = repositories.map(repo => ({
            name: repo.name,
            html_url: repo.html_url,
            forks: repo.forks_count,
            stars: repo.stargazers_count,
            watchers: repo.watchers_count,
            language: repo.language || 'Não especificado'
        }));
    },

    // Define os eventos do usuário
    setEvents(events) {
        this.events = events;
    }
};

export { user };