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
  background-color: #fff;
  border-radius: 9px;
  elevation: 3;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  position: absolute;
`;

export const TouchableCard = styled.TouchableOpacity`
  ${color}
  ${space}
  ${layout}
  border-radius: 9px;
  background-color: #fff;
  elevation: 3;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  ${props => (props.width ? "width:" + props.width + ";" : "")}
`;

export const View = styled.View`
    align-items: center;
`;
