import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Container } from "./styles";

type Props = {
    list: {
        label: string;
        key: string;
    }[];
    onChange?: (value: string) => void;
};

function List({ list, onChange }: PropsWithChildren<Props>) {
    const [selected, setSelected] = useState<string | null>(null);
    const renderList = useMemo(
        () =>
            list.map((item) => (
                <li
                    key={item.key}
                    onClick={() => {
                        setSelected(item.key);
                    }}
                >
                    <h1>{item.label}</h1>
                </li>
            )),
        []
    );
    useEffect(() => {
        if (selected !== null) {
            onChange?.(selected);
        }
    }, [selected]);

    return <Container>{renderList}</Container>;
}

export default List;
