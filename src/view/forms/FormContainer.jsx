import { useState, useEffect } from "react";
import { getCachedData, setCachedData } from "../../services/cachedData";
import { useForm, FormProvider } from "react-hook-form";
import "./FormContainer.css";
import defaultValues from "./formDefaultValues";
import ContactInfo from "/src/view/components/ContactInfo";
import Education from "/src/view/components/Education";
import Experience from "/src/view/components/Experience";
import Headline from "/src/view/components/Headline";
import LCSkills from "/src/view/components/LCSkills";

export default function FormContainer() {
  const [loading, setLoading] = useState(true);
  const methods = useForm(defaultValues);
  const { reset, handleSubmit } = methods;

  useEffect(() => {
    async function loadDraftData() {
      try {
        const savedData = await getCachedData("user-form-draft");
        if (savedData) {
          reset(savedData);
        }
      } catch (error) {
        console.error("Failed to load draft:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDraftData();
  }, [reset]);

  if (loading) return <div>Loading saved draft...</div>;

  const onSubmit = async (data) => {
    await setCachedData("user-form-draft", data);
  };

  return (
    <div className="form-wrapper">
      <FormProvider {...methods}>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <ContactInfo />
          <Headline />
          <Education />
          {/* <Experience /> */}
          {/* <LCSkills /> */}
          {/* diversity */}
          {/* references */}
          {/* socials */}
          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
