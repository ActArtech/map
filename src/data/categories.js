// Main categories with their respective colors
export const mainCategories = [
  { name: 'Projects', color: '#1E90FF' },  // Dodger Blue
  { name: 'Areas', color: '#90EE90' },     // Light Green
  { name: 'Resources', color: '#FFD700' }, // Gold
  { name: 'Archive', color: '#FF6347' },   // Tomato
];

// Sub-categories for each main category
export const subCategories = [
  // Projects
  'Current Projects',
  'Next Steps',
  'Deadlines',
  'Progress Tracking',
  // Areas
  'Long-term Responsibilities',
  'Goals',
  'Habits & Systems',
  'Regular Reviews',
  // Resources
  'Desired Knowledge',
  'Learning Resources',
  'Learning Schedule',
  'Skill Development',
  // Archive
  'Completed Projects',
  'Useful Information',
  'Organization',
  'Archive Review'
];

// Detailed items for each sub-category
export const detailItems = [
  // Projects
  'Action Required',
  'Actionable Steps',
  'Completion Dates',
  'Tracking Methods',
  // Areas
  'Health',
  'Career',
  '6-12 Month Goals',
  'Goal Progress Systems',
  // Resources
  'Information Acquisition',
  'Books & Courses',
  'Weekly Learning',
  'Practice Plans',
  // Archive
  'Recent Accomplishments',
  'Future-useful Notes',
  'Archive Structure',
  'Update Schedule'
];

// Mapping of sub-categories to their respective main categories
export const subCategoryToMainCategory = {
  'Current Projects': 'Projects',
  'Next Steps': 'Projects',
  'Deadlines': 'Projects',
  'Progress Tracking': 'Projects',
  'Long-term Responsibilities': 'Areas',
  'Goals': 'Areas',
  'Habits & Systems': 'Areas',
  'Regular Reviews': 'Areas',
  'Desired Knowledge': 'Resources',
  'Learning Resources': 'Resources',
  'Learning Schedule': 'Resources',
  'Skill Development': 'Resources',
  'Completed Projects': 'Archive',
  'Useful Information': 'Archive',
  'Organization': 'Archive',
  'Archive Review': 'Archive'
};

// Mapping of detail items to their respective sub-categories
export const detailItemToSubCategory = {
  'Action Required': 'Current Projects',
  'Actionable Steps': 'Next Steps',
  'Completion Dates': 'Deadlines',
  'Tracking Methods': 'Progress Tracking',
  'Health': 'Long-term Responsibilities',
  'Career': 'Goals',
  '6-12 Month Goals': 'Habits & Systems',
  'Goal Progress Systems': 'Regular Reviews',
  'Information Acquisition': 'Desired Knowledge',
  'Books & Courses': 'Learning Resources',
  'Weekly Learning': 'Learning Schedule',
  'Practice Plans': 'Skill Development',
  'Recent Accomplishments': 'Completed Projects',
  'Future-useful Notes': 'Useful Information',
  'Archive Structure': 'Organization',
  'Update Schedule': 'Archive Review'
};