import ChatClient from "@/components/ChatClient";
import { dbConncect } from "@/lib/db";
import Message from "@/lib/models/Message";

const getMessage = async () => {
  await dbConncect();
  const data = await Message.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(data));
};

const ChatPage = async () => {
  const message = await getMessage();
  console.log(message);
  return (
    <div className="max-w-xl mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Chat Room</h1>
      <ChatClient initialMessage={message} />
    </div>
  );
};

export default ChatPage;
