import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Users from "../components/Users";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  // 컴포넌트가 마운트돠고 나서 호출
  useEffect(() => {
    if (users) return;
    dispatch(getUsers());
  }, [dispatch, users]);
  return (
    <>
      <Users users={users} />
      <Preloader resolve={() => dispatch(getUsers)} />
    </>
  );
};
export default UsersContainer;
