// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Discovery = [
//   "Identity",
//   "Brand Strategy",
//   "Messaging Positioning",
//   "Reputation Management",
//   "Product Mapping",
//   "Persona Creation",
// ];
// const Strategy = [
//   "Strategy Design",
//   "Brand Awareness",
//   "Strategic Communication",
//   "Analysis/Measurement",
//   "Impact Measurement",
//   "Analytics Implementation",
// ];
// const Digital = [
//   "Search marketing",
//   "Lead Gen",
//   "Media Planning/Buying",
//   "Content Marketing",
//   "Interaction assets Devs",
//   "Nurture Strageties",
// ];
// const Interaction = [
//   "Ui Designing",
//   "User Journey Mapping",
//   "UX  Design",
//   "Interaction Design",
//   "Web Maintenance",
//   "Data Visualization",
// ];

// const Landing = () => {
//   const [dropDownOpen, setDropDownOpen] = useState(false);

//   const toggleDropDown = () => {
//     setDropDownOpen(!dropDownOpen);
//   };

//   return (
//     <section className="">
//       <div className="gap-10 flex flex-col md:flex-row-reverse items-center py-20">
//         <div className="w-[90%] sm:w-[40%] mx-auto overflow-hidden">
//           <img
//             loading="lazy"
//             src="./hero/hero.png"
//             alt="heroImage"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-[90%] sm:w-[40%] mx-auto leading-none">
//           <p className="text-[30px] text-[#727277]">
//             It starts from
//             <br />
//             <h1 className="text-[70px] text-[#1169DA] underline decoration-8 decoration-[#A2C5F3]">
//               Simple Idea
//               <br />
//             </h1>
//             to next unicorn
//           </p>
//         </div>
//       </div>
//       <div className="relative w-full mt-5">
//         <div className="overflow-hidden h-[800px]">
//           <img
//             src="/hero/landing_bg_1.png"
//             alt="image.."
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 flex flex-col sm:flex-row justify-center w-full text-white py-20">
//           <div className="sm:w-[80%] lg:w-[70%] w-full lg:p-4 p-2 text-left flex flex-col">
//             <p>Let's Build Your Brand</p>
//             <h1 className="text-[40px] mb-5 underline underline-offset-[15px] decoration-[#A2C5F3] decoration-2">
//               Beyond Visuals
//             </h1>
//             <p className="w-full">
//               at blucom we create valuable brands for your customers rather than
//               just a simple visual,we exist to put all our effort in not only
//               creating beautiful visuals. but strategic design driven by
//               cultural aesthetics put brands into more known and culturally
//               connected spaces. Let us know what your next idea is?
//             </p>
//             <h1 className="text-[40px] font-semibold mt-5">I Want to...</h1>
//             <div className="relative">
//               <div
//                 className="bg-white w-[100%] flex flex-row justify-between items-center border border-[#9A9A9A] mt-2 cursor-pointer"
//                 onClick={toggleDropDown}
//               >
//                 <p className="p-3 text-[#1E2832]">
//                   Launch a new product or service
//                 </p>
//                 <img
//                   src="./icons/dropDown.png"
//                   alt="dropdown"
//                   className="w-5 h-5 mr-3 mb-2"
//                 />
//               </div>
//               <div
//                 className={`bg-[#F4F4F4] text-[#1E2832]  w-[100%] absolute top-14 flex-col justify-center items-start py-6 px-10 border border-[#9A9A9A] border-t-0 ${
//                   dropDownOpen ? "scale-y-100" : "scale-y-0"
//                 } origin-top transition-transform duration-300 ease-in-out`}
//               >
//                 <p>Identify Concept</p>
//                 <p>UI UX Design</p>
//                 <p>Brand Positioning</p>
//                 <p>Business Plan</p>
//                 <p>Market Research</p>
//                 <p>Digital Marketing</p>
//               </div>
//             </div>
//             <div className="bg-white text-[#5F5F5F] font-bold px-2 py-1 w-[150px] text-center mt-56">
//               Want to Talk?
//             </div>
//           </div>
//         </div>
//       </div>
      // <div className="flex flex-col md:flex-row justify-start text-[#727277] leading-none w-full flex-wrap">
      //   <div className="w-[100%] sm:w-[50%]">
      //     <img
      //       src="./landing/tucson.png"
      //       alt="tucson"
      //       className="w-full h-full"
      //     />
      //   </div>
      //   <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
      //     <p className="text-[24px]">Hyundai Pakistan</p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       TUSCON 2020
      //     </h1>
      //     <div className="flex flex-row text-[18px] mt-5">
      //       <p>#Activation</p>
      //       <p>#Discovery</p>
      //       <p>#Design</p>
      //       <p>#Digital</p>
      //     </div>
      //     <p className="text-[18px] mt-10 leading-normal">
      //       Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new
      //       revolution in the mini SUV Category, our part is to enable the user
      //       to discover the new product, activate the product, digital strategy,
      //       and design collaterals.
      //     </p>
      //   </div>
      // </div>
      // <div className="flex flex-col-reverse md:flex-row justify-end text-[#727277] leading-none w-full  text-end flex-wrap">
      //   <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
      //     <p className="text-[24px]">Codility hub technologies</p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       Interaction Design
      //     </h1>
      //     <div className="flex flex-row text-[18px] mt-5">
      //       <p>#Identity</p>
      //       <p>#Interaction</p>
      //       <p>#Website</p>
      //       <p>#Interface</p>
      //     </div>
      //     <p className="text-[18px] mt-10 leading-normal">
      //       Codility hub came to us just with the name. but an amazing
      //       proposition, well-defined brand, in Tech Sector, focused on core
      //       Development, with an idea of Fast turnaround. we were asked to bring
      //       this idea to life through identity. and interaction.
      //     </p>
      //   </div>
      //   <div className="w-[100%] sm:w-[50%]">
      //   <img
      //     src="./landing/toyota.png"
      //     alt="toyota"
      //     className="w-full h-full"
      //   />
      //   </div>
      // </div>
      // <div className="flex flex-col md:flex-row text-[#727277] leading-none w-full">
      //   <div className="w-[100%] sm:w-[50%]">
      //   <img
      //     src="./landing/interactive_design.png"
      //     alt="interactive_design"
      //     className="w-full h-full"
      //   /></div>
      //   <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
      //     <p className="text-[24px]">Codility hub technologies</p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       Interaction Design
      //     </h1>
      //     <div className="flex flex-row text-[18px] mt-5">
      //       <p>#Identity</p>
      //       <p>#Interaction</p>
      //       <p>#Website</p>
      //       <p>#Interface</p>
      //     </div>
      //     <p className="text-[18px] mt-10 leading-normal">
      //       Codility hub came to us just with the name. but an amazing
      //       proposition, well-defined brand, in Tech Sector, focused on core
      //       Development, with an idea of Fast turnaround. we were asked to bring
      //       this idea to life through identity. and interaction.
      //     </p>
      //   </div>
      // </div>
      // <div className="flex flex-col items-center justify-center py-20 w-[80%] mx-auto">
      //   <div className="flex flex-col m-10 w-full">
      //     <p className="text-[24px]">This is how we make it</p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       Possible
      //     </h1>
      //     <p className="flex flex-row gap-10 text-[18px] mt-5">
      //       Discovery/Strategy/Interaction
      //     </p>
      //   </div>
      //   <div className="flex flex-row flex-wrap gap-10 w-full text-[20px] text-[#727277]">
      //     <div className="flex flex-col gap-10">
      //       <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
      //         Discovery
      //       </h1>
      //       {Discovery.map((items, index) => (
      //         <p
      //           key={index}
      //           className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
      //         >
      //           {items}
      //         </p>
      //       ))}
      //     </div>
      //     <div className="flex flex-col gap-10">
      //       <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
      //         Strategy
      //       </h1>
      //       {Strategy.map((items, index) => (
      //         <p
      //           key={index}
      //           className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
      //         >
      //           {items}
      //         </p>
      //       ))}
      //     </div>
      //     <div className="flex flex-col gap-10">
      //       <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
      //         Digital
      //       </h1>
      //       {Digital.map((items, index) => (
      //         <p
      //           key={index}
      //           className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
      //         >
      //           {items}
      //         </p>
      //       ))}
      //     </div>
      //     <div className="flex flex-col gap-10">
      //       <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
      //         Interaction
      //       </h1>
      //       {Interaction.map((items, index) => (
      //         <p
      //           key={index}
      //           className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
      //         >
      //           {items}
      //         </p>
      //       ))}
      //     </div>
      //   </div>
      //   <button className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10">
      //     Read More
      //   </button>
      // </div>
      // <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
      //   <div className="flex flex-col justify-start items-center m-10 w-auto">
      //     <p className="text-[24px]">Get used to industry</p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       Insights
      //     </h1>
      //     <p className="flex flex-row text-[18px] mt-5">
      //       As a guiding light for the brands
      //     </p>
      //   </div>
      //   <div className="flex flex-row gap-5 justify-center flex-wrap">
      //     <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
      //       <p className="underline decoration-[#1E2832]/30 decoration-2">
      //         INSIGHTS
      //       </p>
      //       <img
      //         src="./landing/insight1.jpg"
      //         alt="insight"
      //         className="w-[600px] h-[350px]"
      //       />
      //       <p className="text-[30px]">
      //         Why attention economy is becoming new ecomony, and how brands can
      //         take leverage
      //       </p>
      //       <p className="text-[18px]">
      //         Attention economics is an approach to the management of
      //         information that treats human attention as a scarce commodity and
      //         applies econom ic theory to solve various information management
      //         problems
      //       </p>
      //       <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
      //         Read Report
      //       </button>
      //     </div>
      //     <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
      //       <p className="underline decoration-[#1E2832]/30 decoration-2">
      //         INSIGHTS
      //       </p>
      //       <img
      //         src="./landing/insight2.jpg"
      //         alt="insight"
      //         className="w-[600px] h-[350px]"
      //       />
      //       <p className="text-[30px]">
      //         The art of visual communication, how visual grammer can be
      //         utilized by the brands
      //       </p>
      //       <p className="text-[18px]">
      //         Attention economics is an approach to the management of
      //         information that treats human attention as a scarce commodity and
      //         applies econom ic theory to solve various information management
      //         problems
      //       </p>
      //       <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
      //         Read Report
      //       </button>
      //     </div>
      //   </div>
      //   <Link
      //     to={`/blogsingle`}
      //     className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10"
      //   >
      //     Read More
      //   </Link>
      // </div>
      // <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
      //   <div className="flex flex-col justify-start items-center m-10 w-auto">
      //     <p className="text-[24px]">Industry news and what's </p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       Happening
      //     </h1>
      //     <p className="flex flex-row text-[18px] mt-5">
      //       As a guiding light for the brands
      //     </p>
      //   </div>
      //   <div className="flex flex-row gap-5 justify-center flex-wrap">
      //     <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
      //       <img
      //         src="./icons/forbes_logo.png"
      //         alt="forbes logo"
      //         className="w-[80px] h-[30px]"
      //       />
      //       <img
      //         src="./landing/news1.png"
      //         alt="insight"
      //         className="w-[600px] h-[350px]"
      //       />
      //       <p className="text-[30px]">
      //         Rideshare Advertising To A New Outdoor World
      //       </p>
      //       <p className="text-[18px]">
      //         Attention economics is an approach to the management of
      //         information that treats human attention as a scarce commodity and
      //         applies econom ic theory to solve various information management
      //         problems
      //       </p>
      //       <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
      //         Read Report
      //       </button>
      //     </div>
      //     <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
      //       <img
      //         src="./icons/adobe_logo_1.png"
      //         alt="adobe logo"
      //         className="w-[70px] h-[30px]"
      //       />
      //       <img
      //         src="./landing/news2.png"
      //         alt="insight"
      //         className="w-[600px] h-[350px]"
      //       />
      //       <p className="text-[30px]">
      //         12 Must-Attend Trade Conferences For Agency Professionals
      //       </p>
      //       <p className="text-[18px]">
      //         Attention economics is an approach to the management of
      //         information that treats human attention as a scarce commodity and
      //         applies econom ic theory to solve various information management
      //         problems
      //       </p>
      //       <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
      //         Read Report
      //       </button>
      //     </div>
      //   </div>
      //   <Link
      //     to={`/blogsingle`}
      //     className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10"
      //   >
      //     Read More
      //   </Link>
      // </div>
      // <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
      //   <div className="flex flex-col justify-start items-center m-10 w-auto">
      //     <p className="text-[24px]">Have and idea? lets talk!</p>
      //     <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
      //       What you're Thinking?
      //     </h1>
      //   </div>
      //   <form
      //     action=""
      //     className="flex flex-col gap-10 w-full max-w-[1300px] px-10"
      //   >
      //     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
      //       <input
      //         type="text"
      //         className="landingInput"
      //         placeholder="First Name*"
      //       />
      //       <input
      //         type="text"
      //         className="landingInput"
      //         placeholder="Last Name*"
      //       />
      //       <input type="email" className="landingInput" placeholder="Email*" />
      //       <input
      //         type="text"
      //         className="landingInput"
      //         placeholder="Company Name*"
      //       />
      //     </div>
      //     <input type="text" className="landingInput" placeholder="YourTitle" />
      //     <textarea
      //       name=""
      //       id=""
      //       cols="5"
      //       className="landingInput"
      //       placeholder="What you want to say?"
      //     />
      //     <button
      //       type="submit"
      //       className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10 max-w-[200px]"
      //     >
      //       Submit
      //     </button>
      //   </form>
      // </div>
