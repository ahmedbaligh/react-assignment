import styled from 'styled-components';

export default styled.div`
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }

  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
