import styled from "styled-components";
import { color, space, layout, typography, flexbox } from "styled-system";
import theme from "./theme";

export const Row = styled.View`
  ${space}
  ${flexbox}
  flexDirection: row;
`;

Row.defaultProps = {
  alignItems: "center",
  justifyContent: "flex-start"
};

export const Text = styled.Text`
  ${typography}
  ${color}
  ${flexbox}
  ${space}
`;

Text.defaultProps = {
  color: "text",
  fontSize: 3
};

export const Card = styled.View`
  ${color}
  ${space}
  ${layout}
  border-radius: 9px;
  elevation: 3;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  position: absolute;
`;

const H1 = styled.Text`
  font-size: ${theme.fontSizes[8]};
`;

const H2 = styled.Text`
  font-size: ${theme.fontSizes[7]};
`;

const H3 = styled.Text`
  font-size: ${theme.fontSizes[6]};
`;

const H4 = styled.Text`
  font-size: ${theme.fontSizes[5]};
`;

const H5 = styled.Text`
  font-size: ${theme.fontSizes[4]};
`;

const H6 = styled.Text`
  font-size: ${theme.fontSizes[3]};
`;

const H7 = styled.Text`
  font-size: ${theme.fontSizes[2]};
`;

const H8 = styled.Text`
  font-size: ${theme.fontSizes[1]};
`;

const H9 = styled.Text`
  font-size: ${theme.fontSizes[0]};
`;

export const View = styled.View`
  align-items: center;
`;
