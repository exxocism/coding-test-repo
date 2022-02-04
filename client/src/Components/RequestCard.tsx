import { FunctionComponent } from 'react';
import { Button, Divider, Chip } from '@mui/material';
import { styled } from '@mui/system';
import Styled from 'styled-components';

import { reqProps } from './RequestList';

const CardConatiner = Styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  border: 1px solid #C2C2C2;
  border-radius: 4px; 

  font-family: "Noto Sans KR";
  font-style: normal;
  
  &: hover {
    cursor: pointer;
    border-color: #2196F3;
  }
`;

const ReuqestTitle = Styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;

  /* Gray / 900 (default) */
  color: #323D45;
`;

const RequestFrom = Styled.div`
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  display: flex;
  align-items: center;

  /* Gray / 900 (default) */
  color: #323D45;
`;

const DueTime = Styled.div`
  margin-top: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  display: flex;
  align-items: center;

  /* Gray / 600 (sub) */
  color: #939FA5;
`;

const DividerForCard = styled(Divider)({
  marginTop: '16px',
  marginBottom: '32px',
});

const MetaDataTable = Styled.div`
  display: grid;
  grid-template-columns: 102fr 232fr;
  grid-template-rows: auto;
  row-gap: 8px;

  & > div {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
  }
`;

const MDKey = Styled.div`
  grid-row: ${({ row }: { row: number }) => row};
  grid-column: 1;
`;

const MDValue = Styled.div`
  grid-row: ${({ row }: { row: number }) => row};
  grid-column: 2;
  font-weight: Bold;
`;

const ButtonContainer = Styled.div`
  margin-top: 32px;
  
  & > button {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
  }
`;

const BtnShowDetail = Styled(Button)({
  width: '108px',
  height: '32px',
});

const BtnChat = Styled(Button)({
  marginLeft: '8px',
  width: '76px',
  height: '32px',
});

const RequestCard = ({ req }: { req: reqProps }) => {
  return (
    <CardConatiner>
      <ReuqestTitle>{req?.title}</ReuqestTitle>
      <RequestFrom>{req?.client}</RequestFrom>
      <DueTime>{req?.due} 까지 납기</DueTime>
      <DividerForCard />
      <MetaDataTable>
        <MDKey row={1}>도면개수</MDKey>
        <MDValue row={1}>{req?.count}개</MDValue>
        <MDKey row={2}>총 수량</MDKey>
        <MDValue row={2}>{req?.amount}개</MDValue>
        <MDKey row={3}>가공방식</MDKey>
        <MDValue row={3}>{req?.method.join(', ')}</MDValue>
        <MDKey row={4}>재료</MDKey>
        <MDValue row={4}>{req?.material.join(', ')}</MDValue>
      </MetaDataTable>
      <ButtonContainer>
        <BtnShowDetail variant="contained">요청 내역 보기</BtnShowDetail>
        <BtnChat variant="outlined">채팅하기</BtnChat>
      </ButtonContainer>
    </CardConatiner>
  );
};

export default RequestCard;
