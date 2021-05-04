import React from "react";
import { DivLogo } from '../../styles/index';
import {ILogo} from '../../styles/index';

const Logo = ({withBg} : ILogo) => {
  return (
    <DivLogo withBg={withBg}>
      <img width="150" height="150" src="/images/logo.png" alt="Logo" />
    </DivLogo>
  );
};

export default Logo;
