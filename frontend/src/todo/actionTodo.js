export function changeDescription(e){
    return {
        type: 'CHANGE_DESCRIPTION',
        payload: e.event.value
    }
}