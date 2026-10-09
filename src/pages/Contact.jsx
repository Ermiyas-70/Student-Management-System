import React, { useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h1>
      <p className="text-slate-600 text-sm mb-6">Have questions or feedback? Send us a message below.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
          <p className="font-medium">Message Sent Successfully!</p>
          <p className="text-xs mt-1">We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Type your message here..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200 shadow text-sm"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default Contact