import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('') // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://server-zw94.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' }) // form clear karo
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto py-24 px-6">
      <p className="text-indigo-600 font-semibold text-center mb-2">Get in Touch</p>
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name" 
            required
            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com" 
            required
            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4" 
            placeholder="Your message" 
            required
            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'sending'}
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm text-center">Something went wrong. Try again.</p>
        )}

      </form>
    </section>
  )
}

export default Contact;