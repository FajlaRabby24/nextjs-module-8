import { dbConncect } from "@/lib/db";
import User from "@/lib/models/User";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  await dbConncect();
  const data = await User.findById(id).lean();
  const user = data ? JSON.parse(JSON.stringify(data)) : null;

  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <h1 className="text-xl font-semibold">User Details Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
