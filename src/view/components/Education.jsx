import { useFormContext, useFieldArray } from "react-hook-form";
import EducationSchoolInfo from "./EducationSchoolInfo";
import MonthYearFields from "./MonthYearFields";

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
              <>
                <button
                  type="button"
                  className="button-entry entry-delete"
                  onClick={() => remove(index)}
                >
                  Delete entry
                </button>
              </>
            )}
          </fieldset>
        ))}
      </fieldset>
      <button
        type="button"
        className="button-entry"
        onClick={() =>
          append({
            schoolName: "",
            degree: "",
            field: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
          })
        }
      >
        Add Education
      </button>
    </section>
  );
}
