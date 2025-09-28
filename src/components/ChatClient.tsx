"use client";

import { sendMessage } from "@/lib/actions/message.action";
import { Message } from "@/lib/types/message";
import { startTransition, useOptimistic, useRef } from "react";

const ChatClient = ({ initialMessage }: { initialMessage: Message[] }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    initialMessage,
    (state, newMessage: string) => [
      {
        text: newMessage,
        author: "User",
        sending: true,
      },
      ...state,
    ]
  );

  const formAction = (formData: FormData) => {
    const message = formData.get("message") as string;
    if (!message) return;
    addOptimisticMessage(message);
    formRef.current?.reset();

    startTransition(() => {
      sendMessage(formData);
    });
  };

  return (
    <div>
      <form ref={formRef} action={formAction} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="type a message"
          className="input"
          name="message"
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      {/*  */}
      <div className="space-y-2">
        {optimisticMessages?.map((msg, idx) => (
          <div key={idx} className="p-2  border rounded">
            <p className="font-semibold">{msg.author}</p>
            <p>
              {msg.text} {msg.sending && <small>Sending...</small>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatClient;
