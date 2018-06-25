import swal from 'sweetalert'

function success(title, message) {
    swal({
        title: title,
        text: message,
        icon: "success",
      })
}

function error(title, message) {
    swal({
        title: title,
        text: message,
        icon: "error",
      })
}

function confirm(title, message, callback, callbackFalse) {
    callback = callback || function () {};
    callbackFalse = callbackFalse || function () {};
    swal({
        title: title,
        text: message,
        icon: "warning",
        closeModal: true,
        buttons: {
            cancel: {
              text: "Hủy",
              visible: true,
              className: "btn btn-defalt",
              closeModal: true,
            },
            confirm: {
              text: "Đồng ý",
              visible: true,
              className: "btn btn-danger",
              closeModal: true
            }
          }
      }).then(callback, callbackFalse);
}


export const SweetAlert = {
    success, confirm, error
}