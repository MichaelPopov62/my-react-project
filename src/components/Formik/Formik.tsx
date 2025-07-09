// // import React from "react";
// import { useId } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import type { FormikHelpers } from "formik";
// import css from "./Formik.module.css";

// // Тип для значень форми
// interface OrderFormValues {
//   username: string;
//   email: string;
// }
// // Початкові значення форми
// const initialValues: OrderFormValues = {
//   username: "Jacob",
//   email: "j.mercer@mail.com",
// };
// export default function OrderForm() {
//   const fieldId = useId();
//   // Функція обробки сабміту з типовою сигнатурою
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues> //actions - набір методів, які надає Formik для керування формою. Один із найчастіше вживаних - resetForm, який скидає значення форми до початкових (initialValues). Тип FormikHelpers<T> вже включений у бібліотеку.
//   ) => {
//     console.log("Submitted values:", values);
//     console.log("Order data:", values);
//     actions.resetForm();
//   };
//   return (
//     <Formik<OrderFormValues>
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.form}>
//         {/* Далі йдуть елементи форми */}
//         <fieldset className={css.fieldset}>
//           <legend className={css.legend}>Client Info</legend>

//           {/* Label прив’язуємо до інпуту через htmlFor з унікальним id */}
//           <label className={css.label} htmlFor={`${fieldId}-username`}>
//             Name
//           </label>
//           {/* Поле введення, id формується як базовий id + суфікс для унікальності */}
//           <Field
//             className={css.field}
//             id="name"
//             name="username"
//             placeholder="Введіть ваше імʼя"
//             type="text"
//           />

//           <label className={css.label} htmlFor={`${fieldId}-email`}>
//             Email
//           </label>
//           <Field
//             className={css.field}
//             type="email"
//             name="email"
//             id={`${fieldId}-email`} // унікальний id для email
//           />
//         </fieldset>

//         <ErrorMessage name="name" component="div" className="error" />

//         <button className={css.btn} type="submit">
//           Place order
//         </button>
//       </Form>
//       {/* Далі йдуть елементи форми */}
//     </Formik>
//   );
// }
// ======================================================================
// варіант з радіокнопками які замість імпутов
// // import { useId } from "react";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import type { FormikHelpers } from "formik";
// // import css from "./Formik.module.css";

// // Тип значень форми
// // interface OrderFormValues {
// //   username: string;
// //   email: string;
// //   product: string; // Додано нове поле
// deliveryTime: string; // ← нове поле
// // }

// // // Початкові значення форми
// // const initialValues: OrderFormValues = {
// //   username: "Jacob",
// //   email: "j.mercer@mail.com",
// //   product: "laptop", // Значення за замовчуванням
// deliveryTime: string; // ← нове поле
// // };

// // export default function OrderForm() {
// //   const fieldId = useId();

// //   const handleSubmit = (
// //     values: OrderFormValues,
// //     actions: FormikHelpers<OrderFormValues>
// //   ) => {
// //     console.log("Submitted values:", values);
// //     actions.resetForm();
// //   };

// //   return (
// //     <Formik<OrderFormValues>
// //       initialValues={initialValues}
// //       onSubmit={handleSubmit}
// //     >
// //       <Form className={css.form}>
// //         <fieldset className={css.fieldset}>
// //           <legend className={css.legend}>Client Info</legend>

// //           {/* Радіокнопки з явним тегом <input> */}
// //           <div className={css.radioGroup}>
// //             <p className={css.label}>Select your name:</p>

// //             <label>
// //               <Field
// //                 as="input"
// //                 type="radio"
// //                 name="username"
// //                 value="Jacob"
// //                 id={`${fieldId}-jacob`}
// //               />
// //               Jacob
// //             </label>

// //             <label>
// //               <Field
// //                 as="input"
// //                 type="radio"
// //                 name="username"
// //                 value="Roma"
// //                 id={`${fieldId}-roma`}
// //               />
// //               Roma
// //             </label>

// //             <label>
// //               <Field
// //                 as="input"
// //                 type="radio"
// //                 name="username"
// //                 value="Anna"
// //                 id={`${fieldId}-anna`}
// //               />
// //               Anna
// //             </label>
// //           </div>

// //           <ErrorMessage name="username" component="div" className={css.error} />

// //           {/* Email */}
// //           <label className={css.label} htmlFor={`${fieldId}-email`}>
// //             Email
// //           </label>
// //           <Field
// //             as="input"
// //             className={css.field}
// //             type="email"
// //             name="email"
// //             id={`${fieldId}-email`}
// //             placeholder="Введіть email"
// //           />
// //           {/* Випадаючий список */}
// //           <label className={css.label} htmlFor={`${fieldId}-product`}>
// //             Select product
// //           </label>
// //           <Field
// //             as="select"
// //             name="product"
// //             id={`${fieldId}-product`}
// //             className={css.field}
// //           >
// //             <option value="laptop">Laptop</option>
// //             <option value="smartphone">Smartphone</option>
// //             <option value="tablet">Tablet</option>
// <option value="today">Сьогодні</option>
//   <option value="tomorrow">Завтра</option>
//   <option value="nextWeek">Через тиждень</option>
// //           </Field>
// //           <ErrorMessage name="email" component="div" className={css.error} />
// //         </fieldset>

// //         <button className={css.btn} type="submit">
// //           Place order
// //         </button>
// //       </Form>
// //     </Formik>
// //   );
// // }
// ===================================================
//випадающее поле
// import { useId } from "react";
// import { Formik, Form, Field } from "formik";
// import type { FormikHelpers } from "formik";

// interface OrderFormValues {
//   username: string;
//   email: string;
//   deliveryTime: string;
// }

