export default function LCSkills({ initialValues }) {
  return (
    <section className="skills">
      {/* text name */}
      {/* text issuingOrg */}
      {/* month issueMonth */}
      {/* year issueYear */}
      {/* month expirationMonth */}
      {/* year expirationYear */}
      {/* text credentialId */}
      {/* text credentialUrl */}
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
