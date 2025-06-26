import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Profile = () => {
  const { user } = useContext(AuthContext);
  

  return (
    <div className="mx-auto p-6 text-center mt-5 shadow-xl rounded-full w-80 h-80 bg-base-200 flex flex-col justify-center items-center">
  {/* User Info */}
  <div className="flex flex-col items-center">
    <div className="avatar mb-4">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={user.photoURL} />
      </div>
    </div>
    <h2 className="text-2xl font-bold">{user.displayName}</h2>
    <p className="text-sm text-gray-500">{user.email}</p>
  </div>
</div>

  );
};

export default Profile;