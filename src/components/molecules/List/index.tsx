import { Icon } from "@atoms/Icons";
import ListItem from "@atoms/ListItem";
import { Li } from "@atoms/ListItem/styles";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Container } from "./styles";

type Props = {
    icon?: Icon;
    list: {
        label: string;
        key: string;
        icon?: Icon;
    }[];
    arrowRight?: boolean;
    messageError?: string;
    onChange?: (value: string) => void;
};

function List({
    list,
    onChange,
    icon = "loading",
    arrowRight,
    messageError = "Nada encontrado...",
}: PropsWithChildren<Props>) {
    const [selected, setSelected] = useState<string | null>(null);
    const renderList = useMemo(
        () =>
            list.map((item, index) => {
                const active = selected ? item.key === selected : index === 0;
                return (
                    <ListItem
                        key={item.key}
                        active={active}
                        arrowRight={!!arrowRight}
                        icon={item?.icon ?? icon}
                        label={item.label}
                        onClick={() => setSelected(item.key)}
                    />
                );
            }),
        [list, selected]
    );
    useEffect(() => {
        if (selected !== null) {
            onChange?.(selected);
        }
    }, [selected]);

    return (
        <Container aria-label="list-component">
            {list.length ? (
                renderList
            ) : (
                <Li>
                    <p>{messageError}</p>
                </Li>
            )}
        </Container>
    );
}

export default List;
