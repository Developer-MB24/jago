// import React, { useState } from "react";

// // helper
// const indianStates = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
//   "Andaman and Nicobar Islands",
//   "Chandigarh",
//   "Dadra and Nagar Haveli and Daman and Diu",
//   "Delhi",
//   "Jammu and Kashmir",
//   "Ladakh",
//   "Lakshadweep",
//   "Puducherry",
// ];

// const healthQualifications = [
//   "ANM",
//   "GNM",
//   "B.Sc Nursing",
//   "M.Sc Nursing",
//   "BAMS",
//   "BHMS",
//   "BUMS",
//   "MBBS",
//   "MD / MS",
//   "B.Pharma",
//   "D.Pharma",
//   "MLT (Medical Lab Technician)",
//   "Radiology / X-Ray Technician",
//   "Physiotherapy (BPT/MPT)",
//   "EMT (Emergency Medical Technician)",
//   "Public Health Certification",
//   "First Aid & CPR Certification",
//   "Nutrition & Dietetics",
//   "Mental Health Counseling",
//   "Community Health Worker Training",
//   "Health Awareness Training",
//   "Other (Specify)",
// ];

// const contributionAreas = [
//   "Hospitals",
//   "Clinics",
//   "Primary Health Centers",
//   "Health Camps",
//   "Vaccination Drives",
//   "Community Health Awareness Programs",
//   "Patient Support / Caregiving",
//   "Home-care or Elderly Care",
//   "NGO / Field Work",
//   "Other",
// ];

// function wordCount(str) {
//   return str.trim().split(/\s+/).filter(Boolean).length;
// }

// function TextAreaWithLimit({ label, name, value, onChange, required }) {
//   const maxWords = 120;

//   const handleChange = (e) => {
//     const text = e.target.value;
//     if (wordCount(text) <= maxWords) {
//       onChange(name, text);
//     }
//   };

//   return (
//     <div className="space-y-1.5">
//       <label className="block text-sm font-semibold text-slate-800">
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>
//       <textarea
//         rows={4}
//         className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//         value={value}
//         onChange={handleChange}
//         required={required}
//       />
//       <p className="text-xs text-slate-500">
//         {wordCount(value)} / {maxWords} words
//       </p>
//     </div>
//   );
// }

// export default function RegisterForHealth() {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     nationality: "",
//     aadhar: "",
//     pan: "",
//     gender: "",
//     eduQualification: "",
//     otherQualification: "",
//     volunteerExperience: "",
//     permanentAddress: "",
//     permanentState: "",
//     permanentCity: "",
//     permanentPincode: "",
//     permanentLandmark: "",
//     sameAsPermanent: false,
//     currentAddress: "",
//     currentState: "",
//     currentCity: "",
//     currentPincode: "",
//     currentLandmark: "",
//     prefLocation1: "",
//     prefPincode1: "",
//     prefLocation2: "",
//     prefPincode2: "",
//     prefLocation3: "",
//     prefPincode3: "",
//     knowAbout: "",
//     qWhyVolunteer: "",
//     qAssistedBefore: "",
//     qPrevExperience: "",
//     qMotivation: "",
//     qComfortPatients: "",
//     qFieldVisits: "",
//     workedInHealthBefore: "",
//     workedRoleDetails: "",
//     contributionAreas: [],
//     qualificationsReceived: [],
//     otherQualificationDetail: "",
//     otherContributionArea: "",
//     consent: false,
//   });

//   const [pinErrors, setPinErrors] = useState({});
//   const [submitMessage, setSubmitMessage] = useState("");

//   const handleChange = (name, value) => {
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox" && name === "consent") {
//       handleChange(name, checked);
//       return;
//     }

//     if (type === "checkbox" && name === "workedInHealthBefore") {
//       // will be "yes" or "no"
//       handleChange(
//         "workedInHealthBefore",
//         form.workedInHealthBefore === "yes" ? "" : "yes"
//       );
//       return;
//     }

//     handleChange(name, value);
//   };

//   const handleMultiCheckbox = (field, option, isOther = false) => {
//     setForm((prev) => {
//       const current = new Set(prev[field]);
//       if (current.has(option)) {
//         current.delete(option);
//       } else {
//         current.add(option);
//       }
//       return { ...prev, [field]: Array.from(current) };
//     });
//   };

