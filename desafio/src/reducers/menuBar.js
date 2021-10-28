export default function ParseMenu(state = 'potencia_kW' , action){
    switch (action.type) {
        case "PARSE":
            
            return state = action.payload;
    
        default:
            return state;
    }
}