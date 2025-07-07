import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  // можна додати ще, якщо потрібно
};

export default function Users() {
  //хук поверьтає данні по запиту в вигляді об'єкта
  const { data, isLoading, error, isError } = useQuery<User[]>({
    // хук useQuery Хук useQuery призначений тільки для виконання GET-запитів,
    queryKey: ["users"], //ключ запиту
    queryFn: () =>
      // функція запиту
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data),
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (isError && error instanceof Error) return <p>Помилка: {error.message}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// export default Users;
// const myQuery = useQuery({
//   queryKey: ["myQueryKey"], // ключ запиту
//   queryFn: myQueryFunction, // функція запиту
// });
