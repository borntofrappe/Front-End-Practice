// url prefacing each entry
const url = 'https://en.wikipedia.org';

// data describing a series of fish common names
// https://en.wikipedia.org/wiki/List_of_fish_common_names
const data = [
  {
    name: 'African glass catfish',
    href: '/wiki/African_glass_catfish',
  },
  {
    name: 'African lungfish',
    href: '/wiki/African_lungfish',
  },
  {
    name: 'Aholehole',
    href: '/wiki/Aholehole',
  },
  {
    name: 'Airbreathing catfish',
    href: '/wiki/Airbreathing_catfish',
  },
  {
    name: 'Airsac catfish',
    href: '/wiki/Airsac_catfish',
  },
  {
    name: 'Alaska blackfish',
    href: '/wiki/Alaska_blackfish',
  },
  {
    name: 'Albacore',
    href: '/wiki/Albacore',
  },
  {
    name: 'Alewife',
    href: '/wiki/Alewife',
  },
  {
    name: 'Alfonsino',
    href: '/wiki/Alfonsino',
  },
  {
    name: 'Algae eater',
    href: '/wiki/Algae_eater',
  },
  {
    name: 'Alligatorfish',
    href: '/wiki/Poacher_(fish)',
  },
  {
    name: 'Alligator gar',
    href: '/wiki/Alligator_gar',
  },
  {
    name: 'Amberjack - Seriola dumerili',
    href: '/wiki/Amberjack',
  },
  {
    name: 'American sole',
    href: '/wiki/American_sole',
  },
  {
    name: 'Amur pike',
    href: '/wiki/Amur_pike',
  },
  {
    name: 'Anchovy',
    href: '/wiki/Anchovy',
  },
  {
    name: 'Anemonefish',
    href: '/wiki/Anemonefish',
  },
  {
    name: 'Angelfish',
    href: '/wiki/Angelfish_(disambiguation)',
  },
  {
    name: 'Angler',
    href: '/wiki/Lophius_piscatorius',
  },
  {
    name: 'Angler catfish',
    href: '/wiki/Angler_catfish',
  },
  {
    name: 'Anglerfish',
    href: '/wiki/Anglerfish',
  },
  {
    name: 'Antarctic cod',
    href: '/wiki/Antarctic_cod',
  },
  {
    name: 'Antarctic icefish',
    href: '/wiki/Antarctic_icefish',
  },
  {
    name: 'Antenna codlet',
    href: '/wiki/Antenna_codlet',
  },
  {
    name: 'Arapaima',
    href: '/wiki/Arapaima',
  },
  {
    name: 'Archerfish',
    href: '/wiki/Archerfish',
  },
  {
    name: 'Arctic char',
    href: '/wiki/Arctic_char',
  },
  {
    name: 'Armored gurnard',
    href: '/wiki/Armored_gurnard',
  },
  {
    name: 'Armored searobin',
    href: '/wiki/Armored_searobin',
  },
  {
    name: 'Armorhead',
    href: '/wiki/Armorhead',
  },
  {
    name: 'Armorhead catfish',
    href: '/wiki/Armorhead_catfish',
  },
  {
    name: 'Armoured catfish',
    href: '/wiki/Armoured_catfish_(disambiguation)',
  },
  {
    name: 'Arowana',
    href: '/wiki/Arowana',
  },
  {
    name: 'Arrowtooth eel',
    href: '/wiki/Arrowtooth_eel_(disambiguation)',
  },
  {
    name: 'Asian carps',
    href: '/wiki/Asian_carps',
  },
  {
    name: 'Asiatic glassfish',
    href: '/wiki/Asiatic_glassfish',
  },
  {
    name: 'Atka mackerel',
    href: '/wiki/Atka_mackerel',
  },
  {
    name: 'Atlantic Bonito (Sarda sarda)',
    href: '/wiki/Atlantic_Bonito',
  },
  {
    name: 'Atlantic cod',
    href: '/wiki/Atlantic_cod',
  },
  {
    name: 'Atlantic herring',
    href: '/wiki/Atlantic_herring',
  },
  {
    name: 'Atlantic salmon',
    href: '/wiki/Atlantic_salmon',
  },
  {
    name: 'Atlantic Sharpnose Shark - Rhizoprioltodon terraenovae',
    href: '/wiki/Atlantic_Sharpnose_Shark',
  },
  {
    name: 'Atlantic saury',
    href: '/wiki/Atlantic_saury',
  },
  {
    name: 'Atlantic silverside',
    href: '/wiki/Atlantic_silverside',
  },
  {
    name: 'Australasian salmon',
    href: '/wiki/Australasian_salmon',
  },
  {
    name: 'Australian grayling',
    href: '/wiki/Australian_grayling',
  },
  {
    name: 'Australian herring',
    href: '/wiki/Australian_herring',
  },
  {
    name: 'Australian lungfish',
    href: '/wiki/Australian_lungfish',
  },
  {
    name: 'Australian prowfish',
    href: '/wiki/Australian_prowfish',
  },
  {
    name: 'Ayu',
    href: '/wiki/Ayu',
  },
  {
    name: 'Baikal oilfish',
    href: '/wiki/Baikal_oilfish',
  },
  {
    name: 'Bala shark',
    href: '/wiki/Bala_shark',
  },
  {
    name: 'Ballan wrasse',
    href: '/wiki/Ballan_wrasse',
  },
  {
    name: 'Bamboo shark',
    href: '/wiki/Bamboo_shark',
  },
  {
    name: 'Banded killifish',
    href: '/wiki/Banded_killifish',
  },
  {
    name: 'Bandfish',
    href: '/wiki/Bandfish',
  },
  {
    name: 'Banjo',
    href: '/wiki/Banjo_fish',
  },
  {
    name: 'Bangus',
    href: '/wiki/Bangus',
  },
  {
    name: 'Banjo catfish',
    href: '/wiki/Banjo_catfish',
  },
  {
    name: 'Barb',
    href: '/wiki/Barbus',
  },
  {
    name: 'Barbel',
    href: '/wiki/Barbus_barbus',
  },
  {
    name: 'Barbeled dragonfish',
    href: '/wiki/Barbeled_dragonfish',
  },
  {
    name: 'Barbeled houndshark',
    href: '/wiki/Barbeled_houndshark',
  },
  {
    name: 'Barbel-less catfish',
    href: '/wiki/Barbel-less_catfish',
  },
  {
    name: 'Barfish',
    href: '/wiki/Barfish',
  },
  {
    name: 'Barracuda',
    href: '/wiki/Barracuda',
  },
  {
    name: 'Barracudina',
    href: '/wiki/Barracudina',
  },
  {
    name: 'Barramundi',
    href: '/wiki/Barramundi',
  },
  {
    name: 'Barred danio',
    href: '/wiki/Barred_danio',
  },
  {
    name: 'Barreleye',
    href: '/wiki/Barreleye',
  },
  {
    name: 'Basking shark',
    href: '/wiki/Basking_shark',
  },
  {
    name: 'Bass',
    href: '/wiki/Bass_(fish)',
  },
  {
    name: 'Basslet',
    href: '/wiki/Basslet_(disambiguation)',
  },
  {
    name: 'Batfish',
    href: '/wiki/Batfish_(disambiguation)',
  },
  {
    name: 'Bat ray',
    href: '/wiki/Bat_ray',
  },
  {
    name: 'Beachsalmon',
    href: '/wiki/Beachsalmon',
  },
  {
    name: 'Beaked salmon',
    href: '/wiki/Beaked_salmon',
  },
  {
    name: 'Beaked sandfish',
    href: '/wiki/Beaked_sandfish',
  },
  {
    name: 'Beardfish',
    href: '/wiki/Beardfish',
  },
  {
    name: 'Beluga sturgeon',
    href: '/wiki/Beluga_sturgeon',
  },
  {
    name: 'Bengal danio',
    href: '/wiki/Bengal_danio',
  },
  {
    name: 'Betta',
    href: '/wiki/Betta',
  },
  {
    name: 'Bichir',
    href: '/wiki/Bichir',
  },
  {
    name: 'Bicolor goat fish',
    href: '/wiki/Bicolor_goat_fish',
  },
  {
    name: 'Bigeye',
    href: '/wiki/Bigeye',
  },
  {
    name: 'Bigeye squaretail',
    href: '/wiki/Bigeye_squaretail',
  },
  {
    name: 'Bighead carp',
    href: '/wiki/Bighead_carp',
  },
  {
    name: 'Bigmouth buffalo',
    href: '/wiki/Bigmouth_buffalo',
  },
  {
    name: 'Bigscale',
    href: '/wiki/Bigscale',
  },
  {
    name: 'Bigscale pomfret',
    href: '/wiki/Bigscale_pomfret',
  },
  {
    name: 'Billfish',
    href: '/wiki/Istiophoridae',
  },
  {
    name: 'Bitterling',
    href: '/wiki/Bitterling',
  },
  {
    name: 'Black angelfish',
    href: '/wiki/Black_angelfish_(disambiguation)',
  },
  {
    name: 'Black bass',
    href: '/wiki/Black_bass',
  },
  {
    name: 'Black dragonfish',
    href: '/wiki/Black_dragonfish_(disambiguation)',
  },
  {
    name: 'Blackchin',
    href: '/wiki/Blackchin',
  },
  {
    name: 'Blackfin Tuna',
    href: '/wiki/Blackfin_Tuna',
  },
  {
    name: 'Blackfish',
    href: '/wiki/Blackfish_(disambiguation)',
  },
  {
    name: 'Black neon tetra',
    href: '/wiki/Black_neon_tetra',
  },
  {
    name: 'Blacktip reef shark',
    href: '/wiki/Blacktip_reef_shark',
  },
  {
    name: 'Black mackerel',
    href: '/wiki/Black_mackerel',
  },
  {
    name: 'Black scalyfin',
    href: '/wiki/Black_scalyfin',
  },
  {
    name: 'Black sea bass',
    href: '/wiki/Black_sea_bass',
  },
  {
    name: 'Black scabbardfish',
    href: '/wiki/Black_scabbardfish',
  },
  {
    name: 'Black swallower',
    href: '/wiki/Black_swallower',
  },
  {
    name: 'Black tetra',
    href: '/wiki/Black_tetra',
  },
  {
    name: 'Black triggerfish',
    href: '/wiki/Black_triggerfish',
  },
  {
    name: 'Bleak',
    href: '/wiki/Bleak_(disambiguation)',
  },
  {
    name: 'Blenny',
    href: '/wiki/Blenny',
  },
  {
    name: 'Blind goby',
    href: '/wiki/Blind_goby',
  },
  {
    name: 'Blind shark',
    href: '/wiki/Blind_shark',
  },
  {
    name: 'Blobfish',
    href: '/wiki/Blobfish_(disambiguation)',
  },
  {
    name: 'Blowfish',
    href: '/wiki/Blowfish',
  },
  {
    name: 'Blue catfish',
    href: '/wiki/Blue_catfish',
  },
  {
    name: 'Blue danio',
    href: '/wiki/Blue_danio',
  },
  {
    name: 'Blue-redstripe danio',
    href: '/wiki/Blue-redstripe_danio',
  },
  {
    name: 'Blue eye trevalla',
    href: '/wiki/Trevalla',
  },
  {
    name: 'Bluefin tuna',
    href: '/wiki/Bluefin_tuna',
  },
  {
    name: 'Bluefish',
    href: '/wiki/Bluefish',
  },
  {
    name: 'Bluegill',
    href: '/wiki/Bluegill',
  },
  {
    name: 'Blue gourami',
    href: '/wiki/Blue_gourami',
  },
  {
    name: 'Blue shark',
    href: '/wiki/Blue_shark',
  },
  {
    name: 'Blue triggerfish',
    href: '/wiki/Blue_triggerfish_(disambiguation)',
  },
  {
    name: 'Blue whiting',
    href: '/wiki/Blue_whiting',
  },
  {
    name: 'Bluntnose knifefish',
    href: '/wiki/Bluntnose_knifefish',
  },
  {
    name: 'Bluntnose minnow',
    href: '/wiki/Bluntnose_minnow',
  },
  {
    name: 'Boafish',
    href: '/wiki/Boafish',
  },
  {
    name: 'Boarfish',
    href: '/wiki/Boarfish_(disambiguation)',
  },
  {
    name: 'Bobtail snipe eel',
    href: '/wiki/Bobtail_snipe_eel',
  },
  {
    name: 'Bocaccio',
    href: '/wiki/Bocaccio_rockfish',
  },
  {
    name: 'Boga',
    href: '/wiki/Boga_(disambiguation)',
  },
  {
    name: 'Bombay duck',
    href: '/wiki/Bombay_duck',
  },
  {
    name: 'Bonefish',
    href: '/wiki/Bonefish',
  },
  {
    name: 'Bonito',
    href: '/wiki/Bonito',
  },
  {
    name: 'Bonnethead shark',
    href: '/wiki/Bonnethead_shark',
  },
  {
    name: 'Bonnetmouth',
    href: '/wiki/Bonnetmouth_(disambiguation)',
  },
  {
    name: 'Bonytail',
    href: '/wiki/Bonytail',
  },
  {
    name: 'Bronze corydoras',
    href: '/wiki/Bronze_corydoras',
  },
  {
    name: 'Bonytongue',
    href: '/wiki/Osteoglossoidei',
  },
  {
    name: 'Bowfin',
    href: '/wiki/Bowfin',
  },
  {
    name: 'Boxfish',
    href: '/wiki/Boxfish',
  },
  {
    name: 'Bramble shark',
    href: '/wiki/Bramble_shark',
  },
  {
    name: 'Bream',
    href: '/wiki/Bream',
  },
  {
    name: 'Brill',
    href: '/wiki/Brill_(fish)',
  },
  {
    name: 'Bristlemouth',
    href: '/wiki/Bristlemouth',
  },
  {
    name: 'Bristlenose catfish',
    href: '/wiki/Bristlenose_catfish',
  },
  {
    name: 'Broadband dogfish',
    href: '/wiki/Broadband_dogfish',
  },
  {
    name: 'Brook lamprey',
    href: '/wiki/Brook_lamprey',
  },
  {
    name: 'Brook stickleback',
    href: '/wiki/Brook_stickleback',
  },
  {
    name: 'Brook trout',
    href: '/wiki/Brook_trout',
  },
  {
    name: 'Brotula',
    href: '/wiki/Brotula_(disambiguation)',
  },
  {
    name: 'Brown trout',
    href: '/wiki/Brown_trout',
  },
  {
    name: 'Buffalo fish',
    href: '/wiki/Buffalo_fish',
  },
  {
    name: 'Bullhead',
    href: '/wiki/Bullhead_(disambiguation)',
  },
  {
    name: 'Bullhead shark',
    href: '/wiki/Bullhead_shark',
  },
  {
    name: 'Bull shark',
    href: '/wiki/Bull_shark',
  },
  {
    name: 'Bull trout',
    href: '/wiki/Bull_trout',
  },
  {
    name: 'Burbot',
    href: '/wiki/Burbot',
  },
  {
    name: 'Bumblebee goby',
    href: '/wiki/Bumblebee_goby',
  },
  {
    name: 'Buri',
    href: '/wiki/Japanese_amberjack',
  },
  {
    name: 'Burma danio',
    href: '/wiki/Burma_danio',
  },
  {
    name: 'Burrowing goby',
    href: '/wiki/Burrowing_goby_(disambiguation)',
  },
  {
    name: 'Butterfish',
    href: '/wiki/Butterfish',
  },
  {
    name: 'Butterfly ray',
    href: '/wiki/Butterfly_ray',
  },
  {
    name: 'Butterflyfish',
    href: '/wiki/Butterflyfish',
  },
  {
    name: 'California flyingfish',
    href: '/wiki/California_flyingfish',
  },
  {
    name: 'California halibut',
    href: '/wiki/California_halibut',
  },
  {
    name: 'Canary rockfish',
    href: '/wiki/Canary_rockfish',
  },
  {
    name: 'Candiru',
    href: '/wiki/Candiru',
  },
  {
    name: 'Candlefish',
    href: '/wiki/Candlefish',
  },
  {
    name: 'Capelin',
    href: '/wiki/Capelin',
  },
  {
    name: 'Cardinalfish',
    href: '/wiki/Cardinalfish',
  },
  {
    name: 'Cardinal tetra',
    href: '/wiki/Cardinal_tetra',
  },
  {
    name: 'Carp',
    href: '/wiki/Carp',
  },
  {
    name: 'Carpetshark',
    href: '/wiki/Carpetshark',
  },
  {
    name: 'Carpsucker',
    href: '/wiki/Carpsucker',
  },
  {
    name: 'Catalufa',
    href: '/wiki/Catalufa_(disambiguation)',
  },
  {
    name: 'Catfish',
    href: '/wiki/Catfish',
  },
  {
    name: 'Catla',
    href: '/wiki/Catla',
  },
  {
    name: 'Cat shark',
    href: '/wiki/Cat_shark',
  },
  {
    name: 'Cavefish',
    href: '/wiki/Cavefish',
  },
  {
    name: 'Celebes rainbowfish',
    href: '/wiki/Celebes_rainbowfish',
  },
  {
    name: 'Central mudminnow',
    href: '/wiki/Central_mudminnow',
  },
  {
    name: 'Chain pickerel',
    href: '/wiki/Chain_pickerel',
  },
  {
    name: 'Channel bass',
    href: '/wiki/Channel_bass',
  },
  {
    name: 'Channel catfish',
    href: '/wiki/Channel_catfish',
  },
  {
    name: 'Char',
    href: '/wiki/Salvelinus',
  },
  {
    name: 'Cherry salmon',
    href: '/wiki/Cherry_salmon',
  },
  {
    name: 'Chimaera',
    href: '/wiki/Chimera_(fish)',
  },
  {
    name: 'Chinook salmon',
    href: '/wiki/Chinook_salmon',
  },
  {
    name: 'Cherubfish',
    href: '/wiki/Cherubfish',
  },
  {
    name: 'Chub',
    href: '/wiki/Chub',
  },
  {
    name: 'Chubsucker',
    href: '/wiki/Chubsucker',
  },
  {
    name: 'Chum salmon',
    href: '/wiki/Chum_salmon',
  },
  {
    name: 'Cichlid',
    href: '/wiki/Cichlid',
  },
  {
    name: 'Cisco',
    href: '/wiki/Cisco_(fish)',
  },
  {
    name: 'Climbing catfish',
    href: '/wiki/Climbing_catfish',
  },
  {
    name: 'Climbing gourami',
    href: '/wiki/Climbing_gourami',
  },
  {
    name: 'Climbing perch',
    href: '/wiki/Climbing_perch_(disambiguation)',
  },
  {
    name: 'Clingfish',
    href: '/wiki/Clingfish',
  },
  {
    name: 'Clownfish',
    href: '/wiki/Clownfish',
  },
  {
    name: 'Clown loach',
    href: '/wiki/Clown_loach',
  },
  {
    name: 'Clown triggerfish',
    href: '/wiki/Clown_triggerfish',
  },
  {
    name: 'Cobbler',
    href: '/wiki/Cobbler_(disambiguation)#Fish',
  },
  {
    name: 'Cobia',
    href: '/wiki/Cobia',
  },
  {
    name: 'Cod',
    href: '/wiki/Cod',
  },
  {
    name: 'Codlet',
    href: '/wiki/Codlet',
  },
  {
    name: 'Codling',
    href: '/wiki/Codling_(disambiguation)',
  },
  {
    name: 'Coelacanth',
    href: '/wiki/Coelacanth',
  },
  {
    name: 'Coffinfish',
    href: '/wiki/Coffinfish',
  },
  {
    name: 'Coho salmon',
    href: '/wiki/Coho_salmon',
  },
  {
    name: 'Coley',
    href: '/wiki/Coley_(fish)',
  },
  {
    name: 'Collared carpetshark',
    href: '/wiki/Collared_carpetshark',
  },
  {
    name: 'Collared dogfish',
    href: '/wiki/Collared_dogfish',
  },
  {
    name: 'Colorado squawfish',
    href: '/wiki/Colorado_squawfish',
  },
  {
    name: 'Combfish',
    href: '/wiki/Combfish',
  },
  {
    name: 'Combtail gourami',
    href: '/wiki/Combtail_gourami',
  },
  {
    name: 'Combtooth blenny',
    href: '/wiki/Combtooth_blenny',
  },
  {
    name: 'Common carp',
    href: '/wiki/Common_carp',
  },
  {
    name: 'Common tunny',
    href: '/wiki/Common_tunny',
  },
  {
    name: 'Conger eel',
    href: '/wiki/Conger_eel_(disambiguation)',
  },
  {
    name: 'Convict blenny',
    href: '/wiki/Convict_blenny',
  },
  {
    name: 'Convict cichlid',
    href: '/wiki/Convict_cichlid',
  },
  {
    name: 'Cookie-cutter shark',
    href: '/wiki/Cookie-cutter_shark',
  },
  {
    name: 'Coolie loach',
    href: '/wiki/Coolie_loach',
  },
  {
    name: 'Cornetfish',
    href: '/wiki/Cornetfish',
  },
  {
    name: 'Cowfish',
    href: '/wiki/Cowfish',
  },
  {
    name: 'Cownose ray',
    href: '/wiki/Cownose_ray',
  },
  {
    name: 'Cow shark',
    href: '/wiki/Cow_shark',
  },
  {
    name: 'Crappie',
    href: '/wiki/Crappie',
  },
  {
    name: 'Creek chub',
    href: '/wiki/Creek_chub',
  },
  {
    name: 'Crestfish',
    href: '/wiki/Crestfish',
  },
  {
    name: 'Crevice kelpfish',
    href: '/wiki/Crevice_kelpfish',
  },
  {
    name: 'Croaker',
    href: '/wiki/Sciaenidae',
  },
  {
    name: 'Crocodile icefish',
    href: '/wiki/Crocodile_icefish',
  },
  {
    name: 'Crocodile shark',
    href: '/wiki/Crocodile_shark',
  },
  {
    name: 'Crucian carp',
    href: '/wiki/Crucian_carp',
  },
  {
    name: 'Cuckoo wrasse',
    href: '/wiki/Cuckoo_wrasse',
  },
  {
    name: 'Cusk',
    href: '/wiki/Cusk_(fish)',
  },
  {
    name: 'Cusk-eel',
    href: '/wiki/Cusk-eel',
  },
  {
    name: 'Cutlassfish',
    href: '/wiki/Cutlassfish',
  },
  {
    name: 'Cutthroat eel',
    href: '/wiki/Cutthroat_eel',
  },
  {
    name: 'Cutthroat trout',
    href: '/wiki/Cutthroat_trout',
  },
  {
    name: 'Dab',
    href: '/wiki/Common_dab',
  },
  {
    name: 'Dace',
    href: '/wiki/Dace_(disambiguation)',
  },
  {
    name: 'Daggertooth pike conger',
    href: '/wiki/Daggertooth_pike_conger',
  },
  {
    name: 'Damselfish',
    href: '/wiki/Damselfish',
  },
  {
    name: 'Danio',
    href: '/wiki/Danio',
  },
  {
    name: 'Darter',
    href: '/wiki/Darter_(fish)',
  },
  {
    name: 'Dartfish',
    href: '/wiki/Dartfish',
  },
  {
    name: 'Dealfish',
    href: '/wiki/Dealfish',
  },
  {
    name: 'Death Valley pupfish',
    href: '/wiki/Death_Valley_pupfish',
  },
  {
    name: 'Deep sea eel',
    href: '/wiki/Deep_sea_eel',
  },
  {
    name: 'Deep sea smelt',
    href: '/wiki/Deep_sea_smelt',
  },
  {
    name: 'Deepwater cardinalfish',
    href: '/wiki/Deepwater_cardinalfish',
  },
  {
    name: 'Deepwater flathead',
    href: '/wiki/Deepwater_flathead',
  },
  {
    name: 'Deepwater stingray',
    href: '/wiki/Deepwater_stingray',
  },
  {
    name: 'Delta smelt',
    href: '/wiki/Delta_smelt',
  },
  {
    name: 'Demoiselle',
    href: '/wiki/Demoiselle_(disambiguation)',
  },
  {
    name: 'Denticle herring',
    href: '/wiki/Denticle_herring',
  },
  {
    name: 'Desert pupfish',
    href: '/wiki/Desert_pupfish',
  },
  {
    name: 'Devario',
    href: '/wiki/Devario',
  },
  {
    name: 'Devil ray',
    href: '/wiki/Devil_ray_(disambiguation)',
  },
  {
    name: 'Dhufish',
    href: '/wiki/Dhufish',
  },
  {
    name: 'Discus',
    href: '/wiki/Discus_(fish)',
  },
  {
    name: 'Diver: New Zealand sand diver or long-finned sand diver',
    href: '/wiki/New_Zealand_sand_diver',
  },
  {
    name: 'Dogfish',
    href: '/wiki/Dogfish_(disambiguation)',
  },
  {
    name: 'Dogfish shark',
    href: '/wiki/Dogfish_shark',
  },
  {
    name: 'Dogteeth tetra',
    href: '/wiki/Dogteeth_tetra',
  },
  {
    name: 'Dojo loach',
    href: '/wiki/Dojo_loach',
  },
  {
    name: 'Dolly Varden trout',
    href: '/wiki/Dolly_Varden_trout',
  },
  {
    name: 'Dolphin fish',
    href: '/wiki/Dolphin_fish',
  },
  {
    name: 'Dorab wolf-herring',
    href: '/wiki/Dorab_wolf-herring',
  },
  {
    name: 'Dorado',
    href: '/wiki/Dorado_(disambiguation)',
  },
  {
    name: 'Dory',
    href: '/wiki/Dory_(fish)',
  },
  {
    name: 'Dottyback',
    href: '/wiki/Dottyback',
  },
  {
    name: 'Dragonet',
    href: '/wiki/Dragonet',
  },
  {
    name: 'Dragonfish',
    href: '/wiki/Dragonfish_(disambiguation)',
  },
  {
    name: 'Dragon goby',
    href: '/wiki/Dragon_goby',
  },
  {
    name: 'Driftfish',
    href: '/wiki/Driftfish',
  },
  {
    name: 'Driftwood catfish',
    href: '/wiki/Driftwood_catfish',
  },
  {
    name: 'Drum',
    href: '/wiki/Drum_(fish)',
  },
  {
    name: 'Duckbill',
    href: '/wiki/Percophidae',
  },
  {
    name: 'Duckbill eel',
    href: '/wiki/Duckbill_eel',
  },
  {
    name: 'Dusky grouper',
    href: '/wiki/Dusky_grouper',
  },
  {
    name: 'Dusky shark',
    href: '/wiki/Dusky_shark',
  },
  {
    name: 'Dwarf gourami',
    href: '/wiki/Dwarf_gourami',
  },
  {
    name: 'Dwarf loach',
    href: '/wiki/Dwarf_loach',
  },
  {
    name: 'Eagle ray',
    href: '/wiki/Eagle_ray',
  },
  {
    name: 'Earthworm eel',
    href: '/wiki/Earthworm_eel',
  },
  {
    name: 'Eel',
    href: '/wiki/Eel',
  },
  {
    name: 'Eel cod',
    href: '/wiki/Eel_cod',
  },
  {
    name: 'Eel-goby',
    href: '/wiki/Eel-goby',
  },
  {
    name: 'Eelpout',
    href: '/wiki/Eelpout',
  },
  {
    name: 'Eeltail catfish',
    href: '/wiki/Eeltail_catfish',
  },
  {
    name: 'Elasmobranch',
    href: '/wiki/Elasmobranch',
  },
  {
    name: 'Electric catfish',
    href: '/wiki/Electric_catfish',
  },
  {
    name: 'Electric eel',
    href: '/wiki/Electric_eel',
  },
  {
    name: 'Electric knifefish',
    href: '/wiki/Electric_knifefish',
  },
  {
    name: 'Electric ray',
    href: '/wiki/Electric_ray',
  },
  {
    name: 'Elephant fish',
    href: '/wiki/Elephant_fish_(disambiguation)',
  },
  {
    name: 'Elephantnose fish',
    href: '/wiki/Elephantnose_fish',
  },
  {
    name: 'Elver',
    href: '/wiki/Elver',
  },
  {
    name: 'Ember parrotfish',
    href: '/wiki/Ember_parrotfish',
  },
  {
    name: 'Emerald catfish',
    href: '/wiki/Emerald_catfish',
  },
  {
    name: 'Emperor',
    href: '/wiki/Emperor_(disambiguation)',
  },
  {
    name: 'Emperor angelfish',
    href: '/wiki/Emperor_angelfish',
  },
  {
    name: 'Emperor bream',
    href: '/wiki/Emperor_bream',
  },
  {
    name: 'Escolar',
    href: '/wiki/Escolar',
  },
  {
    name: 'Eucla cod',
    href: '/wiki/Eucla_cod',
  },
  {
    name: 'Eulachon',
    href: '/wiki/Eulachon',
  },
  {
    name: 'European chub',
    href: '/wiki/European_chub',
  },
  {
    name: 'European eel',
    href: '/wiki/European_eel',
  },
  {
    name: 'European flounder',
    href: '/wiki/European_flounder',
  },
  {
    name: 'European minnow',
    href: '/wiki/European_minnow',
  },
  {
    name: 'European perch',
    href: '/wiki/European_perch',
  },
  {
    name: 'False brotula',
    href: '/wiki/False_brotula',
  },
  {
    name: 'False cat shark',
    href: '/wiki/False_cat_shark',
  },
  {
    name: 'False moray',
    href: '/wiki/False_moray',
  },
  {
    name: 'False trevally',
    href: '/wiki/False_trevally',
  },
  {
    name: 'Fangtooth',
    href: '/wiki/Fangtooth',
  },
  {
    name: 'Fathead sculpin',
    href: '/wiki/Fathead_sculpin',
  },
  {
    name: 'Featherback',
    href: '/wiki/Featherback',
  },
  {
    name: 'Fierasfer',
    href: '/wiki/Fierasfer',
  },
  {
    name: 'Fire goby',
    href: '/wiki/Fire_goby',
  },
  {
    name: 'Filefish',
    href: '/wiki/Filefish',
  },
  {
    name: 'Finback cat shark',
    href: '/wiki/Finback_cat_shark',
  },
  {
    name: 'Fingerfish',
    href: '/wiki/Fingerfish',
  },
  {
    name: 'Fire bar danio',
    href: '/wiki/Fire_bar_danio',
  },
  {
    name: 'Firefish',
    href: '/wiki/Firefish_(disambiguation)',
  },
  {
    name: 'Flabby whale fish',
    href: '/wiki/Flabby_whale_fish',
  },
  {
    name: 'Flagblenny',
    href: '/wiki/Flagblenny',
  },
  {
    name: 'Flagfin',
    href: '/wiki/Flagfin',
  },
  {
    name: 'Flagfish',
    href: '/wiki/Flagfish',
  },
  {
    name: 'Flagtail',
    href: '/wiki/Flagtail',
  },
  {
    name: 'Flashlight fish',
    href: '/wiki/Flashlight_fish_(disambiguation)',
  },
  {
    name: 'Flatfish',
    href: '/wiki/Flatfish',
  },
  {
    name: 'Flathead',
    href: '/wiki/Flathead_(fish)',
  },
  {
    name: 'Flathead catfish',
    href: '/wiki/Flathead_catfish',
  },
  {
    name: 'Flier',
    href: '/wiki/Flier_(fish)',
  },
  {
    name: 'Flounder',
    href: '/wiki/Flounder',
  },
  {
    name: 'Flying gurnard',
    href: '/wiki/Flying_gurnard',
  },
  {
    name: 'Flying fish',
    href: '/wiki/Flying_fish',
  },
  {
    name: 'Footballfish',
    href: '/wiki/Footballfish',
  },
  {
    name: 'Forehead brooder',
    href: '/wiki/Forehead_brooder',
  },
  {
    name: 'Four-eyed fish',
    href: '/wiki/Four-eyed_fish',
  },
  {
    name: 'French angelfish',
    href: '/wiki/French_angelfish',
  },
  {
    name: 'Freshwater eel',
    href: '/wiki/Freshwater_eel',
  },
  {
    name: 'Freshwater hatchetfish',
    href: '/wiki/Freshwater_hatchetfish',
  },
  {
    name: 'Freshwater shark',
    href: '/wiki/Freshwater_shark_(disambiguation)',
  },
  {
    name: 'Frigate mackerel',
    href: '/wiki/Frigate_mackerel',
  },
  {
    name: 'Frilled shark',
    href: '/wiki/Frilled_shark',
  },
  {
    name: 'Frogfish',
    href: '/wiki/Frogfish',
  },
  {
    name: 'Frogmouth catfish',
    href: '/wiki/Frogmouth_catfish',
  },
  {
    name: 'Fusilier fish',
    href: '/wiki/Fusilier_fish',
  },
  {
    name: 'Galjoen fish',
    href: '/wiki/Galjoen_fish',
  },
  {
    name: 'Ganges shark',
    href: '/wiki/Ganges_shark',
  },
  {
    name: 'Gar',
    href: '/wiki/Gar',
  },
  {
    name: 'Garden eel',
    href: '/wiki/Garden_eel',
  },
  {
    name: 'Garibaldi',
    href: '/wiki/Garibaldi_(fish)',
  },
  {
    name: 'Garpike',
    href: '/wiki/Garpike',
  },
  {
    name: 'Ghost fish',
    href: '/wiki/Ghost_fish',
  },
  {
    name: 'Ghost flathead',
    href: '/wiki/Ghost_flathead',
  },
  {
    name: 'Ghost knifefish',
    href: '/wiki/Ghost_knifefish',
  },
  {
    name: 'Ghost pipefish',
    href: '/wiki/Ghost_pipefish',
  },
  {
    name: 'Ghost shark',
    href: '/wiki/Ghost_shark',
  },
  {
    name: 'Ghoul',
    href: '/wiki/Ghoul_(fish)',
  },
  {
    name: 'Giant danio',
    href: '/wiki/Giant_danio',
  },
  {
    name: 'Giant gourami',
    href: '/wiki/Giant_gourami',
  },
  {
    name: 'Giant sea bass',
    href: '/wiki/Giant_sea_bass',
  },
  {
    name: 'Gibberfish',
    href: '/wiki/Gibberfish',
  },
  {
    name: 'Gila trout',
    href: '/wiki/Gila_trout',
  },
  {
    name: 'Gizzard shad',
    href: '/wiki/Gizzard_shad',
  },
  {
    name: 'Glass catfish',
    href: '/wiki/Glass_catfish_(disambiguation)',
  },
  {
    name: 'Glassfish',
    href: '/wiki/Glassfish_(disambiguation)',
  },
  {
    name: 'Glass knifefish',
    href: '/wiki/Glass_knifefish',
  },
  {
    name: 'Glowlight danio',
    href: '/wiki/Glowlight_danio',
  },
  {
    name: 'Goatfish',
    href: '/wiki/Goatfish',
  },
  {
    name: 'Goblin shark',
    href: '/wiki/Goblin_shark',
  },
  {
    name: 'Goby',
    href: '/wiki/Goby',
  },
  {
    name: 'Golden dojo',
    href: '/wiki/Golden_dojo',
  },
  {
    name: 'Golden loach',
    href: '/wiki/Golden_loach',
  },
  {
    name: 'Golden shiner',
    href: '/wiki/Golden_shiner',
  },
  {
    name: 'Golden trout',
    href: '/wiki/Golden_trout',
  },
  {
    name: 'Goldeye',
    href: '/wiki/Goldeye',
  },
  {
    name: 'Goldfish',
    href: '/wiki/Goldfish',
  },
  {
    name: 'Gombessa',
    href: '/wiki/Gombessa',
  },
  {
    name: 'Goosefish',
    href: '/wiki/Goosefish',
  },
  {
    name: 'Gopher rockfish',
    href: '/wiki/Gopher_rockfish',
  },
  {
    name: 'Gourami',
    href: '/wiki/Gourami',
  },
  {
    name: 'Grass carp',
    href: '/wiki/Grass_carp',
  },
  {
    name: 'Graveldiver',
    href: '/wiki/Graveldiver',
  },
  {
    name: 'Grayling',
    href: '/wiki/Grayling_(disambiguation)',
  },
  {
    name: 'Gray mullet',
    href: '/wiki/Gray_mullet',
  },
  {
    name: 'Gray reef shark',
    href: '/wiki/Gray_reef_shark',
  },
  {
    name: 'Great white shark',
    href: '/wiki/Great_white_shark',
  },
  {
    name: 'Green swordtail',
    href: '/wiki/Green_swordtail',
  },
  {
    name: 'Greeneye',
    href: '/wiki/Greeneye',
  },
  {
    name: 'Greenling',
    href: '/wiki/Greenling',
  },
  {
    name: 'Grenadier',
    href: '/wiki/Grenadier',
  },
  {
    name: 'Green spotted puffer',
    href: '/wiki/Green_spotted_puffer',
  },
  {
    name: 'Ground shark',
    href: '/wiki/Ground_shark',
  },
  {
    name: 'Grouper',
    href: '/wiki/Grouper',
  },
  {
    name: 'Grunion',
    href: '/wiki/Grunion',
  },
  {
    name: 'Grunt',
    href: '/wiki/Grunt_(disambiguation)',
  },
  {
    name: 'Grunter',
    href: '/wiki/Grunter',
  },
  {
    name: 'Grunt sculpin',
    href: '/wiki/Grunt_sculpin',
  },
  {
    name: 'Gudgeon',
    href: '/wiki/Gudgeon_(fish)',
  },
  {
    name: 'Guitarfish',
    href: '/wiki/Guitarfish',
  },
  {
    name: 'Gulf menhaden',
    href: '/wiki/Gulf_menhaden',
  },
  {
    name: 'Gulper eel',
    href: '/wiki/Gulper_eel',
  },
  {
    name: 'Gulper',
    href: '/wiki/Gulper',
  },
  {
    name: 'Gunnel',
    href: '/wiki/Gunnel_(fish)',
  },
  {
    name: 'Guppy',
    href: '/wiki/Guppy',
  },
  {
    name: 'Gurnard',
    href: '/wiki/Gurnard_(disambiguation)',
  },
  {
    name: 'Haddock',
    href: '/wiki/Haddock',
  },
  {
    name: 'Hagfish',
    href: '/wiki/Hagfish',
  },
  {
    name: 'Hairtail',
    href: '/wiki/Hairtail',
  },
  {
    name: 'Hake',
    href: '/wiki/Hake',
  },
  {
    name: 'Halfbeak',
    href: '/wiki/Halfbeak',
  },
  {
    name: 'Halfmoon',
    href: '/wiki/Halfmoon',
  },
  {
    name: 'Halibut',
    href: '/wiki/Halibut',
  },
  {
    name: 'Halosaur',
    href: '/wiki/Halosaur',
  },
  {
    name: 'Hamlet',
    href: '/wiki/Hamlet_(fish)',
  },
  {
    name: 'Hammerhead shark',
    href: '/wiki/Hammerhead_shark',
  },
  {
    name: 'Hammerjaw',
    href: '/wiki/Hammerjaw',
  },
  {
    name: 'Handfish',
    href: '/wiki/Handfish',
  },
  {
    name: 'Hardhead catfish',
    href: '/wiki/Hardhead_catfish',
  },
  {
    name: 'Harelip sucker',
    href: '/wiki/Harelip_sucker',
  },
  {
    name: 'Hatchetfish',
    href: '/wiki/Hatchetfish_(disambiguation)',
  },
  {
    name: 'Hawkfish',
    href: '/wiki/Hawkfish',
  },
  {
    name: 'Herring',
    href: '/wiki/Herring',
  },
  {
    name: 'Herring smelt',
    href: '/wiki/Herring_smelt',
  },
  {
    name: 'Hickory Shad',
    href: '/wiki/Hickory_Shad',
  },
  {
    name: 'Hillstream loach',
    href: '/wiki/Hillstream_loach',
  },
  {
    name: 'Hog sucker',
    href: '/wiki/Hog_sucker',
  },
  {
    name: 'Hoki',
    href: '/wiki/Hoki_(fish)',
  },
  {
    name: 'Horn shark',
    href: '/wiki/Horn_shark',
  },
  {
    name: 'Horsefish',
    href: '/wiki/Horsefish',
  },
  {
    name: 'Houndshark',
    href: '/wiki/Houndshark',
  },
  {
    name: 'Huchen',
    href: '/wiki/Huchen',
  },
  {
    name: "Humuhumunukunukuapua'a",
    href: '/wiki/Humuhumunukunukuapua%27a',
  },
  {
    name: 'Hussar',
    href: '/wiki/Hussar_(fish)',
  },
  {
    name: 'Icefish',
    href: '/wiki/Channichthyidae',
  },
  {
    name: 'Ide',
    href: '/wiki/Ide_(fish)',
  },
  {
    name: 'Ilisha',
    href: '/wiki/Ilisha_(disambiguation)',
  },
  {
    name: 'Inanga',
    href: '/wiki/Inanga_(disambiguation)',
  },
  {
    name: 'Inconnu',
    href: '/wiki/Stenodus_nelma',
  },
  {
    name: 'Jack',
    href: '/wiki/Jack_(disambiguation)#Fish',
  },
  {
    name: 'Jackfish',
    href: '/wiki/Jack_(disambiguation)#Fish',
  },
  {
    name: 'Jack Dempsey',
    href: '/wiki/Jack_Dempsey_(fish)',
  },
  {
    name: 'Japanese eel',
    href: '/wiki/Japanese_eel',
  },
  {
    name: 'Javelin',
    href: '/wiki/Javelin_(fish)',
  },
  {
    name: 'Jawfish',
    href: '/wiki/Jawfish',
  },
  {
    name: 'Jellynose fish',
    href: '/wiki/Jellynose_fish',
  },
  {
    name: 'Jewelfish',
    href: '/wiki/Jewelfish',
  },
  {
    name: 'Jewel tetra',
    href: '/wiki/Jewel_tetra',
  },
  {
    name: 'Jewfish',
    href: '/wiki/Jewfish_(disambiguation)',
  },
  {
    name: 'John Dory',
    href: '/wiki/John_Dory',
  },
  {
    name: 'Kafue pike',
    href: '/wiki/Kafue_pike',
  },
  {
    name: 'Kahawai',
    href: '/wiki/Kahawai',
  },
  {
    name: 'Kaluga',
    href: '/wiki/Kaluga_(fish)',
  },
  {
    name: 'Kanyu',
    href: '/wiki/Kanyu',
  },
  {
    name: 'Kelp perch',
    href: '/wiki/Kelp_perch',
  },
  {
    name: 'Kelpfish',
    href: '/wiki/Kelpfish',
  },
  {
    name: 'Killifish',
    href: '/wiki/Killifish',
  },
  {
    name: 'King of the herrings',
    href: '/wiki/King_of_the_herrings_(disambiguation)',
  },
  {
    name: 'Kingfish',
    href: '/wiki/Kingfish_(disambiguation)',
  },
  {
    name: 'King-of-the-salmon',
    href: '/wiki/King-of-the-salmon',
  },
  {
    name: 'Kissing gourami',
    href: '/wiki/Kissing_gourami',
  },
  {
    name: 'Knifefish',
    href: '/wiki/Knifefish_(disambiguation)',
  },
  {
    name: 'Knifejaw',
    href: '/wiki/Knifejaw',
  },
  {
    name: 'Koi',
    href: '/wiki/Koi',
  },
  {
    name: 'Kokanee',
    href: '/wiki/Kokanee_(fish)',
  },
  {
    name: 'Kokopu',
    href: '/wiki/Kokopu',
  },
  {
    name: 'Kuhli loach',
    href: '/wiki/Kuhli_loach',
  },
  {
    name: 'Labyrinth fish',
    href: '/wiki/Labyrinth_fish',
  },
  {
    name: 'Ladyfish',
    href: '/wiki/Ladyfish',
  },
  {
    name: 'Lake chub',
    href: '/wiki/Lake_chub',
  },
  {
    name: 'Lake trout',
    href: '/wiki/Lake_trout',
  },
  {
    name: 'Lake whitefish',
    href: '/wiki/Lake_whitefish',
  },
  {
    name: 'Lampfish',
    href: '/wiki/Lampfish',
  },
  {
    name: 'Lamprey',
    href: '/wiki/Lamprey',
  },
  {
    name: 'Lancetfish',
    href: '/wiki/Lancetfish',
  },
  {
    name: 'Lanternfish',
    href: '/wiki/Lanternfish',
  },
  {
    name: 'Largemouth bass',
    href: '/wiki/Largemouth_bass',
  },
  {
    name: 'Leaffish',
    href: '/wiki/Leaf_Fish_(disambiguation)',
  },
  {
    name: 'Leatherjacket',
    href: '/wiki/Leatherjacket_(disambiguation)',
  },
  {
    name: 'Lefteye flounder',
    href: '/wiki/Lefteye_flounder',
  },
  {
    name: 'Lemon shark',
    href: '/wiki/Lemon_shark',
  },
  {
    name: 'Lemon sole',
    href: '/wiki/Lemon_sole',
  },
  {
    name: 'Lemon tetra',
    href: '/wiki/Lemon_tetra',
  },
  {
    name: 'Lenok',
    href: '/wiki/Lenok',
  },
  {
    name: 'Leopard danio',
    href: '/wiki/Leopard_danio',
  },
  {
    name: 'Lightfish',
    href: '/wiki/Lightfish_(disambiguation)',
  },
  {
    name: 'Limia',
    href: '/wiki/Limia',
  },
  {
    name: 'Lined sole',
    href: '/wiki/Lined_sole',
  },
  {
    name: 'Ling',
    href: '/wiki/Ling_(disambiguation)',
  },
  {
    name: 'Ling cod',
    href: '/wiki/Ling_cod',
  },
  {
    name: 'Lionfish',
    href: '/wiki/Lionfish_(disambiguation)',
  },
  {
    name: 'Livebearer',
    href: '/wiki/Livebearer',
  },
  {
    name: 'Lizardfish',
    href: '/wiki/Lizardfish',
  },
  {
    name: 'Loach',
    href: '/wiki/Loach_(disambiguation)',
  },
  {
    name: 'Loach catfish',
    href: '/wiki/Loach_catfish',
  },
  {
    name: 'Loach goby',
    href: '/wiki/Loach_goby',
  },
  {
    name: 'Loach minnow',
    href: '/wiki/Loach_minnow',
  },
  {
    name: 'Longfin',
    href: '/wiki/Longfin',
  },
  {
    name: 'Longfin dragonfish',
    href: '/wiki/Longfin_dragonfish',
  },
  {
    name: 'Longfin escolar',
    href: '/wiki/Longfin_escolar',
  },
  {
    name: 'Longfin smelt',
    href: '/wiki/Longfin_smelt',
  },
  {
    name: 'Long-finned char',
    href: '/wiki/Long-finned_char',
  },
  {
    name: 'Long-finned pike',
    href: '/wiki/Long-finned_pike',
  },
  {
    name: 'Longjaw mudsucker',
    href: '/wiki/Longjaw_mudsucker',
  },
  {
    name: 'Longneck eel',
    href: '/wiki/Longneck_eel',
  },
  {
    name: 'Longnose chimaera',
    href: '/wiki/Longnose_chimaera',
  },
  {
    name: 'Longnose dace',
    href: '/wiki/Longnose_dace',
  },
  {
    name: 'Longnose lancetfish',
    href: '/wiki/Longnose_lancetfish',
  },
  {
    name: 'Longnose sucker',
    href: '/wiki/Longnose_sucker',
  },
  {
    name: 'Longnose whiptail catfish',
    href: '/wiki/Longnose_whiptail_catfish',
  },
  {
    name: 'Long-whiskered catfish',
    href: '/wiki/Long-whiskered_catfish',
  },
  {
    name: 'Loosejaw',
    href: '/wiki/Loosejaw',
  },
  {
    name: 'Lost River sucker',
    href: '/wiki/Lost_River_sucker',
  },
  {
    name: 'Louvar',
    href: '/wiki/Louvar',
  },
  {
    name: 'Loweye catfish',
    href: '/wiki/Loweye_catfish',
  },
  {
    name: 'Luderick',
    href: '/wiki/Luderick',
  },
  {
    name: 'Luminous hake',
    href: '/wiki/Luminous_hake',
  },
  {
    name: 'Lumpsucker',
    href: '/wiki/Lumpsucker',
  },
  {
    name: 'Lungfish',
    href: '/wiki/Lungfish',
  },
  {
    name: 'Mackerel',
    href: '/wiki/Mackerel',
  },
  {
    name: 'Mackerel shark',
    href: '/wiki/Mackerel_shark',
  },
  {
    name: 'Madtom',
    href: '/wiki/Madtom',
  },
  {
    name: 'Mahi-mahi',
    href: '/wiki/Mahi-mahi',
  },
  {
    name: 'Mahseer',
    href: '/wiki/Mahseer',
  },
  {
    name: 'Mail-cheeked fish',
    href: '/wiki/Mail-cheeked_fish',
  },
  {
    name: 'Mako shark',
    href: '/wiki/Mako_shark',
  },
  {
    name: 'Mandarinfish (disambiguation)',
    href: '/wiki/Mandarinfish_(disambiguation)',
  },
  {
    name: 'Manefish',
    href: '/wiki/Manefish',
  },
  {
    name: 'Man-of-war fish',
    href: '/wiki/Man-of-war_fish',
  },
  {
    name: 'Manta ray',
    href: '/wiki/Manta_ray',
  },
  {
    name: 'Marblefish',
    href: '/wiki/Marblefish',
  },
  {
    name: 'Marine hatchetfish',
    href: '/wiki/Marine_hatchetfish',
  },
  {
    name: 'Marlin',
    href: '/wiki/Marlin',
  },
  {
    name: 'Masu salmon',
    href: '/wiki/Masu_salmon',
  },
  {
    name: 'Medaka',
    href: '/wiki/Medaka',
  },
  {
    name: 'Medusafish',
    href: '/wiki/Medusafish',
  },
  {
    name: 'Megamouth shark',
    href: '/wiki/Megamouth_shark',
  },
  {
    name: 'Menhaden',
    href: '/wiki/Menhaden',
  },
  {
    name: 'Merluccid hake',
    href: '/wiki/Merluccid_hake',
  },
  {
    name: 'Mexican golden trout',
    href: '/wiki/Mexican_golden_trout',
  },
  {
    name: 'Midshipman fish',
    href: '/wiki/Midshipman_fish',
  },
  {
    name: 'Milkfish',
    href: '/wiki/Milkfish',
  },
  {
    name: 'Minnow',
    href: '/wiki/Minnow',
  },
  {
    name: 'Minnow of the deep',
    href: '/wiki/Minnow_of_the_deep',
  },
  {
    name: 'Modoc sucker',
    href: '/wiki/Modoc_sucker',
  },
  {
    name: 'Mojarra',
    href: '/wiki/Mojarra',
  },
  {
    name: 'Mola mola',
    href: '/wiki/Mola_mola',
  },
  {
    name: 'Monkeyface prickleback',
    href: '/wiki/Monkeyface_prickleback',
  },
  {
    name: 'Monkfish',
    href: '/wiki/Monkfish',
  },
  {
    name: 'Mooneye',
    href: '/wiki/Mooneye',
  },
  {
    name: 'Moonfish',
    href: '/wiki/Moonfish_(disambiguation)',
  },
  {
    name: 'Moorish idol',
    href: '/wiki/Moorish_idol',
  },
  {
    name: 'Mora',
    href: '/wiki/Mora_(fish)',
  },
  {
    name: 'Moray eel',
    href: '/wiki/Moray_eel',
  },
  {
    name: 'Morid cod',
    href: '/wiki/Morid_cod',
  },
  {
    name: 'Morwong',
    href: '/wiki/Morwong',
  },
  {
    name: 'Moses sole',
    href: '/wiki/Moses_sole',
  },
  {
    name: 'Mosquitofish',
    href: '/wiki/Mosquitofish_(disambiguation)',
  },
  {
    name: 'Mouthbrooder',
    href: '/wiki/Mouthbrooder',
  },
  {
    name: 'Mozambique tilapia',
    href: '/wiki/Mozambique_tilapia',
  },
  {
    name: 'Mrigal',
    href: '/wiki/Mrigal',
  },
  {
    name: 'Mud catfish (Mud cat)',
    href: '/wiki/Mud_catfish',
  },
  {
    name: 'Mudfish',
    href: '/wiki/Mudfish_(disambiguation)',
  },
  {
    name: 'Mudminnow',
    href: '/wiki/Mudminnow',
  },
  {
    name: 'Mud minnow',
    href: '/wiki/Mud_minnow_(disambiguation)',
  },
  {
    name: 'Mudskipper',
    href: '/wiki/Mudskipper',
  },
  {
    name: 'Mudsucker',
    href: '/wiki/Mudsucker',
  },
  {
    name: 'Mullet',
    href: '/wiki/Mullet_(fish)',
  },
  {
    name: 'Mummichog',
    href: '/wiki/Mummichog',
  },
  {
    name: 'Murray cod',
    href: '/wiki/Murray_cod',
  },
  {
    name: 'Muskellunge',
    href: '/wiki/Muskellunge',
  },
  {
    name: 'Mustache triggerfish',
    href: '/wiki/Mustache_triggerfish',
  },
  {
    name: 'Mustard eel',
    href: '/wiki/Mustard_eel',
  },
  {
    name: 'Naked-back knifefish',
    href: '/wiki/Naked-back_knifefish',
  },
  {
    name: 'Nase',
    href: '/wiki/Nase',
  },
  {
    name: 'Needlefish',
    href: '/wiki/Needlefish',
  },
  {
    name: 'Neon tetra',
    href: '/wiki/Neon_tetra',
  },
  {
    name: 'New World rivuline',
    href: '/wiki/New_World_rivuline',
  },
  {
    name: 'New Zealand smelt',
    href: '/wiki/New_Zealand_smelt',
  },
  {
    name: 'Nibble fish',
    href: '/wiki/Nibble_fish',
  },
  {
    name: 'Noodlefish',
    href: '/wiki/Noodlefish',
  },
  {
    name: 'North American darter',
    href: '/wiki/North_American_darter',
  },
  {
    name: 'North American freshwater catfish',
    href: '/wiki/North_American_freshwater_catfish',
  },
  {
    name: 'North Pacific daggertooth',
    href: '/wiki/North_Pacific_daggertooth',
  },
  {
    name: 'Northern anchovy',
    href: '/wiki/Northern_anchovy',
  },
  {
    name: 'Northern clingfish',
    href: '/wiki/Northern_clingfish',
  },
  {
    name: 'Northern lampfish',
    href: '/wiki/Northern_lampfish',
  },
  {
    name: 'Northern pike',
    href: '/wiki/Northern_pike',
  },
  {
    name: 'Northern sea robin',
    href: '/wiki/Northern_sea_robin',
  },
  {
    name: 'Northern squawfish',
    href: '/wiki/Northern_squawfish',
  },
  {
    name: 'Northern stargazer',
    href: '/wiki/Northern_stargazer',
  },
  {
    name: 'Notothen',
    href: '/wiki/Nototheniidae',
  },
  {
    name: 'Nurseryfish',
    href: '/wiki/Nurseryfish',
  },
  {
    name: 'Nurse shark',
    href: '/wiki/Nurse_shark',
  },
  {
    name: 'Oarfish',
    href: '/wiki/Oarfish',
  },
  {
    name: 'Ocean perch',
    href: '/wiki/Ocean_perch',
  },
  {
    name: 'Ocean sunfish',
    href: '/wiki/Ocean_sunfish',
  },
  {
    name: 'Oceanic whitetip shark',
    href: '/wiki/Oceanic_whitetip_shark',
  },
  {
    name: 'Oilfish',
    href: '/wiki/Oilfish',
  },
  {
    name: 'Oldwife',
    href: '/wiki/Oldwife',
  },
  {
    name: 'Old World knifefish',
    href: '/wiki/Old_World_knifefish',
  },
  {
    name: 'Olive flounder',
    href: '/wiki/Olive_flounder',
  },
  {
    name: 'Opah',
    href: '/wiki/Opah',
  },
  {
    name: 'Opaleye',
    href: '/wiki/Opaleye',
  },
  {
    name: 'Orange roughy',
    href: '/wiki/Orange_roughy',
  },
  {
    name: 'Orangespine unicorn fish',
    href: '/wiki/Orangespine_unicorn_fish',
  },
  {
    name: 'Orangestriped triggerfish',
    href: '/wiki/Orangestriped_triggerfish',
  },
  {
    name: 'Orbicular batfish',
    href: '/wiki/Orbicular_batfish',
  },
  {
    name: 'Orbicular velvetfish',
    href: '/wiki/Orbicular_velvetfish',
  },
  {
    name: 'Oregon chub',
    href: '/wiki/Oregon_chub',
  },
  {
    name: 'Orfe',
    href: '/wiki/Orfe',
  },
  {
    name: 'Oriental loach',
    href: '/wiki/Oriental_loach',
  },
  {
    name: 'Oscar',
    href: '/wiki/Oscar_(fish)',
  },
  {
    name: 'Owens pupfish',
    href: '/wiki/Owens_pupfish',
  },
  {
    name: 'Pacific albacore',
    href: '/wiki/Pacific_albacore',
  },
  {
    name: 'Pacific cod',
    href: '/wiki/Pacific_cod',
  },
  {
    name: 'Pacific hake',
    href: '/wiki/Pacific_hake',
  },
  {
    name: 'Pacific herring',
    href: '/wiki/Pacific_herring',
  },
  {
    name: 'Pacific lamprey',
    href: '/wiki/Pacific_lamprey',
  },
  {
    name: 'Pacific salmon',
    href: '/wiki/Pacific_salmon',
  },
  {
    name: 'Pacific saury',
    href: '/wiki/Pacific_saury',
  },
  {
    name: 'Pacific trout',
    href: '/wiki/Pacific_trout',
  },
  {
    name: 'Pacific viperfish',
    href: '/wiki/Pacific_viperfish',
  },
  {
    name: 'Paddlefish',
    href: '/wiki/Paddlefish',
  },
  {
    name: 'Pancake batfish',
    href: '/wiki/Pancake_batfish',
  },
  {
    name: 'Panga',
    href: '/wiki/Iridescent_shark',
  },
  {
    name: 'Paradise fish',
    href: '/wiki/Paradise_fish',
  },
  {
    name: 'Parasitic catfish',
    href: '/wiki/Parasitic_catfish',
  },
  {
    name: 'Parore',
    href: '/wiki/Parore',
  },
  {
    name: 'Parrotfish',
    href: '/wiki/Parrotfish',
  },
  {
    name: 'Peacock flounder',
    href: '/wiki/Peacock_flounder',
  },
  {
    name: 'Peamouth',
    href: '/wiki/Peamouth',
  },
  {
    name: 'Pearleye',
    href: '/wiki/Pearleye',
  },
  {
    name: 'Pearlfish',
    href: '/wiki/Pearlfish',
  },
  {
    name: 'Pearl danio',
    href: '/wiki/Pearl_danio',
  },
  {
    name: 'Pearl perch',
    href: '/wiki/Pearl_perch',
  },
  {
    name: 'Pelagic cod',
    href: '/wiki/Pelagic_cod',
  },
  {
    name: 'Pelican eel',
    href: '/wiki/Pelican_eel',
  },
  {
    name: 'Pelican gulper',
    href: '/wiki/Pelican_gulper',
  },
  {
    name: 'Pencil catfish',
    href: '/wiki/Pencil_catfish',
  },
  {
    name: 'Pencilfish',
    href: '/wiki/Pencilfish',
  },
  {
    name: 'Pencilsmelt',
    href: '/wiki/Pencilsmelt',
  },
  {
    name: 'Peppered corydoras',
    href: '/wiki/Peppered_corydoras',
  },
  {
    name: 'Perch',
    href: '/wiki/Perch',
  },
  {
    name: "Peters' elephantnose fish",
    href: '/wiki/Peters%27_elephantnose_fish',
  },
  {
    name: 'Pickerel',
    href: '/wiki/Pickerel_(disambiguation)',
  },
  {
    name: 'Pigfish',
    href: '/wiki/Pigfish_(disambiguation)',
  },
  {
    name: 'Pike conger',
    href: '/wiki/Pike_conger',
  },
  {
    name: 'Pike eel',
    href: '/wiki/Pike_eel',
  },
  {
    name: 'Pike',
    href: '/wiki/Pike_(fish)',
  },
  {
    name: 'Pikeblenny',
    href: '/wiki/Pikeblenny',
  },
  {
    name: 'Pikeperch',
    href: '/wiki/Pikeperch',
  },
  {
    name: 'Pilchard',
    href: '/wiki/Pilchard',
  },
  {
    name: 'Pilot fish',
    href: '/wiki/Pilot_fish',
  },
  {
    name: 'Pineapplefish',
    href: '/wiki/Pineapplefish',
  },
  {
    name: 'Pineconefish',
    href: '/wiki/Pineconefish',
  },
  {
    name: 'Pink salmon',
    href: '/wiki/Pink_salmon',
  },
  {
    name: 'Píntano',
    href: '/wiki/P%C3%ADntano',
  },
  {
    name: 'Pipefish',
    href: '/wiki/Pipefish',
  },
  {
    name: 'Piranha',
    href: '/wiki/Piranha',
  },
  {
    name: 'Pirarucu',
    href: '/wiki/Pirarucu',
  },
  {
    name: 'Pirate perch',
    href: '/wiki/Pirate_perch',
  },
  {
    name: 'Plaice',
    href: '/wiki/Plaice',
  },
  {
    name: 'Platy',
    href: '/wiki/Platy_(fish)',
  },
  {
    name: 'Platyfish',
    href: '/wiki/Platyfish',
  },
  {
    name: 'Pleco',
    href: '/wiki/Pleco_(disambiguation)',
  },
  {
    name: 'Plownose chimaera',
    href: '/wiki/Plownose_chimaera',
  },
  {
    name: 'Poacher',
    href: '/wiki/Poacher_(fish)',
  },
  {
    name: 'Pollyfish',
    href: '/wiki/Pollyfish',
  },
  {
    name: 'Pollock',
    href: '/wiki/Pollock',
  },
  {
    name: 'Pomfret',
    href: '/wiki/Pomfret_(fish)',
  },
  {
    name: 'Pompano',
    href: '/wiki/Pompano',
  },
  {
    name: 'Pompano dolphinfish',
    href: '/wiki/Pompano_dolphinfish',
  },
  {
    name: 'Ponyfish',
    href: '/wiki/Ponyfish',
  },
  {
    name: 'Popeye catalufa',
    href: '/wiki/Popeye_catalufa',
  },
  {
    name: 'Porbeagle shark',
    href: '/wiki/Porbeagle_shark',
  },
  {
    name: 'Porcupinefish',
    href: '/wiki/Porcupinefish',
  },
  {
    name: 'Porgy',
    href: '/wiki/Porgy_(fish)',
  },
  {
    name: 'Port Jackson shark',
    href: '/wiki/Port_Jackson_shark',
  },
  {
    name: 'Powen',
    href: '/wiki/Powen',
  },
  {
    name: 'Prickleback',
    href: '/wiki/Prickleback',
  },
  {
    name: 'Pricklefish',
    href: '/wiki/Pricklefish',
  },
  {
    name: 'Prickly shark',
    href: '/wiki/Prickly_shark',
  },
  {
    name: 'Prowfish',
    href: '/wiki/Prowfish',
  },
  {
    name: 'Pufferfish',
    href: '/wiki/Pufferfish',
  },
  {
    name: 'Pumpkinseed',
    href: '/wiki/Pumpkinseed',
  },
  {
    name: 'Pupfish',
    href: '/wiki/Pupfish',
  },
  {
    name: 'Pygmy sunfish',
    href: '/wiki/Pygmy_sunfish',
  },
  {
    name: 'Queen danio',
    href: '/wiki/Queen_danio',
  },
  {
    name: 'Queen parrotfish',
    href: '/wiki/Queen_parrotfish',
  },
  {
    name: 'Queen triggerfish',
    href: '/wiki/Queen_triggerfish',
  },
  {
    name: 'Quillback',
    href: '/wiki/Quillback',
  },
  {
    name: 'Quillfish',
    href: '/wiki/Quillfish',
  },
  {
    name: 'Rabbitfish',
    href: '/wiki/Rabbitfish',
  },
  {
    name: 'Raccoon butterfly fish',
    href: '/wiki/Raccoon_butterfly_fish',
  },
  {
    name: 'Ragfish',
    href: '/wiki/Ragfish',
  },
  {
    name: 'Rainbow trout',
    href: '/wiki/Rainbow_trout',
  },
  {
    name: 'Rainbowfish',
    href: '/wiki/Rainbowfish',
  },
  {
    name: 'Rasbora',
    href: '/wiki/Rasbora',
  },
  {
    name: 'Ratfish',
    href: '/wiki/Ratfish',
  },
  {
    name: 'Rattail',
    href: '/wiki/Rattail',
  },
  {
    name: 'Ray',
    href: '/wiki/Batoidea',
  },
  {
    name: 'Razorback sucker',
    href: '/wiki/Razorback_sucker',
  },
  {
    name: 'Razorfish',
    href: '/wiki/Razorfish_(disambiguation)',
  },
  {
    name: 'Red Grouper (Epinephelus morio)',
    href: '/w/index.php?title=Red_Grouper&action=edit&redlink=1',
  },
  {
    name: 'Red salmon',
    href: '/wiki/Red_salmon',
  },
  {
    name: 'Red snapper',
    href: '/wiki/Red_Snapper_(disambiguation)',
  },
  {
    name: 'Redfin perch',
    href: '/wiki/Redfin_perch',
  },
  {
    name: 'Redfish',
    href: '/wiki/Redfish',
  },
  {
    name: 'Redhorse sucker',
    href: '/wiki/Redhorse_sucker',
  },
  {
    name: 'Redlip blenny',
    href: '/wiki/Redlip_blenny',
  },
  {
    name: 'Redmouth whalefish',
    href: '/wiki/Redmouth_whalefish',
  },
  {
    name: 'Redtooth triggerfish',
    href: '/wiki/Redtooth_triggerfish',
  },
  {
    name: 'Red velvetfish',
    href: '/wiki/Red_velvetfish',
  },
  {
    name: 'Red whalefish',
    href: '/wiki/Red_whalefish',
  },
  {
    name: 'Reedfish',
    href: '/wiki/Reedfish',
  },
  {
    name: 'Reef triggerfish',
    href: '/wiki/Reef_triggerfish',
  },
  {
    name: 'Remora',
    href: '/wiki/Remora',
  },
  {
    name: 'Requiem shark',
    href: '/wiki/Requiem_shark',
  },
  {
    name: 'Ribbon eel',
    href: '/wiki/Ribbon_eel',
  },
  {
    name: 'Ribbon sawtail fish',
    href: '/wiki/Ribbon_sawtail_fish',
  },
  {
    name: 'Ribbonfish',
    href: '/wiki/Ribbonfish',
  },
  {
    name: 'Rice eel',
    href: '/wiki/Rice_eel',
  },
  {
    name: 'Ricefish',
    href: '/wiki/Ricefish',
  },
  {
    name: 'Ridgehead',
    href: '/wiki/Ridgehead',
  },
  {
    name: 'Riffle dace',
    href: '/wiki/Riffle_dace',
  },
  {
    name: 'Righteye flounder',
    href: '/wiki/Righteye_flounder',
  },
  {
    name: 'Rio Grande perch',
    href: '/wiki/Rio_Grande_perch',
  },
  {
    name: 'River loach',
    href: '/wiki/River_loach',
  },
  {
    name: 'River shark',
    href: '/wiki/River_shark',
  },
  {
    name: 'River stingray',
    href: '/wiki/River_stingray',
  },
  {
    name: 'Rivuline',
    href: '/wiki/Rivuline',
  },
  {
    name: 'Roach',
    href: '/wiki/Roach_(disambiguation)#Animals',
  },
  {
    name: 'Roanoke bass',
    href: '/wiki/Roanoke_bass',
  },
  {
    name: 'Rock bass',
    href: '/wiki/Rock_bass',
  },
  {
    name: 'Rock beauty',
    href: '/wiki/Rock_beauty',
  },
  {
    name: 'Rock cod',
    href: '/wiki/Rock_cod',
  },
  {
    name: 'Rocket danio',
    href: '/wiki/Rocket_danio',
  },
  {
    name: 'Rockfish',
    href: '/wiki/Rockfish_(disambiguation)',
  },
  {
    name: 'Rockling',
    href: '/wiki/Rockling_(disambiguation)',
  },
  {
    name: 'Rockweed gunnel',
    href: '/wiki/Rockweed_gunnel',
  },
  {
    name: 'Rohu',
    href: '/wiki/Rohu',
  },
  {
    name: 'Ronquil',
    href: '/wiki/Ronquil',
  },
  {
    name: 'Roosterfish',
    href: '/wiki/Roosterfish',
  },
  {
    name: 'Ropefish',
    href: '/wiki/Ropefish',
  },
  {
    name: 'Rough scad',
    href: '/wiki/Rough_scad',
  },
  {
    name: 'Rough sculpin',
    href: '/wiki/Rough_sculpin',
  },
  {
    name: 'Roughy',
    href: '/wiki/Roughy',
  },
  {
    name: 'Roundhead',
    href: '/wiki/Roundhead_(fish)',
  },
  {
    name: 'Round herring',
    href: '/wiki/Round_herring',
  },
  {
    name: 'Round stingray',
    href: '/wiki/Round_stingray',
  },
  {
    name: 'Round whitefish',
    href: '/wiki/Round_whitefish',
  },
  {
    name: 'Rudd',
    href: '/wiki/Rudd',
  },
  {
    name: 'Rudderfish',
    href: '/wiki/Rudderfish',
  },
  {
    name: 'Ruffe',
    href: '/wiki/Ruffe',
  },
  {
    name: 'Russian sturgeon',
    href: '/wiki/Russian_sturgeon',
  },
  {
    name: 'Sábalo',
    href: '/wiki/S%C3%A1balo_(disambiguation)',
  },
  {
    name: 'Sabertooth',
    href: '/wiki/Sabretooth_(disambiguation)#Animals',
  },
  {
    name: 'Saber-toothed blenny',
    href: '/wiki/Saber-toothed_blenny',
  },
  {
    name: 'Sabertooth fish',
    href: '/wiki/Sabertooth_fish',
  },
  {
    name: 'Sablefish',
    href: '/wiki/Sablefish',
  },
  {
    name: 'Sacramento blackfish',
    href: '/wiki/Sacramento_blackfish',
  },
  {
    name: 'Sacramento splittail',
    href: '/wiki/Sacramento_splittail',
  },
  {
    name: 'Sailfin silverside',
    href: '/wiki/Sailfin_silverside',
  },
  {
    name: 'Sailfish',
    href: '/wiki/Sailfish',
  },
  {
    name: 'Salamanderfish',
    href: '/wiki/Salamanderfish_(disambiguation)',
  },
  {
    name: 'Salmon',
    href: '/wiki/Salmon',
  },
  {
    name: 'Salmon shark',
    href: '/wiki/Salmon_shark',
  },
  {
    name: 'Sandbar shark',
    href: '/wiki/Sandbar_shark',
  },
  {
    name: 'Sandburrower',
    href: '/wiki/Sandburrower',
  },
  {
    name: 'Sand dab',
    href: '/wiki/Sand_dab',
  },
  {
    name: 'Sand diver',
    href: '/wiki/Sand_diver_(disambiguation)',
  },
  {
    name: 'Sand eel',
    href: '/wiki/Sand_eel',
  },
  {
    name: 'Sandfish',
    href: '/wiki/Sandfish_(disambiguation)',
  },
  {
    name: 'Sand goby',
    href: '/wiki/Sand_goby',
  },
  {
    name: 'Sand knifefish',
    href: '/wiki/Sand_knifefish',
  },
  {
    name: 'Sand lance',
    href: '/wiki/Sand_lance',
  },
  {
    name: 'Sandperch',
    href: '/wiki/Sandperch',
  },
  {
    name: 'Sandroller',
    href: '/wiki/Sandroller',
  },
  {
    name: 'Sand stargazer',
    href: '/wiki/Sand_stargazer',
  },
  {
    name: 'Sand tiger',
    href: '/wiki/Sand_tiger',
  },
  {
    name: 'Sand tilefish',
    href: '/wiki/Sand_tilefish',
  },
  {
    name: 'Sandbar Shark - Carchathinus plumbeus',
    href: '/wiki/Sandbar_Shark',
  },
  {
    name: 'Sarcastic fringehead',
    href: '/wiki/Sarcastic_fringehead',
  },
  {
    name: 'Sardine',
    href: '/wiki/Sardine',
  },
  {
    name: 'Sargassum fish',
    href: '/wiki/Sargassum_fish',
  },
  {
    name: 'Sauger',
    href: '/wiki/Sauger',
  },
  {
    name: 'Saury',
    href: '/wiki/Saury',
  },
  {
    name: 'Sawfish',
    href: '/wiki/Sawfish_(fish)',
  },
  {
    name: 'Saw shark',
    href: '/wiki/Saw_shark',
  },
  {
    name: 'Sawtooth eel',
    href: '/wiki/Sawtooth_eel',
  },
  {
    name: 'Scabbard fish',
    href: '/wiki/Scabbard_fish',
  },
  {
    name: 'Scaly dragonfish',
    href: '/wiki/Scaly_dragonfish',
  },
  {
    name: 'Scat',
    href: '/wiki/Scat_(fish)',
  },
  {
    name: 'Scissortail rasbora',
    href: '/wiki/Scissortail_rasbora_(disambiguation)',
  },
  {
    name: 'Scorpionfish',
    href: '/wiki/Scorpionfish',
  },
  {
    name: 'Sculpin',
    href: '/wiki/Sculpin',
  },
  {
    name: 'Scup',
    href: '/wiki/Scup',
  },
  {
    name: 'Sea bass',
    href: '/wiki/Sea_bass_(disambiguation)',
  },
  {
    name: 'Sea bream',
    href: '/wiki/Sea_bream',
  },
  {
    name: 'Sea catfish',
    href: '/wiki/Sea_catfish',
  },
  {
    name: 'Sea chub',
    href: '/wiki/Sea_chub',
  },
  {
    name: 'Sea devil',
    href: '/wiki/Sea_devil_(disambiguation)',
  },
  {
    name: 'Sea dragon',
    href: '/wiki/Common_seadragon',
  },
  {
    name: 'Sea lamprey',
    href: '/wiki/Sea_lamprey',
  },
  {
    name: 'Sea raven',
    href: '/wiki/Sea_raven',
  },
  {
    name: 'Sea snail',
    href: '/wiki/Snailfish',
  },
  {
    name: 'Sea toad',
    href: '/wiki/Sea_toad',
  },
  {
    name: 'Seahorse',
    href: '/wiki/Seahorse',
  },
  {
    name: 'Seamoth',
    href: '/wiki/Seamoth',
  },
  {
    name: 'Searobin',
    href: '/wiki/Searobin',
  },
  {
    name: 'Sevan trout',
    href: '/wiki/Sevan_trout',
  },
  {
    name: 'Sergeant major',
    href: '/wiki/Sergeant_major_(fish)',
  },
  {
    name: 'Shad',
    href: '/wiki/Shad',
  },
  {
    name: 'Shark',
    href: '/wiki/Shark',
  },
  {
    name: 'Sharksucker',
    href: '/wiki/Sharksucker',
  },
  {
    name: 'Sharpnose puffer',
    href: '/wiki/Sharpnose_puffer',
  },
  {
    name: 'Sheatfish',
    href: '/wiki/Sheatfish_(disambiguation)',
  },
  {
    name: 'Sheepshead',
    href: '/wiki/Sheepshead_(disambiguation)',
  },
  {
    name: 'Sheepshead minnow',
    href: '/wiki/Sheepshead_minnow',
  },
  {
    name: 'Shiner',
    href: '/wiki/Shiner_(fish)',
  },
  {
    name: 'Shortnose chimaera',
    href: '/wiki/Shortnose_chimaera',
  },
  {
    name: 'Shortnose sucker',
    href: '/wiki/Shortnose_sucker',
  },
  {
    name: 'Shovelnose sturgeon',
    href: '/wiki/Shovelnose_sturgeon',
  },
  {
    name: 'Shrimpfish',
    href: '/wiki/Shrimpfish',
  },
  {
    name: 'Siamese fighting fish',
    href: '/wiki/Siamese_fighting_fish',
  },
  {
    name: 'Sillago',
    href: '/wiki/Sillago',
  },
  {
    name: 'Silver carp',
    href: '/wiki/Silver_carp',
  },
  {
    name: 'Silver dollar',
    href: '/wiki/Silver_dollar_(fish)',
  },
  {
    name: 'Silver dory',
    href: '/wiki/Silver_dory',
  },
  {
    name: 'Silver hake',
    href: '/wiki/Silver_hake',
  },
  {
    name: 'Silverside',
    href: '/wiki/Silverside_(disambiguation)',
  },
  {
    name: 'Silvertip tetra',
    href: '/wiki/Silvertip_tetra',
  },
  {
    name: 'Sind danio',
    href: '/wiki/Sind_danio',
  },
  {
    name: 'Sixgill ray',
    href: '/wiki/Sixgill_ray',
  },
  {
    name: 'Sixgill shark',
    href: '/wiki/Sixgill_shark',
  },
  {
    name: 'Skate',
    href: '/wiki/Skate_(fish)',
  },
  {
    name: 'Skilfish',
    href: '/wiki/Skilfish',
  },
  {
    name: 'Skipjack tuna',
    href: '/wiki/Skipjack_tuna',
  },
  {
    name: 'Slender mola',
    href: '/wiki/Slender_mola',
  },
  {
    name: 'Slender snipe eel',
    href: '/wiki/Slender_snipe_eel',
  },
  {
    name: 'Sleeper',
    href: '/wiki/Sleeper_(disambiguation)#Biology',
  },
  {
    name: 'Sleeper shark',
    href: '/wiki/Sleeper_shark',
  },
  {
    name: 'Slickhead',
    href: '/wiki/Slickhead',
  },
  {
    name: 'Slimehead',
    href: '/wiki/Slimehead',
  },
  {
    name: 'Slimy mackerel',
    href: '/wiki/Slimy_mackerel',
  },
  {
    name: 'Slimy sculpin',
    href: '/wiki/Slimy_sculpin',
  },
  {
    name: 'Slipmouth',
    href: '/wiki/Slipmouth',
  },
  {
    name: 'Smalleye squaretail',
    href: '/wiki/Smalleye_squaretail',
  },
  {
    name: 'Smalltooth sawfish',
    href: '/wiki/Smalltooth_sawfish',
  },
  {
    name: 'Smelt',
    href: '/wiki/Smelt_(disambiguation)',
  },
  {
    name: 'Smelt-whiting',
    href: '/wiki/Smelt-whiting',
  },
  {
    name: 'Smooth dogfish',
    href: '/wiki/Smooth_dogfish',
  },
  {
    name: 'Snailfish',
    href: '/wiki/Snailfish',
  },
  {
    name: 'Snake eel',
    href: '/wiki/Snake_eel',
  },
  {
    name: 'Snakehead',
    href: '/wiki/Snakehead_(fish)',
  },
  {
    name: 'Snake mackerel',
    href: '/wiki/Snake_mackerel',
  },
  {
    name: 'Snapper',
    href: '/wiki/Snapper_(disambiguation)',
  },
  {
    name: 'Snipe eel',
    href: '/wiki/Snipe_eel',
  },
  {
    name: 'Snipefish',
    href: '/wiki/Snipefish',
  },
  {
    name: 'Snoek',
    href: '',
  },
  {
    name: 'Snook',
    href: '/wiki/Snook_(disambiguation)',
  },
  {
    name: 'Snubnose eel',
    href: '/wiki/Snubnose_eel',
  },
  {
    name: 'Snubnose parasitic eel',
    href: '/wiki/Snubnose_parasitic_eel',
  },
  {
    name: 'Sockeye salmon',
    href: '/wiki/Sockeye_salmon',
  },
  {
    name: 'Soldierfish',
    href: '/wiki/Soldierfish',
  },
  {
    name: 'Sole',
    href: '/wiki/Sole_(fish)',
  },
  {
    name: 'South American darter',
    href: '/wiki/South_American_darter',
  },
  {
    name: 'South American lungfish',
    href: '/wiki/South_American_lungfish',
  },
  {
    name: 'Southern Dolly Varden',
    href: '/wiki/Southern_Dolly_Varden',
  },
  {
    name: 'Southern flounder',
    href: '/wiki/Southern_flounder',
  },
  {
    name: 'Southern hake',
    href: '/wiki/Southern_hake',
  },
  {
    name: 'Southern sandfish',
    href: '/wiki/Southern_sandfish',
  },
  {
    name: 'Southern smelt',
    href: '/wiki/Southern_smelt',
  },
  {
    name: 'Spadefish',
    href: '/wiki/Spadefish',
  },
  {
    name: 'Spaghetti eel',
    href: '/wiki/Spaghetti_eel',
  },
  {
    name: 'Spanish mackerel',
    href: '/wiki/Spanish_mackerel_(disambiguation)',
  },
  {
    name: 'Spearfish',
    href: '/wiki/Spearfish_(disambiguation)',
  },
  {
    name: 'Speckled trout',
    href: '/wiki/Speckled_trout_(disambiguation)',
  },
  {
    name: 'Spiderfish',
    href: '/wiki/Spiderfish',
  },
  {
    name: 'Spikefish',
    href: '/wiki/Spikefish',
  },
  {
    name: 'Spinefoot',
    href: '/wiki/Spinefoot',
  },
  {
    name: 'Spiny basslet',
    href: '/wiki/Spiny_basslet',
  },
  {
    name: 'Spiny dogfish',
    href: '/wiki/Spiny_dogfish',
  },
  {
    name: 'Spiny dwarf catfish',
    href: '/wiki/Spiny_dwarf_catfish',
  },
  {
    name: 'Spiny eel',
    href: '/wiki/Spiny_eel',
  },
  {
    name: 'Spinyfin',
    href: '/wiki/Spinyfin',
  },
  {
    name: 'Splitfin',
    href: '/wiki/Splitfin',
  },
  {
    name: 'Spookfish',
    href: '/wiki/Spookfish_(disambiguation)',
  },
  {
    name: 'Spotted climbing perch',
    href: '/wiki/Spotted_climbing_perch',
  },
  {
    name: 'Spotted danio',
    href: '/wiki/Spotted_danio',
  },
  {
    name: 'Spottail Pinfish - Diplodus holbrooki',
    href: '/wiki/Spottail_Pinfish',
  },
  {
    name: 'Sprat',
    href: '/wiki/Sprat',
  },
  {
    name: 'Springfish',
    href: '/wiki/Springfish',
  },
  {
    name: 'Squarehead catfish',
    href: '/wiki/Squarehead_catfish',
  },
  {
    name: 'Squaretail',
    href: '/wiki/Squaretail',
  },
  {
    name: 'Squawfish',
    href: '/wiki/Squawfish',
  },
  {
    name: 'Squeaker',
    href: '/wiki/Squeaker_(fish)',
  },
  {
    name: 'Squirrelfish',
    href: '/wiki/Squirrelfish',
  },
  {
    name: 'Staghorn sculpin',
    href: '/wiki/Staghorn_sculpin',
  },
  {
    name: 'Stargazer',
    href: '/wiki/Stargazer_(fish)',
  },
  {
    name: 'Starry flounder',
    href: '/wiki/Starry_flounder',
  },
  {
    name: 'Steelhead',
    href: '/wiki/Steelhead',
  },
  {
    name: 'Stickleback',
    href: '/wiki/Stickleback',
  },
  {
    name: 'Stingfish',
    href: '/wiki/Stingfish',
  },
  {
    name: 'Stingray',
    href: '/wiki/Stingray',
  },
  {
    name: 'Stonecat',
    href: '/wiki/Stonecat',
  },
  {
    name: 'Stonefish',
    href: '/wiki/Stonefish',
  },
  {
    name: 'Stoneroller minnow',
    href: '/wiki/Stoneroller_minnow',
  },
  {
    name: 'Stream catfish',
    href: '/wiki/Stream_catfish',
  },
  {
    name: 'Striped bass',
    href: '/wiki/Striped_bass',
  },
  {
    name: 'Striped burrfish',
    href: '/wiki/Striped_burrfish',
  },
  {
    name: 'Sturgeon',
    href: '/wiki/Sturgeon',
  },
  {
    name: 'Sucker',
    href: '/wiki/Catostomidae',
  },
  {
    name: 'Suckermouth armored catfish',
    href: '/wiki/Suckermouth_armored_catfish',
  },
  {
    name: 'Summer flounder',
    href: '/wiki/Summer_flounder',
  },
  {
    name: 'Sundaland noodlefish',
    href: '/wiki/Sundaland_noodlefish',
  },
  {
    name: 'Sunfish',
    href: '/wiki/Sunfish_(disambiguation)',
  },
  {
    name: 'Surf sardine',
    href: '/wiki/Surf_sardine',
  },
  {
    name: 'Surfperch',
    href: '/wiki/Surfperch',
  },
  {
    name: 'Surgeonfish',
    href: '/wiki/Surgeonfish',
  },
  {
    name: 'Swallower',
    href: '/wiki/Swallower',
  },
  {
    name: 'Swamp-eel',
    href: '/wiki/Swamp-eel',
  },
  {
    name: 'Swampfish',
    href: '/wiki/Swampfish',
  },
  {
    name: 'Sweeper',
    href: '/wiki/Sweeper',
  },
  {
    name: 'Swordfish',
    href: '/wiki/Swordfish',
  },
  {
    name: 'Swordtail',
    href: '/wiki/Swordtail',
  },
  {
    name: 'Tadpole cod',
    href: '/wiki/Tadpole_cod',
  },
  {
    name: 'Tadpole fish',
    href: '/wiki/Tadpole_fish',
  },
  {
    name: 'Tailor',
    href: '/wiki/Bluefish',
  },
  {
    name: 'Taimen',
    href: '/wiki/Taimen',
  },
  {
    name: 'Tang',
    href: '/wiki/Tang_(fish)',
  },
  {
    name: 'Tapetail',
    href: '/wiki/Tapetail',
  },
  {
    name: 'Tarpon',
    href: '/wiki/Tarpon',
  },
  {
    name: 'Tarwhine',
    href: '/wiki/Tarwhine',
  },
  {
    name: 'Telescopefish',
    href: '/wiki/Telescopefish',
  },
  {
    name: 'Temperate bass',
    href: '/wiki/Temperate_bass',
  },
  {
    name: 'Temperate ocean-bass',
    href: '/wiki/Temperate_ocean-bass',
  },
  {
    name: 'Temperate perch',
    href: '/wiki/Temperate_perch',
  },
  {
    name: 'Tench',
    href: '/wiki/Tench',
  },
  {
    name: 'Tenpounder',
    href: '/wiki/Tenpounder',
  },
  {
    name: 'Tenuis',
    href: '/wiki/Tenuis_tetra',
  },
  {
    name: 'Tetra',
    href: '/wiki/Tetra',
  },
  {
    name: 'Thorny catfish',
    href: '/wiki/Thorny_catfish',
  },
  {
    name: 'Thornfish',
    href: '/wiki/Thornfish',
  },
  {
    name: 'Threadfin',
    href: '/wiki/Threadfin',
  },
  {
    name: 'Threadfin bream',
    href: '/wiki/Threadfin_bream',
  },
  {
    name: 'Thread-tail',
    href: '/wiki/Thread-tail',
  },
  {
    name: 'Three spot gourami',
    href: '/wiki/Three_spot_gourami',
  },
  {
    name: 'Threespine stickleback',
    href: '/wiki/Threespine_stickleback',
  },
  {
    name: 'Three-toothed puffer',
    href: '/wiki/Three-toothed_puffer',
  },
  {
    name: 'Thresher shark',
    href: '/wiki/Thresher_shark',
  },
  {
    name: 'Tidewater goby',
    href: '/wiki/Tidewater_goby',
  },
  {
    name: 'Tiger barb',
    href: '/wiki/Tiger_barb',
  },
  {
    name: 'Tigerperch',
    href: '/wiki/Tigerperch',
  },
  {
    name: 'Tiger shark',
    href: '/wiki/Tiger_shark',
  },
  {
    name: 'Tiger shovelnose catfish',
    href: '/wiki/Tiger_shovelnose_catfish',
  },
  {
    name: 'Tilapia',
    href: '/wiki/Tilapia',
  },
  {
    name: 'Tilefish',
    href: '/wiki/Tilefish',
  },
  {
    name: 'Titan triggerfish',
    href: '/wiki/Titan_triggerfish',
  },
  {
    name: 'Toadfish',
    href: '/wiki/Toadfish',
  },
  {
    name: 'Tommy ruff',
    href: '/wiki/Tommy_ruff',
  },
  {
    name: 'Tompot blenny',
    href: '/wiki/Tompot_blenny',
  },
  {
    name: 'Tonguefish',
    href: '/wiki/Tonguefish',
  },
  {
    name: 'Tope',
    href: '/wiki/Tope_(disambiguation)',
  },
  {
    name: 'Topminnow',
    href: '/wiki/Topminnow',
  },
  {
    name: 'Torpedo',
    href: '/wiki/Torpedo_(disambiguation)',
  },
  {
    name: 'Torrent catfish',
    href: '/wiki/Torrent_catfish',
  },
  {
    name: 'Torrent fish',
    href: '/wiki/Torrent_fish',
  },
  {
    name: 'Trahira',
    href: '/wiki/Trahira',
  },
  {
    name: 'Treefish',
    href: '/wiki/Treefish',
  },
  {
    name: 'Trevally',
    href: '/wiki/Trevally',
  },
  {
    name: 'Triggerfish',
    href: '/wiki/Triggerfish',
  },
  {
    name: 'Triplefin blenny',
    href: '/wiki/Triplefin_blenny',
  },
  {
    name: 'Triplespine',
    href: '/wiki/Triplespine',
  },
  {
    name: 'Tripletail',
    href: '/wiki/Tripletail',
  },
  {
    name: 'Tripod fish',
    href: '/wiki/Tripod_fish_(disambiguation)',
  },
  {
    name: 'Trout',
    href: '/wiki/Trout',
  },
  {
    name: 'Trout cod',
    href: '/wiki/Trout_cod',
  },
  {
    name: 'Trout-perch',
    href: '/wiki/Trout-perch',
  },
  {
    name: 'Trumpeter',
    href: '/wiki/Trumpeter_(fish)',
  },
  {
    name: 'Trumpetfish',
    href: '/wiki/Trumpetfish',
  },
  {
    name: 'Trunkfish',
    href: '/wiki/Trunkfish',
  },
  {
    name: 'Tubeblenny',
    href: '/wiki/Tubeblenny',
  },
  {
    name: 'Tube-eye',
    href: '/wiki/Tube-eye',
  },
  {
    name: 'Tube-snout',
    href: '/wiki/Tube-snout_(disambiguation)',
  },
  {
    name: 'Tubeshoulder',
    href: '/wiki/Tubeshoulder',
  },
  {
    name: 'Tui chub',
    href: '/wiki/Tui_chub',
  },
  {
    name: 'Tuna',
    href: '/wiki/Tuna',
  },
  {
    name: 'Turbot',
    href: '/wiki/Turbot',
  },
  {
    name: 'Two spotted goby',
    href: '/wiki/Two_spotted_goby',
  },
  {
    name: 'Uaru',
    href: '/wiki/Uaru',
  },
  {
    name: 'Unicorn fish',
    href: '/wiki/Unicorn_fish_(disambiguation)',
  },
  {
    name: 'Upside-down catfish',
    href: '/wiki/Upside-down_catfish',
  },
  {
    name: 'Vanjaram',
    href: '/wiki/Vanjaram',
  },
  {
    name: 'Velvet belly lanternshark',
    href: '/wiki/Velvet_belly_lanternshark',
  },
  {
    name: 'Velvet catfish',
    href: '/wiki/Velvet_catfish',
  },
  {
    name: 'Velvetfish',
    href: '/wiki/Velvetfish',
  },
  {
    name: 'Vendace',
    href: '/wiki/Vendace_(disambiguation)',
  },
  {
    name: 'Vermillion Snapper - Rhomboplites aurorubens',
    href: '',
  },
  {
    name: 'Vimba',
    href: '/wiki/Vimba',
  },
  {
    name: 'Viperfish',
    href: '/wiki/Viperfish',
  },
  {
    name: 'Wahoo',
    href: '/wiki/Wahoo',
  },
  {
    name: 'Walking catfish',
    href: '/wiki/Walking_catfish',
  },
  {
    name: 'Wallago',
    href: '/wiki/Wallago',
  },
  {
    name: 'Walleye',
    href: '/wiki/Walleye',
  },
  {
    name: 'Walleye pollock',
    href: '/wiki/Walleye_pollock',
  },
  {
    name: 'Walu',
    href: '/wiki/Escolar',
  },
  {
    name: 'Warmouth',
    href: '/wiki/Warmouth',
  },
  {
    name: 'Warty angler',
    href: '/wiki/Warty_angler',
  },
  {
    name: 'Waryfish',
    href: '/wiki/Waryfish',
  },
  {
    name: 'Waspfish',
    href: '/wiki/Waspfish',
  },
  {
    name: 'Weasel shark',
    href: '/wiki/Weasel_shark',
  },
  {
    name: 'Weatherfish',
    href: '/wiki/Weatherfish',
  },
  {
    name: 'Weever',
    href: '/wiki/Weever',
  },
  {
    name: 'Weeverfish',
    href: '/wiki/Weeverfish',
  },
  {
    name: 'Wels catfish',
    href: '/wiki/Wels_catfish',
  },
  {
    name: 'Whale catfish',
    href: '/wiki/Whale_catfish',
  },
  {
    name: 'Whalefish',
    href: '/wiki/Whalefish',
  },
  {
    name: 'Whale shark',
    href: '/wiki/Whale_shark',
  },
  {
    name: 'Whiff',
    href: '/wiki/Whiff_(disambiguation)',
  },
  {
    name: 'Whitebait',
    href: '/wiki/Whitebait',
  },
  {
    name: 'White croaker',
    href: '/wiki/White_croaker',
  },
  {
    name: 'Whitefish',
    href: '/wiki/Whitefish_(disambiguation)',
  },
  {
    name: 'White marlin',
    href: '/wiki/White_marlin',
  },
  {
    name: 'White shark',
    href: '/wiki/White_shark',
  },
  {
    name: 'Whitetip reef shark',
    href: '/wiki/Whitetip_reef_shark',
  },
  {
    name: 'Whiting',
    href: '/wiki/Whiting_(fish)',
  },
  {
    name: 'Wobbegong',
    href: '/wiki/Wobbegong',
  },
  {
    name: 'Wolf-eel',
    href: '/wiki/Wolf-eel',
  },
  {
    name: 'Wolffish',
    href: '/wiki/Wolffish',
  },
  {
    name: 'Wolf-herring',
    href: '/wiki/Wolf-herring',
  },
  {
    name: 'Worm eel',
    href: '/wiki/Worm_eel',
  },
  {
    name: 'Wormfish',
    href: '/wiki/Wormfish',
  },
  {
    name: 'Wrasse',
    href: '/wiki/Wrasse',
  },
  {
    name: 'Wrymouth',
    href: '/wiki/Wrymouth',
  },
  {
    name: 'Yellow-and-black triplefin',
    href: '/wiki/Yellow-and-black_triplefin',
  },
  {
    name: 'Yellowback fusilier',
    href: '/wiki/Yellowback_fusilier',
  },
  {
    name: 'Yellowbanded perch',
    href: '/wiki/Yellowbanded_perch',
  },
  {
    name: 'Yellow bass',
    href: '/wiki/Yellow_bass',
  },
  {
    name: 'Yellowedge grouper (Hyporthodus flavolimbatus)',
    href: '/wiki/Yellowedge_grouper',
  },
  {
    name: 'Yellow-edged moray',
    href: '/wiki/Yellow-edged_moray',
  },
  {
    name: 'Yellow-eye mullet',
    href: '/wiki/Yellow-eye_mullet',
  },
  {
    name: 'Yellowhead jawfish',
    href: '/wiki/Yellowhead_jawfish',
  },
  {
    name: 'Yellowfin croaker',
    href: '/wiki/Yellowfin_croaker',
  },
  {
    name: 'Yellowfin cutthroat trout',
    href: '/wiki/Yellowfin_cutthroat_trout',
  },
  {
    name: 'Yellowfin grouper',
    href: '/wiki/Yellowfin_grouper',
  },
  {
    name: 'Yellowfin Tuna - Thunnus albacares',
    href: '/wiki/Yellowfin_Tuna',
  },
  {
    name: 'Yellowfin pike',
    href: '/wiki/Yellowfin_pike',
  },
  {
    name: 'Yellowfin surgeonfish',
    href: '/wiki/Yellowfin_surgeonfish',
  },
  {
    name: 'Yellowfin tuna',
    href: '/wiki/Yellowfin_tuna',
  },
  {
    name: 'Yellow jack',
    href: '/wiki/Yellow_jack',
  },
  {
    name: 'Yellowmargin triggerfish',
    href: '/wiki/Yellowmargin_triggerfish',
  },
  {
    name: 'Yellow moray',
    href: '/wiki/Yellow_moray',
  },
  {
    name: 'Yellow perch',
    href: '/wiki/Yellow_perch',
  },
  {
    name: 'Yellowtail',
    href: '/wiki/Yellowtail_(fish)',
  },
  {
    name: 'Yellowtail amberjack',
    href: '/wiki/Yellowtail_amberjack',
  },
  {
    name: 'Yellowtail barracuda',
    href: '/wiki/Yellowtail_barracuda',
  },
  {
    name: 'Yellowtail clownfish',
    href: '/wiki/Yellowtail_clownfish',
  },
  {
    name: 'Yellowtail horse mackerel',
    href: '/wiki/Yellowtail_horse_mackerel',
  },
  {
    name: 'Yellowtail kingfish',
    href: '/wiki/Yellowtail_kingfish',
  },
  {
    name: 'Yellowtail snapper',
    href: '/wiki/Yellowtail_snapper',
  },
  {
    name: 'Yellow tang',
    href: '/wiki/Yellow_tang',
  },
  {
    name: 'Yellow weaver',
    href: '/wiki/Yellow_weaver_(fish)',
  },
  {
    name: 'Yellowtail catfish',
    href: '/wiki/Yellowtail_catfish',
  },
  {
    name: 'Zander',
    href: '/wiki/Zander',
  },
  {
    name: 'Zebra bullhead shark',
    href: '/wiki/Zebra_bullhead_shark',
  },
  {
    name: 'Zebra danio',
    href: '/wiki/Zebra_danio',
  },
  {
    name: 'Zebrafish',
    href: '/wiki/Zebrafish',
  },
  {
    name: 'Zebra lionfish',
    href: '/wiki/Zebra_lionfish',
  },
  {
    name: 'Zebra loach',
    href: '/wiki/Zebra_loach',
  },
  {
    name: 'Zebra oto',
    href: '/wiki/Zebra_oto',
  },
  {
    name: 'Zebra pleco',
    href: '/wiki/Zebra_pleco',
  },
  {
    name: 'Zebra shark',
    href: '/wiki/Zebra_shark',
  },
  {
    name: 'Zebra tilapia',
    href: '/wiki/Zebra_tilapia',
  },
  {
    name: 'Zebra turkeyfish',
    href: '/wiki/Zebra_turkeyfish',
  },
  {
    name: 'Ziege',
    href: '/wiki/Ziege',
  },
  {
    name: 'Zingel',
    href: '/wiki/Zingel',
  },
];