// const initialValues: OrderFormValues = {
//   username: "",
//   email: "",
//   deliveryTime: "",
// };

// export default function OrderForm() {
//   const fieldId = useId();

//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />

//         <label htmlFor={`${fieldId}-deliveryTime`}>
//           Preferred delivery time
//         </label>
//         <Field as="select" name="deliveryTime" id={`${fieldId}-deliveryTime`}>
//           <option value="">-- Choose delivery time --</option>
//           <option value="morning">Morning (8:00–12:00)</option>
//           <option value="afternoon">Afternoon (12:00–16:00)</option>
//           <option value="evening">Evening (16:00–20:00)</option>
//         </Field>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
// import type радіокнопкі
// import { Formik, Form, Field } from "formik";
// import type { FormikHelpers } from "formik";
// interface OrderFormValues {
//   delivery: string;
// }

// const initialValues: OrderFormValues = {
//   delivery: "pickup", // обов'язково відповідати одному із value
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label>
//           <Field type="radio" name="delivery" value="pickup" />
//           Pickup
//         </label>
//         <label>
//           <Field type="radio" name="delivery" value="courier" />
//           Courier
//         </label>
//         <label>
//           <Field type="radio" name="delivery" value="drone" />
//           Drone delivery
//         </label>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
// =======================================================

//для чекбоксів
// import { Formik, Form, Field } from "formik";
// import type { FormikHelpers } from "formik";
// interface OrderFormValues {
//   restrictions: string[];
// }

// const initialValues: OrderFormValues = {
//   restrictions: [],
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label>
//           <Field type="checkbox" name="restrictions" value="vegan" />
//           Vegan
//         </label>
//         <label>
//           <Field type="checkbox" name="restrictions" value="gluten-free" />
//           Gluten-free
//         </label>
//         <label>
//           <Field type="checkbox" name="restrictions" value="nut-free" />
//           Nut-free
//         </label>

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
// );
// }
// ====================================================
//  для textarea
// import { Formik, Form, Field } from "formik";
// import type { FormikHelpers } from "formik";
// interface OrderFormValues {
//   message: string;
// }

// const initialValues: OrderFormValues = {
//   message: "",
// };

// export default function OrderForm() {
//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label htmlFor="message">Comment or instructions</label>
//         <Field as="textarea" name="message" id="message" rows={5} />

//         <button type="submit">Place order</button>
//       </Form>
//     </Formik>
//   );
// }
// =================================================
//щбщая сборка по всем відам
// import { useId } from "react";
// import { Formik, Form, Field } from "formik";
// import type { FormikHelpers } from "formik";
// import css from "../Formik/Formik.module.css";

// interface OrderFormValues {
//   username: string;
//   email: string;
//   delivery: string;
//   deliveryTime: string;
//   restrictions: string[];
//   message: string;
// }

// const initialValues: OrderFormValues = {
//   username: "",
//   email: "",
//   delivery: "pickup",
//   deliveryTime: "",
//   restrictions: [],
//   message: "",
// };

// export default function OrderForm() {
//   const fieldId = useId();

//   const handleSubmit = (
//     values: OrderFormValues,
//     actions: FormikHelpers<OrderFormValues>
//   ) => {
//     console.log("Submitted order:", values);
//     actions.resetForm();
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form className={css.form}>
//         <fieldset className={css.fieldset}>
//           <legend className={css.legend}>Client Info</legend>

//           <label htmlFor={`${fieldId}-username`} className={css.label}>
//             Name
//           </label>
//           <Field
//             type="text"
//             name="username"
//             id={`${fieldId}-username`}
//             className={css.input}
//           />

//           <label htmlFor={`${fieldId}-email`} className={css.label}>
//             Email
//           </label>
//           <Field
//             type="email"
//             name="email"
//             id={`${fieldId}-email`}
//             className={css.input}
//           />
//         </fieldset>

//         <fieldset className={css.fieldset}>
//           <legend className={css.legend}>Delivery method</legend>

//           <label className={css.option}>
//             <Field type="radio" name="delivery" value="pickup" />
//             Pickup
//           </label>
//           <label className={css.option}>
//             <Field type="radio" name="delivery" value="courier" />
//             Courier
//           </label>
//           <label className={css.option}>
//             <Field type="radio" name="delivery" value="drone" />
//             Drone delivery
//           </label>
//         </fieldset>

//         <fieldset className={css.fieldset}>
//           <legend className={css.legend}>Dietary restrictions</legend>

//           <label className={css.option}>
//             <Field type="checkbox" name="restrictions" value="vegan" />
//             Vegan
//           </label>
//           <label className={css.option}>
//             <Field type="checkbox" name="restrictions" value="gluten-free" />
//             Gluten-free
//           </label>
//           <label className={css.option}>
//             <Field type="checkbox" name="restrictions" value="nut-free" />
//             Nut-free
//           </label>
//         </fieldset>

//         <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
//           Preferred delivery time
//         </label>
//         <Field
//           as="select"
//           name="deliveryTime"
//           id={`${fieldId}-deliveryTime`}
//           className={css.input}
//         >
//           <option value="">-- Choose delivery time --</option>
//           <option value="morning">Morning (8:00–12:00)</option>
//           <option value="afternoon">Afternoon (12:00–16:00)</option>
//           <option value="evening">Evening (16:00–20:00)</option>
//         </Field>

//         <label htmlFor={`${fieldId}-message`} className={css.label}>
//           Additional message
//         </label>
//         <Field
//           as="textarea"
//           name="message"
//           rows={4}
//           id={`${fieldId}-message`}
//           className={css.textarea}
//         />

//         <button type="submit" className={css.button}>
//           Place order
//         </button>
//       </Form>
//     </Formik>
//   );
// }
