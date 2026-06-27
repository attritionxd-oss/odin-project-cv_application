import { useFormContext, useFieldArray } from "react-hook-form";
import EducationSchoolInfo from "./EducationSchoolInfo";
import MonthYearFields from "./MonthYearFields";
import DeleteEntryButton from "./DeleteEntryButton";
import AddEntryButton from "./AddEntryButton";
import defaultValues from "../forms/formDefaultValues";

export default function Education() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationEntries",
  });

  return (
    <section className="education form-group">
      <h3>Education</h3>
      <fieldset className="entries">
        {fields.map((field, index) => (
          <fieldset key={field.id} className="entry-row">
            {fields.length > 1 && (
              <legend className="entry-legend">Degree {index + 1}</legend>
            )}
            <EducationSchoolInfo index={index} />
            <MonthYearFields
              index={index}
              span="Start"
              fieldGroup="educationEntries"
              monthField="startMonth"
              yearField="startYear"
            />
            <MonthYearFields
              index={index}
              span="End"
              fieldGroup="educationEntries"
              monthField="endMonth"
              yearField="endYear"
            />
            {fields.length > 1 && (
              <DeleteEntryButton
                index={index}
                buttonLabel="Delete entry"
                remove={remove}
              />
            )}
          </fieldset>
        ))}
      </fieldset>
      <AddEntryButton
        buttonLabel="Add education"
        defaultvals={defaultValues.defaultValues.educationEntries[0]}
        append={append}
      />
    </section>
  );
}
