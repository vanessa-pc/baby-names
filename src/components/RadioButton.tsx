export default function RadioButton({
  label,
  id,
  value,
  handleChange,
}: {
  id: string;
  label: string;
  value: string;
  handleChange: () => void;
}): JSX.Element {
  return (
    <>
      <label key={id}>{label}</label>
      <input
        type="radio"
        name="radio-button"
        id={id}
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
