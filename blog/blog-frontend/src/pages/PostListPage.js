import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import { Helmet } from 'react-helmet-async';

const PostListPage = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};
export default PostListPage;
