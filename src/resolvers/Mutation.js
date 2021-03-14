const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils');

////// Function to signup ////////
async function signup(parent, args, context, info) {
  // check if email is already used
  const foundUser = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (foundUser) throw new Error('Email is already in use');

  // crypt the password
  const password = await bcrypt.hash(args.password, 10);
  // create the user
  const user = await context.prisma.user.create({
    data: { ...args, password },
  });

  // generate the token
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

/////// Function to login /////////
async function login(parent, args, context, info) {
  // Find the user with email from args
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) {
    throw new Error('No such user found');
  }

  // check if password is valid
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  // create token for connection
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

module.exports = {
  signup,
  login,
};
