import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { Preloader, usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  usePreloader(() => dispatch(getUser(id))); //서버 사이드 렌더링을 할 때 API호출하기

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return;
    //사용자가 존재하고,id 가 일치한다면
    dispatch(getUser(id));
  }, [dispatch, id, user]); // id가 바뀔 때 새로 요청
  //컨테이너 우효성 검사후 return null을 해야 하는 경우에
  //null대신 preloader반환
  if (!user) {
    return null;
  }
  return <User user={user} />;
};
export default UserContainer;
