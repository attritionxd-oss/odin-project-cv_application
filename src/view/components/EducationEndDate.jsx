import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropdown";

export default function EducationEndDate({ index }) {
  return (
    <>
      <fieldset className="form-subgroup w-full">
        <legend>End date (or expected)</legend>
        <MonthDropdown
          fieldName={`educationEntries.${index}.endMonth`}
          className="form-group w-1-2"
        />
        <YearDropdown
          fieldName={`educationEntries.${index}.endYear`}
          className="form-group w-1-2"
        />
      </fieldset>
    </>
  );
}
