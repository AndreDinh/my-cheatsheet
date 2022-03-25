import { default_expenses } from "./Objects.js";

export default function Looping() {
//   console.log(default_expenses.map((data) => data.title));
    const dataLoop = [...default_expenses];
  return (
    <>
      <h1>test</h1>
      {dataLoop.map((data) => (
        <ul>
          <li key={data.key}>
            <h2>{data.title}</h2>
            <p>{data.amount}</p>
          </li>
        </ul>
      ))}
    </>
  );
}
