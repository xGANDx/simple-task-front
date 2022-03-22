import { AddIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

function InputTasks({
    onEnter = (name = "Exemplo") => {

    }
}) {

    return (

        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<AddIcon color='green.400' />}
            />
            <Input
                placeholder="Crie sua task..."
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        onEnter(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
        </InputGroup>
    )
}

export default InputTasks;