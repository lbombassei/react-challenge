import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { updateText } from "../actions/text-actions"

interface NameInputsProps{}

const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: #ACACAC;
    margin-bottom: 5px; /* Adiciona margem inferior para separar os rótulos dos inputs */
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    margin-top: 20px;
`

const Input = styled.input`
    display: block;
    width: 110px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const Button = styled.button`
    display: flex;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    background-color: #055036;
    color: white;
    margin-top: 8px;
    width: 280px;
    justify-content: center;
    cursor: pointer;
    position: relative; 
    z-index: 1; 
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export default function NameInputs(params: NameInputsProps) {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClick = () => {
        dispatch(updateText(firstName, lastName));
    };

    return (
        <PageWrapper>
            <Container>
                <InputContainer>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Breaking"
                    />
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Bad"
                    />
                </InputContainer>
            </Container>
            <Button type="button" onClick={handleClick}>Breakify</Button>
        </PageWrapper>
    );
}