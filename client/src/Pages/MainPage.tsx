import Header from '../Components/Header';
import styled from 'styled-components';

import Filter from '../Components/Filter';

const MainContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Noto Sans KR';
`;

const IncomingRequests = styled.div`
  margin-top: 40px;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #323d45;
`;

const SmallDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #323d45;
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <IncomingRequests>들어온 요청</IncomingRequests>
        <SmallDescription>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </SmallDescription>
        <Filter />
      </MainContainer>
    </>
  );
};

export default MainPage;
