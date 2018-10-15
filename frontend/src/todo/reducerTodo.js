const INITIAL_STATE = { 
        description: '',
        list: [
            {
                _id: 1,
                description: 'Pagar conta',
                done: true
            },
            {
                _id: 2,
                description: 'Brincar 2 de video game',
                done: false
            },
            {
                _id: 3,
                description: 'Jogar bola',
                done: false
            }
        ]
    }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_DESCRIPTION':
            return ({ ...state, description: action.payload })
        default: 
            return state;
    }
}

 