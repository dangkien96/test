function success (message) {
    $.toast({
        heading: 'Information',
        text: message,
        position: 'top-right',
        icon: 'success'
    })
}

function error(message) {
    $.toast({
        heading: 'Error',
        text: message,
        position: 'top-right',
        icon: 'error'
    })
}

function warning(message) {
    $.toast({
        heading: 'Warning',
        text: message,
        position: 'top-right',
        icon: 'warning'
    })
}

function info(message) {
    $.toast({
        heading: 'Information',
        text: message,
        position: 'top-right',
        icon: 'info'
    })
}


export const Notifications = {
    success, warning, error, info
}