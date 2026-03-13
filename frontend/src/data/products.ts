export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const products: Product[] = [
  // ── Pens ──────────────────────────────────────────────────────────────
  { id: 5, name: "Executive Metal Pen", slug: "executive-metal-pen", description: "Elegant metal ballpoint pen with laser engraving area. A timeless corporate gift for clients and staff.", category: "Pens", categorySlug: "pens", image: "/products/5.jpg" },
  { id: 90, name: "Vistro Pen - Classic", slug: "vistro-pen-classic", description: "Popular retractable ballpoint pen available in a wide range of colours. Large print area for branding.", category: "Pens", categorySlug: "pens", image: "/products/90.jpg" },
  { id: 91, name: "Spark Stylus Pen", slug: "spark-stylus-pen", description: "Dual-function pen with touchscreen stylus tip. Perfect for modern office and conference use.", category: "Pens", categorySlug: "pens", image: "/products/91.jpg" },
  { id: 92, name: "Panama Pen - Choice", slug: "panama-pen-choice", description: "Slim profile pen in assorted bold colours. Smooth writing action with large branding area.", category: "Pens", categorySlug: "pens", image: "/products/92.jpg" },
  { id: 93, name: "Bambusa Eco Pen", slug: "bambusa-eco-pen", description: "Sustainable bamboo barrel pen with smooth writing action. An eco-friendly promotional choice.", category: "Pens", categorySlug: "pens", image: "/products/93.jpg" },
  { id: 110, name: "Pierre Cardin Gift Set", slug: "pierre-cardin-gift-set", description: "Luxury Pierre Cardin pen in premium presentation box. Executive-level gifting at its finest.", category: "Pens", categorySlug: "pens", image: "/products/110.jpg" },
  { id: 111, name: "Omega Pen", slug: "omega-pen", description: "Budget-friendly retractable ballpoint pen with coloured barrel. Ideal for high-volume giveaways.", category: "Pens", categorySlug: "pens", image: "/products/111.jpg" },
  { id: 112, name: "Kraft Pen", slug: "kraft-pen", description: "Natural kraft cardboard barrel pen. Eco-conscious design with pad print branding.", category: "Pens", categorySlug: "pens", image: "/products/112.jpg" },
  { id: 113, name: "Recycled Plastic Pen", slug: "recycled-plastic-pen", description: "Pen made from recycled PET plastic. Sustainable choice without compromising on quality.", category: "Pens", categorySlug: "pens", image: "/products/113.jpg" },
  { id: 114, name: "Gem Pen", slug: "gem-pen", description: "Sleek metal pen with polished chrome accents. A premium feel for executive promotions.", category: "Pens", categorySlug: "pens", image: "/products/114.jpg" },

  // ── Drinkware ─────────────────────────────────────────────────────────
  { id: 1, name: "Executive Travel Mug", slug: "executive-travel-mug", description: "Premium insulated travel mug with branded logo area. Perfect for corporate gifting and daily use.", category: "Drinkware", categorySlug: "drinkware", image: "/products/1.jpg" },
  { id: 3, name: "Eco Glass Water Bottle", slug: "eco-glass-water-bottle", description: "Sustainable glass water bottle with natural cork lid. Ideal for eco-conscious branding.", category: "Drinkware", categorySlug: "drinkware", image: "/products/3.jpg" },
  { id: 56, name: "Express Cup Classic", slug: "express-cup-classic", description: "Reusable coffee cup with customisable band. Available in multiple colours with full-colour print.", category: "Drinkware", categorySlug: "drinkware", image: "/products/56.jpg" },
  { id: 57, name: "Nexus Vacuum Bottle", slug: "nexus-vacuum-bottle", description: "Double-wall vacuum insulated bottle keeping drinks hot 12hrs or cold 24hrs. Premium finish.", category: "Drinkware", categorySlug: "drinkware", image: "/products/57.jpg" },
  { id: 58, name: "Action Sipper Bottle", slug: "action-sipper-bottle", description: "Lightweight BPA-free sports bottle with flip-top lid. Great for events, gyms and outdoors.", category: "Drinkware", categorySlug: "drinkware", image: "/products/58.jpg" },
  { id: 59, name: "Aura Vacuum Bottle", slug: "aura-vacuum-bottle", description: "Vibrant coloured vacuum bottles available in a full spectrum. Mix and match for events.", category: "Drinkware", categorySlug: "drinkware", image: "/products/59.jpg" },
  { id: 100, name: "Camaro Vacuum Bottle", slug: "camaro-vacuum-bottle", description: "Premium stainless steel vacuum bottle in silver and black finishes. Durable and sleek.", category: "Drinkware", categorySlug: "drinkware", image: "/products/100.jpg" },
  { id: 101, name: "Vacuum Flask Set", slug: "vacuum-flask-set", description: "Professional vacuum flask with matching cups. Ideal for executive gifts and corporate hampers.", category: "Drinkware", categorySlug: "drinkware", image: "/products/101.jpg" },
  { id: 97, name: "Carnival Tumbler", slug: "carnival-tumbler", description: "Colourful double-wall tumbler with straw. Available in bright colours for summer promotions.", category: "Drinkware", categorySlug: "drinkware", image: "/products/97.jpg" },
  { id: 98, name: "Choice Coffee Mug", slug: "choice-coffee-mug", description: "Classic ceramic coffee mug with large print area. A staple for office and hospitality branding.", category: "Drinkware", categorySlug: "drinkware", image: "/products/98.jpg" },
  { id: 99, name: "Octiva Aluminium Bottle", slug: "octiva-aluminium-bottle", description: "Lightweight aluminium drink bottle with carabiner clip. Ideal for sports and outdoor events.", category: "Drinkware", categorySlug: "drinkware", image: "/products/99.jpg" },

  // ── Business ──────────────────────────────────────────────────────────
  { id: 82, name: "Premium Notebook", slug: "premium-notebook", description: "Hard-cover A5 notebook with elastic closure and ribbon marker. Classic corporate branding.", category: "Business", categorySlug: "business", image: "/products/82.jpg" },
  { id: 83, name: "Desk Organiser", slug: "desk-organiser", description: "Multi-function desk organiser with wireless charging base. Modern office essential.", category: "Business", categorySlug: "business", image: "/products/83.jpg" },
  { id: 84, name: "Sticky Notes Set", slug: "sticky-notes-set", description: "Branded sticky notes in custom shapes and colours. Practical desk essential with daily visibility.", category: "Business", categorySlug: "business", image: "/products/84.jpg" },
  { id: 11, name: "Scientific Calculator", slug: "scientific-calculator", description: "Dual-power calculator with large display. Branded office essential for schools and workplaces.", category: "Business", categorySlug: "business", image: "/products/11.jpg" },
  { id: 12, name: "Desktop Calculator", slug: "desktop-calculator", description: "Compact desktop calculator with custom branding area. Everyday office accessory.", category: "Business", categorySlug: "business", image: "/products/12.jpg" },
  { id: 85, name: "Branded Lanyard", slug: "branded-lanyard", description: "Full-colour sublimated lanyard with safety breakaway clip. Essential for events and conferences.", category: "Business", categorySlug: "business", image: "/products/85.jpg" },
  { id: 86, name: "Magnetic Fridge Planner", slug: "magnetic-fridge-planner", description: "Magnetic whiteboard planner for fridge or office. Weekly planning with custom branding.", category: "Business", categorySlug: "business", image: "/products/86.jpg" },
  { id: 87, name: "Cork Notebook", slug: "cork-notebook", description: "Natural cork-covered notebook with recycled paper. Eco executive essential.", category: "Business", categorySlug: "business", image: "/products/87.jpg" },
  { id: 88, name: "A5 Notebook - Hardcover", slug: "a5-notebook-hardcover", description: "Quality hardcover notebook with 80 lined pages. Available in multiple colours.", category: "Business", categorySlug: "business", image: "/products/88.jpg" },
  { id: 89, name: "Ezy Badge", slug: "ezy-badge", description: "Reusable name badge with magnetic or pin fastening. Professional conference essential.", category: "Business", categorySlug: "business", image: "/products/89.jpg" },

  // ── Print ─────────────────────────────────────────────────────────────
  { id: 13, name: "AD Labels 40 x 20mm", slug: "ad-labels-40x20mm", description: "Custom printed adhesive labels in 40x20mm size. Full-colour digital print available.", category: "Print", categorySlug: "print", image: "/products/13.jpg" },
  { id: 14, name: "Resin Coated Labels", slug: "resin-coated-labels", description: "Durable resin-coated labels with premium finish. Ideal for product branding and assets.", category: "Print", categorySlug: "print", image: "/products/14.jpg" },
  { id: 16, name: "Full Colour Business Cards", slug: "full-colour-business-cards", description: "Premium full-colour business cards on quality stock. Professional first impressions.", category: "Print", categorySlug: "print", image: "/products/16.jpg" },
  { id: 17, name: "Full Colour Loyalty Cards", slug: "full-colour-loyalty-cards", description: "Custom loyalty cards with full-colour print. Drive repeat business with branded rewards.", category: "Print", categorySlug: "print", image: "/products/17.jpg" },
  { id: 18, name: "A7 Note Pad - 25 Leaves", slug: "a7-note-pad-25-leaves", description: "Compact A7 notepad with 25 printed leaves. Great for quick notes and promotional giveaways.", category: "Print", categorySlug: "print", image: "/products/18.jpg" },
  { id: 102, name: "Office Note Pad - A7", slug: "office-note-pad-a7", description: "Branded A7 office notepad with your logo. Everyday desktop visibility.", category: "Print", categorySlug: "print", image: "/products/102.jpg" },
  { id: 103, name: "A7 Message Card", slug: "a7-message-card", description: "Custom printed message cards for gift packaging and corporate communications.", category: "Print", categorySlug: "print", image: "/products/103.jpg" },
  { id: 104, name: "Aquarelle Watercolour Bookmark", slug: "aquarelle-watercolour-bookmark", description: "Unique watercolour-style bookmark pad. Creative promotional item for education and retail.", category: "Print", categorySlug: "print", image: "/products/104.jpg" },

  // ── Packaging ─────────────────────────────────────────────────────────
  { id: 65, name: "Executive Gift Box", slug: "executive-gift-box", description: "Premium magnetic closure gift box for curated corporate gifts. Professional presentation.", category: "Packaging", categorySlug: "packaging", image: "/products/65.jpg" },
  { id: 66, name: "Wine Gift Box", slug: "wine-gift-box", description: "Elegant wine gift box with branded accessories. Perfect for client appreciation.", category: "Packaging", categorySlug: "packaging", image: "/products/66.jpg" },
  { id: 67, name: "Gourmet Hamper Box", slug: "gourmet-hamper-box", description: "Premium hamper box with ribbon closure. Ideal for gourmet gift sets and seasonal gifting.", category: "Packaging", categorySlug: "packaging", image: "/products/67.jpg" },
  { id: 105, name: "Kraft Paper Pen Sleeve", slug: "kraft-paper-pen-sleeve", description: "Natural kraft paper pen sleeve for single pen presentation. Eco-friendly packaging option.", category: "Packaging", categorySlug: "packaging", image: "/products/105.jpg" },
  { id: 106, name: "Velvet Pen Sleeve", slug: "velvet-pen-sleeve", description: "Luxurious velvet pen sleeve for premium pen gifting. Executive presentation.", category: "Packaging", categorySlug: "packaging", image: "/products/106.jpg" },
  { id: 107, name: "Cardboard Pen Sleeve", slug: "cardboard-pen-sleeve", description: "Simple cardboard pen sleeve with custom print options. Budget-friendly packaging.", category: "Packaging", categorySlug: "packaging", image: "/products/107.jpg" },
  { id: 108, name: "Cotton Bottle Gift Bag", slug: "cotton-bottle-gift-bag", description: "Reusable cotton drawstring bag for bottle gifting. Natural and eco-friendly.", category: "Packaging", categorySlug: "packaging", image: "/products/108.jpg" },

  // ── Promotion ─────────────────────────────────────────────────────────
  { id: 71, name: "Stress Ball Collection", slug: "stress-ball-collection", description: "Custom-shaped stress balls in a variety of fun designs. Memorable promotional giveaways.", category: "Promotion", categorySlug: "promotion", image: "/products/71.jpg" },
  { id: 72, name: "Branded Frisbee", slug: "branded-frisbee", description: "Full-colour printed frisbees for outdoor fun and maximum brand exposure.", category: "Promotion", categorySlug: "promotion", image: "/products/72.jpg" },
  { id: 73, name: "Custom Keyring", slug: "custom-keyring", description: "Metal keyring with custom shape and engraving. Everyday brand reminder that lasts.", category: "Promotion", categorySlug: "promotion", image: "/products/73.jpg" },
  { id: 74, name: "Branded Playing Cards", slug: "branded-playing-cards", description: "Custom printed playing cards in presentation box. Unique promotional gift.", category: "Promotion", categorySlug: "promotion", image: "/products/74.jpg" },
  { id: 75, name: "Promotional Football", slug: "promotional-football", description: "Full-size branded football for sports events and team building activities.", category: "Promotion", categorySlug: "promotion", image: "/products/75.jpg" },
  { id: 7, name: "Beach Ball Set", slug: "beach-ball-set", description: "Colourful beach balls in multiple sizes. Perfect for summer promotions and events.", category: "Promotion", categorySlug: "promotion", image: "/products/7.jpg" },
  { id: 76, name: "Lollipops", slug: "lollipops", description: "Custom wrapped lollipops with branded labels. Sweet promotional treats for all ages.", category: "Promotion", categorySlug: "promotion", image: "/products/76.jpg" },
  { id: 77, name: "Plastic Golf Ball Marker", slug: "plastic-golf-ball-marker", description: "Custom printed golf ball marker. Essential accessory for golf events and tournaments.", category: "Promotion", categorySlug: "promotion", image: "/products/77.jpg" },
  { id: 78, name: "Golf Tee", slug: "golf-tee", description: "Branded wooden golf tees in custom colours. Perfect for golf day promotions.", category: "Promotion", categorySlug: "promotion", image: "/products/78.jpg" },
  { id: 79, name: "Tyvek Event Wrist Band", slug: "tyvek-event-wrist-band", description: "Full-colour printed Tyvek wristbands for events and festivals. Tamper-proof design.", category: "Promotion", categorySlug: "promotion", image: "/products/79.jpg" },
  { id: 8, name: "Temporary Tattoo Classic", slug: "temporary-tattoo-classic", description: "Custom designed temporary tattoos. Fun promotional items for events and children's activities.", category: "Promotion", categorySlug: "promotion", image: "/products/8.jpg" },
  { id: 9, name: "Plastic Event Wrist Band", slug: "plastic-event-wrist-band", description: "Durable plastic wristband with snap closure. Ideal for multi-day events and festivals.", category: "Promotion", categorySlug: "promotion", image: "/products/9.jpg" },

  // ── Technology ─────────────────────────────────────────────────────────
  { id: 2, name: "Horizon Power Bank", slug: "horizon-power-bank", description: "Compact 5000mAh power bank with dual USB output. Essential tech accessory for on-the-go.", category: "Technology", categorySlug: "technology", image: "/products/2.jpg" },
  { id: 60, name: "Wireless Charging Pad", slug: "wireless-charging-pad", description: "Sleek wireless charging pad with LED indicator. Compatible with all Qi-enabled devices.", category: "Technology", categorySlug: "technology", image: "/products/60.jpg" },
  { id: 61, name: "Bluetooth Speaker", slug: "bluetooth-speaker", description: "Portable Bluetooth speaker with premium sound quality. Branded tech gift for any occasion.", category: "Technology", categorySlug: "technology", image: "/products/61.jpg" },
  { id: 62, name: "USB Hub & Accessories", slug: "usb-hub-accessories", description: "Multi-port USB hub with cable organiser. Practical desk essential for modern workspaces.", category: "Technology", categorySlug: "technology", image: "/products/62.jpg" },
  { id: 63, name: "Branded USB Drive", slug: "branded-usb-drive", description: "Custom shaped USB drives in various capacities. Memorable data storage solution.", category: "Technology", categorySlug: "technology", image: "/products/63.jpg" },
  { id: 64, name: "Webcam Cover Set", slug: "webcam-cover-set", description: "Privacy webcam covers for laptops and devices. Essential security accessory with branding.", category: "Technology", categorySlug: "technology", image: "/products/64.jpg" },
  { id: 68, name: "VibeTAG Bluetooth Tracker", slug: "vibetag-bluetooth-tracker", description: "Compact Bluetooth item tracker with custom branding. Never lose keys or bags again.", category: "Technology", categorySlug: "technology", image: "/products/68.jpg" },
  { id: 69, name: "LED Desk Lamp", slug: "led-desk-lamp", description: "Rechargeable LED desk lamp with adjustable brightness. Practical branded office accessory.", category: "Technology", categorySlug: "technology", image: "/products/69.jpg" },
  { id: 109, name: "Wireless Earbuds", slug: "wireless-earbuds", description: "True wireless earbuds in branded charging case. Premium tech gift for clients and staff.", category: "Technology", categorySlug: "technology", image: "/products/109.jpg" },

  // ── Bags ───────────────────────────────────────────────────────────────
  { id: 21, name: "Urban Backpack", slug: "urban-backpack", description: "Modern urban backpack with padded laptop compartment. Branded for maximum visibility.", category: "Bags", categorySlug: "bags", image: "/products/21.jpg" },
  { id: 22, name: "Conference Satchel", slug: "conference-satchel", description: "Professional conference bag with multiple compartments and adjustable strap.", category: "Bags", categorySlug: "bags", image: "/products/22.jpg" },
  { id: 44, name: "Canvas Tote Bag", slug: "canvas-tote-bag", description: "Natural canvas tote bag with large print area. Eco-friendly and reusable shopping essential.", category: "Bags", categorySlug: "bags", image: "/products/44.jpg" },
  { id: 45, name: "Printed Shopping Bags", slug: "printed-shopping-bags", description: "Custom printed shopping bags with vibrant full-colour designs. Retail and event essential.", category: "Bags", categorySlug: "bags", image: "/products/45.jpg" },
  { id: 46, name: "Drawstring Sports Bag", slug: "drawstring-sports-bag", description: "Lightweight drawstring bag in multiple colours. Ideal for events, sports days and giveaways.", category: "Bags", categorySlug: "bags", image: "/products/46.jpg" },
  { id: 47, name: "Executive Laptop Bag", slug: "executive-laptop-bag", description: "Premium padded laptop bag with professional finish. Corporate travel essential.", category: "Bags", categorySlug: "bags", image: "/products/47.jpg" },
  { id: 48, name: "Trade Show Kit Bag", slug: "trade-show-kit-bag", description: "Durable trade show bag with reinforced handles and large branding area.", category: "Bags", categorySlug: "bags", image: "/products/48.jpg" },
  { id: 23, name: "Cooler Bag", slug: "cooler-bag", description: "Insulated cooler bag with zippered compartments. Essential for outdoor events and hospitality.", category: "Bags", categorySlug: "bags", image: "/products/23.jpg" },
  { id: 24, name: "Recycled Tote Bag", slug: "recycled-tote-bag", description: "Tote bag made from 100% recycled materials. Show your green credentials with every use.", category: "Bags", categorySlug: "bags", image: "/products/24.jpg" },
  { id: 115, name: "Swiss Peak Backpack", slug: "swiss-peak-backpack", description: "Premium Swiss Peak branded backpack with anti-theft features. Executive travel companion.", category: "Bags", categorySlug: "bags", image: "/products/115.jpg" },

  // ── Personal ──────────────────────────────────────────────────────────
  { id: 31, name: "Ella LED Compact Mirror", slug: "ella-led-compact-mirror", description: "LED-illuminated compact mirror with custom branding. A premium personal accessory.", category: "Personal", categorySlug: "personal", image: "/products/31.jpg" },
  { id: 32, name: "Radiance Compact Mirror", slug: "radiance-compact-mirror", description: "Dual-sided compact mirror with magnification. Elegant personal gift with branding area.", category: "Personal", categorySlug: "personal", image: "/products/32.jpg" },
  { id: 33, name: "Sherpa Blanket", slug: "sherpa-blanket", description: "Luxurious sherpa-lined blanket with embroidered branding. A cosy premium gift.", category: "Personal", categorySlug: "personal", image: "/products/33.jpg" },
  { id: 116, name: "Sunglasses Gift Set", slug: "sunglasses-gift-set", description: "Branded sunglasses with protective carry case. Summer corporate essential.", category: "Personal", categorySlug: "personal", image: "/products/116.jpg" },
  { id: 39, name: "BBQ Apron Set", slug: "bbq-apron-set", description: "Custom BBQ apron with utensil pockets. Great for lifestyle branding and hospitality.", category: "Personal", categorySlug: "personal", image: "/products/39.jpg" },
  { id: 15, name: "Multi-Tool Kit", slug: "multi-tool-kit", description: "Professional multi-tool kit in branded case. Practical and impressive corporate gift.", category: "Personal", categorySlug: "personal", image: "/products/15.jpg" },
  { id: 41, name: "Travel Tea Infuser", slug: "travel-tea-infuser", description: "Portable tea infuser bottle for loose leaf tea. Health-conscious branded gift.", category: "Personal", categorySlug: "personal", image: "/products/41.jpg" },
  { id: 42, name: "Luncheon Expandable Lunch Box", slug: "luncheon-expandable-lunch-box", description: "Collapsible silicone lunch box that expands when needed. Practical eco-friendly gift.", category: "Personal", categorySlug: "personal", image: "/products/42.jpg" },
  { id: 43, name: "Omni Multi-Function Pocket Knife", slug: "omni-multi-function-pocket-knife", description: "Stainless steel multi-function pocket knife with branded handle. Versatile outdoor tool.", category: "Personal", categorySlug: "personal", image: "/products/43.jpg" },

  // ── Leisure ────────────────────────────────────────────────────────────
  { id: 4, name: "Storm-Proof Umbrella", slug: "storm-proof-umbrella", description: "Premium wind-resistant umbrella with fibreglass frame. Built to last through any weather.", category: "Leisure", categorySlug: "leisure", image: "/products/4.jpg" },
  { id: 30, name: "Camping Lantern", slug: "camping-lantern", description: "Portable LED camping lantern with multiple light modes. Essential outdoor companion.", category: "Leisure", categorySlug: "leisure", image: "/products/30.jpg" },
  { id: 70, name: "Frontier Directors Chair", slug: "frontier-directors-chair", description: "Branded folding directors chair with cup holder. Premium outdoor seating.", category: "Leisure", categorySlug: "leisure", image: "/products/70.jpg" },
  { id: 94, name: "Golf Umbrella", slug: "golf-umbrella", description: "Large golf umbrella with reinforced canopy. Maximum brand exposure on the course.", category: "Leisure", categorySlug: "leisure", image: "/products/94.jpg" },
  { id: 95, name: "Compact Travel Umbrella", slug: "compact-travel-umbrella", description: "Auto-open compact umbrella that fits in any bag. Convenient and branded.", category: "Leisure", categorySlug: "leisure", image: "/products/95.jpg" },
  { id: 96, name: "Two-Tone Umbrella", slug: "two-tone-umbrella", description: "Stylish two-tone umbrella with wooden handle. Classic promotional item.", category: "Leisure", categorySlug: "leisure", image: "/products/96.jpg" },
  { id: 54, name: "Picnic Set", slug: "picnic-set", description: "Complete picnic set with carry case. Branded lifestyle experience for outdoor events.", category: "Leisure", categorySlug: "leisure", image: "/products/54.jpg" },
  { id: 55, name: "Frontier Fraser Picnic Blanket", slug: "frontier-fraser-picnic-blanket", description: "Waterproof-backed picnic blanket with carry handle. Perfect for outdoor brand activation.", category: "Leisure", categorySlug: "leisure", image: "/products/55.jpg" },
  { id: 34, name: "Bamboo Drink Bottle", slug: "bamboo-drink-bottle", description: "Sustainable bamboo and stainless steel drink bottle. Nature-inspired branding.", category: "Leisure", categorySlug: "leisure", image: "/products/34.jpg" },
  { id: 35, name: "Frontier Lightweight Folding Chair", slug: "frontier-lightweight-folding-chair", description: "Compact folding camp chair with carry bag. Branded outdoor and event seating.", category: "Leisure", categorySlug: "leisure", image: "/products/35.jpg" },
  { id: 36, name: "Sports Towel", slug: "sports-towel", description: "Quick-dry microfibre sports towel with sublimation print. Gym and event essential.", category: "Leisure", categorySlug: "leisure", image: "/products/36.jpg" },
  { id: 37, name: "Wheat Straw Pen Set", slug: "wheat-straw-pen-set", description: "Pens made from wheat straw composite. Biodegradable and branded eco option.", category: "Leisure", categorySlug: "leisure", image: "/products/37.jpg" },

  // ── Headwear ──────────────────────────────────────────────────────────
  { id: 25, name: "Classic Cap", slug: "classic-cap", description: "Structured cotton cap with embroidered logo. A promotional staple for any brand.", category: "Headwear", categorySlug: "headwear", image: "/products/25.jpg" },
  { id: 40, name: "Hi-Vis Beanie", slug: "hi-vis-beanie", description: "Fluorescent safety beanie for outdoor workers. Warm and highly visible.", category: "Headwear", categorySlug: "headwear", image: "/products/40.jpg" },
  { id: 49, name: "Snapback Cap Range", slug: "snapback-cap-range", description: "Trendy snapback caps in multiple colour combinations. Urban style branding.", category: "Headwear", categorySlug: "headwear", image: "/products/49.jpg" },
  { id: 50, name: "Bucket Hat", slug: "bucket-hat", description: "Sun-smart bucket hat with wide brim. Great for outdoor events and summer promos.", category: "Headwear", categorySlug: "headwear", image: "/products/50.jpg" },
  { id: 38, name: "Organic Cotton Cap", slug: "organic-cotton-cap", description: "Cap made from certified organic cotton. Sustainable headwear with quality embroidery.", category: "Headwear", categorySlug: "headwear", image: "/products/38.jpg" },
  { id: 51, name: "Trucker Cap", slug: "trucker-cap", description: "Classic mesh-back trucker cap with foam front. Casual branding for outdoor events.", category: "Headwear", categorySlug: "headwear", image: "/products/51.jpg" },
  { id: 52, name: "Performance Cap", slug: "performance-cap", description: "Moisture-wicking performance cap for sports and outdoor activities. Lightweight and breathable.", category: "Headwear", categorySlug: "headwear", image: "/products/52.jpg" },
  { id: 53, name: "Flat Peak Cap", slug: "flat-peak-cap", description: "Modern flat peak cap with structured crown. Premium embroidery options available.", category: "Headwear", categorySlug: "headwear", image: "/products/53.jpg" },

  // ── Apparel ───────────────────────────────────────────────────────────
  { id: 10, name: "Kids Branded T-Shirt", slug: "kids-branded-tshirt", description: "Comfortable kids t-shirt with vibrant print options. Perfect for school events.", category: "Apparel", categorySlug: "apparel", image: "/products/10.jpg" },
  { id: 26, name: "Corporate Polo Shirt", slug: "corporate-polo-shirt", description: "Premium corporate polo shirt in navy. Professional, comfortable and embroidery-ready.", category: "Apparel", categorySlug: "apparel", image: "/products/26.jpg" },
  { id: 27, name: "Ladies Corporate Polo", slug: "ladies-corporate-polo", description: "Tailored ladies polo shirt with embroidery options. Smart corporate wear.", category: "Apparel", categorySlug: "apparel", image: "/products/27.jpg" },
  { id: 28, name: "Team Sports Jersey", slug: "team-sports-jersey", description: "Performance sports jersey with sublimation printing for teams and clubs.", category: "Apparel", categorySlug: "apparel", image: "/products/28.jpg" },
  { id: 80, name: "Premium Softshell Jacket", slug: "premium-softshell-jacket", description: "High-quality softshell jacket. Windproof and water-resistant with embroidered branding.", category: "Apparel", categorySlug: "apparel", image: "/products/80.jpg" },
  { id: 29, name: "Hi-Vis Work Shirt", slug: "hi-vis-work-shirt", description: "Safety hi-visibility work shirt meeting Australian standards. Essential workwear.", category: "Apparel", categorySlug: "apparel", image: "/products/29.jpg" },
  { id: 81, name: "Classic T-Shirt", slug: "classic-tshirt", description: "Quality cotton t-shirt available in 20+ colours. Screen print and digital print options.", category: "Apparel", categorySlug: "apparel", image: "/products/81.jpg" },
];

