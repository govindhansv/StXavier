import React from "react";
import ContactFooter from "../components/ContactFooter";

export default function AdmissionPage() {
  return (
    <>
      <div className="container ">
        <div className="flex items-center mb-8   px-4 py-8">
          <div className="flex items-center space-x-2">
            <span className="text-[#FF0076] text-xl">←</span>
            <span className="text-[#FF0076] font-medium">BACK</span>
          </div>
          <div className="flex-grow text-right">
            <span className="text-blue-600 font-bold text-2xl">ADMISSION</span>
          </div>
        </div>

        <div className="lg:px-40  py-12 bg-gray-100 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">ADMISSIONS</h2>
            <p className="text-gray-700 leading-relaxed">
              Admission is open to all irrespective of caste, creed, language
              and nationality. Application should be made on the prescribed
              forms available from the office. No application will be considered
              until all specified requirements are met with. Parents should
              submit an undertaking that they will abide by the rules and
              regulations of the school. The management will not be answerable
              for rejection of any application for admission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              ADMISSIONS TO DAY STUDENTS
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Even though St. Xavier's is a recognised Boarding school, the
              management permits the admission of a limited number of students
              as Day Boarders, in order to open the world class facilities also
              to the local population at affordable cost. Only the permanent
              residents of Panchgani are eligible for Day Scholars' admissions.
              Residents of Panchgani, Wai and Mahabaleshwar region are eligible
              for Day Boarders admissions. A residential proof of the parents
              should be submitted to the office along with dully filled
              application forms.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-40 p-12 grid grid-cols-2 gap-4  bg-gray-100">
        
        <button className="bg-[#FF0076] text-white py-3 px-4 rounded-lg text-center font-bold">
        ADMISSION ENQUIRY
        </button>
        <button className="bg-[#FF0076] text-white py-3 px-4 rounded-lg text-center font-bold">
          OFFLINE ADMISSION FORM
        </button>
        <button className="bg-[#FF0076] text-white py-3 px-4 rounded-lg text-center font-bold">
          ONLINE ADMISSION FORM
        </button>
      
      </div>

<div className="lg:px-40 p-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">GENERAL RULES</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="border-r border-gray-300 space-y-4">
          <div className="pb-4 ">
            All students have to abide by all the rules and regulations of the school failing in which they will be dismissed without notice.
          </div>
          <div>
            No student will be allowed to be absent without permission
          </div>
        </div>
        <div className="space-y-4">
          <div className="pb-4 ">
            Students are not allowed to bring any valuables like money, jewellery or electronic items to school
          </div>
          <div>
            Students are not allowed to bring anything for boarders from outside. Any student found helping boarders to bring in anything will be dismissed summarily.
          </div>
        </div>
      </div>
    </div>
      <ContactFooter />
    </>
  );
}
