// // // src/components/Button.tsx

// import clsx from "clsx";
// import css from "./Button.module.css";

// interface ButtonProps {
//   variant?: "primary" | "secondary" | "last";
//   text: string;
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Типізуємо функцію обробки кліку
// }

// export default function Button({ variant, text, onClick }: ButtonProps) {
//   return (
//     <button
//       className={clsx(css.button, variant && css[variant])}
//       onClick={onClick}
//     >
//       {/* // Виклик функції при натисканні */}
//       {text}
//     </button>
//   );
// }
