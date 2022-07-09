import { PropsWithChildren, useMemo } from "react";
import icons from "./svg";

export type Icon = keyof typeof icons;

export type IconSvgProps = { color?: string; size?: number };

type Props = IconSvgProps & { icon: Icon };

const Icons = ({
    icon,
    color = "#000",
    size = 24,
}: PropsWithChildren<Props>) => {
    const Icon = useMemo(() => icons[icon], [icon]);

    return <Icon color={color} size={size} />;
};

export default Icons;
