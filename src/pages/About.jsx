import React from 'react'

const About = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">About StudentMS</h1>
        <p className="text-slate-600">
          A modern student management dashboard built with React, React Router, and Tailwind CSS.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="text-blue-600 text-3xl mb-3">⚡</div>
          <h3 className="font-semibold text-lg text-slate-800 mb-1">Fast & Responsive</h3>
          <p className="text-slate-600 text-sm">
            Instant updates with React state and mobile-friendly design using Tailwind CSS.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="text-blue-600 text-3xl mb-3">📋</div>
          <h3 className="font-semibold text-lg text-slate-800 mb-1">Student Tracking</h3>
          <p className="text-slate-600 text-sm">
            Easily add, view, and delete student entries from a single dashboard.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <div className="text-blue-600 text-3xl mb-3">🛡️</div>
          <h3 className="font-semibold text-lg text-slate-800 mb-1">Clean Structure</h3>
          <p className="text-slate-600 text-sm">
            Modular component architecture with seamless client-side routing.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About