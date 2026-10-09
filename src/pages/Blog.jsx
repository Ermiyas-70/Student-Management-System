import React from 'react'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Building Modern Web Apps with React & Tailwind",
      date: "October 2026",
      category: "Development",
      summary: "Learn how combining React's component model with Tailwind's utility classes accelerates full-stack workflows."
    },
    {
      id: 2,
      title: "Best Practices for Managing State in React",
      date: "September 2026",
      category: "React",
      summary: "Explore best practices for handling component state, forms, and lists cleanly in modern React applications."
    }
  ]

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Latest Updates</h1>
        <p className="text-slate-600 mt-1">Articles and announcements about StudentMS.</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition">
            <div className="flex items-center space-x-3 text-xs text-slate-500 mb-2">
              <span className="bg-blue-100 text-blue-700 font-medium px-2.5 py-0.5 rounded-full">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 hover:text-blue-600 cursor-pointer mb-2">
              {post.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog