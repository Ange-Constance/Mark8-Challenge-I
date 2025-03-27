// "use client"; // Required for Next.js 13+ app directory
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setUser, clearUser } from "../store/apiSlice";
// const UserProfile = () => {
//   const dispatch = useAppDispatch();
//   const user = useAppSelector((state) => state.user);

//   return (
//     <div className="my-20 items-center gap-8">
//       <h2 className="">User: {user.name || "Guest"}</h2>
//       <button
//         className="bg-blue-200 text-black text-sm p-8 rounded-sm"
//         onClick={() =>
//           dispatch(setUser({ name: "John Doe", email: "john@example.com" }))
//         }
//       >
//         Set User
//       </button>
//       <button
//         className="bg-red-200 text-black text-sm p-8 rounded-sm"
//         onClick={() => dispatch(clearUser())}
//       >
//         Clear User
//       </button>
//     </div>
//   );
// };

// export default UserProfile;
