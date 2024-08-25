import React from 'react';

const MainCategory = ({ category, index, onHover, onHoverLeave, isActive }) => {
  const angle = (index / 4) * Math.PI * 2 - Math.PI / 2;
  const x = Math.cos(angle) * 25 + 50;
  const y = Math.sin(angle) * 25 + 50;

  return (
    <g>
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r="2"
        fill={category.color}
        opacity={isActive ? 1 : 0.3}
        onMouseEnter={() => onHover(category.name, 'main', index)}
        onMouseLeave={onHoverLeave}
      />
      <text
        x={`${x}%`}
        y={`${y}%`}
        dx={x < 50 ? -1 : 1}
        dy={y < 50 ? -1 : 3}
        textAnchor={x < 50 ? "end" : "start"}
        fontSize="2"
        fill={isActive ? "#000" : "#333"}
        opacity={isActive ? 1 : 0.3}
      >
        {category.name}
      </text>
    </g>
  );
};

export default MainCategory;