import { useFormContext } from "react-hook-form";
import range from "/src/utils/range";

const years = range(1950, 2027, 1)
  .sort((a, b) => b - a)
  .map((year) => ({ year: year, key: crypto.randomUUID() }));

export default function YearDropdown({
  fieldName,
  fieldLabel = "Year",
  className = "form-group",
}) {
  const { register } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={fieldName}>
        {fieldLabel}
        <select {...register(fieldName)} id={fieldName}>
          <option value="" key={0}>
            Select year...
          </option>
          {years.map(({ year, key }) => (
            <option value={year} key={key}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
