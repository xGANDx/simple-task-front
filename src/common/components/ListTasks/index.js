import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons'

const customPropsStyle = ({
    check = false
}) => {
    let styles = {
        background: "#A5E4DC",
        padding: "3",
        borderRadius: "base",
        cursor: "pointer",
        color: "#2C2F6F",
        fontWeight: 'bold'
    }

    if (check) {
        styles.textDecoration = "line-through";
    }

    return styles
}

function ListTasks({
    tasks = [
        {
            id: "1",
            name: "Exemple :D",
            check: false,
            removed: false
        },
        {
            id: "2",
            name: "Mais um exemple :D",
            check: true,
            removed: false
        }
    ],
    onCheck = (task = {
        id: "1",
        name: "Exemple :D",
        check: false,
        removed: false
    }) => {

    },
    onRemove = (task = {
        id: "1",
        name: "Exemple :D",
        check: false,
        removed: false
    }) => {

    }
}) {

    const filteredTasks = tasks.filter(task => !task.removed);

    return (
        <List
            spacing={2}
            width="100%"
        >
            {filteredTasks.length == 0 && <img src="/nothing.gif" />}
            {
                filteredTasks.map((task, index) => {
                    return (
                        <ListItem
                            borderWidth="1px"
                            width="100%"
                            key={index}
                            onClick={() => onCheck(task)}
                            {...customPropsStyle({
                                check: task.check
                            })}
                        >
                            {task.check && <ListIcon as={CheckIcon} color='green.500' />}
                            {task.name}
                            <ListIcon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRemove(task);
                                }}
                                as={DeleteIcon}
                                color='red.500'
                                style={{
                                    float: "right",
                                    top: "4px",
                                    position: "relative",
                                }} />
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default ListTasks;