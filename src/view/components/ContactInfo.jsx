import { useFormContext } from "react-hook-form";
import PronounOptions from "./PronounOptions";

export default function ContactInfo() {
  const { register } = useFormContext();

  return (
    <section className="contact-info">
      <div className="form-group w-1-3">
        <label htmlFor="first-name">First name*</label>
        <input
          type="text"
          {...register("contact.firstName")}
          id="first-name"
          required
        />
      </div>
      <div className="form-group w-1-3">
        <label htmlFor="last-name">Last name*</label>
        <input
          type="text"
          {...register("contact.lastName")}
          id="last-name"
          required
        />
      </div>
      <div className="form-group w-1-3">
        <label htmlFor="first-name-preferred">Preferred first name*</label>
        <input
          type="text"
          {...register("contact.firstNamePreferred")}
          id="first-name-preferred"
        />
      </div>
      <PronounOptions />
      <div className="form-group w-full">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          {...register("contact.email")}
          id="email"
          required
        />
      </div>
    </section>
  );
}
