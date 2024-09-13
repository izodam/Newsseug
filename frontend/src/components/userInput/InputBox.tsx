import styled from 'styled-components';
import { InputBoxProps } from '@/types/userInput';

function InputBox({
  input,
  backGroundColor,
  canEdit,
  onChange,
}: Readonly<InputBoxProps>) {
  return (
    <InputBoxContainerStyle $backGroundColor={backGroundColor}>
      <InputBoxTextStyle
        value={input ?? ''}
        placeholder={!input ? '생년월일을 입력해주세요.' : ''}
        readOnly={!canEdit}
        onChange={onChange}
      />
    </InputBoxContainerStyle>
  );
}
export default InputBox;

const InputBoxContainerStyle = styled.div<{ $backGroundColor?: string }>`
  display: flex;
  width: calc(87%);
  padding: 11px 12px;
  border-radius: 4px;
  background-color: ${({ $backGroundColor }) => $backGroundColor ?? 'white'};
  ${({ $backGroundColor }) => !$backGroundColor && 'border: 1px solid #ccc;'}
`;

const InputBoxTextStyle = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 4px;
  height: 25px;
  background-color: transparent;
  box-sizing: border-box;
`;