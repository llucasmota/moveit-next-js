import { useState } from 'react';

interface ButtonProps {
  color: string;
  children: string;
}

export function Button(props: ButtonProps) {
  const [value, setValue] = useState(1);

  function increment() {
    setValue(value + 1);
  }
  return (
    <button type="button" style={{ backgroundColor: props.color }} onClick={increment}>
      {props.children} <strong>{value}</strong>
    </button>
  );
}
