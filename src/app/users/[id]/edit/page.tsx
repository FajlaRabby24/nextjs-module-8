import EditForm from "@/components/EditForm";
import { dbConncect } from "@/lib/db";
import User from "@/lib/models/User";

const getUser = async (id: string) => {
  await dbConncect();
  const user = await User.findById(id).lean();
  return JSON.parse(JSON.stringify(user));
};

const UserEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const user = await getUser(id);
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white text-black p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Edit User</h1>
        <EditForm user={user} />
      </div>
    </div>
  );
};

export default UserEditPage;
