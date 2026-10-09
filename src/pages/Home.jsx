import React, { useState } from 'react'

const Home = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', age: 20, department: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 21, department: 'Information Systems' }
  ])

  const [formData, setFormData] = useState({ name: '', age: '', department: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.age || !formData.department) return
    
    const newStudent = {
      id: Date.now(),
      ...formData
    }

    setStudents([...students, newStudent])
    setFormData({ name: '', age: '', department: '' })
  }

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Student Dashboard</h1>
        <p className="text-slate-600 mt-1">Register, view, and manage student entries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Registration Form */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Register New Student</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
              <input
                type="number"
                placeholder="e.g. 20"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
              <input
                type="text"
                placeholder="e.g. Software Engineering"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200 shadow"
            >
              Add Student
            </button>
          </form>
        </div>

        {/* Student Records Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-slate-200">
          <h2 className="text-xl font-semibold mb-4 text-slate-800">Enrolled Students ({students.length})</h2>
          
          {students.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No registered students found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-sm border-b">
                    <th className="p-3">Name</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">Department</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-slate-50 transition">
                      <td className="p-3 font-medium text-slate-800">{student.name}</td>
                      <td className="p-3 text-slate-600">{student.age}</td>
                      <td className="p-3 text-slate-600">{student.department}</td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium bg-red-50 hover:bg-red-100 px-3 py-1 rounded transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home