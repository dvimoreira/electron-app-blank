
export default {
    get: (avatar) => {
        if (avatar) {
            return `${process.env.API_HOST}/uploads/profile/${avatar}`
        }
        return ''
    }
}
