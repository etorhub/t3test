import { useRouter } from "next/router";
import { api } from "~/utils/api";

const User = () => {
  const router = useRouter();
  if (!router.query.user) return null;
  const user = api.users.getUser.useQuery({
    user: router.query.user as string,
  });
  if (user.isLoading) {
    return <div>Loading...</div>;
  }
  if (!user.data) return null;
  return (
    <div>
      <h1>Users</h1>

      <div>
        {user.data.name}, {user.data.email}
      </div>
    </div>
  );
};

export default User;
