

export function menuActived() {

    return ({ type: 'ACTIVED' })



}
export function menuDisable() {

    return ({ type: 'DISABLE' })



}

export function parsedMenuBar(i) {
    let types = i
    return ({ type: 'PARSE', payload: types })
}

export function deleteItem(i) {
    let request = i
    return ({ type: "DELETE", payload: request })
}