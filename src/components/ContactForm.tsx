import { type FC, type FormEvent } from 'react';

const ContactForm: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors"
            placeholder="How can we help?"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors h-32 resize-none"
            placeholder="Your message"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#903060] text-white py-3 rounded-md hover:bg-[#802050] transition-colors font-medium"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;