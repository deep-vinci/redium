"use client"; 

import { useActionState } from "react";

async function incrementAction(prevCount:number, formData: any) {
  await new Promise((r) => setTimeout(r, 500)); // simulate delay
  console.log(formData);
  return prevCount + 1;
}

export default function Counter() {
  const [count, formAction, isPending] = useActionState(incrementAction, 0);

  return (
    <form action={formAction}>
      <p>Count: {count}</p>
      <button type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add +1"}
      </button>
    </form>
  );
}
