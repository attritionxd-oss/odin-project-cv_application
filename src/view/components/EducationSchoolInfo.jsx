import { useFormContext } from "react-hook-form";

export default function EducationSchoolInfo({ index }) {
  const { register } = useFormContext();
  return (
    <>
      <div className="form-group w-full">
        <label>
          School*
          <input
            type="text"
            {...register(`educationEntries.${index}.schoolName`)}
          />
        </label>
      </div>

      <div className="form-group w-full">
        <label>
          Degree
          <input
            type="text"
            {...register(`educationEntries.${index}.degree`)}
          />
        </label>
      </div>

      <div className="form-group w-full">
        <label>
          Field of study
          <input type="text" {...register(`educationEntries.${index}.field`)} />
        </label>
      </div>
    </>
  );
}