//     </section>
//   );
// };

// export default Landing;



import { useState } from "react";
import { Link } from "react-router-dom";

const dropdownOptions = [
  "Identify Concept",
  "UI/UX Design",
  "Brand Positioning",
  "Business Plan",
  "Market Research",
  "Digital Marketing",
];
const Discovery = [
  "Identity",
  "Brand Strategy",
  "Messaging Positioning",
  "Reputation Management",
  "Product Mapping",
  "Persona Creation",
];
const Strategy = [
  "Strategy Design",
  "Brand Awareness",
  "Strategic Communication",
  "Analysis/Measurement",
  "Impact Measurement",
  "Analytics Implementation",
];
const Digital = [
  "Search marketing",
  "Lead Gen",
  "Media Planning/Buying",
  "Content Marketing",
  "Interaction assets Devs",
  "Nurture Strageties",
];
const Interaction = [
  "Ui Designing",
  "User Journey Mapping",
  "UX  Design",
  "Interaction Design",
  "Web Maintenance",
  "Data Visualization",
];

const Landing = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };
  // const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
  
    const nextStep = () => {
      if (currentStep < 4) setCurrentStep(currentStep + 1);
    };
  
    const prevStep = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    //form data
  //   const [isSelected, setIsSelected] = useState(false);

  // const handleSelectChange = (e) => {
  //   const selectedOptions = Array.from(e.target.selectedOptions).map(
  //     (option) => option.value
  //   );
  //   const newData = selectedOptions.reduce(
  //     (acc, option) => ({
  //       ...acc,
  //       [option]: true,
  //     }),
  //     {}
  //   );
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     businessSetup: newData,
  //   }));

  //   setIsSelected(selectedOptions.length > 0);
  // };
  //mutistep logic
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
// const Landing = () => {
//   const [dropDownOpen, setDropDownOpen] = useState(false);

