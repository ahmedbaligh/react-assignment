import React, { useState } from 'react';

import Commenting from '../../Commenting/Commenting';
import RepoContainer from './Repo.styles';

const Repo = ({ id, name, description, url, language, stars, forks }) => {
  const [addComment, setAddComment] = useState(false);

  return (
    <>
      <RepoContainer>
        <div className="repo-main">
          <a className="repo-name" href={url} title={name}>
            {name}
          </a>

          <span
            className="add-comment"
            title="Add a comment"
            onClick={() => setAddComment(true)}
          >
            <i className="fas fa-plus"></i>
          </span>
        </div>

        <p className="repo-description">{description}</p>

        <div className="repo-extra">
          <span className="language">{language}</span>

          <div className="stats">
            <div className="stat stars">
              <i className="far fa-star"></i>
              <span className="stat-num">{stars}</span>
            </div>

            <div className="stat forks">
              <i className="fas fa-code-branch"></i>
              <span className="stat-num">{forks}</span>
            </div>
          </div>
        </div>
      </RepoContainer>

      <Commenting
        repoID={id}
        isOpen={addComment}
        setIsOpen={setAddComment}
        repoName={name}
      />
    </>
  );
};

export default Repo;
