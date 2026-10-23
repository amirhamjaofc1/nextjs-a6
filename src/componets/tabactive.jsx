// "use client";
// import { useState } from "react";
// import Today from "./today";
// import Saved from "./saved";

// export default function Tabactive() {
//   const [activeTab, setActiveTab] = useState("today");

//   return (
//     <>
//       <div className="tabs">
//         <button
//           className={`rounded-lg px-5 py-2 text-xs ${activeTab === "today" ? "bg-[#c6ff00] text-black" : "text-[#8b90a0] hover:text-white"}`}
//           onClick={() => setActiveTab("today")}
//         >
//           Today’s Plan
//         </button>
//         <button
//           className={`rounded-lg px-5 py-2 text-xs ${activeTab === "saved" ? "bg-[#c6ff00] text-black" : "text-[#8b90a0] hover:text-white"}`}
//           onClick={() => setActiveTab("saved")}
//         >
//           Saved
//         </button>
//       </div>

//       <div className="">
//         {activeTab === "today" ? <Today /> : <Saved />}
//       </div>
//     </>
//   );
// }
