import If from './if';

const UserInfo = (props) => {
  const { user } = props ?? {};
  return (
    <div>
      <If test={user && user.name}>You are wellcome, {user.name}!</If>
      <If test={!user || !user.name}>You are not logged in!</If>
    </div>
  );
};

export default UserInfo;
