// import axios from "axios";
// // 🔹 Тип для персонажа зі SWAPI
// export interface Person {
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
//   skin_color: string;
//   eye_color: string;
//   birth_year: string;
//   gender: string;
//   // можеш додати ще поля, якщо потрібно
// }
// export const fetchPerson = async (
//   id: number
// ): Promise<{
//   staticPerson: Person;
//   dynamicPerson: Person;
// }> => {
//   // Паралельний запит:
//   const [staticRes, dynamicRes] = await Promise.all([
//     axios.get("https://swapi.py4e.com/api/people/1/"), // статичний
//     axios.get(`https://swapi.py4e.com/api/people/${id}/`), // динамічний
//   ]);
//   // Повертаємо обидва результати в одному об'єкті
//   return {
//     staticPerson: staticRes.data,
//     dynamicPerson: dynamicRes.data,
//   };
// };
