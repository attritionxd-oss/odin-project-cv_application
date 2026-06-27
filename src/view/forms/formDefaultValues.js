const defaultValues = {
  defaultValues: {
    contact: {
      firstName: "",
      lastName: "",
      firstNamePreferred: "",
      pronouns: "",
      pronounsCustom: "",
      email: "",
    },
    headline: { headline: "" },
    educationEntries: [
      {
        schoolName: "",
        degree: "",
        field: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
    ],
    experienceEntries: [
      {
        jobTitle: "",
        orgName: "",
        orgCity: "",
        orgState: "",
        orgCountry: "",
        roleLocationType: "",
        employmentType: "",
        isCurrentRole: false,
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        highlights: "",
      },
    ],
    lcskillEntries: [
      {
        lcskillName: "",
        issuingOrg: "",
        issueMonth: "",
        issueYear: "",
        expirationMonth: "",
        expirationYear: "",
        credentialId: "",
        credentialUrl: "",
      },
    ],
  },
};

export default defaultValues;
