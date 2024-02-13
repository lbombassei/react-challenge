import { useSelector } from "react-redux";
import styled from "styled-components";

interface BreakingBadTextProps {}

const Text = styled.h1`
    color: white;
    font-size: 48px;
    font-family: monospace;
    position: relative;
    display: inline-block;
    z-index: 9999;
    margin-bottom: 0;
    margin-top: 8px;
`;

const Square = styled.span`
    position: absolute;
    display: inline-block;
    width: 2ch;
    height: 100%;
    background-color: #055036;
    z-index: -1;
`;


export default function BreakingBadText(params: BreakingBadTextProps) {

    const firstName  = useSelector((state: { firstName: string }) => state.firstName );
    const lastName = useSelector((state: { lastName: string }) => state.lastName);
    
    return (
        <>
            <Text>
                <Square />{firstName}
            </Text>
            <Text>
                <Square />{lastName}
            </Text>
        </>
    );
}
