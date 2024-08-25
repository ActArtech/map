import React from 'react';

const Connection = ({ activeItem, connections }) => {
  const renderConnections = () => {
    const curves = [];
    if (activeItem.layer === 'main' || activeItem.layer === 'sub') {
      const sourceRadius = activeItem.layer === 'main' ? 25 : 35;
      const targetRadius = activeItem.layer === 'main' ? 35 : 45;
      const connectionArray = activeItem.layer === 'main' ? connections.mainToSub : connections.subToDetail;
      const targetLength = 16;

      const sourceAngle = (activeItem.index / (activeItem.layer === 'main' ? 4 : 16)) * Math.PI * 2 - Math.PI / 2;
      const sourceX = Math.cos(sourceAngle) * sourceRadius + 50;
      const sourceY = Math.sin(sourceAngle) * sourceRadius + 50;

      connectionArray[activeItem.index].forEach((isConnected, targetIndex) => {
        if (isConnected) {
          const targetAngle = (targetIndex / targetLength) * Math.PI * 2 - Math.PI / 2;
          const targetX = Math.cos(targetAngle) * targetRadius + 50;
          const targetY = Math.sin(targetAngle) * targetRadius + 50;

          const midX = (sourceX + targetX) / 2;
          const midY = (sourceY + targetY) / 2;
          const controlX = midX + (midY - 50) * 0.5;
          const controlY = midY - (midX - 50) * 0.5;

          curves.push(
            <path
              key={`connection-${activeItem.layer}-${activeItem.index}-${targetIndex}`}
              d={`M ${sourceX}% ${sourceY}% Q ${controlX}% ${controlY}% ${targetX}% ${targetY}%`}
              fill="none"
              stroke="#1E90FF"
              strokeWidth="0.5"
            />
          );
        }
      });
    }
    return curves;
  };

  return <>{renderConnections()}</>;
};

export default Connection;