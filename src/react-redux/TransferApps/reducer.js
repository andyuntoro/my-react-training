const initValue = {
    saldo: 0
}

const TrfReducer = (state = initValue, action) => {
    switch(action.type) {
        case "DEPOSIT" :
            return {
                saldo: state.saldo + action.value
            }
        case "WITHDRAW" :
            return {
                saldo: state.saldo - action.value
            }
        default :
            return state
    }
}

export default TrfReducer