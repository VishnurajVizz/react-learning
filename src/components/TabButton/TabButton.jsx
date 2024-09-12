export default function TabButton({ children, onCLick }) {
  return (
    <li>
      <button onClick={onCLick}>{children}</button>
    </li>
  );
}
