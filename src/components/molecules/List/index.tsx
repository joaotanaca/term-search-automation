import Icons, { Icon } from "@atoms/Icons";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Container } from "./styles";

type Props = {
    icon?: Icon;
    list: {
        label: string;
        key: string;
        icon?: Icon;
    }[];
    onChange?: (value: string) => void;
};

function List({ list, onChange, icon = "loading" }: PropsWithChildren<Props>) {
    const [selected, setSelected] = useState<string | null>(null);
    const renderList = useMemo(
        () =>
            list.map((item) => (
                <li
                    className={item.key === selected ? "selected" : "none"}
                    key={item.key}
                    onClick={() => {
                        setSelected(item.key);
                    }}
                >
                    <Icons
                        color={"#96A6C2"}
                        size={22}
                        icon={item?.icon ?? icon}
                    />
                    <p>{item.label}</p>
                </li>
            )),
        [list, selected]
    );
    useEffect(() => {
        if (selected !== null) {
            onChange?.(selected);
        }
    }, [selected]);

    return (
        <Container>
            {list.length ? (
                renderList
            ) : (
                <li>
                    <p>Nenhum termo encontrado</p>
                </li>
            )}
        </Container>
    );
}

export default List;
