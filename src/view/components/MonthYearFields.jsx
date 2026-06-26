import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropdown";

export default function MonthYearFields({
  index,
  span,
  fieldGroup,
  monthField,
  yearField,
  className = "form-subgroup w-full",
  subGroupClassName = "form-group w-1-2",
}) {
  return (
    <>
      <fieldset className={className}>
        <legend>{span} date</legend>
        <MonthDropdown
          fieldName={`${fieldGroup}.${index}.${monthField}`}
          className={subGroupClassName}
        />
        <YearDropdown
          fieldName={`${fieldGroup}.${index}.${yearField}`}
          className={subGroupClassName}
        />
      </fieldset>
    </>
  );
}
