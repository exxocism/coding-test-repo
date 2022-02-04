import { useState } from 'react';
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

import DomainIcon from '@mui/icons-material/Domain';
import { ReactComponent as HeaderIcon } from '../Assets/headerName.svg';
import { ReactComponent as PopupTitleIcon } from '../Assets/CAPA_partners_colorlogo 1.svg';

const MenuModalConatiner = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const MenuModal = Styled.div`
  width: 77%;
  height: 100%;
  background-color: white;
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const MenuModalBody = Styled.div`
  padding: 32px;
`;

const FactoryWrapper = Styled.div`
  display: flex;
  align-items: center;
`;

const FactoryName = Styled.div`
  margin-left: 8px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;

`;

const Logout = Styled.div`
  margin-top: 24px;
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {isMenuOpen && (
        <MenuModalConatiner onClick={() => setIsMenuOpen(false)}>
          <MenuModal
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Box sx={{ height: 56, flexGrow: 1 }}>
              <AppBar color="transparent" position="static">
                <Toolbar sx={{ padding: '0 20px !important', height: 56 }}>
                  <PopupTitleIcon />
                </Toolbar>
              </AppBar>
            </Box>
            <MenuModalBody>
              <FactoryWrapper>
                <DomainIcon />
                <FactoryName>파트너정밀가공</FactoryName>
              </FactoryWrapper>
              <Logout>로그아웃</Logout>
            </MenuModalBody>
          </MenuModal>
        </MenuModalConatiner>
      )}
      <Box sx={{ height: 56, flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ padding: '0 23px !important', height: 56 }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="div" sx={{ display: 'Flex', flexGrow: 1 }}>
              <HeaderIcon height={12} width={92} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
