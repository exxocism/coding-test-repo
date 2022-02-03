import { FunctionComponent } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import Styled from 'styled-components';

interface DateProps {
  list: Array<object> | null;
}

const EmptyListConatiner = Styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 155px;
  border: 1px solid #C2C2C2;
  box-sizing: border-box;
  border-radius: 4px; 

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #939FA5;
`;

const RequestList: FunctionComponent<DateProps> = ({ list }) => {
  return (
    <EmptyListConatiner>조건에 맞는 견적 요청이 없습니다.</EmptyListConatiner>
  );
};

export default RequestList;
