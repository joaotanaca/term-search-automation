import React from "react";
import Icons, { Icon } from "@atoms/Icons";
import { Li } from "./styles";

type Props = {
    active?: boolean;
    icon: Icon;
    label: string;
    onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    arrowRight: boolean;
};

const ListItem: React.FC<Props> = ({
    active,
    icon,
    label,
    arrowRight,
    onClick,
}) => (
    <Li
        aria-label="list-item-component"
        className={active ? "selected" : "none"}
        onClick={onClick}
    >
        <Icons size={22} icon={icon} />
        <p>{label} </p>
        {arrowRight && (
            <Icons
                color={"rgba(150, 166, 194, 0.5)"}
                size={18}
                icon="arrowRight"
            />
        )}
    </Li>
);

export default ListItem;
