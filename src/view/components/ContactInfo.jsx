import PronounOptions from "./PronounOptions";

export default function ContactInfo({ initialValues }) {
  return (
    <section className="contact-info">
      <div className="form-group w-1-3">
        <label htmlFor="first-name">First name*</label>
        <input
          type="text"
          name="firstName"
          id="first-name"
          defaultValue={initialValues?.firstName || ""}
          required
        />
      </div>
      <div className="form-group w-1-3">
        <label htmlFor="last-name">Last name*</label>
        <input
          type="text"
          name="lastName"
          id="last-name"
          defaultValue={initialValues?.lastName || ""}
          required
        />
      </div>
      <div className="form-group w-1-3">
        <label htmlFor="first-name-preferred">Preferred first name*</label>
        <input
          type="text"
          name="firstNamePreferred"
          id="first-name-preferred"
          defaultValue={initialValues?.firstNamePreferred || ""}
        />
      </div>
      <PronounOptions initialValues={initialValues} />
      <div className="form-group w-full">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue={initialValues?.email || ""}
          required
        />
      </div>
    </section>
  );
}
