import useAuth from "../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      I am from Admin Home
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back!"}
      </h2>
    </div>
  );
};

export default AdminHome;
