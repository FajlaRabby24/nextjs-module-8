"use server";

import { revalidatePath } from "next/cache";
import { dbConncect } from "../db";
import Message from "../models/Message";

export const sendMessage = async (formData: FormData) => {
  const text = formData.get("message") as string;
  const author = "User";
  if (!text) {
    throw new Error("Message text is required!");
  }
  await dbConncect();
  await Message.create({ text, author });
  revalidatePath("/chat");
};
