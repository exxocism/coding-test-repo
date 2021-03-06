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

const RequestTitleContainer = Styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  & span {
    font-size: inherit;
    text-overflow: clip;
  }
`;

const ReuqestTitle = Styled.div`
  flex-grow: 1;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  display: flex;
  align-items: center;

  /* Gray / 900 (default) */
  color: #323D45;
`;

const ChatInProgress = styled(Chip)({
  width: '50px',
  fontFamily: 'Noto Sans KR',
  fontStyle: 'Normal',
  fontWeight: 500,
  fontSize: '12px',
});

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
      <RequestTitleContainer>
        <ReuqestTitle>{req?.title}</ReuqestTitle>
        {req?.status === '?????????' && (
          <ChatInProgress
            size="small"
            variant="outlined"
            color="warning"
            label="?????????"
          />
        )}
      </RequestTitleContainer>
      <RequestFrom>{req?.client}</RequestFrom>
      <DueTime>{req?.due} ?????? ??????</DueTime>
      <DividerForCard />
      <MetaDataTable>
        <MDKey row={1}>????????????</MDKey>
        <MDValue row={1}>{req?.count}???</MDValue>
        <MDKey row={2}>??? ??????</MDKey>
        <MDValue row={2}>{req?.amount}???</MDValue>
        <MDKey row={3}>????????????</MDKey>
        <MDValue row={3}>{req?.method.join(', ')}</MDValue>
        <MDKey row={4}>??????</MDKey>
        <MDValue row={4}>{req?.material.join(', ')}</MDValue>
      </MetaDataTable>
      <ButtonContainer>
        <BtnShowDetail variant="contained">?????? ?????? ??????</BtnShowDetail>
        <BtnChat variant="outlined">????????????</BtnChat>
      </ButtonContainer>
    </CardConatiner>
  );
};

export default RequestCard;
