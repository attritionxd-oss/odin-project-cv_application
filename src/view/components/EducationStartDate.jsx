import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropdown";

export default function EducationStartDate({ index }) {
  return (
    <>
      <fieldset className="form-subgroup w-full">
        <legend>Start date</legend>
        <MonthDropdown
          fieldName={`educationEntries.${index}.startMonth`}
          className="form-group w-1-2"
        />
        <YearDropdown
          fieldName={`educationEntries.${index}.startYear`}
          className="form-group w-1-2"
        />
      </fieldset>
    </>
  );
}
