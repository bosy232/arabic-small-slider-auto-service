import { type FC } from 'react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
}

const DoctorCard: FC<DoctorCardProps> = ({ name, specialty, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;