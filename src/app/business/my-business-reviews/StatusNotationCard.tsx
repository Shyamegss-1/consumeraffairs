import React from "react";

type Props = {};

const StatusNotationCard = (props: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Status Notations</h2>
      <ul>
        {[
          { label: "Live Reviews", color: "bg-green-500" },
          { label: "Under Moderation", color: "bg-yellow-500" },
          { label: "Removed Reviews", color: "bg-red-500" },
          { label: "Reported Reviews", color: "bg-orange-500" },
        ].map((status) => (
          <li key={status.label} className="flex items-center mb-2">
            <span
              className={`inline-block w-3 h-3 rounded-full ${status.color} mr-2`}
            ></span>
            {status.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusNotationCard;
