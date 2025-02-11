import React from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactFooter from "../components/ContactFooter";
import Link from "next/link";

const DownloadsPage = () => {
  const downloads = [
    { name: "APPLICATION FORM" },
    { name: "JOURNALS" },
    { name: "LEAVE APPLICATION" },
    { name: "EBOOKS" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm lg:px-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5 text-pink-600 mr-2" />
                <span className="font-medium">BACK</span>
              </button>
            </Link>

            <h1 className="text-xl md:text-2xl font-bold text-blue-600">
              DOWNLOADS
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {downloads.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-200"
            >
              <button className="w-full p-4 flex items-center space-x-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Download className="w-6 h-6 text-pink-600" />
                </div>
                <span className="flex-1 text-left font-medium text-gray-700 group-hover:text-gray-900">
                  {item.name}
                </span>
              </button>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <ContactFooter />
      </div>
    </div>
  );
};

export default DownloadsPage;
