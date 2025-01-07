import React from 'react';

const DetailsModal = ({ item, onClose }) => {
  const { type, title, name, picture_medium, description, tracks } = item;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%]">
        <button className="text-right text-red-500 font-bold" onClick={onClose}>
          Close
        </button>
        <div className="text-center">
          <img
            src={item.cover_medium || picture_medium}
            alt={title || name}
            className="rounded w-32 h-32 mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">
            {title || name} ({type})
          </h2>
          {description && <p className="text-gray-700 mt-2">{description}</p>}
          {tracks && (
            <ul className="mt-4">
              {tracks.map((track, index) => (
                <li key={index}>{track.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
