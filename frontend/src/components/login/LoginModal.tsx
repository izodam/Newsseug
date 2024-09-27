import styled from 'styled-components';
import { LoginModalProps } from 'types/login';

function LoginModal({ onCancel, onLogin }: Readonly<LoginModalProps>) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <Content>
          <Message>로그인이 필요한 서비스 입니다</Message>
          <Message>로그인을 하시겠습니까?</Message>
        </Content>

        <ButtonGroup>
          <CancelButton onClick={onCancel}>돌아가기</CancelButton>
          <ConfirmButton onClick={onLogin}>로그인</ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default LoginModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Content = styled.div`
  display: flex;
  color: #202020;
  gap: 5px;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const Message = styled.h2`
  color: #202020;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
`;

const CancelButton = styled.button`
  display: flex;
  background: #fff;
  border: 1px solid #eee;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  border-radius: 4px;
  flex: 1 0 0;
`;

const ConfirmButton = styled.button`
  display: flex;
  border: none;
  color: #ffffff;
  background-color: #58d7a2;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  flex: 1 0 0;
`;