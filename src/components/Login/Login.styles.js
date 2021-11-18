import styled from 'styled-components';

export default styled.main`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      padding: 30px 50px;

      > h1 {
        font-size: 2rem;
        margin-bottom: 50px;
        text-transform: capitalize;
      }

      > span:nth-child(2) {
        font-size: 1.1rem;
        color: #808080;
        margin-bottom: 70px;
      }

      > span:nth-child(3) {
        margin: 10px 0 20px;
        color: red;
      }

      .login-container {
        background-color: #000;
        width: 70%;
        border-radius: 3px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        > .login-link {
          text-decoration: none;
          color: #fff;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          height: 40px;

          > span:nth-child(2) {
            margin-left: 5px;
          }
        }
      }
    }
  }
`;
