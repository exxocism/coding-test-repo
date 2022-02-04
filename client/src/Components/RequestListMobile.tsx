import Styled from 'styled-components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

import { reqProps } from '../Components/RequestList';
import RequestCard from './RequestCard';

const EmptyListConatiner = Styled.div`
  margin-top: 23px;
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
  margin-top: 23px;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 16px;
`;

const RequestListMobile = ({ list }: { list: reqProps[] | null }) => {
  const processMethod = useSelector<RootState, string[]>(
    (state) => state.processMethod
  );
  const ingridientList = useSelector<RootState, string[]>(
    (state) => state.ingridientList
  );
  const onlyInConsult = useSelector<RootState, boolean>(
    (state) => state.onlyInConsult
  );
  const listFiltered: reqProps[] | null = useMemo(() => {
    if (!list) return null;
    const newlist: reqProps[] | null = [];
    for (const req of list) {
      if (onlyInConsult && req.status !== '상담중') continue;
      if (processMethod.length) {
        const methodCheck = processMethod.some((method) =>
          req.method.includes(method)
        );
        if (!methodCheck) continue;
      }
      if (ingridientList.length) {
        const ingridientCheck = ingridientList.some((ingridient) =>
          req.material.includes(ingridient)
        );
        if (!ingridientCheck) continue;
      }
      newlist.push(req);
    }
    return newlist.length ? newlist : null;
  }, [processMethod, ingridientList, onlyInConsult, list]);

  return (
    <>
      {!listFiltered ? (
        <EmptyListConatiner>
          조건에 맞는 견적 요청이 없습니다.
        </EmptyListConatiner>
      ) : (
        <RequestListConatiner>
          {listFiltered?.map((req: reqProps, index: number) => (
            <RequestCard key={index} req={req} />
          ))}
        </RequestListConatiner>
      )}
    </>
  );
};

export default RequestListMobile;
