//simulando uma conta autorizada
const user = {
    email: 'admin@email.com',
    password: 'admin'
}

/*O Estado inicia sem propriedades, mas quando o payload bater com a conta simulada, o estado recebe
as propriedades do objeto user */
export default function User(state = {}, action) {

    switch (action.type) {
        case 'LOGIN':
            if (action.payload.email == user.email && action.payload.password == user.password) {

                return state = {
                    email: user.email,
                    password: user.password
                }
            }

        case 'LOGOUT':
            return state = {}
        default:
            return state;
    }
}