import { useFormContext, useFieldArray } from "react-hook-form";
import EducationSchoolInfo from "./EducationSchoolInfo";
import EducationStartDate from "./EducationStartDate";
import EducationEndDate from "./EducationEndDate";
// import EducationModal from "./EducationModal";

export default function Education() {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationEntries",
  });

  return (
    <section className="education form-group">
      {/* text school */}
      {/* text degree */}
      {/* text field of study */}
      {/* title Start date */}
      {/* month start_month */}
      {/* year start_year */}
      {/* month end_month */}
      {/* year end_year */}
      <h3>Education</h3>
      <fieldset className="entries">
        {fields.map((field, index) => (
          <fieldset key={field.id} className="entry-row">
            {fields.length > 1 && (
              <legend className="entry-legend">Degree {index + 1}</legend>
            )}
            <EducationSchoolInfo index={index} />
            <EducationStartDate index={index} />
            <EducationEndDate index={index} />
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
