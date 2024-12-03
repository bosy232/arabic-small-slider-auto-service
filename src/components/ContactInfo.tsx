import { type FC } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
      
      <div className="flex items-start">
        <MapPin className="w-6 h-6 text-[#903060] mr-3 mt-1" />
        <div>
          <h4 className="font-semibold mb-1">Location</h4>
          <a 
            href="https://www.google.com/maps/place/30%C2%B001'12.9%22N+31%C2%B026'08.0%22E/@30.02025,31.4355556,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#903060] transition-colors"
          >
            HCC bldg., Tesaeen St, behind Air Force Hospital، 90 N Teseen St, New Cairo 1
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Phone className="w-6 h-6 text-[#903060] mr-3 mt-1" />
        <div>
          <h4 className="font-semibold mb-1">Phone</h4>
          <a 
            href="tel:+201234567890" 
            className="text-gray-600 hover:text-[#903060] transition-colors"
          >
            15679
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Mail className="w-6 h-6 text-[#903060] mr-3 mt-1" />
        <div>
          <h4 className="font-semibold mb-1">Email</h4>
          <a 
            href="mailto:info@queensroyal.com"
            className="text-gray-600 hover:text-[#903060] transition-colors"
          >
            info@queensroyal.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Clock className="w-6 h-6 text-[#903060] mr-3 mt-1" />
        <div>
          <h4 className="font-semibold mb-1">Working Hours</h4>
          <div className="text-gray-600">
            <p className="mb-1">24/7 Emergency Services</p>
            <p>Regular Hours: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;