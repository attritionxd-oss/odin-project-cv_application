export default function LCSkills({ initialValues }) {
  return (
    <section className="skills">
      <div className="form-group w-full">
        <label htmlFor="licenses-certs-skills">
          Licences, Certifications, and Skills
        </label>
        <input
          type="text"
          name="lcs"
          id="licenses-certs-skills"
          defaultValue={initialValues?.lcs || ""}
        />
      </div>
      <a>Add Skill</a>
    </section>
  );
}
