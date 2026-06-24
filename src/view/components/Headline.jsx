import { useFormContext } from "react-hook-form";

export default function Headline() {
  const { register } = useFormContext();

  return (
    <section className="headline">
      <div className="form-group w-full">
        <label htmlFor="headline">Headline</label>
        <textarea
          {...register("headline.headline")}
          id="headline"
          rows="2"
          required
        ></textarea>
      </div>
    </section>
  );
}
