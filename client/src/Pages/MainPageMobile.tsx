import { useEffect, useState } from 'react';
import styled from 'styled-components';

import FilterMobile from '../Components/FilterMobile';
import HeaderMobile from '../Components/HeaderMobile';
import RequestListMobile from '../Components/RequestListMobile';
import { reqProps } from '../Components/RequestList';

const MainContainer = styled.div`
  padding: 24px 20px 60px 20px;
  font-family: 'Noto Sans KR';
`;

const IncomingRequests = styled.div`
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
  const [requestList, setRequestList] = useState<reqProps[] | null>(null);

  useEffect(() => {
    const ENDPOINT = window.location.hostname;
    fetch(`http://${ENDPOINT}:3000/requests`)
      .then((res) => res.json())
      .then((data: reqProps[]) => {
        setRequestList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <HeaderMobile />
      <MainContainer>
        <IncomingRequests>들어온 요청</IncomingRequests>
        <SmallDescription>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </SmallDescription>
        <FilterMobile />
        <RequestListMobile list={requestList} />
      </MainContainer>
    </>
  );
};

export default MainPage;
