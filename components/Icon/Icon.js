import React from "react";
import Svg, { Defs, Path, Rect, ClipPath, Circle, G } from "react-native-svg";
import FontIcon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components";
import { color, space, layout, size, typography } from "styled-system";

const View = styled.View`
    ${space}
    ${layout}
    opacity: ${props => (props.opacity ? props.opacity : "1")};
`;

export const Icon = props => {
    const { id, size, fill, opacity } = props;

    const getIcon = id => {
        switch (id) {
            case "dumbbell":
                return (
                    <Svg
                        width={size}
                        height={(size * 10.2) / 22.9}
                        viewBox='0 0 22.9 10.2'>
                        <G fill={fill}>
                            <Rect
                                width={3.377}
                                height={10.438}
                                rx={1}
                                transform='translate(16.885)'
                            />
                            <Rect
                                width={3.377}
                                height={10.438}
                                rx={1}
                                transform='translate(2.701)'
                            />
                            <Path d='M20.938 1.539a.348.348 0 01.583-.256l1.331 1.224a.347.347 0 01.112.256v5.636a.346.346 0 01-.141.28l-1.331.979a.348.348 0 01-.554-.28zM2.026 9.159a.348.348 0 01-.489.319l-1.33-.587A.348.348 0 010 8.572v-6.7a.347.347 0 01.207-.318l1.33-.587a.348.348 0 01.489.318z' />
                            <Rect
                                width={9.456}
                                height={1.491}
                                rx={0.5}
                                transform='translate(6.754 4.474)'
                            />
                        </G>
                    </Svg>
                );
            case "bar-chart":
                return (
                    <Svg
                        width={size}
                        height={(size * 21.5) / 26.5}
                        viewBox='0 0 26.5 21.5'>
                        <G transform='translate(-27 -611.838)' fill={fill}>
                            <Rect
                                width={5.077}
                                height={12.2}
                                rx={2.538}
                                transform='translate(27 620.961)'
                            />
                            <Rect
                                width={5.077}
                                height={16.246}
                                rx={2.538}
                                transform='translate(34.108 616.915)'
                            />
                            <Rect
                                width={5.077}
                                height={19.292}
                                rx={2.538}
                                transform='translate(41.215 613.869)'
                            />
                            <Rect
                                width={5.077}
                                height={21.323}
                                rx={2.538}
                                transform='translate(48.323 611.838)'
                            />
                        </G>
                    </Svg>
                );
            case "social":
                return (
                    <Svg width={30} height={30}>
                        <G fill={fill}>
                            <G
                                transform='translate(-190.854 -477.116)'
                                opacity={0.7}>
                                <Path
                                    d='M205.639 490.135a1.894 1.894 0 00-1.987-.087 13.084 13.084 0 00-5.769 8.4 1.421 1.421 0 001.479 1.669h18.416a1.421 1.421 0 001.479-1.669 13.085 13.085 0 00-5.768-8.4 1.9 1.9 0 00-1.988.087 5.8 5.8 0 01-5.861 0z'
                                    fillRule='evenodd'
                                />
                                <Circle
                                    cx={5.056}
                                    cy={5.056}
                                    r={5.056}
                                    transform='translate(203.308 478.205)'
                                />
                            </G>
                            <G transform='translate(-197.854 -478.205)'>
                                <Path
                                    d='M207.092 492.362a2.248 2.248 0 00-2.358-.1 15.526 15.526 0 00-6.846 9.965 1.687 1.687 0 001.755 1.981H221.5a1.686 1.686 0 001.755-1.981 15.527 15.527 0 00-6.845-9.965 2.25 2.25 0 00-2.359.1 6.877 6.877 0 01-6.955 0z'
                                    fillRule='evenodd'
                                />
                                <Circle
                                    cx={6}
                                    cy={6}
                                    r={6}
                                    transform='translate(204.326 478.205)'
                                />
                            </G>
                        </G>
                    </Svg>
                );
            default:
                return <FontIcon name={id} size={size} color={fill} />;
        }
    };

    return <View opacity={opacity}>{getIcon(id)}</View>;
};
