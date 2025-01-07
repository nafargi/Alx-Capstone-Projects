const UserCard = ({ user }) => (
    <div className="bg-[#2b2f5e] mt-4 rounded-[.4rem] hover:scale-105 transition duration-300 ease-in-out">
      <div className="p-3">
        <img
          src={user.picture_medium}
          alt={user.name}
          className="w-full object-cover rounded-full mb-2"
        />
        <h3 className="text-white text-sm truncated-text">{user.name}</h3>
      </div>
    </div>
  );
  
  export default UserCard;
  