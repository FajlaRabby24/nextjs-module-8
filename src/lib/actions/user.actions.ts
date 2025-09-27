"use server";

import { dbConncect } from "../db";
import User from "../models/User";

export const createUser = async (formData: FormData) => {
  await dbConncect();
  const name = formData.get("name");
  const email = formData.get("email");

  await new Promise((res) => setTimeout(res, 2000));
  try {
    const newUser = new User({ name, email });
    await newUser.save();
    return {
      success: true,
      message: "User create successfully!",
      user: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      message: "Error creating user",
      error: error instanceof Error ? error.message : "Unknow error",
    };
  }
};

interface UserFormState {
  message: string;
  success: boolean;
}

export const createUserWithState = async (
  prevState: UserFormState,
  formData: FormData
) => {
  await dbConncect();
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return { success: false, message: "Name and Email is required!" };
  }

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    return {
      success: true,
      message: "User created successfully!",
      user: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      message: "Error creating user",
      error: error instanceof Error ? error.message : "Unknow error",
    };
  }
};
