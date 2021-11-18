import React from 'react';
import RepoContainer from './Repo.styles';

const Repo = ({ name, description, url, liveURL, language, stars, forks }) => {
  return (
    <RepoContainer>
      <div className="repo-main">
        <a className="repo-name" href={url} title={name}>
          {name}
        </a>

        <span className="add-comment" title="Add a comment">
          <i className="fas fa-plus"></i>
        </span>
      </div>

      <p className="repo-description">{description}</p>

      <div className="repo-extra">
        <span className="language">{language}</span>

        <div className="stats">
          <div className="stat stars">
            <i class="far fa-star"></i>
            <span className="stat-num">{stars}</span>
          </div>

          <div className="stat forks">
            <i class="fas fa-code-branch"></i>
            <span className="stat-num">{forks}</span>
          </div>
        </div>
      </div>
    </RepoContainer>
  );
};

export default Repo;
