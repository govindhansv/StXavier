"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactFooter from "../components/ContactFooter";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    dateOfBirth: "",
    gender: "Male",
    classToBeAdmitted: "",
    modeOfEnrollment: "Boarding",
    dietaryPreference: "Vegetarian",
    nationality: "",
    religion: "",
    caste: "",
    lastSchool: "",
    reasonForLeaving: "",
    mediumOfInstruction: "",
    contactAddress: "",
    village: "",
    taluk: "",
    district: "",
    state: "",
    country: "",
    postalCode: "",
    mobileNumber: "",
    landlineNumber: "",
    emergencyContact: "",
  });

  const [files, setFiles] = useState({
    photo: null,
    casteCertificate: null,
    transferCertificate: null,
  });

  const [uploading, setUploading] = useState(false);
  const [fileNames, setFileNames] = useState({
    photo: "",
    casteCertificate: "",
    transferCertificate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, fileType) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFiles((prev) => ({
        ...prev,
        [fileType]: file,
      }));
      setFileNames((prev) => ({
        ...prev,
        [fileType]: file.name,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Append files
      if (files.photo) formDataToSend.append("photo", files.photo);
      if (files.casteCertificate)
        formDataToSend.append("casteCertificate", files.casteCertificate);
      if (files.transferCertificate)
        formDataToSend.append("transferCertificate", files.transferCertificate);

      const response = await fetch("/api/submit-application", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        // Reset form
        setFormData({
          applicantName: "",
          fatherName: "",
          fatherOccupation: "",
          motherName: "",
          motherOccupation: "",
          dateOfBirth: "",
          gender: "Male",
          classToBeAdmitted: "",
          modeOfEnrollment: "Boarding",
          dietaryPreference: "Vegetarian",
          nationality: "",
          religion: "",
          caste: "",
          lastSchool: "",
          reasonForLeaving: "",
          mediumOfInstruction: "",
          contactAddress: "",
          village: "",
          taluk: "",
          district: "",
          state: "",
          country: "",
          postalCode: "",
          mobileNumber: "",
          landlineNumber: "",
          emergencyContact: "",
        });
        setFiles({
          photo: null,
          casteCertificate: null,
          transferCertificate: null,
        });
        setFileNames({
          photo: "",
          casteCertificate: "",
          transferCertificate: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Error submitting application. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto">
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
                Application Form
              </h1>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 sm:p-12 m-auto lg:px-36 mb-12"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Name of Applicant</label>
              <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleInputChange}
                placeholder="Student's Name"
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Name of Father</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Father's Occupation</label>
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Name of Mother</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Mother's Occupation</label>
              <input
                type="text"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Date of Birth</label>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,2fr] gap-4">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <label className="text-gray-600">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Class to be Admitted</label>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,2fr] gap-4">
                <input
                  type="text"
                  name="classToBeAdmitted"
                  value={formData.classToBeAdmitted}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <label className="text-gray-600">Mode of Enrollment</label>
                  <select
                    name="modeOfEnrollment"
                    value={formData.modeOfEnrollment}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Boarding">Boarding</option>
                    <option value="Day Scholar">Day Scholar</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Dietary Preference</label>
              <select
                name="dietaryPreference"
                value={formData.dietaryPreference}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Nationality</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Religion & Caste</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  placeholder="Religion"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="caste"
                  value={formData.caste}
                  onChange={handleInputChange}
                  placeholder="Caste"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Last School Attended</label>
              <input
                type="text"
                name="lastSchool"
                value={formData.lastSchool}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Reason for Leaving</label>
              <textarea
                name="reasonForLeaving"
                value={formData.reasonForLeaving}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Medium of Instruction</label>
              <input
                type="text"
                name="mediumOfInstruction"
                value={formData.mediumOfInstruction}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Contact Address</label>
              <textarea
                name="contactAddress"
                value={formData.contactAddress}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Village / City</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Taluk</label>
              <input
                type="text"
                name="taluk"
                value={formData.taluk}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Country</label>
              <div className="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-4">
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-4 items-center">
                  <label className="text-gray-600">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Contact Numbers</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Mobile"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="landlineNumber"
                  value={formData.landlineNumber}
                  onChange={handleInputChange}
                  placeholder="Landline (with STD Code)"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px,1fr] items-start sm:items-center gap-4">
              <label className="text-gray-600">Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                placeholder="Name of Contact Person and Contact Number"
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* File Upload Section */}
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
                        {fileNames.photo || "No file chosen"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "photo")}
                        className="hidden"
                      />
                      <label
                        htmlFor="photo"
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#8B8B8F] text-white text-lg font-medium rounded cursor-pointer"
                      >
                        UPLOAD
                      </label>
                      {files.photo && (
                        <div className="w-8 h-8 bg-[#8BC34A] flex items-center justify-center">
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
                      )}
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
                        {fileNames.casteCertificate || "No file chosen"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <input
                        type="file"
                        id="casteCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileChange(e, "casteCertificate")
                        }
                        className="hidden"
                      />
                      <label
                        htmlFor="casteCertificate"
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#8B8B8F] text-white text-lg font-medium rounded cursor-pointer"
                      >
                        UPLOAD
                      </label>
                      {files.casteCertificate && (
                        <div className="w-8 h-8 bg-[#8BC34A] flex items-center justify-center">
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
                      )}
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
                        {fileNames.transferCertificate || "No file chosen"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <input
                        type="file"
                        id="transferCertificate"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          handleFileChange(e, "transferCertificate")
                        }
                        className="hidden"
                      />
                      <label
                        htmlFor="transferCertificate"
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#8B8B8F] text-white text-lg font-medium rounded cursor-pointer"
                      >
                        UPLOAD
                      </label>
                      {files.transferCertificate && (
                        <div className="w-8 h-8 bg-[#8BC34A] flex items-center justify-center">
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              disabled={uploading}
              className="w-full sm:w-auto px-8 py-2 bg-[#FF0076] font-bold text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {uploading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <ContactFooter />
    </div>
  );
}