//   const validatePincode = (name, value) => {
//     const isValid = /^[1-9][0-9]{5}$/.test(value);
//     setPinErrors((prev) => ({
//       ...prev,
//       [name]: isValid || !value ? "" : "Wrong PIN code.",
//     }));
//   };

//   const handlePinBlur = (e) => {
//     const { name, value } = e.target;
//     validatePincode(name, value);
//   };

//   const handleSameAsPermanent = (e) => {
//     const checked = e.target.checked;
//     setForm((prev) => ({
//       ...prev,
//       sameAsPermanent: checked,
//       currentAddress: checked ? prev.permanentAddress : prev.currentAddress,
//       currentState: checked ? prev.permanentState : prev.currentState,
//       currentCity: checked ? prev.permanentCity : prev.currentCity,
//       currentPincode: checked ? prev.permanentPincode : prev.currentPincode,
//       currentLandmark: checked ? prev.permanentLandmark : prev.currentLandmark,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitMessage("");

//     if (!form.consent) {
//       setSubmitMessage("Please accept the consent before submitting.");
//       return;
//     }

//     // preference PIN codes must be different if all three filled
//     if (
//       form.prefPincode1 &&
//       form.prefPincode2 &&
//       form.prefPincode3 &&
//       form.prefPincode1 === form.prefPincode2 &&
//       form.prefPincode2 === form.prefPincode3
//     ) {
//       alert(
//         "Each preferred location PIN must be different. Please enter unique PIN codes for all three preferences."
//       );
//       return;
//     }

//     // any PIN error present?
//     const hasPinError = Object.values(pinErrors).some((msg) => msg);
//     if (hasPinError) {
//       setSubmitMessage("Please fix the PIN code errors before submitting.");
//       return;
//     }

//     // basic front-end validation passed
//     console.log("Health Registration Form Data:", form);
//     setSubmitMessage(
//       "Form submitted (front-end only). Connect this to your backend or Google Sheet."
//     );
//   };

//   return (
//     <section className="relative min-h-screen bg-slate-900 py-12 md:py-16">
//       {/* background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933]/20 via-slate-900 to-[#138808]/25" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,153,51,0.18),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(19,136,8,0.18),transparent_60%)]" />
//       </div>

//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         {/* heading */}
//         <div className="mb-8 text-center">
//           <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-[#FF9933] uppercase">
//             Volunteer Registration
//           </p>
//           <h1 className="mt-3 text-2xl md:text-4xl font-extrabold text-white">
//             Register for{" "}
//             <span className="text-[#34D399]">
//               Jaago Manav&apos;s Health Program
//             </span>
//           </h1>
//           <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-slate-200">
//             Please fill all mandatory fields carefully. This information helps
//             us place you in the right health initiatives such as medical camps,
//             awareness drives, and community health programs.
//           </p>
//         </div>

//         {/* form card */}
//         <div className="rounded-2xl bg-white/95 p-5 md:p-8 shadow-2xl ring-1 ring-slate-200/80">
//           <form className="space-y-8" onSubmit={handleSubmit}>
//             {/* Personal Info */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 1. Personal Details
//               </h2>
//               <div className="mt-4 grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     required
//                     value={form.fullName}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={form.email}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Phone No. <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={form.phone}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="+91-XXXXXXXXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Date of Birth <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     name="dob"
//                     required
//                     value={form.dob}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Nationality <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="nationality"
//                     required
//                     value={form.nationality}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="e.g. Indian"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Aadhar No. <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="aadhar"
//                     required
//                     value={form.aadhar}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="XXXX-XXXX-XXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     PAN No. <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="pan"
//                     required
//                     value={form.pan}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm uppercase outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="ABCDE1234F"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Gender <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="gender"
//                     required
//                     value={form.gender}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                   >
//                     <option value="">Select gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                     <option>Other</option>
//                     <option>Prefer not to say</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Education */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 2. Educational Qualification
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 Select your highest relevant qualification and attach supporting
//                 documents if needed.
//               </p>
//               <div className="mt-4 grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Qualification <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="eduQualification"
//                     required
//                     value={form.eduQualification}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                   >
//                     <option value="">Select qualification</option>
//                     {healthQualifications.map((q) => (
//                       <option key={q} value={q}>
//                         {q}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {form.eduQualification === "Other (Specify)" && (
//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       Other Qualification (Specify){" "}
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="otherQualification"
//                       required
//                       value={form.otherQualification}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     />
//                   </div>
//                 )}
//               </div>