/* target the necessary elements
- form, for the input event
- section, highlighting the results in article elements
- svg, animated through the viewBox attribute
*/
const form = document.querySelector('form');
const section = document.querySelector('section');
const svg = document.querySelector('svg#sprite');

// function displaying the found matches
// accepting as argument the string of text creating the matches as well as the array of matches
function displayMatches(possibleMatch, matches) {
  const { length } = matches;
  if (length > 0) {
    // if there are matches show the third variant of the sprite and include one article per match
    svg.setAttribute('viewBox', '42 0 21 31');
    // ! describe the match in its lowercase version to avoid capitalization issues
    const match = possibleMatch.toLowerCase();
    // create a regex to substitute the letters in the fish' name
    const regexMatch = new RegExp(match, 'i');

    /* article structure
      <article>
        <svg role="img" color="hsl(127, 95%, 80%)" viewBox="0 0 100 100" width="90" height="90">
            <use href="#fish"></use>
        </svg>

        <a href="#">
            <h2>African lungfish</h2>
            <svg role="img" viewBox="0 0 100 100" width="25" height="25">
                <use href="#anchor"></use>
            </svg>
        </a>
      </article>

      where the match is included in the anchor link href attribute and the heading text
      increase the delay for each animation and the hue for each color
    */
    section.innerHTML = matches.map(({ name, href }, index) => `
    <article style="animation: appear 0.5s ${1 / length * index}s cubic-bezier(0.17,0.67,0.65,1.51) both;">
      <svg role="img" color="hsl(${30 * index}, 95%, 80%)" viewBox="0 0 100 100" width="90" height="90">
          <use href="#fish"></use>
      </svg>

      <a target="_blank" href="${url}${href}">
          <h2>${name.replace(regexMatch, `<mark>${match}</mark>`)}</h2>
          <svg role="img" viewBox="0 0 100 100" width="25" height="25">
              <use href="#anchor"></use>
          </svg>
      </a>
    </article>`).join('');
  } else {
    // when no match is found display an article with a single heading, detailing the occurrence
    svg.setAttribute('viewBox', '0 0 21 31');
    section.innerHTML = `
    <article style="animation: appear 0.25s cubic-bezier(0.17,0.67,0.65,1.51) both;">
      <svg role="img" color="hsl(${Math.floor(Math.random() * 360)}, 95%, 80%)" viewBox="0 0 100 100" width="90" height="90">
          <use href="#fish"></use>
      </svg>
      <h2>Not even a nibble!</h2>
    </article>`;
  }
}

