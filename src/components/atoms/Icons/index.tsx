import React, { PropsWithChildren, useMemo } from "react";
import icons from "./svg";

export type Icon = keyof typeof icons;

type Props = { icon: Icon };

const Icons = ({ icon }: PropsWithChildren<Props>) => {
    const Icon = useMemo(() => icons[icon], []);
    return <Icon />;
};

export default Icons;
