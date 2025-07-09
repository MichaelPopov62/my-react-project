// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchPerson } from "../Person/fetchPerson";

// export interface Person {
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
//   skin_color: string;
//   eye_color: string;
//   birth_year: string;
//   gender: string;
//   // можеш додати ще поля за потреби
// }

// export default function Person() {
//   const [count, setCount] = useState(2); // Динамічний персонаж починається з ID 2

//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["person", count],
//     queryFn: () => fetchPerson(count),
//   });

//   if (isLoading) return <p>Завантаження...</p>;
//   if (isError && error instanceof Error) return <p>Помилка: {error.message}</p>;

//   return (
//     <div style={{ marginTop: "2rem" }}>
//       <h2>Дані про персонажів</h2>

//       <button onClick={() => setCount((prev) => prev + 1)}>
//         Наступний персонаж (ID: {count})
//       </button>

//       {isLoading && <p>Завантаження...</p>}

//       {isError && error instanceof Error && <p>Помилка: {error.message}</p>}

//       {data && (
//         <>
//           <h3>📌 Статичний персонаж (ID: 1)</h3>
//           <pre>{JSON.stringify(data.staticPerson, null, 2)}</pre>

//           <h3>🔁 Динамічний персонаж (ID: {count})</h3>
//           <pre>{JSON.stringify(data.dynamicPerson, null, 2)}</pre>
//         </>
//       )}
//     </div>
//   );
// }