// function called following the input event, and accepting as argument the input value
function handleValue(value) {
  // when the value is an empty string reset the sprite position and remove the existing articles, if any
  if (!value) {
    svg.setAttribute('viewBox', '0 0 21 31');
    section.innerHTML = '';
  } else {
    // else create a regex out of the string and find filter the data array according to a possible match
    const possibleMatch = value;
    const regexPossibleMatch = new RegExp(possibleMatch, 'i');
    const matches = data.filter(({ name }) => regexPossibleMatch.test(name));
    // call the function to display the matches and highlight the matching value
    displayMatches(possibleMatch, matches);
  }
}


// variable to record the id of the timeout set up to avoid running the function too frequently
let timeoutID = 0;

// on input, clear the existing timeout and set the sprite to frame the sprite fishing
function handleInput(e) {
  clearTimeout(timeoutID);
  svg.setAttribute('viewBox', '21 0 21 31');
  section.innerHTML = '';

  // after an arbitrary delay extract the value and pass it as the argument for the matching function
  timeoutID = setTimeout(() => {
    clearTimeout(timeoutID);
    const { value } = e.target;

    if (value) {
      handleValue(value);
    } else {
      section.innerHTML = '';
    }
    handleValue(value);
  }, 1000);
}

// prevent the default submit event and call the handleInput function when the input event is registered
form.addEventListener('input', handleInput);
form.addEventListener('submit', e => e.preventDefault());
