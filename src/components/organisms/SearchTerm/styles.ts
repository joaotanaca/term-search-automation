import styled from "styled-components";

export const Container = styled.div`
    .list-container {
        width: 100%;
        display: inline-flex;
        gap: 1em;
        ul {
            min-height: calc(45px * 10);
            li {
                p {
                    min-height: 45px;
                }
            }
        }
        
        &-left {
            flex: 3;
            ul {
                width: 100%;
            }
        }
        &-right {
            flex: 8;
        }
    }
`;
