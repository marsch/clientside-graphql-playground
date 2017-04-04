const resolvers = (models) => ({
  Query: {
    getUserById(root, { id }) {
      return models.User.findById(id).then((response) => response);
    },

    getUserByEmail(root, { email }) {
      return models.User.findOne({ email }).then((response) => response);
    },
    getUser(root) {
    return models.User.find({}).then((response) => {
      console.log('response', response)
      return response
    });
    }
  },
  Mutation: {
    createUser(root, args) {
      const user = new models.User(args);
      return user.save().then((response) => response);
    },
  },
});

module.exports = resolvers;