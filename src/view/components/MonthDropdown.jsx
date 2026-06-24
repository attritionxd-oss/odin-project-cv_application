import { useFormContext } from "react-hook-form";
import months from "/src/utils/months";

export default function MonthDropdown({
  fieldName,
  fieldLabel = "Month",
  className = "form-group",
}) {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={fieldName}>
        {fieldLabel}
        <select {...register(fieldName)} id={fieldName}>
          <option value="" key={0}>
            Select month...
          </option>
          {months.map(({ month, key }) => (
            <option value={month} key={key}>
              {month}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
