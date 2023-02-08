import { Button, styled, } from "@mui/material"
import { ButtonGroup } from "@mui/material";
const Component = styled(ButtonGroup)`
margin-top:50px;
`;

const StyledButton = styled(Button)`
    border-radius:50%;
`


const GroupedButton = () => {
    return (

        <Component style={{ fontWeight: 100 }}>
            < StyledButton>-</ StyledButton>
            <Button disabled>1</Button>
            < StyledButton>+</ StyledButton>
        </Component>

    )
}

export default GroupedButton;