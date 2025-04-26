import React from 'react'
import { Shield, Download, Smartphone, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32">
              <Image
                src="/logo.svg"
                alt="SecuredSoft Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            SecuredSoft Privacy Policies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our privacy policy hub. Here you can find all privacy policies for our applications.
            We are committed to protecting your data and ensuring transparency in how we handle your information.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Downloader App Card */}
          <Link href="/net.securedsoft.downloader" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-20 h-20 mr-4">
                  <Image
                    src="/downloader.png"
                    alt="Downloader App Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Downloader</h2>
                  <p className="text-sm text-gray-500">net.securedsoft.downloader</p>
                </div>
              </div>
              <p className="text-gray-600">
                Privacy policy for our secure file downloader application.
              </p>
            </div>
          </Link>

          {/* Coming Soon Cards */}
          <div className="bg-white rounded-xl shadow-lg p-8 opacity-75">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-20 h-20 mr-4">
                <Image
                  src="https://raw.githubusercontent.com/feathericons/feather/master/icons/smartphone.svg"
                  alt="Mobile App Icon"
                  fill
                  className="object-contain opacity-50"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-400">Coming Soon</h2>
                <p className="text-sm text-gray-400">Mobile Application</p>
              </div>
            </div>
            <p className="text-gray-400">
              More SecuredSoft applications will be added here.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 opacity-75">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-20 h-20 mr-4">
                <Image
                  src="https://raw.githubusercontent.com/feathericons/feather/master/icons/globe.svg"
                  alt="Web App Icon"
                  fill
                  className="object-contain opacity-50"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-400">Coming Soon</h2>
                <p className="text-sm text-gray-400">Web Application</p>
              </div>
            </div>
            <p className="text-gray-400">
              More SecuredSoft applications will be added here.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At SecuredSoft, we are dedicated to maintaining the highest standards of privacy and data protection.
            Our privacy policies are designed to be transparent, clear, and user-friendly.
          </p>
        </div>
      </div>
    </div>
  )
}
