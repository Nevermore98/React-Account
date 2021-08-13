import styled from 'styled-components';

const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
  }

  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: 1px solid #f5f5f5;

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }
    }
  }
`;

export default NumberPadSection;
