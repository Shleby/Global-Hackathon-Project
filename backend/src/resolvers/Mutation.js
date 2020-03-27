// Transforms "This Is a Name" to "this-is-a-name" for more friendly urls
function serializeName(name) {
    return name
        .trim()
        .toLowerCase()
        .replace(/ /g, "-");
}

const Mutation = {
    // Creates a new user
    async createUser(parent, args, ctx, info) {
        const user = await ctx.db.mutation.createUser(
            {
                data: {
                    ...args,
                },
            },
            info
        );
        return user;
    },
};

module.exports = Mutation;
