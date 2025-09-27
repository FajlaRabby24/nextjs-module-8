"use client";

import { updateUser } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";

interface EditFromProps {
  user: {
    _id: string;
    name: string;
    email: string;
    __v: number;
  };
}

const initialState = {
  message: "",
  success: false,
};

const EditForm = ({ user }: EditFromProps) => {
  const updateUserWithId = updateUser.bind(null, user._id.toString());
  const [state, formAction, isPending] = useActionState(
    updateUserWithId,
    initialState
  );

  return (
    <form action={formAction}>
      <input
        type="text"
        name="name"
        defaultValue={user.name}
        placeholder="Enter name"
        className="input w-full bg-white border border-black"
      />
      <input
        type="email"
        name="email"
        defaultValue={user.email}
        placeholder="Enter email"
        className="input w-full mt-2 bg-white border border-black"
      />
      <SubmitButton />
      {state.message && (
        <p
          className={
            state.success ? "text-green-500 pt-2" : "pt-2 text-red-500"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
};

export default EditForm;
