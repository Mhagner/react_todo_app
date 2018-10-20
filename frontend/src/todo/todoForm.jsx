import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, addTask, clear } from './actionTodo'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        const { search, addTask, description, clear } = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : addTask(description)
        }else if(e.key === 'Escape'){
            clear()
        }
    }

    render(){
        const { search, addTask, description, changeDescription, clear } = this.props
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input
                        id="descricao"
                        className="form-control"
                        placeholder="Adicione uma Tarefa"
                        onKeyUp={this.keyHandler}
                        onChange={changeDescription}
                        value={description}
                    />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={() => addTask(description)}
                    />
                    <IconButton 
                        style="info"
                        icon="search"
                        onClick={search}
                    />
                    <IconButton 
                        style="default"
                        icon="close"
                        onClick={clear}
                    />
                </Grid>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, addTask, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)