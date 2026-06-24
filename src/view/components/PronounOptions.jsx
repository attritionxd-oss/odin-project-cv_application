import { useState } from "react";
import { useFormContext } from "react-hook-form";

const pronounOptions = [
  { pronoun: "He/him", key: crypto.randomUUID() },
  { pronoun: "She/her", key: crypto.randomUUID() },
  { pronoun: "They/them", key: crypto.randomUUID() },
  { pronoun: "He/they", key: crypto.randomUUID() },
  { pronoun: "She/they", key: crypto.randomUUID() },
  { pronoun: "Prefer not to say", key: crypto.randomUUID() },
  { pronoun: "Prefer to self-describe", key: crypto.randomUUID() },
];

export default function PronounOptions() {
  const { register, watch } = useFormContext();
  const selectedPronouns = watch("contact.pronouns");
  const isSelfDescribe =
    selectedPronouns === pronounOptions.slice(-1)[0].pronoun;

  return (
    <div className="form-subgroup w-full">
      <div
        className={`form-group ${isSelfDescribe ? "w-1-2" : "w-full"}`}
        id="form-group__pronouns"
      >
        <label>
          Pronouns*
          <select {...register("contact.pronouns")} required>
            <option value="" key={0}>
              --Select an option--
            </option>
            {pronounOptions.map((option) => (
              <option value={option.pronoun} key={option.key}>
                {option.pronoun}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div
        className={`form-group ${isSelfDescribe ? "w-1-2" : "hidden"}`}
        id="form-group__pronoun-other"
      >
        <label htmlFor="pronounsCustom">Enter your pronoun(s)*</label>
        <input
          {...register("contact.pronounsCustom")}
          id="pronounsCustom"
          placeholder="Enter pronoun"
        />
      </div>
    </div>
  );
}
