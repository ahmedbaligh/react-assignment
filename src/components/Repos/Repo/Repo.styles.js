import styled from 'styled-components';

export default styled.div`
  padding: 16px;
  background-color: #22272e;
  border: 1px solid #444c56;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .repo-main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .repo-name {
      color: rgb(83, 155, 245);
      font-size: 1rem;
      text-decoration: none;
      padding: 5px;
      padding-inline-start: 0;
    }

    .add-comment {
      padding: 0 5px;
      cursor: pointer;
      color: #b6c4d2;
    }
  }

  .repo-description {
    color: #b6c4d2;
    font-size: 0.9rem;
  }

  .repo-extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;

    .language {
      color: #b6c4d2;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .stats {
      color: #8e9297;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;

      .stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;

        svg {
          fill: #768390;
        }
      }
    }
  }
`;
