const asynHandler = (fn) => (req, res, next) => {
    return Promise.resolve(fn(res, res, next)).catch(next)
}
export default asynHandler