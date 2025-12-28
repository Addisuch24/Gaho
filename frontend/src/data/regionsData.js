// Temporary local data until backend connects
// This structure matches the expected API response format

export const regionsData = [
  {
    id: 1,
    name: 'Borana',
    slug: 'borana',
    description: 'The Borana people are known for their rich pastoral traditions and the Gada system of governance.',
    history: 'The Borana are one of the major Oromo groups, historically known for their sophisticated democratic governance system called Gada. They have inhabited the southern regions for centuries, maintaining their cultural identity through generations.',
    practices: [
      'Gada System - Democratic governance structure',
      'Cattle herding and pastoral lifestyle',
      'Traditional conflict resolution methods',
      'Seasonal migration patterns',
      'Water resource management'
    ],
    clothing: {
      men: 'Traditional white cotton garments with colorful embroidery, leather sandals, and ceremonial headwear',
      women: 'Colorful dresses with intricate beadwork, traditional jewelry, and head wraps'
    },
    food: [
      'Buna (Coffee ceremony)',
      'Marqa (Traditional soup)',
      'Chechebsa (Flatbread with spices)',
      'Milk and dairy products',
      'Roasted meat for special occasions'
    ],
    music: {
      instruments: ['Krar (lyre)', 'Masinko (one-string fiddle)', 'Drums'],
      dances: ['Shagoyee', 'Traditional circle dances'],
      occasions: 'Weddings, festivals, and cultural celebrations'
    },
    values: [
      'Respect for elders',
      'Community solidarity',
      'Environmental stewardship',
      'Democratic decision-making',
      'Hospitality and generosity'
    ],
    gallery: [
      '/assets/images/borana-1.jpg',
      '/assets/images/borana-2.jpg',
      '/assets/videos/borana-dance.mp4'
    ]
  },
  {
    id: 2,
    name: 'Hararghe',
    slug: 'hararghe',
    description: 'Hararghe is known for its vibrant trade culture, coffee production, and unique architectural heritage.',
    history: 'The Hararghe region has been a center of trade and cultural exchange for centuries. The people of Hararghe have developed a unique blend of traditions, influenced by their strategic location along ancient trade routes.',
    practices: [
      'Coffee cultivation and trade',
      'Traditional architecture with distinctive designs',
      'Marketplace culture and commerce',
      'Craft making and artisan work',
      'Oral storytelling traditions'
    ],
    clothing: {
      men: 'White cotton shirts with embroidered vests, traditional trousers, and woven caps',
      women: 'Brightly colored dresses with gold jewelry, traditional hairstyles with decorative elements'
    },
    food: [
      'Buna Qalaa (Roasted coffee)',
      'Farsoo (Traditional porridge)',
      'Marqaa (Spiced stew)',
      'Qocho (Flatbread)',
      'Honey-based dishes'
    ],
    music: {
      instruments: ['Washint (flute)', 'Kebero (drum)', 'Krar'],
      dances: ['Harari dance', 'Wedding dances'],
      occasions: 'Festivals, weddings, and religious celebrations'
    },
    values: [
      'Entrepreneurial spirit',
      'Cultural preservation',
      'Education and learning',
      'Family unity',
      'Religious tolerance'
    ],
    gallery: [
      '/assets/images/hararghe-1.jpg',
      '/assets/images/hararghe-2.jpg',
      '/assets/videos/hararghe-market.mp4'
    ]
  },
  {
    id: 3,
    name: 'Jimma',
    slug: 'jimma',
    description: 'Jimma is renowned for its coffee heritage, lush landscapes, and historical kingdom.',
    history: 'The Jimma region was once home to the powerful Jimma Kingdom, one of the five Gibe kingdoms. The area is famous for being the birthplace of coffee and has a rich history of trade and cultural development.',
    practices: [
      'Coffee ceremony traditions',
      'Agricultural practices',
      'Traditional medicine',
      'Honey production',
      'Weaving and textile arts'
    ],
    clothing: {
      men: 'Traditional white cotton garments with colorful borders, leather accessories',
      women: 'Elegant dresses with traditional patterns, silver jewelry, and decorative shawls'
    },
    food: [
      'Buna (Coffee - birthplace of coffee)',
      'Genfo (Porridge with butter)',
      'Kitfo (Minced raw meat)',
      'Injera with various wots',
      'Honey wine (Tej)'
    ],
    music: {
      instruments: ['Masinko', 'Krar', 'Traditional drums'],
      dances: ['Jimma traditional dance', 'Harvest celebration dances'],
      occasions: 'Coffee ceremonies, weddings, and harvest festivals'
    },
    values: [
      'Agricultural wisdom',
      'Coffee culture preservation',
      'Community cooperation',
      'Respect for nature',
      'Historical pride'
    ],
    gallery: [
      '/assets/images/jimma-1.jpg',
      '/assets/images/jimma-2.jpg',
      '/assets/videos/jimma-coffee.mp4'
    ]
  },
  {
    id: 4,
    name: 'Guji',
    slug: 'guji',
    description: 'Guji is known for its strong adherence to the Gada system and rich pastoral traditions.',
    history: 'The Guji people have maintained strong cultural traditions and the Gada system of governance. They are known for their pastoral lifestyle and deep connection to their ancestral lands in southern Ethiopia.',
    practices: [
      'Gada system governance',
      'Cattle rearing and pastoralism',
      'Traditional ceremonies and rituals',
      'Age-grade system',
      'Conflict resolution through elders'
    ],
    clothing: {
      men: 'White cotton garments, leather accessories, traditional staffs, and ceremonial attire',
      women: 'Colorful traditional dresses, beaded jewelry, and leather ornaments'
    },
    food: [
      'Dairy products (milk, butter, yogurt)',
      'Marqa (Traditional soup)',
      'Roasted meat',
      'Buna (Coffee)',
      'Chechebsa (Spiced flatbread)'
    ],
    music: {
      instruments: ['Drums', 'Krar', 'Traditional horns'],
      dances: ['Gada celebration dances', 'Warrior dances'],
      occasions: 'Gada ceremonies, weddings, and cultural festivals'
    },
    values: [
      'Gada system principles',
      'Respect for tradition',
      'Community solidarity',
      'Pastoral wisdom',
      'Cultural identity'
    ],
    gallery: [
      '/assets/images/guji-1.jpg',
      '/assets/images/guji-2.jpg',
      '/assets/videos/guji-ceremony.mp4'
    ]
  },
  {
    id: 5,
    name: 'Arsi',
    slug: 'arsi',
    description: 'Arsi is celebrated for its athletic traditions, agricultural expertise, and strong community bonds.',
    history: 'The Arsi people have a proud history of resistance and cultural preservation. The region is famous for producing world-class athletes and maintaining strong agricultural traditions in the highlands.',
    practices: [
      'Athletic training traditions',
      'Highland agriculture',
      'Horse breeding and riding',
      'Traditional sports and games',
      'Community work systems (Debo)'
    ],
    clothing: {
      men: 'White cotton garments with red or black borders, traditional capes, and leather accessories',
      women: 'Elegant dresses with distinctive patterns, silver jewelry, and traditional hairstyles'
    },
    food: [
      'Genfo (Barley porridge)',
      'Kinche (Cracked wheat)',
      'Buna (Coffee)',
      'Dairy products',
      'Roasted barley (Kolo)'
    ],
    music: {
      instruments: ['Krar', 'Masinko', 'Kebero (drum)'],
      dances: ['Shagoyee', 'Victory dances', 'Wedding dances'],
      occasions: 'Athletic celebrations, weddings, and festivals'
    },
    values: [
      'Athletic excellence',
      'Hard work and perseverance',
      'Community cooperation',
      'Cultural pride',
      'Respect for elders'
    ],
    gallery: [
      '/assets/images/arsi-1.jpg',
      '/assets/images/arsi-2.jpg',
      '/assets/videos/arsi-athletics.mp4'
    ]
  },
  {
    id: 6,
    name: 'Shewa',
    slug: 'shewa',
    description: 'Shewa is known for its historical significance, diverse culture, and role in Ethiopian history.',
    history: 'Shewa has played a central role in Ethiopian history, serving as a bridge between different cultures and regions. The area has a rich tradition of scholarship, trade, and political influence.',
    practices: [
      'Urban and rural cultural blend',
      'Traditional education systems',
      'Trade and commerce',
      'Religious practices',
      'Artistic expressions'
    ],
    clothing: {
      men: 'Traditional white cotton garments, modern adaptations with traditional elements',
      women: 'Elegant dresses combining traditional and contemporary styles, gold jewelry'
    },
    food: [
      'Doro Wat (Chicken stew)',
      'Kitfo (Minced meat)',
      'Tibs (Fried meat)',
      'Various vegetarian dishes',
      'Buna (Coffee ceremony)'
    ],
    music: {
      instruments: ['Krar', 'Masinko', 'Washint', 'Modern instruments'],
      dances: ['Eskista (shoulder dance)', 'Modern Oromo dances'],
      occasions: 'Weddings, festivals, and cultural events'
    },
    values: [
      'Education and knowledge',
      'Cultural diversity',
      'Historical awareness',
      'Innovation and tradition',
      'Community harmony'
    ],
    gallery: [
      '/assets/images/shewa-1.jpg',
      '/assets/images/shewa-2.jpg',
      '/assets/videos/shewa-dance.mp4'
    ]
  }
];

export const getRegionBySlug = (slug) => {
  return regionsData.find(region => region.slug === slug);
};

export const getAllRegions = () => {
  return regionsData;
};
