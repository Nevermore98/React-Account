import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    display: flex;
    align-items: center;
    background: white;
    font-size: 40px;
    font-weight: bolder;
    text-align: left;
    padding: 16px 16px;

    .dollar {
      font-size: 28px;
    }

    @media (max-height: 570px) {
      & {
        line-height: 68px;
      }
    }
  }

  > .pad {
    height: 100%;
    padding: 4px;
    
    > button {
      font-size: 20px;
      font-weight: bold;
      height: 64px;
      float: left;
      width: 25%;
      border: 4px solid #f5f5f5;
      border-radius: 8px;
      background: white;

      &.ok {
        float: right;
        height: 128px;
        opacity: ${props => props === '0' ? 0.6 : 1};

      }

      &.zero {
        width: 50%;
      }

      &:active {
        background: #F5F5F5;
      }
    }

    @media (max-height: 570px) {
      > button {
        height: 56px;

        &.ok {
          height: 112px;
        }
      }
    }
  }
`;

export default Wrapper;
