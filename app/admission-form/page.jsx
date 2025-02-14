import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import ContactFooter from "../components/ContactFooter";

const AdmissionForm = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mx-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white  lg:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-36">
              <div className="flex flex-col sm:flex-row sm:items-center py-4 sm:h-16 gap-4 sm:gap-0">
                <Link href="/admissions">
                  <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-pink-600 mr-2" />
                    <span className="font-medium">BACK</span>
                  </button>
                </Link>

                <h1 className="text-xl md:text-2xl font-bold text-blue-600 sm:ml-auto">
                  ADMISSION ENQUIRY
                </h1>
              </div>
            </div>
          </div>

          <form className="bg-gray-100 space-y-6 p-4 sm:p-8 lg:px-36">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Name of Applicant</label>
              <input
                type="text"
                className="w-full sm:flex-1 p-2 border rounded bg-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="sm:w-64 text-gray-500">Date of Birth</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full sm:w-48 p-2 border rounded bg-white"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="sm:w-48 text-gray-500">
                  Class to be Admitted
                </label>
                <input
                  type="text"
                  className="w-full sm:w-48 p-2 border rounded bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Gender</label>
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">
                Mode of Enrollment
              </label>
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">
                Name of Father / Guardian
              </label>
              <input
                type="text"
                className="w-full sm:flex-1 p-2 border rounded bg-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <label className="sm:w-64 text-gray-500">Address</label>
              <textarea className="w-full sm:flex-1 p-2 border rounded bg-white h-32" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Mobile No</label>
              <input
                type="tel"
                className="w-full sm:flex-1 p-2 border rounded bg-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Email ID</label>
              <input
                type="email"
                className="w-full sm:flex-1 p-2 border rounded bg-white"
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#FF0076] text-white px-8 py-2 rounded hover:bg-[#FF0076] font-bold w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ContactFooter />
    </>
  );
};

export default AdmissionForm;
