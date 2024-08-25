import React from 'react';

const DetailItem = ({ item, index, onHover, onHoverLeave, isActive }) => {
  const angle = (index / 16) * Math.PI * 2 - Math.PI / 2;
  const x = Math.cos(angle) * 45 + 50;
  const y = Math.sin(angle) * 45 + 50;

  return (
    <g>
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r="1"
        fill={isActive ? "#1E90FF" : "#ccc"}
        opacity={isActive ? 1 : 0.3}
        onMouseEnter={() => onHover(item, 'detail', index)}
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
        {item}
      </text>
    </g>
  );
};

export default DetailItem;