import React from 'react';

const SubCategory = ({ category, index, onHover, onHoverLeave, isActive }) => {
  const angle = (index / 16) * Math.PI * 2 - Math.PI / 2;
  const x = Math.cos(angle) * 35 + 50;
  const y = Math.sin(angle) * 35 + 50;

  return (
    <g>
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r="1.5"
        fill={isActive ? "#1E90FF" : "#ccc"}
        opacity={isActive ? 1 : 0.3}
        onMouseEnter={() => onHover(category, 'sub', index)}
        onMouseLeave={onHoverLeave}
      />
      <text
        x={`${x}%`}
        y={`${y}%`}
        dx={x < 50 ? -1 : 1}
        dy={y < 50 ? -1 : 2}
        textAnchor={x < 50 ? "end" : "start"}
        fontSize="1.5"
        fill={isActive ? "#000" : "#333"}
        opacity={isActive ? 1 : 0.3}
      >
        {category}
      </text>
    </g>
  );
};

export default SubCategory;