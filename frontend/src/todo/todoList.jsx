import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}> 
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.createdAt}</td>
                <td>
                    {/*Botão de concluir a atividade*/}
                    <IconButton 
                        hide={todo.done}
                        style='success'
                        icon='check'
                        onClick={()=>props.handleMarkAsDone(todo)}
                    />
                    {/*Botão de voltar a tarefa para ativa*/}
                    <IconButton 
                        hide={!todo.done}
                        style='warning'
                        icon='undo'
                        onClick={()=>props.handleMarkAsPeding(todo)}
                    />
                    {/*Botão de excluir a tarefa da tabela*/}
                    <IconButton 
                        hide={!todo.done}
                        style='danger'
                        icon='trash-o'
                        onClick={()=>props.handleRemove(todo)}
                    />
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableCreatedAt">Criado em</th>
                    <th className="tableAction">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)
