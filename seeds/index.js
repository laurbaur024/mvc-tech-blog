const sequelize = require('../config/connection');
const { User, Post, Comment } = require('./models/index');

const userSeeds = require('./userData.json');
const postSeeds = require('./postData.json');
const commentSeeds = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n')
  await User.bulkCreate(userSeeds)
  await Post.bulkCreate(postSeeds)
  await Comment.bulkCreate(commentSeeds)

  process.exit(0);
};

seedDatabase();