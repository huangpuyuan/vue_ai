const blog = require('./blog')
const user = require('./user')
const comment = require('./comment')

const mockList = [
    ...blog,
    ...user,
    ...comment,
]

module.exports = mockList
