import Link from "next/link";
import { api } from "~/utils/api";

const Users = () => {
  const users = api.users.allUsers.useQuery();
  if (users.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.data?.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}, {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
