import React from "react";
import ContactFooter from "../components/ContactFooter";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AdmissionPage() {
  return (
    <>
      <div>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white  lg:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
            <div className="flex justify-between items-center h-16 lg:h-20">
              <Link href="/">
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  <ArrowLeft className="w-8 h-8 lg:w-8 lg:h-8 text-pink-600 mr-2" />
                  <span className="text-sm lg:text-base font-medium">BACK</span>
                </button>
              </Link>

              <h1 className="text-lg lg:text-2xl font-bold text-blue-600">
                ADMISSION
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-36 py-8 lg:py-12 bg-gray-100 space-y-6 lg:space-y-8">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              ADMISSIONS
            </h2>
            <p className="text-base lg:text-[20px] leading-relaxed lg:leading-snug font-light">
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
            <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              ADMISSIONS TO DAY STUDENTS
            </h2>
            <p className="text-base lg:text-[20px] leading-relaxed lg:leading-snug font-light">
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

        <div className="px-4 sm:px-6 lg:px-36 py-6 lg:py-12 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100">
          <Link
            className="bg-[#FF0076] text-white py-3 px-4  text-center font-bold text-sm lg:text-base"
            href="/admission-form"
          >
            ADMISSION ENQUIRY
          </Link>
          <Link
            href={"/admissions"}
            className="bg-[#FF0076] text-white py-3 px-4  text-center font-bold text-sm lg:text-base"
          >
            OFFLINE ADMISSION FORM
          </Link>
          <Link
            href={"/application-form"}
            className="bg-[#FF0076] text-white py-3 px-4  text-center font-bold text-sm lg:text-base w-full sm:col-span-2"
          >
            ONLINE ADMISSION FORM
          </Link>
        </div>

        <div className="px-4 sm:px-6 lg:px-36 py-6 lg:py-12 bg-gray-100">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">
            GENERAL RULES
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="lg:border-r lg:border-gray-300 space-y-4">
              <div className="pb-4">
                All students have to abide by all the rules and regulations of
                the school failing in which they will be dismissed without
                notice.
              </div>
              <div>
                No student will be allowed to be absent without permission
              </div>
            </div>
            <div className="space-y-4">
              <div className="pb-4">
                Students are not allowed to bring any valuables like money,
                jewellery or electronic items to school
              </div>
              <div>
                Students are not allowed to bring anything for boarders from
                outside. Any student found helping boarders to bring in anything
                will be dismissed summarily.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </>
  );
}
