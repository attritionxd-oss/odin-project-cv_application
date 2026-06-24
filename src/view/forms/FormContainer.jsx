import { useState, useEffect } from "react";
import "./FormContainer.css";
import { getCachedData, setCachedData } from "../../services/cachedData";
import ContactInfo from "/src/view/components/ContactInfo";
import Education from "/src/view/components/Education";
import Experience from "/src/view/components/Experience";
import Headline from "/src/view/components/Headline";
import Skills from "/src/view/components/Skills";

export default function FormContainer() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDraftData() {
      try {
        const savedData = await getCachedData();
        if (savedData) {
          setFormData(savedData);
        }
      } catch (error) {
        console.error("Failed to load draft:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDraftData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    await setCachedData(data);
  };

  if (loading) return <div>Loading saved draft...</div>;

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <ContactInfo initialValues={formData} />
        <Headline initialValues={formData} />
        <Education initialValues={formData} />
        <Experience initialValues={formData} />
        <Skills initialValues={formData} />
        {/* diversity */}
        {/* references */}
        {/* socials */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