//   const toggleDropDown = () => {
//     setDropDownOpen((prev) => !prev);
//   };
  
  return (
    <section className="">
      {/* Hero Section */}
      <div className="gap-10 flex flex-col md:flex-row-reverse items-center py-20">
        <div className="w-[90%] sm:w-[40%] mx-auto overflow-hidden">
          <img
            loading="lazy"
            src="./hero/hero.png"
            alt="heroImage"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[90%] sm:w-[40%] mx-auto leading-none">
          <p className="text-[30px] text-[#727277]">
            It Starts From
            <br />
            <h1 className="text-[70px] text-[#1169DA] underline decoration-8 decoration-[#A2C5F3]">
              Simple Idea
              <br />
            </h1>
            to next unicorn
          </p>
        </div>
      </div>

      {/* Dropdown Section */}
      <div className="flex max-w-5xl mx-auto mt-10 font-sans mb-20">
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
              {/* <div className="relative">
              <div
                className="bg-white w-[100%] flex flex-row justify-between items-center border border-[#9A9A9A] mt-2 cursor-pointer"
                onClick={toggleDropDown}
              >
                <p className="p-3 text-[#1E2832]">
                  Launch a new product or service
                </p>
                <img
                  src="./icons/dropDown.png"
                  alt="dropdown"
                  className="w-5 h-5 mr-3 mb-2"
                />
              </div>
              <div
                className={`bg-[#F4F4F4] text-[#1E2832] w-[100%] absolute top-14 flex-col justify-center items-start py-6 px-10 border border-[#9A9A9A] border-t-0 ${
                  dropDownOpen ? "scale-y-100" : "scale-y-0"
                } origin-top transition-transform duration-300 ease-in-out`}
              >
                {dropdownOptions.map((option, index) => (
                  <Link
                    key={index}
                    // to={`/${option.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block py-2 text-[#1E2832] hover:text-[#1169DA] transition-colors"
                  >
                    {option}
                  </Link>
                ))}
              </div>
            </div> */}
            {/* <select
        id="business-setup"
        name="businessSetup"
        multiple
        value={Object.keys(formData.businessSetup).filter(
          (key) => formData.businessSetup[key]
        )}
        onChange={handleSelectChange}
      >
        <option value="identityConcept">Identity Concept</option>
        <option value="uiUxDesign">UI/UX Design</option>
        <option value="brandPositioning">Brand Positioning</option>
        <option value="businessPlan">Business Plan</option>
        <option value="marketResearch">Market Research</option>
        <option value="digitalMarketing">Digital Marketing</option>
      </select> */}
          </div>
        )}
        {currentStep === 2 && (
          <div className="grid grid-cols-2 gap-4">
            <h2 className="text-xl font-bold text-purple-600 mb-4">Data Mapping</h2>
            <p className="text-sm text-gray-500 mb-4">Select and map the data fields.</p>
            <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Something"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Something"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Something"
                className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-purple-600"
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
      {/* <div className="relative w-full mt-5">
        <div className="overflow-hidden h-[800px]">
          <img
            src="/hero/landing_bg_1.png"
            alt="Landing Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center w-full text-white py-20">
          <div className="sm:w-[80%] lg:w-[70%] w-full lg:p-4 p-2 text-left flex flex-col">
            <p>Let's Build Your Brand</p>
            <h1 className="text-[40px] mb-5 underline underline-offset-[15px] decoration-[#A2C5F3] decoration-2">
              Beyond Visuals
            </h1>
            <p className="w-full">
              At Blucom, we create valuable brands for your customers rather
              than just simple visuals. We exist to put all our effort into
              creating strategic design driven by cultural aesthetics, placing
              brands into more known and culturally connected spaces. Let us
              know what your next idea is!
            </p>
            <h1 className="text-[40px] font-semibold mt-5">I Want to...</h1>
            <div className="relative">
              <div
                className="bg-white w-[100%] flex flex-row justify-between items-center border border-[#9A9A9A] mt-2 cursor-pointer"
                onClick={toggleDropDown}
              >
                <p className="p-3 text-[#1E2832]">
                  Launch a new product or service
                </p>
                <img
                  src="./icons/dropDown.png"
                  alt="dropdown"
                  className="w-5 h-5 mr-3 mb-2"
                />
              </div>
              <div
                className={`bg-[#F4F4F4] text-[#1E2832] w-[100%] absolute top-14 flex-col justify-center items-start py-6 px-10 border border-[#9A9A9A] border-t-0 ${
                  dropDownOpen ? "scale-y-100" : "scale-y-0"
                } origin-top transition-transform duration-300 ease-in-out`}
              >
                {dropdownOptions.map((option, index) => (
                  <Link
                    key={index}
                    to={`/${option.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block py-2 text-[#1E2832] hover:text-[#1169DA] transition-colors"
                  >
                    {option}
                  </Link>
                ))}
              </div>
            </div>
            <button className="bg-white text-[#5F5F5F] font-bold px-2 py-1 w-[150px] text-center mt-56">
              Want to Talk?
            </button>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row justify-start text-[#727277] leading-none w-full flex-wrap">
        <div className="w-[100%] sm:w-[50%]">
          <img
            src="./landing/tucson.png"
            alt="tucson"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
          <p className="text-[24px]">Hyundai Pakistan</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            TUSCON 2020
          </h1>
          <div className="flex flex-row text-[18px] mt-5">
            <p>#Activation</p>
            <p>#Discovery</p>
            <p>#Design</p>
            <p>#Digital</p>
          </div>
          <p className="text-[18px] mt-10 leading-normal">
            Hyundai Pakistan launched a newly launched Hyundai Tuscon is a new
            revolution in the mini SUV Category, our part is to enable the user
            to discover the new product, activate the product, digital strategy,
            and design collaterals.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-end text-[#727277] leading-none w-full  text-end flex-wrap">
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
          <p className="text-[24px]">Codility hub technologies</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Interaction Design
          </h1>
          <div className="flex flex-row text-[18px] mt-5">
            <p>#Identity</p>
            <p>#Interaction</p>
            <p>#Website</p>
            <p>#Interface</p>
          </div>
          <p className="text-[18px] mt-10 leading-normal">
            Codility hub came to us just with the name. but an amazing
            proposition, well-defined brand, in Tech Sector, focused on core
            Development, with an idea of Fast turnaround. we were asked to bring
            this idea to life through identity. and interaction.
          </p>
        </div>
        <div className="w-[100%] sm:w-[50%]">
        <img
          src="./landing/toyota.png"
          alt="toyota"
          className="w-full h-full"
        />
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-[#727277] leading-none w-full">
        <div className="w-[100%] sm:w-[50%]">
        <img
          src="./landing/interactive_design.png"
          alt="interactive_design"
          className="w-full h-full"
        /></div>
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[50%] p-8">
          <p className="text-[24px]">Codility hub technologies</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Interaction Design
          </h1>
          <div className="flex flex-row text-[18px] mt-5">
            <p>#Identity</p>
            <p>#Interaction</p>
            <p>#Website</p>
            <p>#Interface</p>
          </div>
          <p className="text-[18px] mt-10 leading-normal">
            Codility hub came to us just with the name. but an amazing
            proposition, well-defined brand, in Tech Sector, focused on core
            Development, with an idea of Fast turnaround. we were asked to bring
            this idea to life through identity. and interaction.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-20 w-[80%] mx-auto">
        <div className="flex flex-col m-10 w-full">
          <p className="text-[24px]">This is how we make it</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Possible
          </h1>
          <p className="flex flex-row gap-10 text-[18px] mt-5">
            Discovery/Strategy/Interaction
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-10 w-full text-[20px] text-[#727277]">
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Discovery
            </h1>
            {Discovery.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Strategy
            </h1>
            {Strategy.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Digital
            </h1>
            {Digital.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-black underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]">
              Interaction
            </h1>
            {Interaction.map((items, index) => (
              <p
                key={index}
                className="underline underline-offset-[15px] decoration-2 decoration-[#C4C4C4]"
              >
                {items}
              </p>
            ))}
          </div>
        </div>
        <button className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10">
          Read More
        </button>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Get used to industry</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Insights
          </h1>
          <p className="flex flex-row text-[18px] mt-5">
            As a guiding light for the brands
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-center flex-wrap">
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <p className="underline decoration-[#1E2832]/30 decoration-2">
              INSIGHTS
            </p>
            <img
              src="./landing/insight1.jpg"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              Why attention economy is becoming new ecomony, and how brands can
              take leverage
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <p className="underline decoration-[#1E2832]/30 decoration-2">
              INSIGHTS
            </p>
            <img
              src="./landing/insight2.jpg"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              The art of visual communication, how visual grammer can be
              utilized by the brands
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
        </div>
        <Link
          to={`/blogsingle`}
          className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Industry news and what's </p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            Happening
          </h1>
          <p className="flex flex-row text-[18px] mt-5">
            As a guiding light for the brands
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-center flex-wrap">
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <img
              src="./icons/forbes_logo.png"
              alt="forbes logo"
              className="w-[80px] h-[30px]"
            />
            <img
              src="./landing/news1.png"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              Rideshare Advertising To A New Outdoor World
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
          <div className="flex flex-col gap-5 justify-start items-start max-w-[600px]">
            <img
              src="./icons/adobe_logo_1.png"
              alt="adobe logo"
              className="w-[70px] h-[30px]"
            />
            <img
              src="./landing/news2.png"
              alt="insight"
              className="w-[600px] h-[350px]"
            />
            <p className="text-[30px]">
              12 Must-Attend Trade Conferences For Agency Professionals
            </p>
            <p className="text-[18px]">
              Attention economics is an approach to the management of
              information that treats human attention as a scarce commodity and
              applies econom ic theory to solve various information management
              problems
            </p>
            <button className="font-bold text-[20px] underline decoration-[#1E2832]/30 decoration-2">
              Read Report
            </button>
          </div>
        </div>
        <Link
          to={`/blogsingle`}
          className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-col items-center py-20 px-10 md:px-0 text-[#727277]">
        <div className="flex flex-col justify-start items-center m-10 w-auto">
          <p className="text-[24px]">Have and idea? lets talk!</p>
          <h1 className="text-[60px] text-[#156DDF] underline decoration-[#1E2832] decoration-4">
            What you're Thinking?
          </h1>
        </div>
        <form
          action=""
          className="flex flex-col gap-10 w-full max-w-[1300px] px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
            <input
              type="text"
              className="landingInput"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="landingInput"
              placeholder="Last Name*"
            />
            <input type="email" className="landingInput" placeholder="Email*" />
            <input
              type="text"
              className="landingInput"
              placeholder="Company Name*"
            />
          </div>
          <input type="text" className="landingInput" placeholder="YourTitle" />
          <textarea
            name=""
            id=""
            cols="5"
            className="landingInput"
            placeholder="What you want to say?"
          />
          <button
            type="submit"
            className="bg-[#5F5F5F] text-white underline underline-offset-4 decoration-white/50 px-5 py-1 text-[30px] font-bold mt-10 max-w-[200px]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};


export default Landing;
