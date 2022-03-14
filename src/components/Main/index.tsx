import React from "react";
import * as S from "./styles";

export interface MainProps {
  title: string;
}

const Main: React.FC<MainProps> = ({ title }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Main;
