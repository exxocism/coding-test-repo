import { useMemo } from 'react';
import {
  FormControlLabel,
  MenuItem,
  FormControl,
  FormGroup,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,
  Switch,
} from '@mui/material';
import { styled } from '@mui/system';
import Styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  setProcessMethod,
  setIngridientList,
  setOnlyInConsult,
} from '../redux/filter';

import { Refresh as RefreshIcon } from '@mui/icons-material';

const FilterConatiner = Styled.div`
  margin-top: 32px;
  display: flex;  
`;

const MenuItemForMethod = styled(MenuItem)({
  fontFamily: '"Noto Sans KR"',
  fontWeight: 500,
  fontSize: '14px',
  maxHeight: '28px',
});

const CheckboxStyled = styled(Checkbox)({
  width: '18px',
  height: '18px',
});

const ListItemTextStyled = styled(ListItemText)({
  marginLeft: '10px',
});

const MenuPropsForMethod = {
  PaperProps: {
    style: {
      maxHeight: '80px',
      width: '130px',
    },
  },
};

const MenuPropsForIngridient = {
  PaperProps: {
    style: {
      maxHeight: '164px',
      width: '130px',
    },
  },
};

const ResetFilterContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 24px;
  width: 86px;
  cursor: pointer;

  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const ResetFilterText = Styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #2196F3;
  max-width: 58px;
  white-space: nowrap;
`;

const GhostDiv = Styled.div`
  flex-grow : 1;
  margin: auto;
`;

const FormControlLabelStyled = styled(FormControlLabel)({
  fontFamily: 'Noto Sans KR',
  fontSize: '14px',
  whiteSpace: 'nowrap',
});

const methodName: string[] = ['밀링', '선반'];
const ingridientName: string[] = ['알루미늄', '탄소강', '구리', '합금', '강철'];

const Filter = () => {
  const processMethod = useSelector<RootState, string[]>(
    (state) => state.processMethod
  );
  const ingridientList = useSelector<RootState, string[]>(
    (state) => state.ingridientList
  );
  const dispatch = useDispatch();

  const isAnythingInListChecked: Boolean = useMemo(() => {
    return processMethod.length > 0 || ingridientList.length > 0;
  }, [processMethod, ingridientList]);

  const handleMethodChange = (
    event: SelectChangeEvent<typeof processMethod>
  ): void => {
    const {
      target: { value },
    }: { target: any } = event;
    dispatch(
      setProcessMethod(typeof value === 'string' ? value.split(',') : value)
    );
  };

  const handleIngridientChange = (
    event: SelectChangeEvent<typeof ingridientList>
  ): void => {
    const {
      target: { value },
    }: { target: any } = event;
    dispatch(
      setIngridientList(typeof value === 'string' ? value.split(',') : value)
    );
  };

  return (
    <FilterConatiner>
      <FormControl>
        <Select
          id="process-method-checkbox"
          multiple
          displayEmpty
          value={processMethod}
          onChange={handleMethodChange}
          renderValue={(selected: string[]) =>
            selected.length ? `가공방식(${selected.length})` : '가공방식'
          }
          MenuProps={MenuPropsForMethod}
          sx={{
            fontFamily: '"Roboto"',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '20px',
            maxHeight: '32px',
            minWidth: '98px',
            maxWidth: '120px',
            color: processMethod.length ? 'white' : 'inherit',
            backgroundColor: processMethod.length
              ? 'rgba(21, 101, 192, 1)'
              : 'inherit',
          }}
        >
          {methodName.map((name) => (
            <MenuItemForMethod key={name} value={name}>
              <CheckboxStyled checked={processMethod.indexOf(name) > -1} />
              <ListItemTextStyled primary={name} />
            </MenuItemForMethod>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ marginLeft: '8px' }}>
        <Select
          id="process-method-checkbox"
          multiple
          displayEmpty
          value={ingridientList}
          onChange={handleIngridientChange}
          renderValue={(selected: string[]) =>
            selected.length ? `재료(${selected.length})` : '재료'
          }
          MenuProps={MenuPropsForIngridient}
          sx={{
            fontFamily: '"Roboto"',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '20px',
            maxHeight: '32px',
            minWidth: '76px',
            maxWidth: '96px',
            color: ingridientList.length ? 'white' : 'inherit',
            backgroundColor: ingridientList.length
              ? 'rgba(21, 101, 192, 1)'
              : 'inherit',
          }}
        >
          {ingridientName.map((name) => (
            <MenuItemForMethod key={name} value={name}>
              <CheckboxStyled checked={ingridientList.indexOf(name) > -1} />
              <ListItemTextStyled primary={name} />
            </MenuItemForMethod>
          ))}
        </Select>
      </FormControl>
      {isAnythingInListChecked && (
        <ResetFilterContainer
          onClick={() => {
            dispatch(setIngridientList([]));
            dispatch(setProcessMethod([]));
          }}
        >
          <RefreshIcon sx={{ fontSize: '16px', color: '#2196F3' }} />
          <ResetFilterText>필터링 리셋</ResetFilterText>
        </ResetFilterContainer>
      )}
      <GhostDiv />
      <FormGroup>
        <FormControlLabelStyled
          control={
            <Switch
              onChange={(e) => dispatch(setOnlyInConsult(e.target.checked))}
            />
          }
          label="상담 중인 요청만 보기"
        />
      </FormGroup>
    </FilterConatiner>
  );
};

export default Filter;