// ── Categories ────────────────────────────────────────────────────────
export const categories: Category[] = [
  { name: "Pens", slug: "pens", description: "Ballpoint pens, stylus pens, eco pens and premium writing instruments for every budget.", image: "/products/5.jpg", productCount: 10 },
  { name: "Drinkware", slug: "drinkware", description: "Branded mugs, bottles, tumblers, vacuum flasks and reusable cups for every occasion.", image: "/products/1.jpg", productCount: 11 },
  { name: "Business", slug: "business", description: "Notebooks, calculators, lanyards, name badges and desk accessories for the modern office.", image: "/products/82.jpg", productCount: 10 },
  { name: "Print", slug: "print", description: "Custom labels, business cards, notepads and printed stationery with full-colour options.", image: "/products/16.jpg", productCount: 8 },
  { name: "Packaging", slug: "packaging", description: "Gift boxes, pen sleeves, bottle bags and premium presentation packaging.", image: "/products/65.jpg", productCount: 7 },
  { name: "Promotion", slug: "promotion", description: "Stress balls, keyrings, wristbands, games and fun promotional giveaway items.", image: "/products/71.jpg", productCount: 12 },
  { name: "Technology", slug: "technology", description: "Power banks, USB drives, speakers, wireless chargers and branded tech accessories.", image: "/products/2.jpg", productCount: 9 },
  { name: "Bags", slug: "bags", description: "Backpacks, tote bags, laptop bags, cooler bags and conference satchels.", image: "/products/21.jpg", productCount: 10 },
  { name: "Personal", slug: "personal", description: "Mirrors, sunglasses, blankets, multi-tools and lifestyle accessories.", image: "/products/116.jpg", productCount: 9 },
  { name: "Leisure", slug: "leisure", description: "Umbrellas, camping gear, picnic sets, outdoor furniture and sports accessories.", image: "/products/4.jpg", productCount: 12 },
  { name: "Headwear", slug: "headwear", description: "Caps, beanies, bucket hats, snapbacks and performance headwear with custom branding.", image: "/products/25.jpg", productCount: 8 },
  { name: "Apparel", slug: "apparel", description: "T-shirts, polos, jackets, hi-vis workwear and uniforms with embroidery and print options.", image: "/products/26.jpg", productCount: 7 },
];

// ── Helper Functions ─────────────────────────────────────────────────
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return [products[0], products[12], products[24], products[36], products[48], products[60], products[72], products[84], products[96], products[105], products[110], products[112]];
}
