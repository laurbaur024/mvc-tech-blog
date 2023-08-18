


const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


//user has many post, post belong to one user
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//post has many comment, comment belong to one post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

module.exports = 
{
  User,
  Post,
  Comment
};