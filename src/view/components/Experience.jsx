export default function Experience({ initialValues }) {
  return (
    <section className="work-experience">
      {/* state array for multiple roles */}
      {/* title: Experience */}
      {/* text job_title */}
      {/* text organization */}
      {/* text location */}
      {/* text location_type */}
      {/* text employment_type */}
      {/* tick current_role */}
      {/* month start_month */}
      {/* year start_year */}
      {/* month end_month */}
      {/* year end_year */}
      {/* textarea highlights */}
      {/* button delete */}
      {/* button save */}
      <div className="form-group w-full">
        <label htmlFor="work-experience-entry">Experience</label>
        <input
          type="text"
          name="experience"
          id="work-experience-entry"
          defaultValue={initialValues.experience}
        />
      </div>
      <a>Add Experience</a>
    </section>
  );
}
