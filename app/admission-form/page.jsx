import React from "react";

const AdmissionForm = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className=" mx-auto">
        <div className="flex items-center mb-8   px-4 py-8">
          <div className="flex items-center space-x-2">
            <span className="text-[#FF0076] text-xl">←</span>
            <span className="text-[#FF0076] font-medium">BACK</span>
          </div>
          <div className="flex-grow text-right">
            <span className="text-blue-600 font-bold text-2xl">
              ADMISSION ENQUIRY
            </span>
          </div>
        </div>

        <form className="bg-gray-100 space-y-4 p-12">
          <div className="flex items-center">
            <label className="w-64 text-gray-500">Name of Applicant</label>
            <input type="text" className="flex-1 p-2 border rounded bg-white" />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-gray-500">Date of Birth</label>
            <input
              type="text"
              placeholder="    /    /"
              className="w-48 p-2 border rounded bg-white mr-8"
            />
            <label className="w-48 text-gray-500">Class to be Admitted</label>
            <input type="text" className="w-48 p-2 border rounded bg-white" />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-gray-500">Gender</label>
            <div className="flex space-x-8">
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                <span className="text-gray-500">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                <span className="text-gray-500">Female</span>
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <label className="w-64 text-gray-500">Mode of Enrollment</label>
            <div className="flex space-x-8">
              <label className="flex items-center">
                <input type="radio" name="mode" className="mr-2" />
                <span className="text-gray-500">Day Scholar</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="mode" className="mr-2" />
                <span className="text-gray-500">Boarding</span>
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <label className="w-64 text-gray-500">
              Name of Father / Guardian
            </label>
            <input type="text" className="flex-1 p-2 border rounded bg-white" />
          </div>

          <div className="flex items-start">
            <label className="w-64 text-gray-500">Address</label>
            <textarea className="flex-1 p-2 border rounded bg-white h-32" />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-gray-500">Mobile No</label>
            <input type="tel" className="flex-1 p-2 border rounded bg-white" />
          </div>

          <div className="flex items-center">
            <label className="w-64 text-gray-500">Email ID</label>
            <input
              type="email"
              className="flex-1 p-2 border rounded bg-white"
            />
          </div>

          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="bg-[#FF0076] text-white mt-8 px-8 py-2 rounded hover:bg-[#FF0076]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
