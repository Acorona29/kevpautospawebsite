import React from "react";
import { Calendar, Phone } from "lucide-react";

export default function BookingEmbed() {
  return (
    <div className="mx-auto max-w-4xl w-full">
      {/* Quick Booking Options */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Direct Calendly Link */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Book Online
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Schedule directly on Calendly
          </p>
          <a
            href="https://calendly.com/contactkevsautospa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-block"
          >
            Open Calendly
          </a>
        </div>

        {/* Phone Booking */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
          <Phone className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Call to Book
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Speak with us directly
          </p>
          <a
            href="tel:760-844-9066"
            className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-block"
          >
            Call 760-844-9066
          </a>
        </div>
      </div>

      {/* Service Hours */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-center gap-3 text-gray-700">
          <span className="font-medium">Service Hours:</span>
          <span>Monday–Sunday: 6:00 AM – 5:00 PM</span>
        </div>
      </div>
    </div>
  );
}