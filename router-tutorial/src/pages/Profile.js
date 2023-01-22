import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김길환",
    description: "아직 추운 개발자",
  },
  gildong: {
    name: "김길동",
    description: "이건 내가 원했던 모습이 아니야",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  );
};
export default Profile;
