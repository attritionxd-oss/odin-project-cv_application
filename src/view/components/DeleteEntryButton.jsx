export default function DeleteEntryButton({
  index,
  buttonLabel,
  className = "button-entry entry-delete",
  remove,
}) {
  return (
    <button type="button" className={className} onClick={() => remove(index)}>
      {buttonLabel}
    </button>
  );
}
