const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context) => {
      const userinfo = await User.findOne({ _id: context.user._id });
      return userinfo;
    },
  },
};
