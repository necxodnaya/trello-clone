import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AddTask } from './AddTask'

export const ListTasks = () => {
    const { tasks } = useSelector((state) => state.tasks)
    return (
        <MainCard>
            {
                tasks.map((element) => (
                    <MainBlock key={element.id}>
                        <AddTask id={element.id} {...element} />
                    </MainBlock >
                ))
            }
        </MainCard>
    )
}

const MainCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 10px;
    margin: 40px;
    align-items: start;
`
const MainBlock = styled.div`
    display: flex;
    align-items: center;
    
`