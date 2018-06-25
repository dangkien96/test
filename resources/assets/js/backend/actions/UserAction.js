const LIST_ACTION_COMPELETE = "LIST_ACTION_COMPELETE"
const LIST_ACTION = "LIST_ACTION"

const INSERT_ACTION_COMPELETE = "INSERT_ACTION_COMPELETE"
const INSERT_ACTION = "INSERT_ACTION"

const INFO_ACTION_COMPELETE = "INFO_ACTION_COMPELETE"
const INFO_ACTION = "INFO_ACTION"

const UPDATE_ACTION_COMPELETE = "UPDATE_ACTION_COMPELETE"
const UPDATE_ACTION = "UPDATE_ACTION"

const DELETE_ACTION_COMPELETE = "DELETE_ACTION_COMPELETE"
const DELETE_ACTION = "DELETE_ACTION"

const getList = (params) => {
    return {
        type: LIST_ACTION,
        params: params
    }
}

const insertUser = (params) => {
    return {
        type: INSERT_ACTION,
        params: params
    }
}

const getInfo = (id) => {
    return {
        type: INFO_ACTION,
        id: id
    }
}

const updateUser = (params, id) => {
    return {
        type: UPDATE_ACTION,
        params: params,
        id: id
    }
}

const deleteUser = (params) => {
    return {
        type: DELETE_ACTION,
        params: params
    }
}

const getListCompelete = (params) => {
    return {
        type: LIST_ACTION_COMPELETE,
        params: params
    }
}

const insertUserCompelete = (params) => {
    return {
        type: INSERT_ACTION_COMPELETE,
        params: params
    }
}

const getInfoCompelete = (params, id) => {
    return {
        type: INFO_ACTION_COMPELETE,
        params: params,
        id: id
    }
}

const updateUserCompelete = (params, id) => {
    return {
        type: UPDATE_ACTION_COMPELETE,
        params: params,
        id: id
    }
}

const deleteUserCompelete = (params) => {
    return {
        type: DELETE_ACTION_COMPELETE,
        params: params
    }
}


export const TypeUserAction = {
    LIST_ACTION_COMPELETE, LIST_ACTION,
    INSERT_ACTION_COMPELETE,  INSERT_ACTION, INFO_ACTION_COMPELETE, INFO_ACTION,
    UPDATE_ACTION_COMPELETE, UPDATE_ACTION, DELETE_ACTION_COMPELETE, DELETE_ACTION,
}

export const UserActions = {
    deleteUserCompelete, updateUserCompelete,
    getInfoCompelete, getList,
    insertUser, getInfo,
    updateUser, deleteUser,
    getListCompelete, insertUserCompelete
}