import { PropsWithChildren, useMemo } from "react";
import { Container } from "./styles";

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
> & { level: "1" | "2" | "3" | "4" | "5" };

const Head = ({ level, children, ...props }: PropsWithChildren<Props>) => {
    const Heading = useMemo(() => `h${level}`, []);

    return (
        <Container>
            <Heading {...props}>{children}</Heading>
        </Container>
    );
};

export default Head;
