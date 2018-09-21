import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    {/* Lógica para teclas de atario*/}

    const keyHandler = (e) =>{

        {/*verifica se a tecla Enter foi clicada juntamente com o Shift o não
            caso shift seja marcada, o metodo de pesquisa será acionado, caso seja somente o
            Enter, o metodo de adicionar é acionado*/}

        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input
                    id="descricao"
                    className="form-control"
                    placeholder="Adicione uma Tarefa"
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                    value={props.description}
                />
            </Grid>
            <Grid cols="12 3 2">
                {/* Botão de adicionar */}
                <IconButton
                    style="primary"
                    icon="plus"
                    onClick={props.handleAdd}
                />
                 {/* Botão de pesquisar */}
                <IconButton 
                    style="info"
                    icon="search"
                    onClick={props.handleSearch}
                />
                {/* Botão de limpar */}
                <IconButton 
                    style="default"
                    icon="close"
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}