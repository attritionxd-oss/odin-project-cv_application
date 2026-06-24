export default function Education({ initialValues }) {
  return (
    <section className="education">
      {/* text school */}
      {/* text degree */}
      {/* text field of study */}
      {/* title Start date */}
      {/* month start_month */}
      {/* year start_year */}
      {/* month end_month */}
      {/* year end_year */}
      <div className="form-group w-full">
        <label htmlFor="education-entry">Education</label>
        <input
          type="text"
          name="education"
          id="education-entry"
          defaultValue={initialValues.education}
        />
      </div>
      <a>Add Education</a>
    </section>
  );
}
