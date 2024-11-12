// src/components/GitHubRepos.js
import React, { useEffect, useState } from 'react';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use process.env.REACT_APP_GITHUB_TOKEN para acessar o token
    fetch(`https://api.github.com/users/vmaia0111/repos?sort=updated&per_page=5`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar repositórios');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setRepos([]);
        }
      })
      .catch(error => {
        console.error(error);
        setError('Não foi possível carregar os repositórios');
      });
  }, []);

  return (
    <section id="github-repos">
      <h2>Projetos Recentes no GitHub</h2>
      <div className="repo-list">
        {repos.length > 0 ? (
          repos.map(repo => (
            <div key={repo.id} className="repo-card">
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          ))
        ) : (
          <p>Carregando repositórios...</p>
        )}
      </div>
    </section>
  );
}

export default GitHubRepos;
