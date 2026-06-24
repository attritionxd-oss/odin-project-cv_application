import { useState } from "react";

export const pronounOptions = [
  { pronoun: "He/him", key: crypto.randomUUID() },
  { pronoun: "She/her", key: crypto.randomUUID() },
  { pronoun: "They/them", key: crypto.randomUUID() },
  { pronoun: "He/they", key: crypto.randomUUID() },
  { pronoun: "She/they", key: crypto.randomUUID() },
  { pronoun: "Prefer not to say", key: crypto.randomUUID() },
  { pronoun: "Prefer to self-describe", key: crypto.randomUUID() },
];

export default function PronounOptions({ initialValues }) {
  const testValue = "test value variable";

  const [selfDescribe, setSelfDescribe] = useState(false);
  const handleChange = (e) => {
    const pronounBlock = document.querySelector("#form-group__pronouns");
    const otherBlock = document.querySelector("#form-group__pronoun-other");

    if (e.currentTarget.value === "Prefer to self-describe") {
      setSelfDescribe(true);
      pronounBlock.classList.replace("w-full", "w-1-2");
      otherBlock.classList.replace("w-full", "w-1-2");
      otherBlock.classList.remove("hidden");
    } else {
      setSelfDescribe(false);
      pronounBlock.classList.replace("w-1-2", "w-full");
      otherBlock.classList.replace("w-1-2", "w-full");
      otherBlock.classList.add("hidden");
    }
  };

  return (
    <div className="form-subgroup w-full">
      <div className="form-group w-full" id="form-group__pronouns">
        <label htmlFor="pronouns">Pronouns *</label>
        <select
          name="pronouns"
          id="pronouns"
          onChange={handleChange}
          defaultValue={initialValues.pronouns}
          required
        >
          <option value="" key={0}>
            --Select an option--
          </option>
          {pronounOptions.map((option) => (
            <option value={option.pronoun} key={option.key}>
              {option.pronoun}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group w-full hidden" id="form-group__pronoun-other">
        <label htmlFor="pronounOther">Enter your pronoun(s) *</label>
        <input
          name="pronounOther"
          id="pronoundOther"
          placeholder="Enter pronoun"
        />
      </div>
    </div>
  );
}
