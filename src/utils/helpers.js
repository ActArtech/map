export const generateConnections = (mainCategories, subCategories, detailItems) => {
  const mainToSub = mainCategories.map(() => 
    Array.from({ length: subCategories.length }, () => Math.random() > 0.7)
  );
  const subToDetail = subCategories.map(() => 
    Array.from({ length: detailItems.length }, () => Math.random() > 0.7)
  );
  return { mainToSub, subToDetail };
};