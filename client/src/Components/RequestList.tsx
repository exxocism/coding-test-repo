import { FunctionComponent } from 'react';
import { styled } from '@mui/system';
import Styled from 'styled-components';

import RequestCard from './RequestCard';
export interface reqProps {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

const EmptyListConatiner = Styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 155px;
  border: 1px solid #C2C2C2;
  border-radius: 4px; 

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #939FA5;
`;

const RequestListConatiner = Styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 16px;
`;

const RequestList = ({ list }: { list: reqProps[] | null }) => {
  return (
    <>
      {!list ? (
        <EmptyListConatiner>
          조건에 맞는 견적 요청이 없습니다.
        </EmptyListConatiner>
      ) : (
        <RequestListConatiner>
          {list?.map((req: reqProps, index: number) => (
            <RequestCard key={index} req={req} />
          ))}
        </RequestListConatiner>
      )}
    </>
  );
};

export default RequestList;
