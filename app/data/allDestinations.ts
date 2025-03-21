// Sample data
export const allDestinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      slug: "santorini-greece",
      description: "Famous for its stunning sunsets, white-washed buildings, and blue domes",
      image: "/placeholder.svg?height=400&width=600",
      heroImage: "/images/greece.webp",
      continent: "Europe",
      location: "Aegean Sea, Greece",
      rating: 4.9,
      reviews: 2453,
      bestTimeToVisit: "April to October",
      language: "Greek",
      currency: "Euro (€)",
      timeZone: "GMT+3",
      weather: "Mediterranean climate with mild winters and warm summers",
      longDescription:
        "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its two principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
      highlights: [
        {
          icon: "star",
          title: "Stunning Views",
          description: "Breathtaking caldera views and famous sunsets",
        },
        {
          icon: "map-pin",
          title: "Unique Beaches",
          description: "Red Beach, Black Beach, and White Beach",
        },
        {
          icon: "calendar",
          title: "Wine Region",
          description: "Ancient vineyards producing unique wines",
        },
        {
          icon: "info",
          title: "Ancient History",
          description: "Archaeological sites including Akrotiri",
        },
      ],
      attractions: [
        {
          name: "Oia Village",
          description: "Famous for its stunning sunset views, blue-domed churches, and whitewashed buildings",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Akrotiri Archaeological Site",
          description: "Ancient Minoan settlement preserved by volcanic ash, often called the 'Greek Pompeii'",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Red Beach",
          description: "Dramatic beach with red volcanic cliffs and deep blue waters",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
      activities: [
        {
          name: "Caldera Cruise",
          description: "Sail around the caldera, visit hot springs, and enjoy views from the water",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Wine Tasting",
          description: "Tour the island's unique vineyards and taste local varieties like Assyrtiko",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Hiking",
          description: "Walk the scenic trail from Fira to Oia along the caldera's edge",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
      food: {
        overview:
          "Santorini's cuisine is characterized by fresh local ingredients grown in the volcanic soil. The island is known for its cherry tomatoes, white eggplant, capers, and unique wines made from grapes grown in the volcanic soil.",
        dishes: [
          {
            name: "Fava",
            description: "Purée of yellow split peas served with olive oil and lemon",
          },
          {
            name: "Tomatokeftedes",
            description: "Tomato fritters made with Santorini's famous cherry tomatoes",
          },
          {
            name: "Chlorotyri",
            description: "Local soft goat cheese with a distinctive flavor",
          },
        ],
        restaurants: [
          {
            name: "Metaxy Mas",
            description: "Traditional taverna with stunning views and authentic Greek dishes",
          },
          {
            name: "Selene",
            description: "Fine dining restaurant focusing on modern interpretations of traditional Santorinian cuisine",
          },
          {
            name: "To Psaraki",
            description: "Seafood restaurant in Vlychada with fresh catches and sea views",
          },
        ],
      },
      tips: {
        beforeYouGo: [
          "Book accommodations well in advance, especially for stays during peak season (June-August)",
          "Bring comfortable walking shoes for the many steps and cobblestone streets",
          "Pack sunscreen and a hat as shade can be limited",
          "Consider shoulder seasons (April-May or September-October) for fewer crowds and lower prices",
        ],
        gettingAround:
          "The island has a bus system connecting major towns, but renting a car, ATV, or scooter gives you more flexibility. Taxis are available but limited in number. Many hotels offer shuttle services to popular destinations.",
        localCustoms:
          "Greeks typically eat dinner late, around 9-10 PM. Tipping is appreciated but not mandatory; 10% is standard for good service. Dress modestly when visiting churches and monasteries.",
        safety:
          "Santorini is generally very safe for tourists. Be careful on the steep steps, especially at night. The sun can be intense, so stay hydrated and use sun protection.",
      },
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      slug: "bali-indonesia",
      description: "A paradise island known for beaches, temples, and lush rice terraces",
      image: "/placeholder.svg?height=400&width=600",
      heroImage: "/images/bali.webp",
      continent: "Asia",
      location: "Indonesia",
      rating: 4.8,
      reviews: 3245,
      bestTimeToVisit: "April to October",
      language: "Indonesian, Balinese",
      currency: "Indonesian Rupiah (IDR)",
      timeZone: "GMT+8",
      weather: "Tropical climate with year-round warm temperatures",
      longDescription:
        "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.",
      highlights: [
        {
          icon: "map-pin",
          title: "Beautiful Beaches",
          description: "From Kuta to Nusa Dua and beyond",
        },
        {
          icon: "calendar",
          title: "Rich Culture",
          description: "Temples, dances, and ceremonies",
        },
        {
          icon: "star",
          title: "Rice Terraces",
          description: "Stunning agricultural landscapes",
        },
        {
          icon: "info",
          title: "Wellness",
          description: "Yoga, meditation, and spa treatments",
        },
      ],
      attractions: [
        {
          name: "Tanah Lot Temple",
          description: "Ancient sea temple perched on a rock formation, especially beautiful at sunset",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Ubud Monkey Forest",
          description: "Natural sanctuary home to over 700 Balinese long-tailed macaques",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Tegallalang Rice Terraces",
          description: "Stunning terraced rice fields using traditional Balinese irrigation system",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
      activities: [
        {
          name: "Surfing",
          description: "Catch waves at beaches like Kuta, Uluwatu, and Canggu, suitable for all levels",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Yoga Retreat",
          description: "Join classes and retreats in Ubud, Bali's spiritual and wellness center",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Balinese Cooking Class",
          description: "Learn to prepare traditional dishes using local ingredients and techniques",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
      food: {
        overview:
          "Balinese cuisine is aromatic and flavorful, featuring rice as a staple accompanied by vegetables, meat, and seafood. Spices like turmeric, ginger, galangal, and chili are commonly used, creating a unique flavor profile.",
        dishes: [
          {
            name: "Babi Guling",
            description: "Spit-roasted pig stuffed with traditional spices",
          },
          {
            name: "Nasi Campur",
            description: "Mixed rice dish with small portions of vegetables, meat, and condiments",
          },
          {
            name: "Lawar",
            description: "Traditional mix of vegetables, coconut and minced meat with rich herbs and spices",
          },
        ],
        restaurants: [
          {
            name: "Locavore",
            description: "Award-winning restaurant in Ubud focusing on local, sustainable ingredients",
          },
          {
            name: "Warung Babi Guling Ibu Oka",
            description: "Famous for authentic Balinese suckling pig in Ubud",
          },
          {
            name: "Merah Putih",
            description: "Modern Indonesian cuisine in a stunning architectural setting in Seminyak",
          },
        ],
      },
      tips: {
        beforeYouGo: [
          "Bring modest clothing for temple visits (shoulders and knees must be covered)",
          "Exchange money at reputable places to avoid scams",
          "Purchase travel insurance that covers scooter riding if you plan to rent one",
          "Download Gojek or Grab apps for reliable transportation",
        ],
        gettingAround:
          "Renting a scooter is popular but can be dangerous if you're inexperienced. Private drivers are affordable and convenient for day trips. Ride-hailing apps like Gojek and Grab are available in most tourist areas.",
        localCustoms:
          "Always use your right hand for giving or receiving items. Remove shoes before entering homes and some shops. When visiting temples, wear a sarong and sash (usually available to rent or borrow at the entrance).",
        safety:
          "Be cautious when swimming as some beaches have strong currents. Drink bottled water only. Be aware of monkeys at temples and forests – they can be aggressive and may snatch belongings.",
      },
    },
    {
      id: 3,
      name: "Machu Picchu, Peru",
      slug: "machu-picchu-peru",
      description: "Ancient Incan citadel set high in the Andes Mountains",
      image: "/placeholder.svg?height=400&width=600",
      heroImage: "/images/machu-pichu.jpg",
      continent: "South America",
      location: "Cusco Region, Peru",
      rating: 4.9,
      reviews: 1876,
      bestTimeToVisit: "May to October (dry season)",
      language: "Spanish, Quechua",
      currency: "Peruvian Sol (PEN)",
      timeZone: "GMT-5",
      weather: "Varies by season with a dry winter and wet summer",
      longDescription:
        "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.",
      highlights: [
        {
          icon: "star",
          title: "UNESCO Site",
          description: "World Heritage Site since 1983",
        },
        {
          icon: "map-pin",
          title: "Inca Architecture",
          description: "Remarkable stone construction",
        },
        {
          icon: "calendar",
          title: "Sacred Location",
          description: "Aligned with astronomical events",
        },
        {
          icon: "info",
          title: "Biodiversity",
          description: "Unique flora and fauna",
        },
      ],
      attractions: [
        {
          name: "Intihuatana Stone",
          description: "Ancient astronomical clock or calendar used by the Incas",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Temple of the Sun",
          description: "Sacred temple with exceptional stonework and astronomical alignments",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Huayna Picchu",
          description: "Steep mountain offering spectacular views of Machu Picchu from above",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
      activities: [
        {
          name: "Inca Trail Trek",
          description: "Multi-day hike along ancient paths leading to Machu Picchu",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Guided Tour",
          description: "Learn about the history and significance of the site from expert guides",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          name: "Sunrise Visit",
          description: "Experience the magical moment when the sun rises over the ancient citadel",
          image: "/placeholder.svg?height=300&width=500",
        },
      ],
      food: {
        overview:
          "Peruvian cuisine is diverse and flavorful, blending indigenous traditions with influences from Spanish, African, Chinese, and Japanese cultures. In the Cusco region near Machu Picchu, you'll find traditional Andean dishes featuring local ingredients like potatoes, corn, and quinoa.",
        dishes: [
          {
            name: "Lomo Saltado",
            description: "Stir-fried beef with onions, tomatoes, and french fries, served with rice",
          },
          {
            name: "Cuy",
            description: "Roasted guinea pig, a traditional Andean delicacy",
          },
          {
            name: "Choclo con Queso",
            description: "Large-kernel Andean corn served with local cheese",
          },
        ],
        restaurants: [
          {
            name: "Indio Feliz",
            description: "Popular restaurant in Aguas Calientes with French-Peruvian fusion",
          },
          {
            name: "Tinkuy Buffet Restaurant",
            description: "Restaurant at the Sanctuary Lodge offering views of Machu Picchu",
          },
          {
            name: "El Mapi Restaurant",
            description: "Modern restaurant in Aguas Calientes with organic, local ingredients",
          },
        ],
      },
      tips: {
        beforeYouGo: [
          "Book entrance tickets well in advance as they're limited and sell out quickly",
          "Spend a night in Aguas Calientes to allow for an early morning visit",
          "Acclimatize to the altitude in Cusco for a few days before visiting",
          "Bring sun protection, rain gear, and insect repellent regardless of season",
        ],
        gettingAround:
          "From Cusco, take a train to Aguas Calientes, then a 20-minute bus ride to the entrance. Alternatively, hike the Inca Trail or one of the alternative trails. Within the site, follow designated paths and respect barriers.",
        localCustoms:
          "Respect the sacred nature of the site. Don't touch or climb on the structures. Quechua people, descendants of the Incas, still consider the site spiritually significant.",
        safety:
          "Stay on marked paths to avoid accidents on steep terrain. Drink plenty of water and be prepared for altitude sickness symptoms. Protect valuables as the site can be crowded with tourists.",
      },
    },
    {
        id: 4,
        name: "Maldives",
        slug: "maldives",
        description: "A tropical paradise known for its overwater bungalows, crystal-clear waters, and vibrant marine life",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/maldives.jpg",
        continent: "Asia",
        location: "Indian Ocean, South Asia",
        rating: 4.8,
        reviews: 3287,
        bestTimeToVisit: "November to April",
        language: "Dhivehi",
        currency: "Maldivian Rufiyaa (MVR)",
        timeZone: "GMT+5",
        weather: "Tropical monsoon climate with warm temperatures year-round and distinct dry/wet seasons",
        longDescription:
          "The Maldives is an archipelago of 1,192 coral islands grouped into 26 atolls in the Indian Ocean. Renowned for its luxurious resorts, turquoise lagoons, white sand beaches, and incredible underwater biodiversity, it is a dream destination for honeymooners, divers, and those seeking serenity. With sustainable tourism on the rise, the Maldives also offers eco-conscious stays and local island experiences.",
        highlights: [
          {
            icon: "star",
            title: "Luxury Resorts",
            description: "Iconic overwater villas and private island experiences",
          },
          {
            icon: "map-pin",
            title: "Turquoise Waters",
            description: "Crystal-clear lagoons ideal for snorkeling and diving",
          },
          {
            icon: "calendar",
            title: "Year-Round Sunshine",
            description: "Tropical climate perfect for beach escapes all year",
          },
          {
            icon: "info",
            title: "Rich Marine Life",
            description: "Home to manta rays, whale sharks, and coral reefs",
          },
        ],
        attractions: [
          {
            name: "Vaadhoo Island",
            description: "Famous for its bioluminescent 'Sea of Stars' phenomenon",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Male City",
            description: "The capital offering a glimpse into Maldivian culture and local life",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Banana Reef",
            description: "One of the oldest and most popular dive sites in the Maldives",
            image: "/placeholder.svg?height=300&width=500",
          },
        ],
        activities: [
          {
            name: "Scuba Diving",
            description: "Explore coral reefs and encounter sea turtles, rays, and colorful fish",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Island Hopping",
            description: "Visit local islands to experience authentic Maldivian life",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Sunset Cruises",
            description: "Relax on a traditional Dhoni boat while watching the sun dip below the horizon",
            image: "/placeholder.svg?height=300&width=500",
          },
        ],
        food: {
          overview:
            "Maldivian cuisine is influenced by Indian, Sri Lankan, and Arab flavors, with a focus on seafood, coconut, and spices. Expect fresh tuna, tropical fruits, and rich curries.",
          dishes: [
            {
              name: "Mas Huni",
              description: "Traditional breakfast of shredded smoked tuna, coconut, onion, and chili",
            },
            {
              name: "Garudhiya",
              description: "A fragrant fish soup served with rice, lime, and chilies",
            },
            {
              name: "Fihunu Mas",
              description: "Grilled fish marinated with Maldivian spices",
            },
          ],
          restaurants: [
            {
              name: "Ithaa Undersea Restaurant",
              description: "World's first underwater dining experience with panoramic views of marine life",
            },
            {
              name: "Sea.Fire.Salt.",
              description: "Fine dining restaurant in Anantara Dhigu offering seafood with ocean views",
            },
            {
              name: "Symphony Restaurant",
              description: "A popular local restaurant in Male offering authentic Maldivian and Asian dishes",
            },
          ],
        },
        tips: {
          beforeYouGo: [
            "Book resorts and transfers ahead of time, especially during peak season (December to March)",
            "Pack light, beach-friendly clothes, sunscreen, and snorkeling gear if preferred",
            "Check domestic flight or seaplane options if staying on remote atolls",
            "Respect local customs, especially when visiting inhabited islands (modest attire recommended)",
          ],
          gettingAround:
            "Transportation between islands is typically by speedboat, domestic flight, or seaplane. On local islands, walking and bicycles are common. Resorts often handle transfers for guests.",
          localCustoms:
            "The Maldives is a Muslim country; alcohol is only available at resorts. Public displays of affection are discouraged. Fridays are considered a holy day, and many shops close for prayer.",
          safety:
            "The Maldives is generally very safe for travelers. Be cautious when swimming or diving in strong currents. Use reef-safe sunscreen to protect marine life.",
        },
      },

      {
        id: 5,
        name: "Ha Long Bay, Vietnam",
        slug: "ha-long-bay-vietnam",
        description: "Known for its emerald waters, towering limestone karsts, and mystical scenery",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/ha-long-bay.jpg",
        continent: "Asia",
        location: "Quang Ninh Province, Northern Vietnam",
        rating: 4.8,
        reviews: 1894,
        bestTimeToVisit: "October to April",
        language: "Vietnamese",
        currency: "Vietnamese Dong (₫)",
        timeZone: "GMT+7",
        weather: "Tropical climate with hot, humid summers and cool, dry winters",
        longDescription:
          "Ha Long Bay is a UNESCO World Heritage Site located in northeastern Vietnam, celebrated for its nearly 2,000 limestone islands and islets rising from the Gulf of Tonkin. Shrouded in legend and mystery, this bay offers spectacular natural beauty, hidden caves, floating fishing villages, and eco-adventure opportunities. A popular destination for cruises and kayaking, Ha Long Bay combines stunning scenery with rich cultural heritage.",
        highlights: [
          {
            icon: "star",
            title: "Spectacular Scenery",
            description: "Limestone karsts and emerald-green waters create a dreamlike landscape",
          },
          {
            icon: "map-pin",
            title: "UNESCO World Heritage",
            description: "Recognized for its geological and aesthetic significance",
          },
          {
            icon: "calendar",
            title: "Overnight Cruises",
            description: "Explore the bay on a traditional junk boat, complete with meals and activities",
          },
          {
            icon: "info",
            title: "Mystical Caves",
            description: "Famous caves like Sung Sot and Thien Cung offer dramatic natural formations",
          }
        ],
        attractions: [
          {
            name: "Sung Sot Cave (Surprise Cave)",
            description: "A large and impressive cave system with two main chambers and stunning stalactites",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Titop Island",
            description: "Offers panoramic views of the bay after a short but steep climb",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Floating Fishing Villages",
            description: "Experience traditional life in villages like Cua Van, set entirely on water",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        activities: [
          {
            name: "Cruising",
            description: "Spend a night or two onboard a cruise ship exploring the bay’s islands and inlets",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Kayaking",
            description: "Paddle through hidden lagoons and limestone caves for a peaceful adventure",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Rock Climbing",
            description: "For adventure lovers, the limestone cliffs offer excellent climbing spots",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "Ha Long Bay’s cuisine reflects the flavors of Northern Vietnam and the fresh bounty of the sea. Expect delicious seafood, rice-based dishes, and vibrant herbs and spices.",
          dishes: [
            {
              name: "Cha Muc",
              description: "Fried squid cakes, a specialty of Ha Long, made with fresh squid and aromatic spices",
            },
            {
              name: "Bun Be Be",
              description: "Noodle soup with mantis shrimp, popular along the Quang Ninh coast",
            },
            {
              name: "Ngan (Clams)",
              description: "Often steamed or grilled and served with a salty lime dip",
            }
          ],
          restaurants: [
            {
              name: "Co Ngu Restaurant",
              description: "Upscale dining in Bai Chay with Vietnamese and international seafood dishes",
            },
            {
              name: "Linh Dan Restaurant",
              description: "Popular mid-range eatery in Ha Long City with authentic Northern Vietnamese food",
            },
            {
              name: "1958 Restaurant",
              description: "Elegant restaurant offering fusion Vietnamese dishes in a stylish setting",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Pack light layers — mornings and evenings on the water can be cool even in warm seasons",
            "Book cruises in advance, especially during high season (November–March)",
            "Bring motion sickness medication if you’re sensitive to boat travel",
            "Carry some cash, as card payments may not be accepted on smaller boats or villages"
          ],
          gettingAround:
            "Cruises are the most popular way to explore Ha Long Bay. In Ha Long City, taxis and ride-hailing apps are available. Some attractions require small boat transfers or kayaking access.",
          localCustoms:
            "Vietnamese culture values politeness and modesty. Remove shoes before entering homes or temples. It’s respectful to ask before photographing locals, especially in fishing villages.",
          safety:
            "Ha Long Bay is safe for travelers, but be cautious around slippery boat decks and during water activities. Follow safety briefings on cruises, especially when kayaking or swimming.",
        }
      },

      {
        id: 6,
        name: "Grand Canyon, USA",
        slug: "grand-canyon-usa",
        description: "An awe-inspiring natural wonder carved by the Colorado River over millions of years",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/grand-canyon.avif",
        continent: "North America",
        location: "Arizona, United States",
        rating: 4.9,
        reviews: 5634,
        bestTimeToVisit: "March to May and September to November",
        language: "English",
        currency: "US Dollar ($)",
        timeZone: "GMT-7 (MST)",
        weather: "Semi-arid with hot summers, cool winters, and dramatic temperature changes between the rim and canyon floor",
        longDescription:
          "The Grand Canyon is one of the most iconic landscapes in the United States and a UNESCO World Heritage Site. Stretching 277 miles in length, up to 18 miles in width, and over a mile deep, it showcases layers of red rock revealing millions of years of geological history. The canyon is home to Native American heritage, vast biodiversity, and offers everything from breathtaking viewpoints to challenging hikes. Whether visiting the popular South Rim, the remote North Rim, or rafting through the Colorado River, the Grand Canyon is a once-in-a-lifetime experience.",
        highlights: [
          {
            icon: "star",
            title: "Breathtaking Vistas",
            description: "Panoramic views from iconic spots like Mather Point and Desert View Watchtower",
          },
          {
            icon: "map-pin",
            title: "Geological Wonder",
            description: "Exposed rock layers date back over 2 billion years",
          },
          {
            icon: "calendar",
            title: "Outdoor Adventure",
            description: "Opportunities for hiking, rafting, camping, and photography",
          },
          {
            icon: "info",
            title: "Cultural Significance",
            description: "Sacred land to many Native American tribes, including the Havasupai and Hualapai",
          }
        ],
        attractions: [
          {
            name: "South Rim",
            description: "The most accessible and popular area with paved trails and visitor centers",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "North Rim",
            description: "Less crowded, higher elevation area offering a quieter, forested canyon experience",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Havasu Falls",
            description: "Stunning turquoise waterfall located within the Havasupai Indian Reservation",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        activities: [
          {
            name: "Hiking",
            description: "Popular trails include Bright Angel Trail and South Kaibab Trail",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Rafting the Colorado River",
            description: "Multi-day white-water rafting expeditions through the canyon’s heart",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Helicopter Tours",
            description: "Soar above the canyon for unmatched aerial views",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "While the Grand Canyon itself has limited dining options, the South Rim and nearby towns offer casual American fare, Navajo-inspired cuisine, and scenic lodge dining experiences.",
          dishes: [
            {
              name: "Navajo Taco",
              description: "Fried bread topped with beans, meat, lettuce, cheese, and salsa — a regional favorite",
            },
            {
              name: "Elk Burger",
              description: "A hearty burger made with local elk meat, often served in canyon lodges",
            },
            {
              name: "Sonoran Hot Dog",
              description: "Bacon-wrapped hot dog with beans, tomato, and jalapeños — a Southwestern staple",
            }
          ],
          restaurants: [
            {
              name: "El Tovar Dining Room",
              description: "Historic restaurant in the South Rim offering fine dining with canyon views",
            },
            {
              name: "Arizona Room",
              description: "Southwestern cuisine with a focus on local ingredients and grilled meats",
            },
            {
              name: "Canyon Village Market Deli",
              description: "Casual grab-and-go option for snacks and picnic supplies",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Reservations for lodging and campsites should be made well in advance, especially in peak season",
            "Pack plenty of water, especially if hiking — dehydration is a common risk",
            "Layer clothing for drastic temperature changes between day and night",
            "Be aware of elevation changes that may affect stamina and breathing"
          ],
          gettingAround:
            "A free shuttle system operates in the South Rim area. Private vehicles are allowed in most places except during peak months when some routes are closed to reduce congestion. Bicycles and guided tours are also popular.",
          localCustoms:
            "Respect the land and its significance to Native peoples. Do not take rocks or natural artifacts. Follow Leave No Trace principles when hiking or camping.",
          safety:
            "Stay on marked trails and away from edges. Sudden weather changes, wildlife encounters, and extreme heat can pose risks. Check trail and weather conditions before setting out."
        }
      },

      {
        id: 7,
        name: "Paris, France",
        slug: "paris-france",
        description: "The City of Light, known for its romance, art, fashion, and iconic landmarks",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/paris.avif",
        continent: "Europe",
        location: "Île-de-France, Northern France",
        rating: 4.9,
        reviews: 7812,
        bestTimeToVisit: "April to June and September to November",
        language: "French",
        currency: "Euro (€)",
        timeZone: "GMT+1 (CET)",
        weather: "Temperate oceanic climate with mild winters and warm summers",
        longDescription:
          "Paris, the capital of France, is one of the most celebrated cities in the world. Renowned for its romantic ambiance, historic architecture, world-class museums, and vibrant café culture, Paris seamlessly blends tradition with modernity. Whether you're walking along the Seine, gazing at the Eiffel Tower, admiring art in the Louvre, or shopping on the Champs-Élysées, Paris promises a rich and unforgettable experience steeped in elegance and charm.",
        highlights: [
          {
            icon: "star",
            title: "Iconic Landmarks",
            description: "Home to the Eiffel Tower, Notre-Dame Cathedral, and the Arc de Triomphe",
          },
          {
            icon: "map-pin",
            title: "World-Class Museums",
            description: "Art and history galore at the Louvre, Musée d'Orsay, and more",
          },
          {
            icon: "calendar",
            title: "Romantic Atmosphere",
            description: "Charming streets, candlelit dinners, and scenic river walks",
          },
          {
            icon: "info",
            title: "Gastronomic Paradise",
            description: "Michelin-starred restaurants, cozy bistros, and decadent pastries",
          }
        ],
        attractions: [
          {
            name: "Eiffel Tower",
            description: "Symbol of Paris offering panoramic views of the city from its summit",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Louvre Museum",
            description: "World’s largest art museum, home to the Mona Lisa and countless masterpieces",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Montmartre",
            description: "Historic hilltop district known for the Sacré-Cœur Basilica and bohemian charm",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        activities: [
          {
            name: "Seine River Cruise",
            description: "Glide past illuminated landmarks on a romantic evening boat ride",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Museum Hopping",
            description: "Explore art, fashion, and history in Paris's renowned museums and galleries",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Café Sitting",
            description: "Soak up local culture with a coffee and croissant at a Parisian sidewalk café",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "Parisian cuisine is a cornerstone of global gastronomy, blending tradition, elegance, and innovation. From buttery croissants and baguettes to luxurious foie gras and delicate macarons, Paris offers an unforgettable culinary experience.",
          dishes: [
            {
              name: "Croissant",
              description: "Flaky, buttery pastry perfect with a morning coffee",
            },
            {
              name: "Duck Confit",
              description: "Slow-cooked duck leg with crispy skin and tender meat",
            },
            {
              name: "Macarons",
              description: "Colorful almond meringue cookies with creamy fillings",
            }
          ],
          restaurants: [
            {
              name: "Le Jules Verne",
              description: "Michelin-starred restaurant inside the Eiffel Tower with breathtaking views",
            },
            {
              name: "Café de Flore",
              description: "Historic café in Saint-Germain-des-Prés once frequented by intellectuals and artists",
            },
            {
              name: "Septime",
              description: "Modern fine-dining with a focus on sustainability and creative French cuisine",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Learn a few basic French phrases — locals appreciate the effort",
            "Buy museum passes in advance to skip long queues",
            "Watch out for pickpockets in tourist-heavy areas like the Metro and Eiffel Tower",
            "Tipping is appreciated but not required — round up the bill or leave a few extra euros"
          ],
          gettingAround:
            "Paris has an extensive and efficient metro system. Walking is a great way to explore neighborhoods, and taxis or ride-hailing apps are readily available. Consider renting a bike through the Velib' bike-sharing system.",
          localCustoms:
            "Greet with 'Bonjour' before starting a conversation. Dress is typically stylish and understated. Avoid loud conversations in public and always say 'Merci' when leaving shops or restaurants.",
          safety:
            "Paris is generally safe, but stay alert in crowded areas. Use official taxis or registered transport services. Emergency number in France is 112."
        }
      },

      {
        id: 8,
        name: "Rome, Italy",
        slug: "italy",
        description: "The Eternal City, where ancient history meets vibrant modern life",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/italy.avif",
        continent: "Europe",
        location: "Lazio Region, Central Italy",
        rating: 4.9,
        reviews: 6520,
        bestTimeToVisit: "April to June and September to October",
        language: "Italian",
        currency: "Euro (€)",
        timeZone: "GMT+1 (CET)",
        weather: "Mediterranean climate with hot summers and mild, rainy winters",
        longDescription:
          "Rome, the capital of Italy, is a living museum of Western civilization. Once the heart of the Roman Empire, the city boasts a blend of ancient ruins, Renaissance art, Baroque churches, and a bustling street culture. Visitors are mesmerized by historic icons like the Colosseum and Roman Forum, while also indulging in delicious cuisine and lively piazzas. Rome’s rich tapestry of history, art, architecture, and life makes it one of the most compelling destinations on earth.",
        highlights: [
          {
            icon: "star",
            title: "Ancient Landmarks",
            description: "Home to the Colosseum, Pantheon, and Roman Forum",
          },
          {
            icon: "map-pin",
            title: "Vatican City",
            description: "Independent city-state with St. Peter’s Basilica and the Sistine Chapel",
          },
          {
            icon: "calendar",
            title: "Cultural Heritage",
            description: "A cradle of art, architecture, and civilization for over two millennia",
          },
          {
            icon: "info",
            title: "Culinary Delights",
            description: "Pasta, pizza, and gelato in every neighborhood",
          }
        ],
        attractions: [
          {
            name: "Colosseum",
            description: "Iconic Roman amphitheater once hosting gladiator battles",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Trevi Fountain",
            description: "Baroque masterpiece where visitors toss coins to ensure a return to Rome",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Vatican Museums",
            description: "World-class art collection including Michelangelo's Sistine Chapel ceiling",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        activities: [
          {
            name: "Historical Walking Tours",
            description: "Explore Roman ruins and iconic landmarks with expert guides",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Vatican & St. Peter’s Visit",
            description: "Discover Renaissance art, papal history, and climb the dome for city views",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Food & Wine Tours",
            description: "Savor Roman delicacies with local chefs and sommeliers",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "Rome’s cuisine is rustic, rich, and rooted in tradition. The city celebrates simplicity with deep flavors, from handmade pasta to classic street snacks. Don’t miss out on traditional Roman dishes and legendary desserts.",
          dishes: [
            {
              name: "Carbonara",
              description: "Pasta with eggs, pecorino cheese, pancetta, and black pepper",
            },
            {
              name: "Saltimbocca",
              description: "Veal cutlets with prosciutto and sage cooked in white wine",
            },
            {
              name: "Supplì",
              description: "Fried rice balls filled with mozzarella, similar to arancini",
            }
          ],
          restaurants: [
            {
              name: "Roscioli",
              description: "A Roman institution combining deli, bakery, wine bar, and fine dining",
            },
            {
              name: "Trattoria Da Enzo al 29",
              description: "Family-run trattoria in Trastevere known for its authentic Roman dishes",
            },
            {
              name: "La Pergola",
              description: "Rome’s only 3-Michelin-star restaurant offering luxury and panoramic views",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Book tickets in advance for major attractions like the Colosseum and Vatican Museums",
            "Wear comfortable walking shoes — Rome’s cobblestone streets can be challenging",
            "Bring a refillable water bottle; Rome has free public fountains called 'nasoni'",
            "Dinner is typically later (after 8 PM); plan accordingly"
          ],
          gettingAround:
            "Walking is the best way to explore central Rome. Public transport includes buses, trams, and the Metro. Taxis are available but often more expensive. Some areas like Trastevere are best explored on foot.",
          localCustoms:
            "Italians greet with a cheek kiss (or two), especially among friends. Dress modestly when visiting churches. Coffee culture is sacred — cappuccino is usually only for breakfast.",
          safety:
            "Rome is generally safe, but be alert in crowded areas for pickpockets. Secure bags and keep valuables close. Emergency number in Italy is 112."
        }
      },

      {
        id: 9,
        name: "Kyoto, Japan",
        slug: "kyoto-japan",
        description: "A timeless city of temples, traditions, and tranquility in the heart of Japan",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/kyoto.jpg",
        continent: "Asia",
        location: "Kansai Region, Honshu Island, Japan",
        rating: 4.9,
        reviews: 4987,
        bestTimeToVisit: "March to May and October to November",
        language: "Japanese",
        currency: "Japanese Yen (¥)",
        timeZone: "GMT+9 (JST)",
        weather: "Humid subtropical climate with hot summers and cool winters",
        longDescription:
          "Kyoto, the ancient capital of Japan, is a city steeped in cultural heritage and natural beauty. With over a thousand temples and shrines, including 17 UNESCO World Heritage Sites, Kyoto offers a deep dive into traditional Japanese culture. The city blends quiet zen gardens, graceful geisha districts, and seasonal splendor with a calm, contemplative charm. From the vibrant Gion district to the Arashiyama Bamboo Grove, Kyoto enchants visitors with a harmonious blend of the past and present.",
        highlights: [
          {
            icon: "star",
            title: "Historic Temples",
            description: "Golden Pavilion, Kiyomizu-dera, and Ryoan-ji among centuries-old landmarks",
          },
          {
            icon: "map-pin",
            title: "Traditional Culture",
            description: "Tea ceremonies, kimono experiences, and geisha performances in Gion",
          },
          {
            icon: "calendar",
            title: "Seasonal Beauty",
            description: "Cherry blossoms in spring, fiery foliage in autumn",
          },
          {
            icon: "info",
            title: "UNESCO Sites",
            description: "Home to 17 UNESCO-listed historic monuments of ancient Kyoto",
          }
        ],
        attractions: [
          {
            name: "Fushimi Inari Taisha",
            description: "Famous for its thousands of vibrant red torii gates winding up Mount Inari",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Kinkaku-ji (Golden Pavilion)",
            description: "A zen temple covered in gold leaf, reflecting over a serene pond",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Arashiyama Bamboo Grove",
            description: "Enchanting bamboo forest walk surrounded by swaying green stalks",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        activities: [
          {
            name: "Tea Ceremony Experience",
            description: "Participate in a traditional Japanese tea ritual in a tranquil setting",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Kimono Dress-up & Stroll",
            description: "Rent a kimono and explore Kyoto’s historic streets in style",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Zen Garden Meditation",
            description: "Find peace and mindfulness in Kyoto’s famous rock and moss gardens",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "Kyoto cuisine is known for its refinement, seasonality, and presentation. The city is a center for kaiseki (traditional multi-course dining), Buddhist vegetarian fare, and delicate sweets rooted in tradition.",
          dishes: [
            {
              name: "Kaiseki Ryori",
              description: "Elegant multi-course meal highlighting seasonal ingredients and artistry",
            },
            {
              name: "Yudofu",
              description: "Hot tofu dish, often enjoyed in temple areas like Nanzen-ji",
            },
            {
              name: "Matcha Sweets",
              description: "Green tea-flavored mochi, parfaits, and pastries from Uji region",
            }
          ],
          restaurants: [
            {
              name: "Gion Karyo",
              description: "Stylish kaiseki dining experience in Kyoto’s traditional geisha district",
            },
            {
              name: "Shoraian",
              description: "Hidden tofu restaurant in the forested hills of Arashiyama",
            },
            {
              name: "Izuju Sushi",
              description: "Historic spot near Yasaka Shrine known for Kyoto-style pressed sushi",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Learn some basic Japanese phrases — English is not as widely spoken as in Tokyo",
            "Respect temple etiquette: no loud voices, no photography in certain areas, and remove shoes when required",
            "Book tea ceremonies and cultural experiences in advance",
            "Kyoto can get crowded during cherry blossom and autumn seasons — plan early"
          ],
          gettingAround:
            "Kyoto has an excellent public bus and train system. Taxis are available but pricey. Bicycles are a great way to explore flat areas. IC cards like ICOCA or Suica make travel more convenient.",
          localCustoms:
            "Bow when greeting. Be punctual for bookings. Don’t speak loudly in public spaces. Always take off shoes before entering traditional accommodations or homes.",
          safety:
            "Kyoto is very safe with low crime rates. Follow signage and etiquette at shrines and temples. Tap water is safe to drink. Emergency number in Japan is 110 (police) or 119 (ambulance/fire)."
        }
      },

      {
        id: 10,
        name: "Serengeti, Tanzania",
        slug: "serengeti-tanzania",
        description: "One of Africa’s most iconic safari destinations, home to the Great Migration",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/serengeti.jpg",
        continent: "Africa",
        location: "Northern Tanzania, East Africa",
        rating: 4.9,
        reviews: 3721,
        bestTimeToVisit: "June to October (dry season for wildlife viewing)",
        language: "Swahili, English",
        currency: "Tanzanian Shilling (TZS)",
        timeZone: "GMT+3 (EAT)",
        weather: "Tropical savanna climate with a distinct dry and wet season",
        longDescription:
          "The Serengeti is a vast ecosystem in northern Tanzania, renowned for its expansive plains, rich biodiversity, and the world-famous Great Migration — the largest terrestrial mammal migration on the planet. As a UNESCO World Heritage Site, it’s a haven for safari lovers, offering encounters with the Big Five (lion, leopard, elephant, buffalo, and rhino) and over 500 bird species. Visitors can experience luxury lodges, tented camps, and guided game drives under open skies filled with stars. The Serengeti is where the raw beauty of nature thrives year-round.",
        highlights: [
          {
            icon: "star",
            title: "The Great Migration",
            description: "Witness millions of wildebeest and zebras cross the plains and rivers in search of fresh grazing",
          },
          {
            icon: "map-pin",
            title: "Big Five Safari",
            description: "Opportunity to see lion, leopard, rhino, elephant, and buffalo in their natural habitat",
          },
          {
            icon: "calendar",
            title: "Endless Plains",
            description: "The Serengeti's name means 'endless plains' in Maasai — perfect for vast, open landscapes",
          },
          {
            icon: "info",
            title: "Cultural Encounters",
            description: "Visit nearby Maasai villages to learn about indigenous culture and traditions",
          }
        ],
        attractions: [
          {
            name: "Seronera Valley",
            description: "Wildlife-rich central Serengeti region, ideal for spotting big cats and year-round game",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Grumeti River",
            description: "Dramatic river crossing site during the Great Migration with frequent crocodile sightings",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Ngorongoro Crater (Nearby)",
            description: "Massive volcanic caldera with one of the densest concentrations of wildlife in Africa",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        activities: [
          {
            name: "Guided Game Drives",
            description: "Explore the Serengeti by vehicle with expert guides tracking the movement of wildlife",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Hot Air Balloon Safari",
            description: "Soar above the plains at sunrise for a unique perspective and breathtaking views",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Bush Dining",
            description: "Enjoy gourmet meals in the wild, surrounded by the sounds of nature",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "Food in Serengeti lodges and camps is often a fusion of international cuisine with African influences, using fresh, local ingredients. Many safari lodges offer full-board packages with delicious bush breakfasts and sundowner cocktails.",
          dishes: [
            {
              name: "Nyama Choma",
              description: "Grilled meat, often goat or beef, served with spicy sauces and flatbreads",
            },
            {
              name: "Ugali",
              description: "A maize-based staple served with meats or vegetables — a Tanzanian favorite",
            },
            {
              name: "Kachumbari",
              description: "Fresh tomato and onion salad with chili and lime",
            }
          ],
          restaurants: [
            {
              name: "Four Seasons Serengeti Lodge Restaurant",
              description: "Upscale dining with panoramic views of a watering hole frequently visited by elephants",
            },
            {
              name: "Serengeti Serena Safari Lodge",
              description: "Buffet-style meals blending continental and Swahili dishes in a scenic setting",
            },
            {
              name: "Sayari Camp Dining",
              description: "Luxury camp offering gourmet bush meals with seasonal ingredients",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Book safaris and lodges months in advance during peak migration season",
            "Pack neutral-colored clothing, binoculars, sunscreen, and insect repellent",
            "Vaccinations like yellow fever and anti-malarials may be recommended — check before traveling",
            "Most camps use solar power — pack a flashlight or headlamp"
          ],
          gettingAround:
            "Access is typically via small bush planes landing at regional airstrips. Game drives are conducted in open 4x4 vehicles by your lodge. Roads are rough and distances vast — guided tours are the norm.",
          localCustoms:
            "The Maasai people are known for their colorful dress and traditions. Always ask permission before taking photos. Tipping safari guides and lodge staff is customary and appreciated.",
          safety:
            "The Serengeti is safe for tourists when guided. Always follow your guide’s instructions. Avoid walking alone at night, and stay within camp boundaries. Wildlife is wild — respect boundaries and stay alert."
        }
      },

      {
        id: 11,
        name: "Great Barrier Reef, Australia",
        slug: "great-barrier-reef-australia",
        description: "The world’s largest coral reef system and a UNESCO World Heritage Site",
        image: "/placeholder.svg?height=400&width=600",
        heroImage: "/images/great-reef.jpg",
        continent: "Australia & Oceania",
        location: "Coral Sea, off the coast of Queensland, Australia",
        rating: 4.8,
        reviews: 4375,
        bestTimeToVisit: "June to October (dry season with optimal underwater visibility)",
        language: "English",
        currency: "Australian Dollar (AUD)",
        timeZone: "GMT+10 (AEST)",
        weather: "Tropical climate with warm temperatures year-round; wet season from November to April",
        longDescription:
          "The Great Barrier Reef is the largest living structure on Earth, stretching over 2,300 kilometers along Australia's northeast coast. Made up of more than 2,900 individual reefs and 900 islands, it is home to a dazzling array of marine life, including coral, fish, turtles, and dolphins. A UNESCO World Heritage Site, it offers unforgettable snorkeling, diving, and marine exploration experiences. Whether you're exploring from Cairns, Airlie Beach, or Port Douglas, the reef promises vibrant ecosystems and natural wonders unlike anywhere else on the planet.",
        highlights: [
          {
            icon: "star",
            title: "World’s Largest Reef System",
            description: "Over 2,900 reefs visible even from space",
          },
          {
            icon: "map-pin",
            title: "Unmatched Marine Biodiversity",
            description: "Home to thousands of species of fish, coral, mollusks, and more",
          },
          {
            icon: "calendar",
            title: "Diving & Snorkeling Paradise",
            description: "Crystal-clear waters and vibrant coral gardens await beneath the surface",
          },
          {
            icon: "info",
            title: "Protected Natural Wonder",
            description: "Designated as a UNESCO site with numerous conservation efforts in place",
          }
        ],
        attractions: [
          {
            name: "Heart Reef",
            description: "A naturally formed coral reef shaped like a heart, best seen by air",
            image: "/images/heart-reef.jpeg",
          },
          {
            name: "Whitsunday Islands",
            description: "A group of tropical islands offering sailing, snorkeling, and stunning beaches",
            image: "/images/white-sand-island.jpg",
          },
          {
            name: "Cairns & Port Douglas",
            description: "Main gateways to reef tours and marine adventures",
            image: "/images/cairns-port.jpg",
          }
        ],
        activities: [
          {
            name: "Scuba Diving",
            description: "Explore reef walls, caves, and coral gardens with certified dive operators",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Snorkeling Tours",
            description: "Accessible reef experiences for all levels, with colorful fish and coral close to the surface",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            name: "Glass-Bottom Boat Rides",
            description: "See the reef’s beauty without getting wet — ideal for families and non-swimmers",
            image: "/placeholder.svg?height=300&width=500",
          }
        ],
        food: {
          overview:
            "The Queensland coast features fresh seafood and tropical produce influenced by Australian and Pacific Island cuisines. Reef towns offer everything from upscale waterfront dining to casual beachside cafés.",
          dishes: [
            {
              name: "Moreton Bay Bug",
              description: "Delicate shellfish similar to lobster, often grilled with garlic butter",
            },
            {
              name: "Coral Trout",
              description: "Locally caught reef fish served grilled, fried, or in fish tacos",
            },
            {
              name: "Prawn Cocktail",
              description: "Classic cold shrimp dish with tangy cocktail sauce — perfect after a reef cruise",
            }
          ],
          restaurants: [
            {
              name: "Ochre Restaurant (Cairns)",
              description: "Australian fusion with native ingredients and waterfront views",
            },
            {
              name: "Salsa Bar & Grill (Port Douglas)",
              description: "Popular tropical-style dining with seafood and bold flavors",
            },
            {
              name: "Hemisphere Restaurant (Hamilton Island)",
              description: "Fine dining experience with modern Australian cuisine and stunning vistas",
            }
          ]
        },
        tips: {
          beforeYouGo: [
            "Book reef tours early, especially in peak travel seasons (June–October)",
            "Use reef-safe sunscreen to protect marine ecosystems",
            "Pack motion sickness meds if you're prone to sea sickness",
            "Consider stinger suits when swimming during jellyfish season (Nov–May)"
          ],
          gettingAround:
            "Most visitors base themselves in Cairns, Port Douglas, or the Whitsundays. Boat tours and day cruises provide access to different reef sections. Light aircraft and helicopters offer scenic flights.",
          localCustoms:
            "Respect marine life — do not touch coral or chase animals. Many tours emphasize eco-awareness and conservation. Australians are friendly but appreciate personal space and direct communication.",
          safety:
            "Always follow the instructions of guides and dive masters. Wear stinger suits in jellyfish season. Pay attention to weather warnings, and stay hydrated and sun-protected when out on the water."
        }
      }
      
      
      
      
      
      
      
      
  ]
  
  