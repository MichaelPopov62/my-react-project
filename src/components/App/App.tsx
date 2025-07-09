// // src/App.tsx

// // import Product from "../Product/Product";

// // import { HiUser } from "react-icons/hi";

// // import ClickCounter from "../ClickCounter/ClickCounter";

// // import css from "../Icon/UserMenu.module.css"; // Імпорт модуля стилів для іконки

// // export default function App() {
// //   return (
// //     <>
// //       <HiUser className={css.icon} />
// //       <h1>Products</h1>

// //       <Product
// //         name=" Tacos With Limo"
// //         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
// //         price={10.99}
// //         color="blue"
// //       />

// //       <ClickCounter productName="Tacos With Lime" />

// //       <Product
// //         name=" Frie and Burger"
// //         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
// //         price={14.29}
// //         color="orange"
// //       />
// //       <ClickCounter productName="Frie and Burger" />

// //       <Product
// //         name=" Fried Potatoes "
// //         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
// //         price={10.29}
// //         color="red"
// //       />
// //       <ClickCounter productName="Fried Potatoes" />
// //     </>
// //   );
// // }

// //обробник подіі форми
// // export default function App() {
// //   // Обробник події відправки форми
// //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault(); // 🚫 Зупиняє оновлення сторінки при submit
// //     const form = event.currentTarget; // ✅ Отримує саму форму

// //     const formData = new FormData(form); // 📦 Створює FormData об'єкт для зчитування даних
// //     const username = formData.get("username"); // 🔍 Зчитує значення поля з name="username"
// //     console.log("Введене імʼя користувача:", username); // 🖨 Виводить у
// //     form.reset();
// //   };
// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="text" name="username" placeholder="Введіть імʼя" />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }
// //

// //використання form Actons
// // export default function App() {
// //   const handleSubmit = (formData: FormData) => {
// //     console.log("Form submitted", Object.fromEntries(formData.entries()));
// //   };

// //   return (
// //     <form action={handleSubmit}>
// //       <input type="text" name="username" />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }
// // export default function App() {
// //   const handleSubmit = (formData: FormData) => {
// //     const username = formData.get("username") as string;
// //     console.log("Name:", username);
// //   };

// //   return (
// //     <form action={handleSubmit}>
// //       <input type="text" name="username"defaultValue="John Doe" />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }
// // App.tsx або page.tsx
// // "use client"; // якщо в Next.js

// // import OrderForm from "../OrderForm"; // або './components/OrderForm'
// // import SearchForm from "../SearchForm";
// // import { useState } from "react";
// // import type { Article } from "../../types/articles";
// // import ArticleList from "../ArticleList";
// // import { Audio } from "react-loader-spinner";
// // // 1. Імпортуємо HTTP-функцію
// // import { fetchArticles } from "../../services/articleService";

// // export default function App() {
// //   // 1. Оголошуємо і типізуємо стан
// //   const [articles, setArticles] = useState<Article[]>([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isError, setIsError] = useState(false);

// //   const handleSearch = async (topic: string) => {
// //     try {
// //       setIsLoading(true);
// //       setIsError(false);
// //       // 2. Використовуємо HTTP-функцію
// //       const data = await fetchArticles(topic);
// //       setArticles(data);
// //     } catch {
// //       setIsError(true);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <main>
// //       <SearchForm onSubmit={handleSearch} />
// //       {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
// //       {isLoading && (
// //         <div
// //           style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
// //         >
// //           <Audio
// //             height="80"
// //             width="80"
// //             color="#4fa94d"
// //             ariaLabel="audio-loading"
// //             visible={true}
// //           />
// //         </div>
// //       )}

// //       {isError && (
// //         <div style={{ color: "red", textAlign: "center", marginTop: 20 }}>
// //           Error loading articles. Please try again.
// //         </div>
// //       )}

// //       {articles.length > 0 && <ArticleList items={articles} />}
// //     </main>
// //   );
// // }
// // ==========================================================
// // import styles from "../App/App.module.css"; // Uncomment and use if you have CSS modules

// Example using inline styles instead of css-in-js or CSS modules:impo
// import { useState } from "react";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { fetchPerson } from "../Person/fetchPerson"; // твоя функція з двома запитами
// import {
//   useQuery,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import Users from "../Users/Users";

// const queryClient = new QueryClient(); // створюємо екземпляр QueryClient

// export default function App() {
//   const [counter, setCounter] = useState(3); // значення id для другого запиту

//   return (
//     // Обгортаємо весь додаток у провайдера React Query
//     <QueryClientProvider client={queryClient}>
//       <div>
//         <h1> Список користувачів</h1>
//         <Users />

//         <hr />
//         <h1>Дані про персонажів</h1>
//         <CharacterSection
//           counter={counter}
//           onNext={() => setCounter((prev) => prev + 1)}
//         />
//         {/* 2. Підключаємо Devtools */}
//         <ReactQueryDevtools initialIsOpen={false} />
//       </div>
//     </QueryClientProvider>
//   );
// }
// // 3. Винесена частина з логікою запиту
// function CharacterSection({
//   counter,
//   onNext,
// }: {
//   counter: number;
//   onNext: () => void;
// }) {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["person", counter],
//     queryFn: () => fetchPerson(counter),
//   });

//   return (
//     <>
//       <button onClick={onNext}>
//         Завантажити іншого персонажа (id: {counter})
//       </button>
//       {isLoading && <p>Завантаження...</p>}
//       {isError && error instanceof Error && <p>Помилка: {error.message}</p>}
//       {data && (
//         <div>
//           <h2>🔹 Статичний персонаж (ID: 1)</h2>
//           <pre>{JSON.stringify(data.staticPerson, null, 2)}</pre>

//           <h2>🔸 Динамічний персонаж (ID: {counter})</h2>
//           <pre>{JSON.stringify(data.dynamicPerson, null, 2)}</pre>
//         </div>
//       )}
//     </>
//   );
// }
// =================================================

// //form
// import React from "react";
// import { OrderForm } from "../Formik/Formik";

// export default function App() {
//   return (
//     <div>
//       <h1>Forma</h1>
//       <OrderForm />
//     </div>
//   );
// }
