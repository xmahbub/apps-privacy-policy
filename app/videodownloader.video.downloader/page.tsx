import React from 'react'
import { ShieldCheck, Trash2, Link, Calendar, Mail } from 'lucide-react'
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Application Identity Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="rounded-full mb-4">
              <Image
                src="/downloader.png"
                alt="Downloader App Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1 text-center">Video Downloader: Overlay Play</h1>
            <p className="text-sm bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">videodownloader.video.downloader</p>
            <p className="text-gray-600 mt-2">Secure File Downloader</p>
          </div>
        </div>

        {/* Privacy Policy Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
          {/* User's Rights Section */}
          <section>
            <div className="flex items-center mb-4">
              <ShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">User's Rights</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">1. Right of Access</h3>
                <p>You possess the privilege to receive details about your personal data processed by us upon request.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">2. Right to Rectification</h3>
                <p>You possess the authority to amend or rectify your data if it is incorrect, inaccurate or incomplete.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">3. Right to Withdraw Consent</h3>
                <p>You maintain the power to reclaim consent granted to us at any juncture. Consequently, we are no longer authorized to proceed with the processing predicated on this consent hereinafter.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">4. Right to Erasure</h3>
                <p>You possess the entitlement to procure from us, under the ensuing circumstances, the eradication of your data:</p>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                  <li>The specific processing objective has been attained</li>
                  <li>We have illicitly processed your data</li>
                  <li>You have retracted your consent without another legal rationale applying</li>
                  <li>You have against the data processing successfully</li>
                  <li>In instances where there is an obligation to obliterate data on the basis of EU legislation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* External Links Section */}
          <section>
            <div className="flex items-center mb-4">
              <Link className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">External Links</h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p className="mb-4">Our Service might incorporate hyperlinks to other websites. Upon accessing a linked external site, you acknowledge that it is beyond our operational purview.</p>
              <div className="space-y-2">
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline block">Google Play Services Privacy Policy</a>
                <a href="https://support.google.com/admob/answer/6128543?hl=en" className="text-blue-600 hover:underline block">Admob Privacy Policy</a>
              </div>
            </div>
          </section>

          {/* Age Restriction Section */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Age Restriction</h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p>These Services cater to individuals aged 14 years and above. Absence of any intention to procure information from underage participants is assured. Upon discovery of any submitted underage data, immediate deletion is ensured.</p>
            </div>
          </section>

          {/* Updates Section */}
          <section>
            <div className="flex items-center mb-4">
              <Trash2 className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Updates to the Privacy Policy</h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p>We may change this privacy policy from time to time. If we do, the date to the policy on our Sites will be updated and will indicate that the policy has been changed. For all users, the change will become effective upon posting.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p>We welcome your comments or questions regarding this Privacy Policy. Please email us at:</p>
              <a href="mailto:support@deepthought.industries" className="text-blue-600 hover:underline block mt-2">mahbub@securedsoft.net</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}