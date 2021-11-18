import Styled from 'styled-components';

export default Styled.header`
  background: rgb(160, 198, 209);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;

  .app-name {
    font-size: 1.8rem;
  }

  .user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    .user-info {
      font-size: 1.2rem;
    }

    .logout {
      all: unset;
      cursor: pointer;
      transition: 0.3s;
      width: 100px;
      height: 35px;
      background-color: #0041C2;
      color: #fff;
      text-align: center;
      border-radius: 3px;
      border: 1px solid #0041C2;

      &:hover{
        background-color: #fff;
        color: #0041C2;
      }
    }
  }
`;
