import React from "react";
import Svg, { Defs, Path, Rect, ClipPath, Circle, G } from "react-native-svg";

export const Icon = props => {
    const { id, size, fill } = props;

    switch (id) {
        case "dumbbell-with-circle":
            return (
                <Svg
                    preserveAspectRatio='xMidYMid slice'
                    width={size + "em"}
                    height={size + "em"}>
                    <Circle
                        cx={19.5}
                        cy={19.5}
                        r={19.5}
                        fill='#00171f'
                        opacity={0.15}
                    />
                    <G transform='translate(8 14)' fill='#00171f'>
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
        case "dumbbell":
            return (
                <Svg
                    preserveAspectRatio='xMidYMid slice'
                    width={size + "em"}
                    height={size + "em"}>
                    <G transform='translate(-246.192 -484.469)' fill={fill}>
                        <Rect
                            width={4.853}
                            height={15}
                            rx={1}
                            transform='translate(270.456 484.469)'
                        />
                        <Rect
                            width={4.853}
                            height={15}
                            rx={1}
                            transform='translate(250.074 484.469)'
                        />
                        <Path d='M276.28 486.68a.5.5 0 01.838-.368l1.912 1.759a.5.5 0 01.161.368v8.1a.5.5 0 01-.2.4l-1.912 1.407a.5.5 0 01-.8-.4zm-27.18 10.95a.5.5 0 01-.7.458l-1.911-.844a.5.5 0 01-.3-.458v-9.634a.5.5 0 01.3-.457l1.911-.844a.5.5 0 01.7.457z' />
                        <Rect
                            width={13.588}
                            height={2.143}
                            rx={0.5}
                            transform='translate(255.897 490.898)'
                        />
                    </G>
                </Svg>
            );
        case "bar-chart":
            return (
                <Svg
                    preserveAspectRatio='xMidYMid slice'
                    width={size + "em"}
                    height={size + "em"}>
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
                <Svg
                    preserveAspectRatio='xMidYMid slice'
                    width={size + "em"}
                    height={size + "em"}>
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
        case "hamburguer":
            return (
                <Svg
                    preserveAspectRatio='xMidYMid slice'
                    width={size + "em"}
                    height={size + "em"}>
                    <Path
                        fill={fill}
                        d='M0 46.06h344.339v29.52H0zm0 110.446h344.339v29.52H0zm0 112.242h344.339v29.531H0z'
                    />
                </Svg>
            );
        case "gear":
            return (
                <Svg
                    preserveAspectRatio='xMidYMid slice'
                    viewBox='0 0 54 54'
                    width={size + "em"}
                    height={size + "em"}>
                    <Path
                        fill={fill}
                        d='M51.22 21h-5.052c-.812 0-1.481-.447-1.792-1.197s-.153-1.54.42-2.114l3.572-3.571a2.763 2.763 0 00.814-1.966c0-.743-.289-1.441-.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933 0l-3.571 3.571a1.877 1.877 0 01-1.352.574c-.5 0-.997-.196-1.364-.539A1.873 1.873 0 0133 7.832V2.78A2.783 2.783 0 0030.22 0h-6.44A2.783 2.783 0 0021 2.78v5.052c0 1.218-.997 1.945-1.961 1.945-.354 0-.876-.1-1.351-.574l-3.571-3.571c-1.052-1.052-2.883-1.05-3.933 0l-4.553 4.553a2.764 2.764 0 00-.814 1.967c0 .742.289 1.44.814 1.966l3.572 3.571c.573.574.73 1.364.42 2.114S8.644 21 7.832 21H2.78A2.783 2.783 0 000 23.78v6.438A2.784 2.784 0 002.78 33h5.052c.812 0 1.481.447 1.792 1.197s.153 1.54-.42 2.114l-3.572 3.571a2.763 2.763 0 00-.814 1.966c0 .743.289 1.441.814 1.967l4.553 4.553c1.051 1.051 2.881 1.053 3.933 0l3.571-3.571a1.877 1.877 0 011.352-.574c.963 0 1.96.728 1.96 1.945v5.051A2.782 2.782 0 0023.78 54h6.439a2.784 2.784 0 002.78-2.781v-5.051c0-1.218.997-1.945 1.96-1.945.354 0 .877.1 1.352.574l3.571 3.571c1.052 1.052 2.883 1.05 3.933 0l4.553-4.553a2.764 2.764 0 00.814-1.967c0-.742-.289-1.44-.814-1.966l-3.572-3.571c-.573-.574-.73-1.364-.42-2.114S45.356 33 46.168 33h5.052A2.784 2.784 0 0054 30.219V23.78A2.783 2.783 0 0051.22 21zM34 27c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.141-7 7-7 7 3.141 7 7z'
                    />
                </Svg>
            );
    }
};
