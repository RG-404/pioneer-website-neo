import React from "react";

const Bottom = ({heading,subHeading}) => {
  return (
    <div className="px-12 py-10  border-b-2 border-dashed border-gray-200 ">
      <div className="py-10">
        <div className="border-[#D9D9D9] border-2 rounded-3xl w-[200px] text-center mb-3">
          {heading}
        </div>
        <div className="py-6">
          <p className="text-[30px]">{subHeading}</p>
          <p className="text-[18px] text-[#9C9C9C] pt-4">
            The must have essential software to run operations in a trusted
            clinic.<br/> From your local general clinic to super speciality clinics.
          </p>
        </div>
      </div>
      <div className="bg-amber-400 w-full h-[500px]" >
        

      </div>
    </div>
  );
};

export default Bottom;
