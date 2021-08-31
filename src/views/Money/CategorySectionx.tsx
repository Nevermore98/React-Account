import styled from 'styled-components';
import React, {useState} from 'react';
// import set = Reflect.set;

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

    > li {
      position: relative;
      width: 50%;
      text-align: center;
      padding: 16px 0;

      &.selected::after {
        position: absolute;
        content: '';
        display: block;
        height: 3px;
        background: #333;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c)}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export default CategorySection;
