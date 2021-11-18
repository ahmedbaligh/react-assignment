import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getUserRepos } from '../../utils/api';
import ReposContainer from './Repos.styles';
import { Loader } from '../';
import Repo from './Repo/Repo';

const Repos = ({ user }) => {
  const [pageNum, setPageNum] = useState(1);
  const [repos, setRepos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getUserRepos(user.login, pageNum).then(newRepos => {
      if (newRepos.length === 0) {
        setHasMore(false);
        return;
      }

      setRepos(prevRepos => [...prevRepos, ...newRepos]);
    });
  }, [user.login, pageNum]);

  const EndMessage = () => (
    <p className="end-message">
      <b>You have reached the end of your repos!</b>
    </p>
  );

  return (
    <ReposContainer>
      <InfiniteScroll
        dataLength={repos.length}
        next={() => setPageNum(prevPage => ++prevPage)}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
        className="repos"
      >
        {repos.map(repo => (
          <Repo
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
            language={repo.language}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
          />
        ))}
      </InfiniteScroll>
    </ReposContainer>
  );
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Repos);
