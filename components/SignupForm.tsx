"use client";

import { getFormInput } from "@/app/login/actions";
import { useActionState } from "react";

// async function incrementAction(prevCount:number, formData: any) {
//   await new Promise((r) => setTimeout(r, 500)); // simulate delay
//   console.log(formData);
//   return prevCount + 1;
// }

// export default function Counter() {
//   const [count, formAction, isPending] = useActionState(incrementAction, 0);

//   return (
//     <form action={formAction}>
//       <p>Count: {count}</p>
//       <button type="submit" disabled={isPending}>
//         {isPending ? "Adding..." : "Add +1"}
//       </button>
//     </form>
//   );
// }

export default function SignupFrom() {
    return (
        <div className="bg-zinc-100 h-screen w-full flex justify-center items-center">
            <form action={getFormInput} className="bg-white max-w-xl w-sm p-5 m-10 rounded-xl flex flex-col" >
                <legend className="text-2xl mx-auto mb-2">Signup</legend>

                <div className="mb-5">
                    <label htmlFor="email" className="block">Your email</label>
                    <input type="email" name="email" id="" placeholder="email" className="border border-gray-300 w-full p-2 rounded-md bg-gray-50" />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block">Your password</label>
                    <input type="password" name="password" placeholder="" className="border border-gray-300 w-full p-2 rounded-md bg-gray-50" />
                </div>

                <button type="submit" className="bg-indigo-600 text-white p-2 rounded-md">Sign up</button>
            </form>

        </div>)
}   