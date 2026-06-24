export default function Skills({ initialValues }) {
  return (
    <section className="skills">
      <div className="form-group w-full">
        <label htmlFor="skill-entry">Skills</label>
        <input
          type="text"
          name="skill"
          id="skill-entry"
          defaultValue={initialValues.skill}
        />
      </div>
      <a>Add Skill</a>
    </section>
  );
}
