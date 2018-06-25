function show (message) {
    $('#loading').css('display', 'block')
}

function hide(message) {
    $('#loading').css('display', 'none')
}

export const Loading = {
    show, hide
}