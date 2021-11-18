import styled from 'styled-components';

export default styled.header`
  background: rgb(160, 198, 209);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;

  .app-name {
    font-size: 2rem;
    font-weight: 500;
  }

  .user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    .user-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      .logged-text {
        font-size: 1rem;

        .user-name {
          font-style: italic;
          padding-inline-start: 5px;
          color: #0080ff;
        }
      }

      .user-avatar {
        border-radius: 50%;
        max-width: 40px;
      }
    }

    .logout {
      all: unset;
      transition: 0.3s;
      width: 100px;
      height: 35px;
      background-color: #0041c2;
      color: #fff;
      text-align: center;
      border-radius: 3px;
      border: 1px solid #0041c2;

      &:hover {
        background-color: #fff;
        color: #0041c2;
      }
    }
  }
`;
