import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import PostActionsButtons from '../../components/post/PostActionsButtons';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';
import { removePost } from '../../lib/api/posts';
import { setOriginalPost } from '../../modules/write';

const PostViewerContainer = ({ match }) => {
  const location = useLocation();
  console.log(location);
  const postId = location.pathname.split('/', -1)[2];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    })
  );
  useEffect(() => {
    dispatch(readPost(postId));
    //언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);
  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate('/write');
  };
  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  const ownPost = (user && user._id) === (post && post.user._id);
  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && <PostActionsButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};
export default PostViewerContainer;
