export const User = ({ user }) => {
  return (
    <>
      <div className={'flex justify-between border-2 rounded-md m-1 ' + (user.isAdmin ? 'text-green-600' : '')}>
        <div className="m-1">{user.name}</div>
        <div className="m-1">{user.email}</div>
      </div>
    </>
  );
};
