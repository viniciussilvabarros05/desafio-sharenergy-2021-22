const user = {
    email: 'admin@email.com',
    password: 'admin'
}

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