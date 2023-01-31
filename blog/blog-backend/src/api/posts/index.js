import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkedLoggedIn from '../../lib/checkedLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkedLoggedIn, postsCtrl.write);

posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.delete(
  '/:id',
  checkedLoggedIn,
  postsCtrl.getPostById,
  postsCtrl.checkOwnPost,
  postsCtrl.remove,
);
posts.patch(
  '/:id',
  checkedLoggedIn,
  postsCtrl.getPostById,
  postsCtrl.checkOwnPost,
  postsCtrl.update,
);

export default posts;
