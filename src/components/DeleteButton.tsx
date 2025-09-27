"use client";

import { useFormStatus } from "react-dom";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-error" type="submit">
      {pending ? (
        <span className="loading text-black loading-spinner loading-sm"></span>
      ) : (
        "Delete"
      )}{" "}
    </button>
  );
};

export default DeleteButton;
