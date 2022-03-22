import { Box, useToast } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import InputTasks from "../../common/components/InputTasks";
import ListTasks from "../../common/components/ListTasks";
import allTask from "../../services/task/task.all";
import createTask from "../../services/task/task.create";
import removeTask from "../../services/task/task.remove";
import updateTask from "../../services/task/task.update";
import { Container, Content } from "./styles";

function Tasks() {
    const toast = useToast();
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([
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
    ]);

    useEffect(() => {
        allTask().then(r => {
            setTasks(r.data);
            setTimeout(() => {
                setLoading(false);
            }, 4500);
        })
    }, [])

    const onCreate = (name = "Exemplo") => {
        createTask({
            name,
            check: false,
            removed: false
        }).then(r => {
            toast({
                title: 'Task craida.',
                description: "",
                status: 'success',
                duration: 1000,
                isClosable: false,
            })
            setTasks([...tasks, r.data]);
        }).catch(e => {
            toast({
                title: 'Erro ao criar task.',
                description: "",
                status: 'error',
                duration: 1000,
                isClosable: false,
            })
        })
    }

    const onCheck = (task) => {
        updateTask({
            id: task._id,
            name: task.name,
            check: !task.check
        }).then(r => {
            toast({
                title: 'Task alterada.',
                description: "",
                status: 'success',
                duration: 1000,
                isClosable: false,
            })
            setTasks(tasks.map(t => {
                if (t._id == r.data._id) {
                    return r.data;
                }
                return t;
            }));
        }).catch(e => {
            toast({
                title: 'Erro ao marcar task.',
                description: "",
                status: 'error',
                duration: 1000,
                isClosable: false,
            })
        })
    }

    const onRemove = (task) => {
        removeTask({
            id: task._id,
        }).then(r => {
            toast({
                title: 'Task removida.',
                description: "",
                status: 'success',
                duration: 1000,
                isClosable: false,
            })
            setTasks(tasks.map(t => {
                if (t._id == r.data._id) {
                    return r.data;
                }
                return t;
            }));
        }).catch(e => {
            toast({
                title: 'Erro ao remover task.',
                description: "",
                status: 'error',
                duration: 1000,
                isClosable: false,
            })
        })
    }

    if (loading) {
        return (
            <Container>
                <img src="/loading.gif" style={{borderRadius: 200}} />
            </Container>
        )
    }

    return (
        <Container>
            {/* rever content */}
            <Content>
                <Box
                    d="flex"
                    flexDirection="column"
                    alignItems="center"
                    background="white"
                    borderRadius="2xl"
                    minHeight="80vh"
                    padding="10"
                    borderWidth="1px"
                >
                    <Heading color="#2C2F6F">Tasks</Heading>
                    <br />
                    <InputTasks
                        onEnter={(name) => {
                            onCreate(name);
                        }}
                    />
                    <br />
                    <ListTasks
                        onCheck={(task) => {
                            onCheck(task);
                        }}
                        onRemove={(task) => {
                            onRemove(task);
                        }}
                        tasks={tasks}
                    />
                </Box>
                <br />
                <br />
            </Content>
        </Container>
    )
}

export default Tasks;