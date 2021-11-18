import styled from 'styled-components';

export default styled.section`
  height: 100vh;

  .repos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }

  .end-message {
    margin: 40px 20px 10px;
    color: #3776b5;
    font-size: 1.3rem;
  }
`;
