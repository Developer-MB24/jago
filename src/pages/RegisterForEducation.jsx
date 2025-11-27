import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const indiaStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const districtsByState = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Delhi: ["Central Delhi", "North Delhi", "South Delhi"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Noida"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

// Dropdown
const educationOptions = [
  "Bachelor of Arts (B.A.)",
  "Bachelor of Science (B.Sc.)",
  "Bachelor of Commerce (B.Com.)",
  "Bachelor of Education (B.Ed.)",
  "Bachelor of Computer Applications (BCA)",
  "Bachelor of Social Work (BSW)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Engineering (B.E.)",
  "Bachelor of Technology (B.Tech)",
  "Bachelor of Pharmacy (B.Pharm)",
  "Bachelor of Nursing (B.Sc Nursing)",
  "Master of Arts (M.A.)",
  "Master of Science (M.Sc)",
  "Master of Commerce (M.Com.)",
  "Master of Education (M.Ed.)",
  "Master of Computer Applications (MCA)",
  "Master of Social Work (MSW)",
  "Master of Business Administration (MBA)",
  "Other",
];

const volunteerExperienceOptions = [
  "New to Social Work",
  "0–1 Year",
  "1–3 Years",
  "3–7 Years",
  "7+ Years",
];

const RegisterForEducation = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    dob: "",
    nationality: "",
    aadhar: "",
    pan: "",
    gender: "",
    education: "",
    volunteerExperience: "",
    permanentAddress: "",
    permanentState: "",
    permanentCity: "",
    permanentPincode: "",
    permanentLandmark: "",
    sameAsPermanent: false,
    currentAddress: "",
    currentState: "",
    currentCity: "",
    currentPincode: "",
    currentLandmark: "",
    prefLocation1: "",
    prefCity1: "",
    prefPincode1: "",
    prefLocation2: "",
    prefCity2: "",
    prefPincode2: "",
    prefLocation3: "",
    prefCity3: "",
    prefPincode3: "",
    howKnow: "",
    whyVolunteer: "",
    motivation: "",
    declarationConsent: false,
    msgConsent: false,
  });

  const [errors, setErrors] = useState({
    permanentPincode: "",
    currentPincode: "",
  });

  const [files, setFiles] = useState({
    educationCertificates: [],
    experienceCertificates: [],
    aadharFiles: [],
    panFiles: [],
  });

  //  OTP state
  const [otpState, setOtpState] = useState({
    mobile: {
      generatedOtp: "",
      enteredOtp: "",
      otpSent: false,
      otpVerified: false,
    },
    aadhaar: {
      generatedOtp: "",
      enteredOtp: "",
      otpSent: false,
      otpVerified: false,
    },
  });

  const handleFileChange = (e, field) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles((prev) => ({
      ...prev,
      [field]: [...prev[field], ...newFiles],
    }));
    e.target.value = "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Word-limited textareas
    if (name === "whyVolunteer" || name === "motivation") {
      const words = value.trim().split(/\s+/).filter(Boolean);
      if (words.length > 120) {
        alert("Maximum allowed word limit is 120 words for this answer.");
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: value }));
      return;
    }

    if (
      [
        "fullName",
        "nationality",
        "permanentCity",
        "currentCity",
        "prefLocation1",
        "prefLocation2",
        "prefLocation3",
        "prefCity1",
        "prefCity2",
        "prefCity3",
      ].includes(name)
    ) {
      if (value === "" || /^[A-Za-z\s]+$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    // Phone: digits only, max 10
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      return;
    }

    // Pincodes: digits only, max 6
    if (
      name === "permanentPincode" ||
      name === "currentPincode" ||
      name === "prefPincode1" ||
      name === "prefPincode2" ||
      name === "prefPincode3"
    ) {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 6);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      return;
    }

    // Aadhaar: digits only, max 12
    if (name === "aadhar") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 12);
      setFormData((prev) => ({ ...prev, aadhar: digitsOnly }));
      return;
    }

    // PAN: uppercase alphanumeric, max 10
    if (name === "pan") {
      const cleaned = value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .slice(0, 10);
      setFormData((prev) => ({ ...prev, pan: cleaned }));
      return;
    }

    // Checkboxes
    if (type === "checkbox") {
      if (name === "sameAsPermanent") {
        const checkedValue = checked;
        setFormData((prev) => ({
          ...prev,
          sameAsPermanent: checkedValue,
          currentAddress: checkedValue ? prev.permanentAddress : "",
          currentState: checkedValue ? prev.permanentState : "",
          currentCity: checkedValue ? prev.permanentCity : "",
          currentPincode: checkedValue ? prev.permanentPincode : "",
          currentLandmark: checkedValue ? prev.permanentLandmark : "",
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // OTP handlers
  const handleMobileOtpChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtpState((prev) => ({
      ...prev,
      mobile: { ...prev.mobile, enteredOtp: digitsOnly },
    }));
  };

  const handleAadhaarOtpChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtpState((prev) => ({
      ...prev,
      aadhaar: { ...prev.aadhaar, enteredOtp: digitsOnly },
    }));
  };

  const validatePincode = (name, value) => {
    if (!/^\d{6}$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Wrong PIN code. Please enter a valid 6-digit PIN.",
      }));
      setFormData((prev) => ({ ...prev, [name]: "" }));
      alert("Wrong PIN code. Please enter a valid 6-digit PIN.");
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const isBothVerified = () =>
    otpState.mobile.otpVerified && otpState.aadhaar.otpVerified;

  const handleSendMobileOtp = () => {
    if (!formData.phone || formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number before sending OTP.");
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpState((prev) => ({
      ...prev,
      mobile: {
        generatedOtp: otp,
        enteredOtp: "",
        otpSent: true,
        otpVerified: false,
      },
    }));
    alert(`Demo Mobile OTP for testing: ${otp}`);
  };

  const handleVerifyMobileOtp = () => {
    const { mobile } = otpState;
    if (!mobile.otpSent) {
      alert("Please send Mobile OTP first.");
      return;
    }
    if (mobile.enteredOtp && mobile.enteredOtp === mobile.generatedOtp) {
      setOtpState((prev) => ({
        ...prev,
        mobile: { ...prev.mobile, otpVerified: true },
      }));
      alert("Mobile number verified successfully.");
    } else {
      alert("Incorrect Mobile OTP. Please try again.");
    }
  };

  const handleSendAadhaarOtp = () => {
    if (!formData.aadhar || formData.aadhar.length !== 12) {
      alert("Please enter a valid 12-digit Aadhaar number before sending OTP.");
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpState((prev) => ({
      ...prev,
      aadhaar: {
        generatedOtp: otp,
        enteredOtp: "",
        otpSent: true,
        otpVerified: false,
      },
    }));
    alert(`Demo Aadhaar OTP for testing: ${otp}`);
  };

  const handleVerifyAadhaarOtp = () => {
    const { aadhaar } = otpState;
    if (!aadhaar.otpSent) {
      alert("Please send Aadhaar OTP first.");
      return;
    }
    if (aadhaar.enteredOtp && aadhaar.enteredOtp === aadhaar.generatedOtp) {
      setOtpState((prev) => ({
        ...prev,
        aadhaar: { ...prev.aadhaar, otpVerified: true },
      }));
      alert("Aadhaar verified successfully.");
    } else {
      alert("Incorrect Aadhaar OTP. Please try again.");
    }
  };

  const bothVerified = isBothVerified();
  const canSubmit =
    formData.declarationConsent && bothVerified && formData.msgConsent;

  const hasDistricts = (stateName) =>
    Boolean(districtsByState[stateName] && districtsByState[stateName].length);

  //  STEP VALIDATIONS

  // Step 1: only personal + education/experience
  const validateStep1 = () => {
    const missing = [];
    const extraErrors = [];

    const check = (field, label) => {
      if (!formData[field] || `${formData[field]}`.trim() === "") {
        missing.push(label);
      }
    };

    // Personal info
    check("fullName", "Full Name");
    check("email", "Email");
    check("phone", "Phone Number");
    check("dob", "Date of Birth");
    check("nationality", "Nationality");
    check("gender", "Gender");
    check("aadhar", "Aadhaar Number");
    check("pan", "PAN Number");

    // Education & experience
    check("education", "Educational Qualification");
    check("volunteerExperience", "Volunteer Experience");

    // Format checks
    if (formData.phone.length !== 10) {
      extraErrors.push("Phone number must be 10 digits.");
    }
    if (formData.aadhar.length !== 12) {
      extraErrors.push("Aadhaar number must be 12 digits.");
    }
    if (formData.pan.length !== 10) {
      extraErrors.push("PAN must be 10 characters.");
    }

    if (missing.length || extraErrors.length) {
      let message = "Please complete all required fields in Step 1.\n";
      if (missing.length) {
        message += "\nMissing:\n- " + missing.join("\n- ");
      }
      if (extraErrors.length) {
        message += "\n\nFix:\n- " + extraErrors.join("\n- ");
      }
      alert(message);
      return false;
    }

    return true;
  };

  // Step 2: addresses + preferred locations
  const validateStep2 = () => {
    const missing = [];
    const extraErrors = [];

    const check = (field, label) => {
      if (!formData[field] || `${formData[field]}`.trim() === "") {
        missing.push(label);
      }
    };

    // Permanent address
    check("permanentAddress", "Permanent Address");
    check("permanentState", "Permanent State");
    check("permanentCity", "Permanent City/District");
    check("permanentPincode", "Permanent Pincode");

    if (
      formData.permanentPincode &&
      !/^\d{6}$/.test(formData.permanentPincode)
    ) {
      extraErrors.push("Permanent Pincode must be a valid 6-digit number.");
    }

    // Current address (if not same as permanent)
    if (!formData.sameAsPermanent) {
      check("currentAddress", "Current Address");
      check("currentState", "Current State");
      check("currentCity", "Current City/District");
      check("currentPincode", "Current Pincode");

      if (formData.currentPincode && !/^\d{6}$/.test(formData.currentPincode)) {
        extraErrors.push("Current Pincode must be a valid 6-digit number.");
      }
    }

    // Preferred locations
    const checkPref = (num) => {
      if (!formData[`prefLocation${num}`]) {
        missing.push(`Preference ${num} - Location/Area`);
      }
      if (!formData[`prefCity${num}`]) {
        missing.push(`Preference ${num} - City`);
      }
      if (!formData[`prefPincode${num}`]) {
        missing.push(`Preference ${num} - Pincode`);
      } else if (!/^\d{6}$/.test(formData[`prefPincode${num}`])) {
        extraErrors.push(
          `Preference ${num} - Pincode must be a valid 6-digit number.`
        );
      }
    };

    [1, 2, 3].forEach(checkPref);

    // All three preference pincodes must be unique
    const { prefPincode1, prefPincode2, prefPincode3 } = formData;
    const pins = [prefPincode1, prefPincode2, prefPincode3];
    if (pins.every(Boolean) && new Set(pins).size !== pins.length) {
      extraErrors.push(
        "Each preferred location must have a different Pincode (all three must be unique)."
      );
    }

    if (missing.length || extraErrors.length) {
      let message = "Please complete all required fields in Step 2.\n";
      if (missing.length) {
        message += "\nMissing:\n- " + missing.join("\n- ");
      }
      if (extraErrors.length) {
        message += "\n\nFix:\n- " + extraErrors.join("\n- ");
      }
      alert(message);
      return false;
    }

    return true;
  };

  const handleNextFromStep = (step) => {
    if (step === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStep !== 3) {
      return;
    }

    const { prefPincode1, prefPincode2, prefPincode3 } = formData;
    const pins = [prefPincode1, prefPincode2, prefPincode3].filter(Boolean);
    const duplicatePin =
      pins.length === 3 && new Set(pins).size !== pins.length;

    if (duplicatePin) {
      alert(
        "Each preferred location must have a different PIN code. Please enter unique PIN codes for all three preferences."
      );
      return;
    }

    if (!isBothVerified()) {
      alert(
        "Please verify both Mobile Number and Aadhaar OTP before submitting the form."
      );
      return;
    }

    if (!formData.msgConsent) {
      alert(
        "Please agree to receive messages/communication to submit the form."
      );
      return;
    }

    if (!formData.declarationConsent) {
      alert("Please confirm the declaration before submitting the form.");
      return;
    }

    console.log("Form submitted:", formData, files);
    alert("Form submitted successfully (demo).");
  };

  const steps = [
    { id: 1, title: "Personal & Education" },
    { id: 2, title: "Address & Preferred Location" },
    { id: 3, title: "Motivation & Submit" },
  ];

  const totalSteps = steps.length;
  const progressPercent =
    totalSteps > 1 ? ((currentStep - 1) / (totalSteps - 1)) * 100 : 0;

  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/volunteer-registration-bg.png')",
      }}
    >
      {/* <div className="absolute inset-0 bg-[#fef6e8]/60 pointer-events-none"></div> */}

      <div className="relative z-10 w-full max-w-4xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10">
        {/* Heading */}
        <h1
          className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-1 tracking-wide"
          style={{
            fontFamily:
              "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Volunteer Registration
        </h1>
        <p
          className="text-center text-lg text-slate-800 mb-6 italic"
          style={{
            fontFamily: "cursive",
          }}
        >
          for Education
        </p>

        {/* Step indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {steps.map((step, index) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              const circleClasses = isCompleted
                ? "bg-[#138808] text-white"
                : isActive
                ? "bg-[#FF9933] text-white"
                : "bg-slate-200 text-slate-700";

              const showConnector = index < steps.length - 1;
              const connectorCompleted = currentStep > step.id;

              return (
                <div key={step.id} className="flex items-center gap-2 md:gap-3">
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold ${circleClasses}`}
                  >
                    {step.id}
                  </div>
                  <span className="text-xs md:text-sm text-slate-800 whitespace-nowrap">
                    {step.title}
                  </span>
                  {showConnector && (
                    <div
                      className={`hidden sm:block h-[2px] w-8 md:w-12 rounded-full ${
                        connectorCompleted ? "bg-[#138808]" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* completion bar */}
          <div className="mt-3 w-full max-w-md mx-auto">
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#138808] transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] text-center text-slate-500">
              Step {currentStep} of {totalSteps} • {Math.round(progressPercent)}
              % completed
            </p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <>
              {/* Personal Information */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email Address{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul.sharma@email.com"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone No.{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        className="w-24 border rounded-lg px-2 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                        value={formData.countryCode}
                        onChange={handleChange}
                      >
                        <option value="+91">+91</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="\d{10}"
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      10-digit mobile number without country code.
                    </p>
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date of Birth{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      required
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.dob}
                      onChange={handleChange}
                      min="1950-01-01"
                      max="2010-12-31"
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Example: 15/08/1998
                    </p>
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nationality{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      required
                      placeholder="e.g. Indian"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.nationality}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Gender{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      name="gender"
                      required
                      className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>

                  {/* Aadhar */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Aadhar No.{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="aadhar"
                      required
                      maxLength={12}
                      pattern="\d{12}"
                      placeholder="e.g. 123412341234"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.aadhar}
                      onChange={handleChange}
                    />
                    <div className="mt-2 border rounded-lg px-3 py-2 text-xs flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#138808]">
                          <FiUpload size={18} />
                        </span>
                        <span className="text-slate-700">
                          Attach Aadhar (PDF/JPG/PNG — multiple allowed)
                        </span>
                      </div>
                      <label className="text-xs font-semibold px-3 py-1 border rounded-full cursor-pointer hover:bg-slate-100">
                        Browse
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, "aadharFiles")}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {files.aadharFiles.length > 0 && (
                      <ul className="mt-1 text-xs text-slate-600 list-disc list-inside">
                        {files.aadharFiles.map((file, idx) => (
                          <li key={idx}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* PAN */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Pan No.{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="pan"
                      required
                      maxLength={10}
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      placeholder="e.g. ABCDE1234F"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.pan}
                      onChange={handleChange}
                    />
                    <div className="mt-2 border rounded-lg px-3 py-2 text-xs flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#138808]">
                          <FiUpload size={18} />
                        </span>
                        <span className="text-slate-700">
                          Attach PAN (PDF/JPG/PNG — multiple allowed)
                        </span>
                      </div>
                      <label className="text-xs font-semibold px-3 py-1 border rounded-full cursor-pointer hover:bg-slate-100">
                        Browse
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, "panFiles")}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {files.panFiles.length > 0 && (
                      <ul className="mt-1 text-xs text-slate-600 list-disc list-inside">
                        {files.panFiles.map((file, idx) => (
                          <li key={idx}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Education & Volunteer Experience */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Education &amp; Volunteer Experience
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Educational Qualification */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Educational Qualification{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      name="education"
                      required
                      className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.education}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Your Qualification
                      </option>
                      {educationOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    <div className="mt-2 border border-dashed border-slate-300 bg-slate-50 rounded-lg px-4 py-3 text-xs flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[#138808]">
                          <FiUpload size={18} />
                        </span>
                        <span className="text-slate-700 leading-snug">
                          Upload your certificates in PDF/JPG/PNG format
                          (multiple files allowed)
                        </span>
                      </div>

                      <label className="text-xs font-semibold px-3 py-1 rounded-md border border-indigo-600 text-indigo-600 cursor-pointer hover:bg-indigo-50 whitespace-nowrap">
                        Browse
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) =>
                            handleFileChange(e, "educationCertificates")
                          }
                          className="hidden"
                        />
                      </label>
                    </div>

                    {files.educationCertificates.length > 0 && (
                      <ul className="mt-1 text-xs text-slate-600 list-disc list-inside">
                        {files.educationCertificates.map((file, idx) => (
                          <li key={idx}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Volunteer Experience */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Volunteer Experience{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      name="volunteerExperience"
                      required
                      className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.volunteerExperience}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Your Experience
                      </option>
                      {volunteerExperienceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    <div className="mt-2 border border-dashed border-slate-300 bg-slate-50 rounded-lg px-4 py-3 text-xs flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[#138808]">
                          <FiUpload size={18} />
                        </span>
                        <span className="text-slate-700 leading-snug">
                          Upload experience letters/certificates in PDF/JPG/PNG
                          format (multiple files allowed)
                        </span>
                      </div>

                      <label className="text-xs font-semibold px-3 py-1 rounded-md border border-indigo-600 text-indigo-600 cursor-pointer hover:bg-indigo-50 whitespace-nowrap">
                        Browse
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) =>
                            handleFileChange(e, "experienceCertificates")
                          }
                          className="hidden"
                        />
                      </label>
                    </div>

                    {files.experienceCertificates.length > 0 && (
                      <ul className="mt-1 text-xs text-slate-600 list-disc list-inside">
                        {files.experienceCertificates.map((file, idx) => (
                          <li key={idx}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => handleNextFromStep(1)}
                  className="inline-flex justify-center rounded-full bg-[#FF9933] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#138808] transition-colors"
                >
                  {/* Next: Address & Preferred Location  */} Next
                </button>
              </div>
            </>
          )}

          {/*  STEP 2  */}
          {currentStep === 2 && (
            <>
              {/* Permanent Address */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Permanent Address
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Address{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      name="permanentAddress"
                      required
                      rows={2}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        State{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        name="permanentState"
                        required
                        className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                        value={formData.permanentState}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select State
                        </option>
                        {indiaStates.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        City / District{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      {hasDistricts(formData.permanentState) ? (
                        <select
                          name="permanentCity"
                          required
                          className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808]"
                          value={formData.permanentCity}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {districtsByState[formData.permanentState].map(
                            (dist) => (
                              <option key={dist} value={dist}>
                                {dist}
                              </option>
                            )
                          )}
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="permanentCity"
                          required
                          placeholder="City/District"
                          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                          value={formData.permanentCity}
                          onChange={handleChange}
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Pincode{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="permanentPincode"
                        required
                        placeholder="e.g. 400001"
                        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                        value={formData.permanentPincode}
                        onChange={handleChange}
                        onBlur={(e) =>
                          validatePincode("permanentPincode", e.target.value)
                        }
                      />
                      {errors.permanentPincode && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.permanentPincode}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Landmark / Area (Optional)
                    </label>
                    <input
                      type="text"
                      name="permanentLandmark"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.permanentLandmark}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Current Address */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Current Address
                </h2>

                <label className="flex items-center gap-2 text-sm mb-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="sameAsPermanent"
                    checked={formData.sameAsPermanent}
                    onChange={handleChange}
                    className="rounded border-slate-300 text-emerald-600 focus:ring-[#138808]"
                  />
                  <span>Same as Permanent Address</span>
                </label>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Address{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      name="currentAddress"
                      required
                      rows={2}
                      disabled={formData.sameAsPermanent}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                      value={formData.currentAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        State{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        name="currentState"
                        required
                        disabled={formData.sameAsPermanent}
                        className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                        value={formData.currentState}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select State
                        </option>
                        {indiaStates.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        City / District{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      {hasDistricts(formData.currentState) ? (
                        <select
                          name="currentCity"
                          required
                          disabled={formData.sameAsPermanent}
                          className="w-full border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                          value={formData.currentCity}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {districtsByState[formData.currentState].map(
                            (dist) => (
                              <option key={dist} value={dist}>
                                {dist}
                              </option>
                            )
                          )}
                        </select>
                      ) : (
                        <input
                          type="text"
                          name="currentCity"
                          required
                          disabled={formData.sameAsPermanent}
                          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                          value={formData.currentCity}
                          onChange={handleChange}
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Pincode{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="currentPincode"
                        required
                        disabled={formData.sameAsPermanent}
                        placeholder="e.g. 110001"
                        className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                        value={formData.currentPincode}
                        onChange={handleChange}
                        onBlur={(e) =>
                          validatePincode("currentPincode", e.target.value)
                        }
                      />
                      {errors.currentPincode && (
                        <p className="text-xs text-red-600 mt-1">
                          {errors.currentPincode}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Landmark / Area (Optional)
                    </label>
                    <input
                      type="text"
                      name="currentLandmark"
                      disabled={formData.sameAsPermanent}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808] disabled:bg-slate-100"
                      value={formData.currentLandmark}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Location To Work */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  Preferred Location To Work
                </h2>

                {[1, 2, 3].map((num) => (
                  <div key={num} className="mb-4">
                    <p className="text-sm font-medium mb-2">Preference {num}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          Location / Area{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          required
                          name={`prefLocation${num}`}
                          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                          value={formData[`prefLocation${num}`]}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          City{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          required
                          name={`prefCity${num}`}
                          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                          value={formData[`prefCity${num}`]}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          Pincode{" "}
                          <span className="text-red-500" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          required
                          name={`prefPincode${num}`}
                          placeholder="e.g. 560001"
                          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                          value={formData[`prefPincode${num}`]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Back to Step 1
                </button>
                <button
                  type="button"
                  onClick={() => handleNextFromStep(2)}
                  className="inline-flex justify-center rounded-full bg-[#FF9933] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#138808] transition-colors"
                >
                  {/* Next: Motivation & Verification */} Step 3
                </button>
              </div>
            </>
          )}

          {/*  STEP 3  */}
          {currentStep === 3 && (
            <>
              {/* Motivation */}
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-4">
                  About Your Motivation
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      How did you get to know about Jaago Manav?{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      name="howKnow"
                      required
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.howKnow}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Why do you want to volunteer with Jaago Manav&apos;s
                      Education Program?{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      name="whyVolunteer"
                      required
                      rows={3}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.whyVolunteer}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      What feelings or experiences motivate you to support
                      children through education?{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      name="motivation"
                      required
                      rows={3}
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#138808]"
                      value={formData.motivation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* OTP verification block */}
              <div className="mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-xl p-4 space-y-4 bg-slate-50">
                    <p className="text-sm font-semibold">
                      Verify Your Mobile Number
                    </p>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium">
                        Mobile Number
                      </label>
                      <div className="flex w-full">
                        <div className="hidden sm:flex items-center justify-center px-4 text-sm text-slate-700 bg-slate-100 border border-slate-300 border-r-0 rounded-l-lg">
                          +91
                        </div>

                        <input
                          type="text"
                          name="phone"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 border border-slate-300 rounded-l-lg sm:rounded-none sm:border-l-0 px-3 py-2 text-sm focus:outline-none focus:ring-0"
                          placeholder="Enter 10-digit mobile"
                        />

                        <button
                          type="button"
                          onClick={handleSendMobileOtp}
                          className="px-3 sm:px-5 text-xs sm:text-sm font-semibold text-white bg-[#FF9933] hover:bg-[#138808] border border-[#F97316] rounded-r-lg focus:outline-none"
                        >
                          Send OTP
                        </button>
                      </div>
                      {otpState.mobile.otpSent &&
                        !otpState.mobile.otpVerified && (
                          <p className="text-[11px] text-slate-500">
                            OTP sent. Please check your SMS (mock).
                          </p>
                        )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium">
                        Enter Mobile OTP
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={otpState.mobile.enteredOtp}
                        onChange={handleMobileOtpChange}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-0"
                        placeholder="Enter 6-digit OTP"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleVerifyMobileOtp}
                      className="w-full mt-1 inline-flex justify-center rounded-lg bg-[#FF9933] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#138808] focus:outline-none"
                    >
                      Verify Mobile OTP
                    </button>

                    {otpState.mobile.otpVerified && (
                      <p className="text-xs text-emerald-700 font-medium mt-2">
                        Mobile number verified.
                      </p>
                    )}
                  </div>

                  {/* Aadhaar Verification */}
                  <div className="border rounded-xl p-4 space-y-4 bg-slate-50">
                    <p className="text-sm font-semibold">Verify Your Aadhaar</p>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium">
                        Aadhaar Number
                      </label>
                      <div className="flex w-full">
                        <input
                          type="text"
                          name="aadhar"
                          maxLength={12}
                          value={formData.aadhar}
                          onChange={handleChange}
                          className="flex-1 border border-slate-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-0"
                          placeholder="Enter 12-digit Aadhaar"
                        />

                        <button
                          type="button"
                          onClick={handleSendAadhaarOtp}
                          className="px-3 sm:px-5 text-xs sm:text-sm font-semibold text-white bg-[#FF9933] hover:bg-[#138808] border border-[#F97316] rounded-r-lg focus:outline-none"
                        >
                          Send OTP
                        </button>
                      </div>
                      {otpState.aadhaar.otpSent &&
                        !otpState.aadhaar.otpVerified && (
                          <p className="text-[11px] text-slate-500">
                            OTP sent for Aadhaar (mock).
                          </p>
                        )}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium">
                        Enter Aadhaar OTP
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={otpState.aadhaar.enteredOtp}
                        onChange={handleAadhaarOtpChange}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-0"
                        placeholder="Enter 6-digit OTP"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleVerifyAadhaarOtp}
                      className="w-full mt-1 inline-flex justify-center rounded-lg bg-[#FF9933] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#138808] focus:outline-none"
                    >
                      Verify Aadhaar OTP
                    </button>

                    {otpState.aadhaar.otpVerified && (
                      <p className="text-xs text-emerald-700 font-medium mt-2">
                        Aadhaar verified.
                      </p>
                    )}
                  </div>
                </div>

                {bothVerified ? (
                  <p className="mt-3 text-xs sm:text-sm text-emerald-700 font-semibold">
                    ✅ Both Mobile & Aadhaar verified. You can now submit the
                    form after giving consent.
                  </p>
                ) : (
                  <p className="mt-3 text-[11px] sm:text-xs text-slate-500">
                    Please verify both your Mobile Number and Aadhaar before
                    submitting the form.
                  </p>
                )}
              </div>

              {/* Declaration, Consent & Submit */}
              <div className="border-t border-slate-200 pt-4 space-y-4">
                {/* Declaration first */}
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="declarationConsent"
                    checked={formData.declarationConsent}
                    onChange={handleChange}
                    className="mt-1 rounded border-slate-300 text-emerald-600 focus:ring-[#138808]"
                  />
                  <span>
                    I confirm that I have no criminal record or pending legal
                    cases, and that I am not involved in smoking or alcohol
                    consumption, whether regularly or occasionally.
                  </span>
                </label>

                {/* Message Consent  */}
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="msgConsent"
                    checked={formData.msgConsent}
                    onChange={handleChange}
                    className="rounded border-slate-300 text-emerald-600 focus:ring-[#138808]"
                    disabled={!bothVerified}
                  />
                  <span className={bothVerified ? "" : "text-slate-400"}>
                    I agree to receive messages/communication regarding this
                    volunteering program.
                  </span>
                </label>

                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Back to Step 2
                  </button>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex justify-center rounded-full bg-[#FF9933] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#138808] disabled:bg-[#138808] disabled:cursor-not-allowed transition-colors"
                  >
                    Submit Registration
                  </button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterForEducation;
