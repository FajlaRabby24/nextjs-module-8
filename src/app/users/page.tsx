import { dbConncect } from "@/lib/db";
import User from "@/lib/models/User";
import Link from "next/link";

const getAllUsers = async () => {
  await dbConncect();
  const users = await User.find().lean();
  return JSON.parse(JSON.stringify(users));
};

const UsersPage = async () => {
  const users = await getAllUsers();

  return (
    <div>
      <h1 className="mb-3 text-3xl font-semibold">All users</h1>
      <ul className="ml-6 space-y-3">
        {users.map((user) => (
          <li className="list-disc" key={user._id}>
            <p>Name: {user.name}</p>
            <p>Eamil: {user.email}</p>
            <Link href={`/users/${user._id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
