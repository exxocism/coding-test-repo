import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';

import DomainIcon from '@mui/icons-material/Domain';
import { ReactComponent as HeaderIcon } from '../Assets/headerName.svg';

const HeaderBox = styled(Box)({
  height: 70,
  flexGrow: 1,
});

const ButtonForFactory = styled(Button)({
  fontFamily: '"Noto Sans KR"',
  fontStyle: 'Medium',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
});

const ButtonForLogout = styled(Button)({
  fontFamily: '"Noto Sans KR"',
  fontStyle: 'Regular',
  fontSize: '14px',
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
});

const Header = () => {
  return (
    <HeaderBox>
      <AppBar position="static">
        <Toolbar sx={{ padding: '0 40px !important', height: 70 }}>
          <Typography component="div" sx={{ display: 'Flex', flexGrow: 1 }}>
            <HeaderIcon />
          </Typography>
          <ButtonForFactory color="inherit">
            <DomainIcon sx={{ marginRight: '8px' }} />A 가공 업체
          </ButtonForFactory>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              alignSelf: 'center',
              height: '20px',
              margin: '0 32px',
              border: '1px solid white',
            }}
          />
          <ButtonForLogout color="inherit">로그아웃</ButtonForLogout>
        </Toolbar>
      </AppBar>
    </HeaderBox>
  );
};

export default Header;
