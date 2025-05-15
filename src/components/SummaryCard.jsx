import React from "react";

const SummaryCard = ({ count, label, textColor, bgColor }) => (
  <div
    className="rounded-lg p-4"
    style={{ backgroundColor: "rgba(89, 86, 86, 0.4)" }}
  >
    <div className={`text-5xl font-bold ${textColor} mb-2`}>{count}</div>
    <div
      className={`${textColor.replace(
        "-500",
        "-200",
      )} text-xs px-3 py-1 rounded-full inline-block`}
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </div>
  </div>
);

export default SummaryCard;