//               <div className="mt-4">
//                 <label className="mb-1 block text-sm font-semibold text-slate-800">
//                   Upload Education Certificates (if any)
//                 </label>
//                 <input
//                   type="file"
//                   multiple
//                   className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-[#FF9933]/10 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-[#C05600] hover:file:bg-[#FF9933]/20"
//                 />
//               </div>
//             </div>

//             {/* Volunteer Experience (years) */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 3. Volunteer Experience
//               </h2>
//               <div className="mt-4 grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Experience in Social / Health Work{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="volunteerExperience"
//                     required
//                     value={form.volunteerExperience}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                   >
//                     <option value="">Select duration</option>
//                     <option>New to Social Work</option>
//                     <option>0–1 Year</option>
//                     <option>1–3 Years</option>
//                     <option>3–7 Years</option>
//                     <option>7+ Years</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Upload Experience Certificates (if any)
//                   </label>
//                   <input
//                     type="file"
//                     multiple
//                     className="block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-[#138808]/10 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-[#166534] hover:file:bg-[#138808]/20"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Permanent Address */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 4. Permanent Address
//               </h2>
//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Address <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="permanentAddress"
//                     required
//                     value={form.permanentAddress}
//                     onChange={handleInputChange}
//                     rows={2}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="House No., Street, Area"
//                   />
//                 </div>

//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       State <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       name="permanentState"
//                       required
//                       value={form.permanentState}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     >
//                       <option value="">Select state</option>
//                       {indianStates.map((st) => (
//                         <option key={st} value={st}>
//                           {st}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       City / District <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="permanentCity"
//                       required
//                       value={form.permanentCity}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                       placeholder="City / District"
//                     />
//                     <p className="mt-1 text-[11px] text-slate-500">
//                       (You can later connect a PIN → city API to auto-fill
//                       this.)
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid gap-4 md:grid-cols-3">
//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       Pincode <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="permanentPincode"
//                       required
//                       value={form.permanentPincode}
//                       onChange={handleInputChange}
//                       onBlur={handlePinBlur}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                       placeholder="6-digit PIN"
//                     />
//                     {pinErrors.permanentPincode && (
//                       <p className="mt-1 text-xs text-red-600">
//                         {pinErrors.permanentPincode}
//                       </p>
//                     )}
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       Landmark / Area{" "}
//                       <span className="text-slate-500 text-xs font-normal">
//                         (optional)
//                       </span>
//                     </label>
//                     <input
//                       type="text"
//                       name="permanentLandmark"
//                       value={form.permanentLandmark}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Current Address */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 5. Current Address
//               </h2>
//               <div className="mt-3 flex items-center gap-2">
//                 <input
//                   id="sameAsPermanent"
//                   type="checkbox"
//                   checked={form.sameAsPermanent}
//                   onChange={handleSameAsPermanent}
//                   className="h-4 w-4 rounded border-slate-400 text-[#138808] focus:ring-[#138808]"
//                 />
//                 <label
//                   htmlFor="sameAsPermanent"
//                   className="text-sm font-medium text-slate-800"
//                 >
//                   Same as permanent address
//                 </label>
//               </div>

//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     Address <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="currentAddress"
//                     required
//                     value={form.currentAddress}
//                     onChange={handleInputChange}
//                     rows={2}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     placeholder="House No., Street, Area"
//                   />
//                 </div>

//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       State <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       name="currentState"
//                       required
//                       value={form.currentState}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     >
//                       <option value="">Select state</option>
//                       {indianStates.map((st) => (
//                         <option key={st} value={st}>
//                           {st}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       City / District <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="currentCity"
//                       required
//                       value={form.currentCity}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                       placeholder="City / District"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid gap-4 md:grid-cols-3">
//                   <div>
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       Pincode <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="currentPincode"
//                       required
//                       value={form.currentPincode}
//                       onChange={handleInputChange}
//                       onBlur={handlePinBlur}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                       placeholder="6-digit PIN"
//                     />
//                     {pinErrors.currentPincode && (
//                       <p className="mt-1 text-xs text-red-600">
//                         {pinErrors.currentPincode}
//                       </p>
//                     )}
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="mb-1 block text-sm font-semibold text-slate-800">
//                       Landmark / Area{" "}
//                       <span className="text-slate-500 text-xs font-normal">
//                         (optional)
//                       </span>
//                     </label>
//                     <input
//                       type="text"
//                       name="currentLandmark"
//                       value={form.currentLandmark}
//                       onChange={handleInputChange}
//                       className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Preference locations */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 6. Preferred Locations to Work
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 Please enter three different preferred locations and PIN codes.
//               </p>

