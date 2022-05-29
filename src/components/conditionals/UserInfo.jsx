import { If, Else } from './if';

const UserInfo = (props) => {
  const { user } = props ?? {};
  return (
    <div>
      <If test={user && user.name}>
        <div>You are wellcome, {user.name}!</div>
        <Else>You are not logged in!</Else>
      </If>
    </div>
  );
};

export default UserInfo;
