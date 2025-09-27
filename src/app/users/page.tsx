import DeleteButton from "@/components/DeleteButton";
import { deleteUser } from "@/lib/actions/user.actions";
import { dbConncect } from "@/lib/db";
import User from "@/lib/models/User";
import Link from "next/link";

interface UserProps {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

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
        {users.map((user: UserProps) => (
          <li className="list-disc" key={user._id}>
            <p>Name: {user.name}</p>
            <p>Eamil: {user.email}</p>
            <div className="mt-3 flex gap-4">
              <Link href={`/users/${user._id}/edit`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <form action={deleteUser.bind(null, user._id.toString())}>
                <DeleteButton />
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
