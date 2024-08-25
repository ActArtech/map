import React, { useState, useEffect } from 'react';
import MainCategory from './MainCategory';
import SubCategory from './SubCategory';
import DetailItem from './DetailItem';
import Connection from './Connection';
import InfoDialog from './InfoDialog';
import { mainCategories, subCategories, detailItems } from '../../data/categories';
import { actionableSentences } from '../../data/actionableSentences';
import { generateConnections } from '../../utils/helpers';
import './GuidanceDiagram.css';

const GuidanceDiagram = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [hoverText, setHoverText] = useState("");
  const [actionableSentencesList, setActionableSentencesList] = useState([]);
  const [connections, setConnections] = useState(null);

  useEffect(() => {
    setConnections(generateConnections(mainCategories, subCategories, detailItems));
  }, []);

  const onHover = (text, layer, index) => {
    setHoverText(text);
    setActiveItem({ layer, index });
    setActionableSentencesList(actionableSentences[text] || [
      "Define specific goals related to this area.",
      "Identify potential obstacles and plan how to overcome them.",
      "Schedule regular check-ins to track progress in this area."
    ]);
  };

  const onHoverLeave = () => {
    setHoverText("");
    setActiveItem(null);
    setActionableSentencesList([]);
  };

  if (!connections) return null;

  return (
    <div className="guidance-diagram">
      <InfoDialog />
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <circle cx="50" cy="50" r="25" fill="#000" opacity="0.1" />
        <text x="50" y="50" textAnchor="middle" fill="#000" fontSize="4">Personal Growth</text>
        {activeItem && <Connection activeItem={activeItem} connections={connections} />}
        {mainCategories.map((category, index) => (
          <MainCategory
            key={index}
            category={category}
            index={index}
            onHover={onHover}
            onHoverLeave={onHoverLeave}
            isActive={activeItem && activeItem.layer === 'main' && activeItem.index === index}
          />
        ))}
        {subCategories.map((category, index) => (
          <SubCategory
            key={index}
            category={category}
            index={index}
            onHover={onHover}
            onHoverLeave={onHoverLeave}
            isActive={activeItem && (
              (activeItem.layer === 'sub' && activeItem.index === index) ||
              (activeItem.layer === 'main' && connections.mainToSub[activeItem.index][index])
            )}
          />
        ))}
        {detailItems.map((item, index) => (
          <DetailItem
            key={index}
            item={item}
            index={index}
            onHover={onHover}
            onHoverLeave={onHoverLeave}
            isActive={activeItem && (
              (activeItem.layer === 'detail' && activeItem.index === index) ||
              (activeItem.layer === 'sub' && connections.subToDetail[activeItem.index][index]) ||
              (activeItem.layer === 'main' && connections.mainToSub[activeItem.index].some(
                (isConnected, subIndex) => isConnected && connections.subToDetail[subIndex][index]
              ))
            )}
          />
        ))}
      </svg>
      {hoverText && (
        <div className="hover-info">
          <h3>{hoverText}</h3>
          <ul>
            {actionableSentencesList.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GuidanceDiagram;