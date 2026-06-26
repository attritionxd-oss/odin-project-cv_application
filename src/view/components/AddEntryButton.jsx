export default function AddEntryButton({
  buttonLabel,
  className = "button-entry",
  defaultVals,
  append,
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => append(defaultVals)}
    >
      {buttonLabel}
    </button>
  );
}