//               {[1, 2, 3].map((n) => (
//                 <div
//                   key={n}
//                   className="mt-4 rounded-xl border border-slate-200 bg-slate-50/60 p-4"
//                 >
//                   <p className="mb-3 text-sm font-semibold text-slate-800">
//                     Preference {n}
//                   </p>
//                   <div className="grid gap-4 md:grid-cols-3">
//                     <div className="md:col-span-2">
//                       <label className="mb-1 block text-xs font-semibold text-slate-800">
//                         Address / Area <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name={`prefLocation${n}`}
//                         required
//                         value={form[`prefLocation${n}`]}
//                         onChange={handleInputChange}
//                         className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                         placeholder="Locality / Area / City"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-1 block text-xs font-semibold text-slate-800">
//                         Pincode <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name={`prefPincode${n}`}
//                         required
//                         value={form[`prefPincode${n}`]}
//                         onChange={handleInputChange}
//                         onBlur={handlePinBlur}
//                         className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                         placeholder="6-digit PIN"
//                       />
//                       {pinErrors[`prefPincode${n}`] && (
//                         <p className="mt-1 text-xs text-red-600">
//                           {pinErrors[`prefPincode${n}`]}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* About Jaago Manav & questions */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 7. About You &amp; Your Interest
//               </h2>

//               <div className="mt-4 space-y-4">
//                 <div>
//                   <label className="mb-1 block text-sm font-semibold text-slate-800">
//                     How did you get to know about Jaago Manav?{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="knowAbout"
//                     required
//                     value={form.knowAbout}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                   >
//                     <option value="">Select one option</option>
//                     <option>Social Media</option>
//                     <option>Friend / Family</option>
//                     <option>Event / Camp</option>
//                     <option>Website</option>
//                     <option>Other</option>
//                   </select>
//                 </div>

//                 <TextAreaWithLimit
//                   label="Why do you want to volunteer with Jaago Manav’s Health Program?"
//                   name="qWhyVolunteer"
//                   value={form.qWhyVolunteer}
//                   required
//                   onChange={handleChange}
//                 />

//                 <TextAreaWithLimit
//                   label="Have you ever assisted in medical camps, hospitals, clinics, or community health programs? If yes, please share details."
//                   name="qAssistedBefore"
//                   value={form.qAssistedBefore}
//                   required
//                   onChange={handleChange}
//                 />

//                 <TextAreaWithLimit
//                   label="Do you have any previous experience working in the health sector? If yes, please describe your role and responsibilities."
//                   name="qPrevExperience"
//                   value={form.qPrevExperience}
//                   required
//                   onChange={handleChange}
//                 />

//                 <TextAreaWithLimit
//                   label="What motivates you to volunteer in the health field, and how do you wish to contribute to community health?"
//                   name="qMotivation"
//                   value={form.qMotivation}
//                   required
//                   onChange={handleChange}
//                 />

//                 <TextAreaWithLimit
//                   label="Are you comfortable working around patients, elderly individuals, children, or people with disabilities?"
//                   name="qComfortPatients"
//                   value={form.qComfortPatients}
//                   required
//                   onChange={handleChange}
//                 />

