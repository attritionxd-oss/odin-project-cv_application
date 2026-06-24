export default function EducationModal({ id }) {
  return (
    <>
      <label htmlFor="education-entry">Education</label>
      <input
        type="text"
        name="education"
        id={`education-entry-${id}`}
        // defaultValue={initialValues?.education || ""}
      />
    </>
  );
}
