import React, {useState} from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/generateOutput';

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output, setOutput] = useState(props.value.toString());

  const handleOutput = (input: string) => {
    let output: string;
    if (input.length === 0) {
      output = '0';
    } else {
      output = input;
    }
    setOutput(output);
    props.onChange(parseFloat(output));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === '完成') {
      if (props.onOk) {props.onOk();}
      setOutput('0');
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      handleOutput(generateOutput(text, output));
    }
  };

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">完成</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};
export default NumberPadSection;