//                 <TextAreaWithLimit
//                   label="Are you available for field visits, medical awareness drives, or health camps?"
//                   name="qFieldVisits"
//                   value={form.qFieldVisits}
//                   required
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             {/* Experience in health field before */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 8. Health Field Experience
//               </h2>

//               <div className="mt-4 space-y-3">
//                 <div className="flex flex-wrap items-center gap-4">
//                   <span className="text-sm font-semibold text-slate-800">
//                     Have you worked or volunteered in the health field before?{" "}
//                     <span className="text-red-500">*</span>
//                   </span>
//                   <label className="inline-flex items-center gap-1 text-sm text-slate-800">
//                     <input
//                       type="radio"
//                       name="workedInHealthBefore"
//                       value="yes"
//                       checked={form.workedInHealthBefore === "yes"}
//                       onChange={(e) =>
//                         handleChange("workedInHealthBefore", e.target.value)
//                       }
//                       className="h-4 w-4 rounded border-slate-400 text-[#138808] focus:ring-[#138808]"
//                     />
//                     Yes
//                   </label>
//                   <label className="inline-flex items-center gap-1 text-sm text-slate-800">
//                     <input
//                       type="radio"
//                       name="workedInHealthBefore"
//                       value="no"
//                       checked={form.workedInHealthBefore === "no"}
//                       onChange={(e) =>
//                         handleChange("workedInHealthBefore", e.target.value)
//                       }
//                       className="h-4 w-4 rounded border-slate-400 text-[#138808] focus:ring-[#138808]"
//                     />
//                     No
//                   </label>
//                 </div>

//                 {form.workedInHealthBefore === "yes" && (
//                   <TextAreaWithLimit
//                     label="If yes, please describe your past roles and responsibilities:"
//                     name="workedRoleDetails"
//                     value={form.workedRoleDetails}
//                     required
//                     onChange={handleChange}
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Contribution areas */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 9. Areas Where You Have Contributed
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 You can tick multiple options.
//               </p>
//               <div className="mt-4 grid gap-2 md:grid-cols-2">
//                 {contributionAreas.map((area) => (
//                   <label
//                     key={area}
//                     className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-800"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={form.contributionAreas.includes(area)}
//                       onChange={() =>
//                         handleMultiCheckbox("contributionAreas", area)
//                       }
//                       className="mt-1 h-4 w-4 rounded border-slate-400 text-[#138808] focus:ring-[#138808]"
//                     />
//                     <span>{area}</span>
//                   </label>
//                 ))}
//               </div>

//               {form.contributionAreas.includes("Other") && (
//                 <div className="mt-3">
//                   <label className="mb-1 block text-xs font-semibold text-slate-800">
//                     If Other, please specify
//                   </label>
//                   <input
//                     type="text"
//                     name="otherContributionArea"
//                     value={form.otherContributionArea}
//                     onChange={handleInputChange}
//                     className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-[#138808] focus:ring-2 focus:ring-[#138808]/40"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Tick all relevant qualifications / training */}
//             <div>
//               <h2 className="text-lg md:text-xl font-bold text-slate-900">
//                 10. Relevant Qualifications / Training
//               </h2>
//               <p className="mt-1 text-xs text-slate-500">
//                 Tick all qualifications or trainings you have received.
//               </p>
//               <div className="mt-4 grid gap-2 md:grid-cols-2">
//                 {healthQualifications.map((q) => (
//                   <label
//                     key={q}
//                     className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm text-slate-800"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={form.qualificationsReceived.includes(q)}
//                       onChange={() =>
//                         handleMultiCheckbox("qualificationsReceived", q)
//                       }
//                       className="mt-1 h-4 w-4 rounded border-slate-400 text-[#138808] focus:ring-[#138808]"
//                     />
//                     <span>{q}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Consent */}
//             <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3">
//               <label className="flex items-start gap-3 text-sm text-slate-800">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   checked={form.consent}
//                   onChange={handleInputChange}
//                   className="mt-0.5 h-4 w-4 rounded border-slate-400 text-[#138808] focus:ring-[#138808]"
//                   required
//                 />
//                 <span>
//                   I confirm that the information provided above is true and
//                   correct to the best of my knowledge. I understand that this is
//                   a volunteer position and I consent to be contacted by Jaago
//                   Manav regarding health-related volunteer opportunities.
//                 </span>
//               </label>
//               <p className="mt-1 text-[11px] text-slate-500">
//                 (This tick box is mandatory. Without it, the submit button is
//                 inactive.)
//               </p>
//             </div>

//             {/* Submit */}
//             <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
//               <button
//                 type="submit"
//                 disabled={!form.consent}
//                 className={`inline-flex items-center justify-center rounded-full px-8 py-2.5 text-sm md:text-base font-semibold shadow-sm transition ${
//                   form.consent
//                     ? "bg-[#FF9933] text-white hover:bg-[#ea860f]"
//                     : "bg-slate-300 text-slate-600 cursor-not-allowed"
//                 }`}
//               >
//                 Submit Health Volunteer Form
//               </button>
//               {submitMessage && (
//                 <p className="text-xs md:text-sm text-slate-700">
//                   {submitMessage}
//                 </p>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
