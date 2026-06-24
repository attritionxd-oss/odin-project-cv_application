export default function Headline({ initialValues }) {
  return (
    <section className="headline">
      <div className="form-group w-full">
        <label htmlFor="headline">Headline</label>
        <textarea
          name="headline"
          id="headline"
          rows="2"
          defaultValue={initialValues.headline}
          required
        ></textarea>
      </div>
    </section>
  );
}
