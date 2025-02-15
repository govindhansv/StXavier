"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react"; // Import useState
import ContactFooter from "../components/ContactFooter";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    classToBeAdmitted: '',
    gender: '',
    mode: '',
    guardianName: '',
    address: '',
    mobile: '',
    email: '',
    accessKey: '006037a4-a0f9-4bb7-9e2f-d433aef27004',
    redirectTo: 'http://localhost:3000/admissions'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const json = await res.json();
  
      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Your submission has been received. Thank you!'
        });
        // Optionally reset the form
        setFormData({
          name: '',
          dob: '',
          classToBeAdmitted: '',
          gender: '',
          mode: '',
          guardianName: '',
          address: '',
          mobile: '',
          email: '',
          accessKey: '006037a4-a0f9-4bb7-9e2f-d433aef27004',
          redirectTo: 'http://localhost:3000/admissions'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message || 'An error occurred. Please try again.'
        });
      }
    } catch (e) {
      console.error('An error occurred', e);
      setResponse({
        type: 'error',
        message: e.message || 'An error occurred while submitting the form.'
      });
    }
  };
  
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mx-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white lg:py-6">
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

          <form onSubmit={handleSubmit} className="bg-gray-100 space-y-6 p-4 sm:p-8 lg:px-36">
            <input type="hidden" name="accessKey" value={formData.accessKey} />

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Name of Applicant</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="sm:w-64 text-gray-500">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full sm:w-48 p-2 border rounded bg-white"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="sm:w-48 text-gray-500">Class to be Admitted</label>
                <input
                  type="text"
                  name="classToBeAdmitted"
                  value={formData.classToBeAdmitted}
                  onChange={handleChange}
                  className="w-full sm:w-48 p-2 border rounded bg-white"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Gender</label>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-gray-500">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-gray-500">Female</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Mode of Enrollment</label>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="Day Scholar"
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-gray-500">Day Scholar</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="Boarding"
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-gray-500">Boarding</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Name of Father / Guardian</label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <label className="sm:w-64 text-gray-500">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white h-32"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
              />
            </div>

            <input type="hidden" name="redirectTo" value={formData.redirectTo} />

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#FF0076] text-white px-8 py-2 rounded hover:bg-[#FF0076] font-bold w-full sm:w-auto"
              >
                Submit
              </button>
            </div>

            {response.message && (
              <div className={`mt-4 p-4 rounded ${response.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {response.message}
              </div>
            )}
          </form>
        </div>
      </div>
      <ContactFooter />
    </>
  );
};

export default AdmissionForm;
