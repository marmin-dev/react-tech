import mongoose from 'mongoose';

const { schema } = mongoose;
const PostSchema = new schema({
  title: String,
  body: String,
  tags: [String], //문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, //현재 날짜를 기본값으로 지정
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
