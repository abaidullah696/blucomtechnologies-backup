// import React, { useState } from "react";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
// import Step5 from "./Step5";
// import Step6 from "./Step6";
// import Step7 from "./Step7";
// import Step8 from "./Step8";
// import UserInfo from "./UserInfo";

// const MultiStepForm = () => {
  // const [step, setStep] = useState(1);
  // const [formData, setFormData] = useState({
  //   businessSetup: {},
  //   skills: {},
  //   preferences: {},
  //   branding: {},
  //   onlinePresence: {},
  //   marketingStrategy: {},
  //   budgetPlanning: {},
  //   userInfo: {
  //     industry: "",
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     contact: "",
  //     message: "",
  //   },
  // });

  // const nextStep = () => setStep((prevStep) => prevStep + 1);
  // const prevStep = () => setStep((prevStep) => prevStep - 1);

  // const handleFormSubmit = () => {
  //   alert("Form submitted! Check your email for details.");
  // };

  // switch (step) {
  //   case 1:
  //     return (
  //       <Step1
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //       />
  //     );
  //   case 2:
  //     return (
  //       <Step2
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 3:
  //     return (
  //       <Step3
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 4:
  //     return (
  //       <Step4
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 5:
  //     return (
  //       <Step5
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 6:
  //     return (
  //       <Step6
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 7:
  //     return (
  //       <Step7
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 8:
  //     return (
  //       <Step8
  //         formData={formData}
  //         setFormData={setFormData}
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //       />
  //     );
  //   case 9:
  //     return (
  //       <UserInfo
  //         formData={formData}
  //         setFormData={setFormData}
  //         prevStep={prevStep}
  //         submitForm={handleFormSubmit}
  //       />
  //     );
  //   default:
  //     return (
  //       <div>
  //         <h2>Review and Submit</h2>
  //         <button onClick={prevStep}>Back</button>
  //         <button onClick={handleFormSubmit}>Submit Form</button>
  //       </div>
  //     );
  // }
// };

// export default MultiStepForm;

















// import React, { useState } from "react";

// const MultiStepForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const steps = [
//     "Import Files",
//     "Data Mapping",
//     "Entity Mapping",
//     "Summary",
//   ];

//   const nextStep = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const renderStepContent = () => {
//     switch (currentStep) {
//       case 1:
//         return <div>Step 1: Import Files - Browse and upload</div>;
//       case 2:
//         return <div>Step 2: Data Mapping - Select and map data</div>;
//       case 3:
//         return (
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">Select Name</label>
//               <input
//                 type="text"
//                 placeholder="Anderson"
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Grade</label>
//               <input
//                 type="text"
//                 placeholder="Enter Grade"
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Section</label>
//               <input
//                 type="text"
//                 placeholder="Enter Section"
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//           </div>
//         );
//       case 4:
//         return <div>Step 4: Summary - Review and Confirm</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-xl font-semibold mb-4">Example with Steps UI</h2>
//       <p className="text-gray-600 mb-6">
//         Follow the simple {steps.length} steps to complete your mapping
//       </p>
//       <div className="flex">
//         {/* Sidebar with steps */}
//         <div className="w-1/4">
//           <ul>
//             {steps.map((step, index) => (
//               <li
//                 key={index}
//                 className={`flex items-center mb-4 ${
//                   index + 1 <= currentStep
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-400"
//                 }`}
//               >
//                 <span
//                   className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
//                     index + 1 === currentStep
//                       ? "border-purple-600 bg-purple-600 text-white"
//                       : "border-gray-400"
//                   }`}
//                 >
//                   {index + 1}
//                 </span>
//                 <span className="ml-2">{step}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Step content */}
//         <div className="w-3/4 pl-8">
//           <h3 className="text-lg font-bold text-purple-600 mb-4">
//             {steps[currentStep - 1]}
//           </h3>
//           {renderStepContent()}

//           {/* Navigation buttons */}
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={prevStep}
//               disabled={currentStep === 1}
//               className={`px-4 py-2 rounded ${
//                 currentStep === 1
//                   ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray"
//               }`}/>
//               </div>
//               </div>
//               </div>
//               </div>
//   )











import React, { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex max-w-5xl mx-auto mt-10 font-sans">
      {/* Sidebar */}
      <div className="w-1/3 pr-8 border-r">
        <h3 className="text-lg font-semibold mb-2">Example with Steps UI</h3>
        <p className="text-sm text-gray-500 mb-6">
          Follow the simple 4 steps to complete your mapping
        </p>
        <ul className="space-y-6">
          <li className={`relative pl-8 ${currentStep >= 1 ? "text-gray-800" : "text-gray-400"}`}>
            <span
              className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              1
            </span>
            Import Files
          </li>
          <li className={`relative pl-8 ${currentStep >= 2 ? "text-gray-800" : "text-gray-400"}`}>
            <span
              className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              2
            </span>
            Data Mapping
          </li>
          <li className={`relative pl-8 ${currentStep >= 3 ? "text-gray-800" : "text-gray-400"}`}>
            <span
              className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep === 3 ? "bg-purple-600 text-white" : currentStep > 3 ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              3
            </span>
            Entity Mapping
          </li>
          <li className={`relative pl-8 ${currentStep >= 4 ? "text-gray-800" : "text-gray-400"}`}>
            <span
              className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep === 4 ? "bg-purple-600 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              4
            </span>
            Summary
          </li>
        </ul>
      </div>

      {/* Form Content */}
      <div className="w-2/3 pl-8">
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Import Files</h2>
            <p className="text-sm text-gray-500 mb-4">Browse and upload files to begin.</p>
            <input
              type="file"
              className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-purple-600"
            />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Data Mapping</h2>
            <p className="text-sm text-gray-500 mb-4">Select and map the data fields.</p>
            <input
              type="text"
              placeholder="Enter Data Field"
              className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-purple-600"
            />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Entity Mapping</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Grade"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Section"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Summary</h2>
            <p className="text-sm text-gray-500">Review and confirm your entries.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-gray-300 rounded text-gray-600 hover:bg-gray-400 disabled:cursor-not-allowed disabled:bg-gray-200"
          >
            Prev
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === 4}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-purple-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
