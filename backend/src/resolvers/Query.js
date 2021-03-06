const { forwardTo } = require("prisma-binding");

const Query = {
    users: forwardTo("db"),
    user: forwardTo("db"),
    usersConnection: forwardTo("db"),
};

module.exports = Query;
