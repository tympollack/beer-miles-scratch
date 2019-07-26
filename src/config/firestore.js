import firebase from './firebase'

const fs = firebase.firestore()

const collections = {
    'users': fs.collection('users')
}

const getObjectById = async (collection, id) => {
    const errMsg = 'Unable to get firestore object: '
    if (!collection) throw new Error(errMsg + 'no collection provided')
    if (!id) throw new Error(errMsg + 'no id provided')

    try {
        const doc = await collection.doc(id).get()
        const obj = doc.data()
        obj.id = id
        return obj
    } catch (e) {
        console.error('error getting object by id', collection, id, e)
        throw e
    }
}

const getUserById = async (userId) => {
    try {
        return await getObjectById(collections.users, userId)
    } catch (e) {
        console.error('error getting user', userId, e)
        throw e
    }
}

const updateUser = async (userId) => {

}

export {
    getUserById
}