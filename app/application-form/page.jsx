// app/application-form/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactFooter from "../components/ContactFooter";

export default function ApplicationForm() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto">
        <div className="sticky top-0 z-10 bg-white shadow-sm lg:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32">
            <div className="flex flex-col sm:flex-row sm:items-center py-4 sm:h-16 gap-4 sm:gap-0">
              <Link href="/admissions">
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <ArrowLeft className="w-5 h-5 text-pink-600 mr-2" />
                  <span className="font-medium">BACK</span>
                </button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-blue-600 sm:ml-auto">
                Application Form
              </h1>
            </div>
          </div>
        </div>

        <form className="p-4 sm:p-12 m-auto lg:px-40 mb-12">
          <div className="grid grid-cols-1 gap-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Name of Applicant</label>
              <input
                type="text"
                placeholder="Student's Name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Name of Father</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Occupation</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Name of Mother</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Occupation</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Date of Birth and Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Date of Birth</label>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,2fr] gap-4">
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <label className="text-gray-600">Gender</label>
                  <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Class and Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Class to be Admitted</label>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,2fr] gap-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <label className="text-gray-600">Mode of Enrollment</label>
                  <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Boarding</option>
                    <option>Day Scholar</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Dietary Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Dietary Preference</label>
              <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
              </select>
            </div>

            {/* Nationality */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Nationality</label>
              <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Nationality</option>
                {/* Add more nationality options */}
              </select>
            </div>

            {/* Religion and Caste */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Religion</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Religion</option>
                  {/* Add religion options */}
                </select>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Caste</option>
                  {/* Add caste options */}
                </select>
              </div>
            </div>

            {/* Last School Information */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Last School Attended</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Reason for Leaving School</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">
                Medium of instruction of last school attended
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Contact Address</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Village / City</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Taluk</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">District</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">State</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Country and Postal Code */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Country</label>
              <div className="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <label className="text-gray-600">Postal Code</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Contact Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">Contact No.</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Mobile"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Landline (with STD Code)"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4 mb-6">
              <label className="text-gray-600">For Emergency</label>
              <input
                type="text"
                placeholder="Name of Contact Person and Contact Number"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Attachments Section */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start gap-4 mb-8">
              <label className="text-gray-600">Attachments</label>
              <div className="bg-white p-4 sm:p-6 space-y-6">
                {/* Applicant's Photo Upload */}
                <div className="bg-white border-b border-gray-200 pb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="space-y-1 w-full sm:w-auto sm:mr-24">
                      <h3 className="text-[20px] text-gray-600 font-medium">
                        APPLICANT'S PHOTO
                      </h3>
                      <p className="text-gray-400 text-sm">
                        File name will appear here after uploading
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 py-2.5 bg-[#8B8B8F] text-white text-lg font-medium rounded">
                        UPLOAD
                      </button>
                      <div className="w-8 h-8 bg-[#8BC34A] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caste Certificate Upload */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="space-y-1 w-full sm:w-auto sm:mr-24">
                      <h3 className="text-[20px] text-gray-600 font-medium">
                        CASTE CERTIFICATE
                      </h3>
                      <p className="text-gray-400 text-sm">
                        File name will appear here after uploading
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 py-2.5 bg-[#8B8B8F] text-white text-lg font-medium rounded">
                        UPLOAD
                      </button>
                      <div className="w-8 h-8 bg-[#8BC34A] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transfer Certificate Upload */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="space-y-1 w-full sm:w-auto sm:mr-24">
                      <h3 className="text-[20px] text-gray-600 font-medium">
                        TRANSFER CERTIFICATE
                      </h3>
                      <p className="text-gray-400 text-sm">
                        File name will appear here after uploading
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 py-2.5 bg-[#8B8B8F] text-white text-lg font-medium rounded">
                        UPLOAD
                      </button>
                      <div className="w-8 h-8 bg-[#8BC34A] rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-6 mb-6">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2 bg-[#FF0076] font-bold text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ContactFooter />
    </div>
  );
}
