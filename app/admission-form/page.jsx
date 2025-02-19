"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ContactFooter from "../components/ContactFooter";

const AdmissionForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "ADMISSION ENQUIRY",
    honeypot: "",
    $dob: "",
    $classToBeAdmitted: "",
    $guardianName: "",
    $address: "",
    $mobile: "",
    $mode: "",
    $gender: "",
    $attachment: "",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const data = await res.json();

      if (data.success) {
        setResponse({
          type: "success",
          message: "Thank you for your submission!",
        });
        setContact({
          name: "",
          email: "",
          subject: "ADMISSION ENQUIRY",
          honeypot: "",
          $dob: "",
          $classToBeAdmitted: "",
          $guardianName: "",
          $address: "",
          $mobile: "",
          $mode: "",
          $gender: "",
          $attachment: "",
        });
      } else {
        setResponse({
          type: "error",
          message: "There was an error sending your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse({
        type: "error",
        message: "An error occurred while submitting the form.",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mx-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white lg:py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
              <div className="flex flex-col sm:flex-row sm:items-center py-4 sm:h-16 gap-4 sm:gap-0">
                <Link href="/admissions">
                  <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                    <ArrowLeft className="w-6 h-6 lg:w-7 lg:h-7 text-pink-600 mr-2" />
                    <span className="text-base lg:text-xl font-bold">BACK</span>
                  </button>
                </Link>

                <h1 className="text-xl md:text-2xl font-bold text-blue-600 sm:ml-auto">
                  ADMISSION ENQUIRY
                </h1>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 space-y-6 p-4 sm:p-8 lg:px-36"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Name of Applicant</label>
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
              />
            </div>

            <div className="field" style={{ display: "none" }}>
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="sm:w-64 text-gray-500">Date of Birth</label>
                <input
                  type="date"
                  name="$dob"
                  value={contact.$dob}
                  onChange={handleChange}
                  className="w-full sm:w-48 p-2 border rounded bg-white"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="sm:w-48 text-gray-500">
                  Class to be Admitted
                </label>
                <input
                  type="text"
                  name="$classToBeAdmitted"
                  value={contact.$classToBeAdmitted}
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
                    name="$gender"
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
                    name="$gender"
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
              <label className="sm:w-64 text-gray-500">
                Mode of Enrollment
              </label>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="$mode"
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
                    name="$mode"
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
              <label className="sm:w-64 text-gray-500">
                Name of Father / Guardian
              </label>
              <input
                type="text"
                name="$guardianName"
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <label className="sm:w-64 text-gray-500">Address</label>
              <textarea
                name="$address"
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white h-32"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="sm:w-64 text-gray-500">Mobile No</label>
              <input
                type="tel"
                name="$mobile"
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
                onChange={handleChange}
                className="w-full sm:flex-1 p-2 border rounded bg-white"
                required
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

            {response.message && (
              <div
                className={`mt-4 p-4 rounded ${
                  response.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
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
