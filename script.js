// ══════════════════════════════════════════════
//  CAMERA DATABASE
// ══════════════════════════════════════════════
const CAMERAS = [
  // ── SONY FULL FRAME ──
  {
    id:'sony-a7iii', brand:'Sony', model:'Alpha A7 III', year:2018,
    sensor:'24.2MP FF BSI CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/30p 8-bit', videoScore:3,
    ibis:'5-stop', ibisStops:5, afPoints:'693 PDAF (93% coverage)', afSystem:'Phase Detect + Contrast',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'2.36M dot OLED 0.78×', evfScore:2, screen:'3.0″ Tilt Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'710 shots (CIPA)', batteryScore:5, batteryRating:710,
    cards:'2× UHS-II SD', weight:'650g', weightVal:650,
    mount:'Sony E-Mount', price:'~$2,000', priceVal:2000, launch:2018,
    niche:'Enthusiast All-Rounder',
    nicheDesc:'The camera that redefined what enthusiast full-frame could be. Outstanding battery life, reliable Eye AF, and excellent dynamic range in a compact body. Still a strong buy in 2026 at its reduced price.',
    nicheTags:['Wedding','Portrait','Travel','Low Light'],
    tagline:'The benchmark-setter that redefined enthusiast full-frame.'
  },
  {
    id:'sony-a7iv', brand:'Sony', model:'Alpha A7 IV', year:2021,
    sensor:'33MP FF BSI CMOS', mp:33, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/60p 10-bit (crop) / 4K/30p FF', videoScore:4,
    ibis:'5.5-stop', ibisStops:5.5, afPoints:'759 PDAF (94% coverage)', afSystem:'Phase Detect + AI',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'610 shots (CIPA)', batteryScore:4, batteryRating:610,
    cards:'1× CFexpress Type A + 1× SD', weight:'659g', weightVal:659,
    mount:'Sony E-Mount', price:'~$2,500', priceVal:2500, launch:2021,
    niche:'Hybrid Workhorse',
    nicheDesc:'The ultimate camera for creators who do both stills and video. 33MP with oversampled 4K, 10-bit video, and reliable Eye AF. The most-sold full-frame mirrorless of 2022–2024.',
    nicheTags:['Hybrid','Commercial','Landscape','Video'],
    tagline:'Where serious photography meets serious video.'
  },
  {
    id:'sony-a7v', brand:'Sony', model:'Alpha A7 V', year:2025,
    sensor:'33MP FF Partially Stacked Exmor RS', mp:33, sensorSize:'Full-Frame', sensorType:'Partially Stacked BSI',
    burst:30, burstType:'e-shutter blackout-free', video:'4K/60p 10-bit FF (7K oversampled)', videoScore:5,
    ibis:'7.5-stop', ibisStops:7.5, afPoints:'759 PDAF (94% coverage) + AI Unit', afSystem:'AI Phase Detect',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'9.44M dot OLED 240fps', evfScore:5, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'~500 shots (CIPA)', batteryScore:3, batteryRating:500,
    cards:'1× CFexpress Type A + 1× SD', weight:'~660g', weightVal:660,
    mount:'Sony E-Mount', price:'~$2,899', priceVal:2899, launch:2025,
    niche:'Modern All-Rounder',
    nicheDesc:'The best all-around camera under $3,000 in 2026. Partially stacked sensor fixes rolling shutter, 30fps burst, 16-stop dynamic range, class-leading battery, and AI autofocus borrowed from the A1 II.',
    nicheTags:['All-Around','Sports','Wildlife','Hybrid'],
    tagline:'The Goldilocks full-frame — just right in every dimension.'
  },
  {
    id:'sony-a7riii', brand:'Sony', model:'Alpha A7R III', year:2017,
    sensor:'42.4MP FF BSI CMOS', mp:42.4, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/30p 8-bit', videoScore:2,
    ibis:'5.5-stop', ibisStops:5.5, afPoints:'399 PDAF', afSystem:'Phase Detect',
    isoRange:'100–32,000 (exp. 50–102,400)', isoMax:102400,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Tilt Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'650 shots (CIPA)', batteryScore:4, batteryRating:650,
    cards:'2× UHS-II SD', weight:'657g', weightVal:657,
    mount:'Sony E-Mount', price:'~$2,500 (discounted)', priceVal:2500, launch:2017,
    niche:'High-Res Landscape',
    nicheDesc:'42MP with class-leading IBIS for a camera of its era. Excellent for landscapes and detail work. Now discounted significantly, making it a superb value entry into high-resolution photography.',
    nicheTags:['Landscape','Architecture','Studio','Detail'],
    tagline:'42 megapixels of discipline — a landscape photographer\'s tool.'
  },
  {
    id:'sony-a7riv', brand:'Sony', model:'Alpha A7R IV', year:2019,
    sensor:'61MP FF BSI CMOS', mp:61, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/30p 8-bit', videoScore:2,
    ibis:'5.5-stop', ibisStops:5.5, afPoints:'567 PDAF (74% coverage)', afSystem:'Phase Detect + AI',
    isoRange:'100–32,000 (exp. 50–102,400)', isoMax:102400,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.0″ Tilt Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'670 shots (CIPA)', batteryScore:4, batteryRating:670,
    cards:'2× UHS-II SD', weight:'665g', weightVal:665,
    mount:'Sony E-Mount', price:'~$2,500 (discounted)', priceVal:2500, launch:2019,
    niche:'Resolution King (Entry)',
    nicheDesc:'61MP full-frame in a compact Sony body. The choice for photographers needing maximum detail for commercial work, large prints, or heavy cropping. Slower AF than newer models.',
    nicheTags:['Commercial','Large Print','Detail','Studio'],
    tagline:'61 megapixels of unrelenting resolution.'
  },
  {
    id:'sony-a7rv', brand:'Sony', model:'Alpha A7R V', year:2022,
    sensor:'61MP FF BSI CMOS', mp:61, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/60p 10-bit', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'693 PDAF (94% coverage) + AI', afSystem:'AI Phase Detect',
    isoRange:'100–32,000 (exp. 50–102,400)', isoMax:102400,
    evf:'9.44M dot OLED (sharpest on market)', evfScore:5, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'530 shots (CIPA)', batteryScore:3, batteryRating:530,
    cards:'1× CFexpress Type A + 1× SD', weight:'723g', weightVal:723,
    mount:'Sony E-Mount', price:'~$3,900', priceVal:3900, launch:2022,
    niche:'Maximum Resolution Full-Frame',
    nicheDesc:'The highest-megapixel full-frame interchangeable-lens camera you can buy. 61MP with modern AI autofocus, 8-stop IBIS, and the sharpest EVF on any camera. The landscape and studio photographer\'s dream.',
    nicheTags:['Landscape','Commercial','Fine Art','Studio','Portraiture'],
    tagline:'When 50 megapixels simply isn\'t enough.'
  },
  {
    id:'sony-a7siii', brand:'Sony', model:'Alpha A7S III', year:2020,
    sensor:'12.1MP FF BSI CMOS', mp:12.1, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/120p 10-bit 4:2:2 (all internal)', videoScore:5,
    ibis:'5.5-stop', ibisStops:5.5, afPoints:'759 PDAF (94% coverage)', afSystem:'Phase Detect + AI',
    isoRange:'80–102,400 (exp. 40–409,600)', isoMax:409600,
    evf:'9.44M dot OLED 120fps', evfScore:5, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'600 shots (CIPA)', batteryScore:4, batteryRating:600,
    cards:'2× CFexpress Type A', weight:'699g', weightVal:699,
    mount:'Sony E-Mount', price:'~$3,500', priceVal:3500, launch:2020,
    niche:'Low Light & Video Champion',
    nicheDesc:'Sacrifices resolution for the world\'s best low-light performance and 4K/120p video. ISO 409,600 expanded. The definitive camera for videographers, event shooters, and astrophotographers.',
    nicheTags:['Video','Low Light','Event','Astro','Filmmaking'],
    tagline:'See in the dark. The low-light absolute champion.'
  },
  {
    id:'sony-a9', brand:'Sony', model:'Alpha A9', year:2017,
    sensor:'24.2MP FF Stacked CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'Stacked CMOS',
    burst:20, burstType:'e-shutter blackout-free', video:'4K/30p 8-bit', videoScore:2,
    ibis:'5-stop', ibisStops:5, afPoints:'693 PDAF (93% coverage)', afSystem:'Phase Detect',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED 120fps', evfScore:3, screen:'3.0″ Tilt Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'650 shots (CIPA)', batteryScore:4, batteryRating:650,
    cards:'2× UHS-II SD', weight:'673g', weightVal:673,
    mount:'Sony E-Mount', price:'~$2,000 (discounted)', priceVal:2000, launch:2017,
    niche:'Sport & Action Pioneer',
    nicheDesc:'The first mirrorless camera to challenge professional DSLRs for sports photography. 20fps blackout-free shooting. Groundbreaking in 2017, now significantly discounted.',
    nicheTags:['Sports','Action','Wildlife','Photojournalism'],
    tagline:'The camera that proved mirrorless could replace sports DSLRs.'
  },
  {
    id:'sony-a9ii', brand:'Sony', model:'Alpha A9 II', year:2019,
    sensor:'24.2MP FF Stacked CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'Stacked CMOS',
    burst:20, burstType:'e-shutter blackout-free', video:'4K/30p 8-bit', videoScore:2,
    ibis:'5.5-stop', ibisStops:5.5, afPoints:'693 PDAF (93% coverage)', afSystem:'Phase Detect + AI',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED 120fps', evfScore:3, screen:'3.0″ Tilt Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'690 shots (CIPA)', batteryScore:4, batteryRating:690,
    cards:'2× UHS-II SD', weight:'678g', weightVal:678,
    mount:'Sony E-Mount', price:'~$3,500', priceVal:3500, launch:2019,
    niche:'Professional Sports',
    nicheDesc:'Improved on the A9 with better connectivity, Ethernet, and AI autofocus. The professional sports photographer\'s tool before the A1 arrived. 20fps blackout-free with excellent tracking.',
    nicheTags:['Sports','Photojournalism','Olympics','Action'],
    tagline:'20fps, zero blackout — built for the decisive moment.'
  },
  {
    id:'sony-a9iii', brand:'Sony', model:'Alpha A9 III', year:2024,
    sensor:'24.2MP FF Global Shutter CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'Global Shutter',
    burst:120, burstType:'global shutter — zero rolling shutter', video:'4K/120p 10-bit 4:2:2', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'759 PDAF (95% coverage)', afSystem:'AI Phase Detect',
    isoRange:'250–25,600 (exp. 125–51,200)', isoMax:51200,
    evf:'9.44M dot OLED 240fps', evfScore:5, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'530 shots (CIPA)', batteryScore:3, batteryRating:530,
    cards:'2× CFexpress Type A', weight:'703g', weightVal:703,
    mount:'Sony E-Mount', price:'~$6,000', priceVal:6000, launch:2024,
    niche:'Speed Absolute Maximum',
    nicheDesc:'World\'s first full-frame camera with a global shutter — completely eliminates rolling shutter distortion. 120fps burst. Flash sync at any speed. For sports, motorsport, and anything requiring zero distortion.',
    nicheTags:['Sports','Motorsport','120fps','Zero Rolling Shutter'],
    tagline:'120fps. Zero rolling shutter. The world\'s fastest full-frame.'
  },
  {
    id:'sony-a1', brand:'Sony', model:'Alpha 1', year:2021,
    sensor:'50.1MP FF Stacked BSI Exmor RS', mp:50.1, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:30, burstType:'e-shutter blackout-free', video:'8K/30p + 4K/120p 10-bit 4:2:2', videoScore:5,
    ibis:'5.5-stop', ibisStops:5.5, afPoints:'759 PDAF (92% coverage)', afSystem:'Phase Detect + AI',
    isoRange:'100–32,000 (exp. 50–102,400)', isoMax:102400,
    evf:'9.44M dot OLED 240fps', evfScore:5, screen:'3.0″ Tilt Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'430 shots (CIPA)', batteryScore:2, batteryRating:430,
    cards:'2× CFexpress Type A', weight:'737g', weightVal:737,
    mount:'Sony E-Mount', price:'~$5,000 (discounted)', priceVal:5000, launch:2021,
    niche:'First Do-It-All Flagship',
    nicheDesc:'The original game-changer: 50MP + 30fps + 8K. Proved that you no longer had to choose between resolution and speed. Now discounted with the A1 II available.',
    nicheTags:['All-Around','Flagship','Studio','Sports','8K'],
    tagline:'The original do-everything flagship that changed everything.'
  },
  {
    id:'sony-a1ii', brand:'Sony', model:'Alpha 1 II', year:2024,
    sensor:'50.1MP FF Stacked BSI Exmor RS', mp:50.1, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:30, burstType:'e-shutter blackout-free + pre-capture', video:'8K/30p + 4K/120p 10-bit 4:2:2', videoScore:5,
    ibis:'8.5-stop', ibisStops:8.5, afPoints:'759 PDAF (92% coverage) + AI Unit 120/sec', afSystem:'AI Phase Detect',
    isoRange:'50–102,400 (exp. 50–204,800)', isoMax:204800,
    evf:'9.44M dot OLED 240fps', evfScore:5, screen:'3.0″ Vari-Angle 4-axis Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'420 shots (CIPA)', batteryScore:2, batteryRating:420,
    cards:'2× CFexpress Type A', weight:'743g', weightVal:743,
    mount:'Sony E-Mount', price:'~$6,500', priceVal:6500, launch:2024,
    niche:'Ultimate All-Around',
    nicheDesc:'The best overall mirrorless camera on the planet. 50MP + 30fps + 8K + 8.5-stop IBIS + AI autofocus. No camera from any brand beats it across all genres simultaneously. The definitive professional tool.',
    nicheTags:['Everything','Sports','Landscape','Portrait','Wildlife','Wedding','8K','Flagship'],
    tagline:'The single best camera ever made for all-around photography.'
  },
  // ── SONY APS-C ──
  {
    id:'sony-a6400', brand:'Sony', model:'Alpha A6400', year:2019,
    sensor:'24.2MP APS-C BSI CMOS', mp:24.2, sensorSize:'APS-C', sensorType:'BSI CMOS',
    burst:11, burstType:'e-shutter', video:'4K/30p 8-bit (oversampled)', videoScore:3,
    ibis:'None', ibisStops:0, afPoints:'425 PDAF (84% coverage)', afSystem:'Phase Detect + Eye AF',
    isoRange:'100–32,000 (exp. 100–102,400)', isoMax:102400,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Flip-Up Touchscreen',
    weather:'None', weatherScore:0,
    battery:'410 shots (CIPA)', batteryScore:2, batteryRating:410,
    cards:'1× UHS-I SD', weight:'403g', weightVal:403,
    mount:'Sony E-Mount', price:'~$900', priceVal:900, launch:2019,
    niche:'Budget AF Powerhouse',
    nicheDesc:'Famous for its Real-Time Tracking AF that punched far above its price. Became the go-to recommendation for creators and YouTubers needing reliable face/eye tracking on a budget.',
    nicheTags:['Content Creator','Vlogging','Budget','AF'],
    tagline:'Flagship-level autofocus at an entry-level price.'
  },
  {
    id:'sony-a6600', brand:'Sony', model:'Alpha A6600', year:2019,
    sensor:'24.2MP APS-C BSI CMOS', mp:24.2, sensorSize:'APS-C', sensorType:'BSI CMOS',
    burst:11, burstType:'e-shutter', video:'4K/30p 8-bit', videoScore:3,
    ibis:'5-stop', ibisStops:5, afPoints:'425 PDAF (84% coverage)', afSystem:'Phase Detect + Eye AF',
    isoRange:'100–32,000 (exp. 100–102,400)', isoMax:102400,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Flip-Up Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'720 shots (CIPA)', batteryScore:5, batteryRating:720,
    cards:'1× UHS-II SD', weight:'503g', weightVal:503,
    mount:'Sony E-Mount', price:'~$1,400', priceVal:1400, launch:2019,
    niche:'APS-C Best-in-Class (Pre-A6700)',
    nicheDesc:'The best APS-C Sony camera before the A6700 arrived. Exceptional battery life (720 shots), IBIS, weather sealing, and solid Eye AF. Great for travel and hybrid shooting.',
    nicheTags:['Travel','Hybrid','IBIS','Battery Life'],
    tagline:'The APS-C veteran: IBIS, weather sealing, and marathon battery.'
  },
  {
    id:'sony-a6700', brand:'Sony', model:'Alpha A6700', year:2023,
    sensor:'26MP APS-C BSI CMOS', mp:26, sensorSize:'APS-C', sensorType:'BSI CMOS',
    burst:11, burstType:'e-shutter + pre-capture', video:'4K/120p 10-bit 4:2:2 (crop) / 4K/60p FF', videoScore:5,
    ibis:'5-stop', ibisStops:5, afPoints:'759 PDAF (93% coverage) + AI', afSystem:'AI Phase Detect',
    isoRange:'100–32,000 (exp. 100–102,400)', isoMax:102400,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Dust & Moisture Resistant', weatherScore:2,
    battery:'570 shots (CIPA)', batteryScore:3, batteryRating:570,
    cards:'1× CFexpress Type A + 1× SD', weight:'493g', weightVal:493,
    mount:'Sony E-Mount', price:'~$1,400', priceVal:1400, launch:2023,
    niche:'Best APS-C Mirrorless',
    nicheDesc:'The most capable APS-C camera from any manufacturer. Borrows the A1\'s AI autofocus, shoots 4K/120p, has IBIS, and costs $1,400. More capable than many full-frame cameras from just 3 years prior.',
    nicheTags:['Best APS-C','Travel','Wildlife','Video','Sports'],
    tagline:'Full-frame performance squeezed into an APS-C body.'
  },
  {
    id:'sony-zve10', brand:'Sony', model:'ZV-E10', year:2021,
    sensor:'24.2MP APS-C CMOS', mp:24.2, sensorSize:'APS-C', sensorType:'CMOS',
    burst:11, burstType:'e-shutter', video:'4K/30p 8-bit', videoScore:3,
    ibis:'None', ibisStops:0, afPoints:'425 PDAF', afSystem:'Phase Detect + Eye AF',
    isoRange:'100–32,000 (exp. 100–51,200)', isoMax:51200,
    evf:'None', evfScore:0, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'None', weatherScore:0,
    battery:'440 shots (CIPA)', batteryScore:2, batteryRating:440,
    cards:'1× UHS-I SD', weight:'343g', weightVal:343,
    mount:'Sony E-Mount', price:'~$750', priceVal:750, launch:2021,
    niche:'Beginner Content Creator',
    nicheDesc:'Designed for YouTube and social media creators. Compact, lightweight, excellent autofocus. No EVF or IBIS but those rarely matter for video creation. Perfect gateway into the Sony ecosystem.',
    nicheTags:['YouTube','Content Creator','Vlogging','Beginner'],
    tagline:'The perfect camera for creators just getting started.'
  },
  {
    id:'sony-zve10ii', brand:'Sony', model:'ZV-E10 II', year:2024,
    sensor:'26MP APS-C BSI CMOS', mp:26, sensorSize:'APS-C', sensorType:'BSI CMOS',
    burst:11, burstType:'e-shutter', video:'4K/60p 10-bit (FF) + S-Log3', videoScore:4,
    ibis:'None', ibisStops:0, afPoints:'759 PDAF + AI', afSystem:'AI Phase Detect',
    isoRange:'100–32,000 (exp. 100–51,200)', isoMax:51200,
    evf:'None', evfScore:0, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'None', weatherScore:0,
    battery:'~440 shots', batteryScore:2, batteryRating:440,
    cards:'1× SD', weight:'~290g', weightVal:290,
    mount:'Sony E-Mount', price:'~$600', priceVal:600, launch:2024,
    niche:'Modern Budget Creator',
    nicheDesc:'Updated ZV-E10 with A1-level AI autofocus, 4K/60p, and 10-bit S-Log3 at an unbeatable $600. The best value camera in Sony\'s entire lineup for video-focused beginners.',
    nicheTags:['Budget','YouTube','4K 60p','10-bit','Beginner'],
    tagline:'$600 and you get AI autofocus and 10-bit 4K. Remarkable.'
  },
  // ── CANON ──
  {
    id:'canon-eosr', brand:'Canon', model:'EOS R', year:2018,
    sensor:'30.3MP FF CMOS', mp:30.3, sensorSize:'Full-Frame', sensorType:'CMOS',
    burst:8, burstType:'mechanical', video:'4K/30p 8-bit (1.7× crop)', videoScore:1,
    ibis:'None (lens IS only)', ibisStops:0, afPoints:'5,655 Dual Pixel zones', afSystem:'Dual Pixel CMOS AF',
    isoRange:'100–40,000 (exp. 50–102,400)', isoMax:102400,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.15″ Vari-Angle Touchscreen',
    weather:'Limited Sealing', weatherScore:1,
    battery:'~350 shots (CIPA)', batteryScore:1, batteryRating:350,
    cards:'1× CF + 1× SD', weight:'660g', weightVal:660,
    mount:'Canon RF Mount', price:'~$1,500 (discounted)', priceVal:1500, launch:2018,
    niche:'Canon RF Pioneer',
    nicheDesc:'The first Canon RF camera. Historically significant as the launch of the RF system but technically surpassed by everything that followed. Good image quality for its era.',
    nicheTags:['History','RF Pioneer','Portrait','Studio'],
    tagline:'Where the Canon RF era began.'
  },
  {
    id:'canon-eosrp', brand:'Canon', model:'EOS RP', year:2019,
    sensor:'26.2MP FF CMOS', mp:26.2, sensorSize:'Full-Frame', sensorType:'CMOS',
    burst:5, burstType:'mechanical', video:'4K/24p 8-bit (1.6× crop)', videoScore:1,
    ibis:'None', ibisStops:0, afPoints:'4,779 Dual Pixel zones', afSystem:'Dual Pixel CMOS AF',
    isoRange:'100–40,000 (exp. 50–102,400)', isoMax:102400,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Limited Sealing', weatherScore:1,
    battery:'~250 shots (CIPA)', batteryScore:1, batteryRating:250,
    cards:'1× SD', weight:'485g', weightVal:485,
    mount:'Canon RF Mount', price:'~$950 (discounted)', priceVal:950, launch:2019,
    niche:'Budget RF Entry',
    nicheDesc:'Canon\'s most affordable full-frame mirrorless. Ultralight and compact. Great for casual photographers entering full-frame. The poor video specs and lack of IBIS limit its versatility.',
    nicheTags:['Budget','Entry Level','Full-Frame','Compact'],
    tagline:'Full-frame photography made accessible.'
  },
  {
    id:'canon-eosr5', brand:'Canon', model:'EOS R5', year:2020,
    sensor:'45MP FF BSI CMOS', mp:45, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:20, burstType:'e-shutter', video:'8K/30p RAW + 4K/120p 10-bit', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'5,940 Dual Pixel II zones', afSystem:'Dual Pixel CMOS AF II',
    isoRange:'100–51,200 (exp. 50–102,400)', isoMax:102400,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.15″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'490 shots (CIPA)', batteryScore:3, batteryRating:490,
    cards:'1× CFexpress B + 1× SD', weight:'738g', weightVal:738,
    mount:'Canon RF Mount', price:'~$2,500 (discounted)', priceVal:2500, launch:2020,
    niche:'Canon Hybrid Pioneer',
    nicheDesc:'Launched with the highest-resolution mirrorless sensor Canon had made, 8K RAW video, and 8-stop IBIS. A landmark camera that\'s now discounted significantly. The original hybrid powerhouse.',
    nicheTags:['8K','Hybrid','Portrait','Commercial','Landscape'],
    tagline:'45 megapixels, 8K RAW — the Canon that set the bar.'
  },
  {
    id:'canon-eosr5ii', brand:'Canon', model:'EOS R5 Mark II', year:2024,
    sensor:'45MP FF Stacked BSI CMOS', mp:45, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:30, burstType:'e-shutter blackout-free', video:'8K/60p RAW + 4K/120p 10-bit', videoScore:5,
    ibis:'8.5-stop', ibisStops:8.5, afPoints:'Dual Pixel Intelligent AF (full coverage)', afSystem:'Dual Pixel Intelligent AF + Action Priority',
    isoRange:'100–51,200 (exp. 50–102,400)', isoMax:102400,
    evf:'5.76M dot OLED 120fps', evfScore:4, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~320 shots (CIPA)', batteryScore:1, batteryRating:320,
    cards:'1× CFexpress B + 1× SD', weight:'746g', weightVal:746,
    mount:'Canon RF Mount', price:'~$4,300', priceVal:4300, launch:2024,
    niche:'Best Canon All-Around',
    nicheDesc:'The best all-around Canon camera ever made. 45MP stacked sensor, 30fps, 8K/60p RAW, Eye Control AF, Action Priority, and the same AI autofocus as the R1. Better for most uses than the Canon R1.',
    nicheTags:['All-Around','Best Canon','Commercial','8K','Sports','Wildlife'],
    tagline:'Canon\'s finest all-around camera — better than even the R1 for most users.'
  },
  {
    id:'canon-eosr6', brand:'Canon', model:'EOS R6', year:2020,
    sensor:'20.1MP FF BSI CMOS', mp:20.1, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:20, burstType:'e-shutter', video:'4K/60p 10-bit (full-frame)', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'6,072 Dual Pixel II zones', afSystem:'Dual Pixel CMOS AF II',
    isoRange:'100–102,400 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'360 shots (CIPA)', batteryScore:2, batteryRating:360,
    cards:'2× UHS-II SD', weight:'680g', weightVal:680,
    mount:'Canon RF Mount', price:'~$1,800 (discounted)', priceVal:1800, launch:2020,
    niche:'Low-Light & Video Hybrid',
    nicheDesc:'Outstanding low-light performance from its large 20MP pixels. 8-stop IBIS and full-frame 4K/60p 10-bit at launch. The wedding and event photographer\'s Canon before the R6 II.',
    nicheTags:['Wedding','Event','Low Light','Video','IBIS'],
    tagline:'Big pixels, big IBIS — the low-light specialist.'
  },
  {
    id:'canon-eosr6ii', brand:'Canon', model:'EOS R6 Mark II', year:2022,
    sensor:'24.2MP FF BSI CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:40, burstType:'e-shutter', video:'4K/60p 10-bit FF (6K oversampled)', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'Dual Pixel CMOS AF II (full coverage)', afSystem:'Dual Pixel CMOS AF II + AI',
    isoRange:'100–102,400 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'450 shots (CIPA)', batteryScore:2, batteryRating:450,
    cards:'2× UHS-II SD', weight:'670g', weightVal:670,
    mount:'Canon RF Mount', price:'~$2,500', priceVal:2500, launch:2022,
    niche:'Speed + Hybrid Workhorse',
    nicheDesc:'40fps burst at $2,500. Outstanding AI autofocus, full-frame 4K/60p 10-bit, 8-stop IBIS. The most popular Canon camera among working professionals for events, weddings, and news.',
    nicheTags:['Wedding','Sports','Event','40fps','Hybrid'],
    tagline:'40 frames per second and still under $2,500.'
  },
  {
    id:'canon-eosr6iii', brand:'Canon', model:'EOS R6 Mark III', year:2025,
    sensor:'32.5MP FF BSI CMOS', mp:32.5, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:40, burstType:'e-shutter + pre-capture', video:'7K oversampled 4K + C-Log 2 + Open Gate', videoScore:5,
    ibis:'6.5-stop', ibisStops:6.5, afPoints:'Dual Pixel CMOS AF II + AI (full coverage)', afSystem:'AI Phase Detect',
    isoRange:'100–102,400 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~400 shots', batteryScore:2, batteryRating:400,
    cards:'2× UHS-II SD', weight:'~670g', weightVal:670,
    mount:'Canon RF Mount', price:'~$2,900', priceVal:2900, launch:2025,
    niche:'Cinema-Hybrid All-Rounder',
    nicheDesc:'Brings Cinema EOS C-Log 2 and open gate recording into a mirrorless body. 40fps, 32.5MP, 7K oversampled 4K. The best Canon camera for hybrid photo/cinema work at a non-flagship price.',
    nicheTags:['Cinema','Hybrid','C-Log 2','Open Gate','Commercial'],
    tagline:'Cinema EOS DNA in a mirrorless enthusiast body.'
  },
  {
    id:'canon-eosr3', brand:'Canon', model:'EOS R3', year:2021,
    sensor:'24.1MP FF BSI Stacked CMOS', mp:24.1, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:30, burstType:'e-shutter blackout-free', video:'6K/60p RAW', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'Dual Pixel II + Eye Control AF', afSystem:'Dual Pixel CMOS AF II + Eye Gaze',
    isoRange:'100–102,400 (exp. 50–204,800)', isoMax:204800,
    evf:'5.76M dot OLED 120fps', evfScore:4, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Professional Sealed', weatherScore:4,
    battery:'760 shots (CIPA) — integrated grip', batteryScore:5, batteryRating:760,
    cards:'2× CFexpress B', weight:'1,015g', weightVal:1015,
    mount:'Canon RF Mount', price:'~$5,500', priceVal:5500, launch:2021,
    niche:'Canon Sports Specialist',
    nicheDesc:'Canon\'s sports and action specialist before the R1. Eye Control AF is genuinely magical — look at your subject to place the focus point. Outstanding battery life with integrated grip. 30fps blackout-free.',
    nicheTags:['Sports','Press','Eye Control AF','Action','Wildlife'],
    tagline:'Look at your subject. It\'s in focus. Eye Control AF magic.'
  },
  {
    id:'canon-eosr1', brand:'Canon', model:'EOS R1', year:2024,
    sensor:'24.2MP FF BSI Stacked CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:40, burstType:'e-shutter blackout-free + pre-capture', video:'6K/60p 12-bit RAW + C-Log 2', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'4,897 cross-type Dual Pixel Intelligent + Eye Control + Action Priority', afSystem:'Dual Pixel Intelligent AF',
    isoRange:'100–102,400 (exp. 50–409,600)', isoMax:409600,
    evf:'9.44M dot OLED 0.9× magnification', evfScore:5, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Professional 1-Series Sealed', weatherScore:5,
    battery:'~500 shots', batteryScore:3, batteryRating:500,
    cards:'2× CFexpress B', weight:'1,195g (with grip)', weightVal:1195,
    mount:'Canon RF Mount', price:'~$6,300', priceVal:6300, launch:2024,
    niche:'Flagship Sports & Press',
    nicheDesc:'Canon\'s ultimate flagship and first 1-series mirrorless. 40fps, 4,897-point cross-type AF, Eye Control + Action Priority AI. Absolute best-in-class for sports, press, and action photography. Camera of the Year 2025 (Japan).',
    nicheTags:['Flagship','Sports','Press','40fps','Action Priority','Eye Control'],
    tagline:'Canon\'s 1-series crown jewel finally goes mirrorless.'
  },
  {
    id:'canon-eosr7', brand:'Canon', model:'EOS R7', year:2022,
    sensor:'32.5MP APS-C BSI CMOS', mp:32.5, sensorSize:'APS-C', sensorType:'BSI CMOS',
    burst:30, burstType:'e-shutter', video:'4K/60p 10-bit (oversampled)', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'Dual Pixel CMOS AF II', afSystem:'Dual Pixel CMOS AF II',
    isoRange:'100–32,000 (exp. 100–51,200)', isoMax:51200,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'660 shots (CIPA)', batteryScore:4, batteryRating:660,
    cards:'2× UHS-II SD', weight:'612g', weightVal:612,
    mount:'Canon RF Mount', price:'~$1,500', priceVal:1500, launch:2022,
    niche:'Wildlife Reach Specialist',
    nicheDesc:'APS-C crop gives extra reach for wildlife and birds. 32.5MP + 8-stop IBIS on an APS-C body at $1,500. Exceptional battery and weather sealing make it ideal for field use.',
    nicheTags:['Wildlife','Birds','Sport','Reach','Budget Pro'],
    tagline:'The wildlife photographer\'s affordable reach machine.'
  },
  {
    id:'canon-eosr10', brand:'Canon', model:'EOS R10', year:2022,
    sensor:'24.2MP APS-C CMOS', mp:24.2, sensorSize:'APS-C', sensorType:'CMOS',
    burst:15, burstType:'e-shutter', video:'4K/30p FF (no crop)', videoScore:3,
    ibis:'None', ibisStops:0, afPoints:'Dual Pixel CMOS AF II', afSystem:'Dual Pixel CMOS AF II',
    isoRange:'100–32,000 (exp. 100–51,200)', isoMax:51200,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Limited', weatherScore:1,
    battery:'460 shots (CIPA)', batteryScore:2, batteryRating:460,
    cards:'1× SD', weight:'429g', weightVal:429,
    mount:'Canon RF Mount', price:'~$900', priceVal:900, launch:2022,
    niche:'Best Beginner Canon',
    nicheDesc:'Consistently recommended as the best beginner mirrorless camera. Excellent Dual Pixel AF II, 4K/30p with no crop, lightweight body, and the full RF lens ecosystem to grow into.',
    nicheTags:['Beginner','Best Value Canon','Creator','4K'],
    tagline:'The best camera for anyone starting out in photography.'
  },
  {
    id:'canon-eosr50', brand:'Canon', model:'EOS R50', year:2023,
    sensor:'24.2MP APS-C CMOS', mp:24.2, sensorSize:'APS-C', sensorType:'CMOS',
    burst:15, burstType:'e-shutter', video:'4K/30p FF', videoScore:3,
    ibis:'None', ibisStops:0, afPoints:'Dual Pixel CMOS AF II', afSystem:'Dual Pixel CMOS AF II',
    isoRange:'100–32,000 (exp. 100–51,200)', isoMax:51200,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'None', weatherScore:0,
    battery:'390 shots (CIPA)', batteryScore:1, batteryRating:390,
    cards:'1× SD', weight:'375g', weightVal:375,
    mount:'Canon RF Mount', price:'~$700', priceVal:700, launch:2023,
    niche:'Entry Creator',
    nicheDesc:'Canon\'s most compact and affordable RF mirrorless. Ultralight at 375g. Excellent autofocus and 4K/30p. No IBIS or weather sealing keeps costs down. The ideal first mirrorless camera.',
    nicheTags:['Beginner','Creator','Lightweight','Affordable'],
    tagline:'The lightest, most accessible Canon mirrorless camera.'
  },
  // ── NIKON ──
  {
    id:'nikon-z5', brand:'Nikon', model:'Z5', year:2020,
    sensor:'24.3MP FF BSI CMOS', mp:24.3, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:4.5, burstType:'mechanical', video:'4K/30p 8-bit (1.7× crop)', videoScore:1,
    ibis:'5-stop', ibisStops:5, afPoints:'273 phase-detect', afSystem:'Hybrid AF',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'470 shots (CIPA)', batteryScore:3, batteryRating:470,
    cards:'2× UHS-II SD', weight:'590g', weightVal:590,
    mount:'Nikon Z-Mount', price:'~$1,000 (discounted)', priceVal:1000, launch:2020,
    niche:'Budget Weather-Sealed Full-Frame',
    nicheDesc:'The entry point into Nikon Z full-frame with proper weather sealing. Good image quality, comfortable handling. The slow burst and crop in 4K limit action and video use.',
    nicheTags:['Budget Full-Frame','Travel','Landscape','Weather Sealed'],
    tagline:'Full-frame quality with weather sealing at an accessible price.'
  },
  {
    id:'nikon-z5ii', brand:'Nikon', model:'Z5 II', year:2024,
    sensor:'24.5MP FF BSI CMOS', mp:24.5, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:14, burstType:'e-shutter + pre-capture', video:'4K/60p FF (Expeed 7)', videoScore:4,
    ibis:'5-stop', ibisStops:5, afPoints:'Expeed 7 + 9 subject types', afSystem:'Subject-Detect AF',
    isoRange:'100–64,000 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~470 shots', batteryScore:3, batteryRating:470,
    cards:'2× UHS-II SD', weight:'700g', weightVal:700,
    mount:'Nikon Z-Mount', price:'~$1,700', priceVal:1700, launch:2024,
    niche:'Best Value Full-Frame 2025',
    nicheDesc:'Winner of multiple Camera of the Year 2025 awards. Expeed 7 processor brings Z8-level autofocus to a $1,700 body. Full-frame 4K/60p, pre-capture, and 14fps. Extraordinary value.',
    nicheTags:['Best Value','Award Winner','All-Around','Sports','4K 60p'],
    tagline:'Camera of the Year 2025. The best value full-frame camera ever made.'
  },
  {
    id:'nikon-z6', brand:'Nikon', model:'Z6', year:2018,
    sensor:'24.5MP FF BSI CMOS', mp:24.5, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:12, burstType:'e-shutter', video:'4K/30p 10-bit (via HDMI)', videoScore:3,
    ibis:'5-stop', ibisStops:5, afPoints:'273 phase-detect', afSystem:'Hybrid AF',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'310 shots (CIPA)', batteryScore:1, batteryRating:310,
    cards:'1× XQD', weight:'585g', weightVal:585,
    mount:'Nikon Z-Mount', price:'~$1,000 (discounted)', priceVal:1000, launch:2018,
    niche:'Z System Originator',
    nicheDesc:'Launched the Nikon Z system alongside the Z7. Excellent image quality, comfortable ergonomics, and weather sealing at launch. Now very affordable on the used market.',
    nicheTags:['Z Pioneer','Low Light','Travel','Landscape'],
    tagline:'The camera that launched Nikon into the mirrorless era.'
  },
  {
    id:'nikon-z6ii', brand:'Nikon', model:'Z6 II', year:2020,
    sensor:'24.5MP FF BSI CMOS', mp:24.5, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:14, burstType:'e-shutter', video:'4K/60p 10-bit (via HDMI)', videoScore:3,
    ibis:'5-stop', ibisStops:5, afPoints:'273 phase-detect', afSystem:'Hybrid AF',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'410 shots (CIPA)', batteryScore:2, batteryRating:410,
    cards:'1× XQD + 1× SD', weight:'705g', weightVal:705,
    mount:'Nikon Z-Mount', price:'~$1,500 (discounted)', priceVal:1500, launch:2020,
    niche:'Reliable Hybrid Workhorse',
    nicheDesc:'Improved Z6 with dual Expeed 6 processors, 14fps, and dual card slots. Added 4K/60p over HDMI for external recording. A reliable workhorse that held up for event and wedding photographers.',
    nicheTags:['Wedding','Event','Hybrid','Reliable'],
    tagline:'Double the processors, double the reliability.'
  },
  {
    id:'nikon-z6iii', brand:'Nikon', model:'Z6 III', year:2024,
    sensor:'24.5MP FF Partially Stacked CMOS', mp:24.5, sensorSize:'Full-Frame', sensorType:'Partially Stacked CMOS',
    burst:20, burstType:'e-shutter RAW (up to 120fps JPEG)', video:'6K/60p FF N-RAW internal', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'Expeed 7 phase-detect (9 subject types)', afSystem:'Subject-Detect AF',
    isoRange:'100–64,000 (exp. 50–204,800)', isoMax:204800,
    evf:'5.76M dot OLED (best EVF under $3K)', evfScore:4, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~350 shots', batteryScore:1, batteryRating:350,
    cards:'2× UHS-II SD', weight:'760g', weightVal:760,
    mount:'Nikon Z-Mount', price:'~$2,500', priceVal:2500, launch:2024,
    niche:'Video & Speed Hybrid',
    nicheDesc:'Partially stacked sensor enables 6K/60p N-RAW internally, 20fps RAW, and near-zero rolling shutter. Outstanding 5.76M dot EVF. The best camera for photographers who also need serious video under $3,000.',
    nicheTags:['RAW Video','6K','Sports','Hybrid','N-RAW'],
    tagline:'6K RAW video and 20fps in one enthusiast body.'
  },
  {
    id:'nikon-z7', brand:'Nikon', model:'Z7', year:2018,
    sensor:'45.7MP FF BSI CMOS', mp:45.7, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:9, burstType:'e-shutter', video:'4K/30p 10-bit (via HDMI)', videoScore:2,
    ibis:'5-stop', ibisStops:5, afPoints:'493 phase-detect', afSystem:'Hybrid AF',
    isoRange:'64–25,600 (exp. 32–102,400)', isoMax:102400,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'330 shots (CIPA)', batteryScore:1, batteryRating:330,
    cards:'1× XQD', weight:'585g', weightVal:585,
    mount:'Nikon Z-Mount', price:'~$1,500 (discounted)', priceVal:1500, launch:2018,
    niche:'High-Res Z Pioneer',
    nicheDesc:'45.7MP at launch — the highest-res mirrorless from Nikon at the time. Excellent image quality for landscapes and studio work. Now very affordable on the used market.',
    nicheTags:['Landscape','Studio','High-Res','Z Pioneer'],
    tagline:'Nikon\'s first foray into high-resolution mirrorless.'
  },
  {
    id:'nikon-z7ii', brand:'Nikon', model:'Z7 II', year:2020,
    sensor:'45.7MP FF BSI CMOS', mp:45.7, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:10, burstType:'e-shutter', video:'4K/60p 10-bit (via HDMI)', videoScore:3,
    ibis:'5-stop', ibisStops:5, afPoints:'493 phase-detect', afSystem:'Hybrid AF',
    isoRange:'64–25,600 (exp. 32–102,400)', isoMax:102400,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'420 shots (CIPA)', batteryScore:2, batteryRating:420,
    cards:'1× XQD + 1× SD', weight:'705g', weightVal:705,
    mount:'Nikon Z-Mount', price:'~$2,500', priceVal:2500, launch:2020,
    niche:'High-Res Dual Card',
    nicheDesc:'Updated Z7 with dual processors, dual card slots, and improved AF. 45.7MP with excellent image quality. Strong choice for landscape and studio photographers in the Nikon ecosystem.',
    nicheTags:['Landscape','Studio','Commercial','High-Res'],
    tagline:'45.7 megapixels refined and made more reliable.'
  },
  {
    id:'nikon-z8', brand:'Nikon', model:'Z8', year:2023,
    sensor:'45.7MP FF Stacked BSI CMOS', mp:45.7, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:20, burstType:'e-shutter RAW blackout-free', video:'8K/30p + 4K/120p N-RAW internal', videoScore:5,
    ibis:'6-stop', ibisStops:6, afPoints:'Expeed 7 phase-detect (9 subject types)', afSystem:'Subject-Detect AF',
    isoRange:'64–25,600 (exp. 32–102,400)', isoMax:102400,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'340 shots (CIPA)', batteryScore:1, batteryRating:340,
    cards:'2× CFexpress B', weight:'910g', weightVal:910,
    mount:'Nikon Z-Mount', price:'~$4,000', priceVal:4000, launch:2023,
    niche:'Best Value Flagship',
    nicheDesc:'The Z9\'s hardware without the integrated grip — giving the same 45.7MP stacked sensor, 20fps RAW, 8K/30p N-RAW, and Expeed 7 autofocus in a more portable body. Widely regarded as the best value flagship ever made.',
    nicheTags:['Best Value Flagship','8K','20fps','Landscape','Sports','Wildlife'],
    tagline:'Z9 specs. Smaller body. Half the price. The smartest buy in cameras.'
  },
  {
    id:'nikon-z9', brand:'Nikon', model:'Z9', year:2021,
    sensor:'45.7MP FF Stacked BSI CMOS', mp:45.7, sensorSize:'Full-Frame', sensorType:'Stacked BSI CMOS',
    burst:20, burstType:'e-shutter RAW (no mechanical shutter)', video:'8K/30p + 4K/120p N-RAW', videoScore:5,
    ibis:'6-stop', ibisStops:6, afPoints:'Expeed 7 phase-detect (9 subject types)', afSystem:'Subject-Detect AF',
    isoRange:'64–25,600 (exp. 32–102,400)', isoMax:102400,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Professional Sealed', weatherScore:4,
    battery:'740 shots (CIPA) — integrated grip', batteryScore:5, batteryRating:740,
    cards:'2× CFexpress B', weight:'1,340g', weightVal:1340,
    mount:'Nikon Z-Mount', price:'~$5,500', priceVal:5500, launch:2021,
    niche:'Nikon Flagship',
    nicheDesc:'Nikon\'s flagship professional system camera. No mechanical shutter — fully electronic. 20fps RAW with 1000+ shot buffer, outstanding battery, professional weather sealing. The ultimate Nikon tool.',
    nicheTags:['Flagship','Sports','Wildlife','Press','8K','Unlimited Buffer'],
    tagline:'Nikon\'s ultimate pro flagship — no mechanical shutter, no limits.'
  },
  {
    id:'nikon-zf', brand:'Nikon', model:'Zf', year:2023,
    sensor:'24.5MP FF BSI CMOS', mp:24.5, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:14, burstType:'e-shutter', video:'4K/60p FF', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'Expeed 7 phase-detect (9 subject types)', afSystem:'Subject-Detect AF',
    isoRange:'100–64,000 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~400 shots', batteryScore:2, batteryRating:400,
    cards:'1× CFexpress A + 1× SD', weight:'710g', weightVal:710,
    mount:'Nikon Z-Mount', price:'~$2,000', priceVal:2000, launch:2023,
    niche:'Retro Enthusiast',
    nicheDesc:'Expeed 7 processor with 8-stop IBIS in a stunning retro brass-dial design. The best-looking functional camera on the market. Offers Z6 III autofocus performance with Z System aesthetics.',
    nicheTags:['Retro Design','Enthusiast','Street','Travel','Film Aesthetic'],
    tagline:'The camera that looks like a Leica, shoots like a Z8.'
  },
  {
    id:'nikon-z50ii', brand:'Nikon', model:'Z50 II', year:2024,
    sensor:'20.9MP APS-C BSI CMOS', mp:20.9, sensorSize:'APS-C', sensorType:'BSI CMOS',
    burst:30, burstType:'JPEG e-shutter', video:'4K/60p FF', videoScore:4,
    ibis:'None', ibisStops:0, afPoints:'Expeed 7 + 9 subject types', afSystem:'Subject-Detect AF',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'2.36M dot OLED', evfScore:2, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~300 shots', batteryScore:1, batteryRating:300,
    cards:'1× SD', weight:'~490g', weightVal:490,
    mount:'Nikon Z-Mount', price:'~$900', priceVal:900, launch:2024,
    niche:'Budget APS-C Nikon',
    nicheDesc:'Expeed 7 processor in a $900 APS-C body means flagship-level AF at an entry price. 4K/60p, weather sealing, and 30fps JPEG burst. A compelling option for Nikon beginners.',
    nicheTags:['Beginner','Budget','APS-C','4K 60p'],
    tagline:'Flagship autofocus intelligence in a budget APS-C body.'
  },
  // ── FUJIFILM ──
  {
    id:'fuji-xt3', brand:'Fujifilm', model:'X-T3', year:2018,
    sensor:'26.1MP APS-C X-Trans BSI CMOS', mp:26.1, sensorSize:'APS-C', sensorType:'X-Trans BSI',
    burst:30, burstType:'e-shutter (blackout: 1.25fps)', video:'4K/60p 10-bit 4:2:0 internal', videoScore:4,
    ibis:'None', ibisStops:0, afPoints:'425 phase-detect', afSystem:'Phase Detect + AI',
    isoRange:'160–12,800 (exp. 80–51,200)', isoMax:51200,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ 3-Way Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'390 shots (CIPA)', batteryScore:2, batteryRating:390,
    cards:'2× UHS-II SD', weight:'539g', weightVal:539,
    mount:'Fujifilm X-Mount', price:'~$800 (discounted)', priceVal:800, launch:2018,
    niche:'Video & Stills Pioneer',
    nicheDesc:'Revolutionary for its time with 4K/60p 10-bit at $1,500. Classic Fujifilm dial controls, excellent film simulations, and outstanding image quality. Still excellent value in 2026.',
    nicheTags:['Video','Film Simulation','Street','Travel'],
    tagline:'4K/60p 10-bit for $800. Fujifilm at its most generous.'
  },
  {
    id:'fuji-xt4', brand:'Fujifilm', model:'X-T4', year:2020,
    sensor:'26.1MP APS-C X-Trans BSI CMOS', mp:26.1, sensorSize:'APS-C', sensorType:'X-Trans BSI',
    burst:15, burstType:'e-shutter', video:'4K/60p 10-bit 4:2:2 internal', videoScore:5,
    ibis:'6.5-stop', ibisStops:6.5, afPoints:'425 phase-detect', afSystem:'Phase Detect + AI',
    isoRange:'160–12,800 (exp. 80–51,200)', isoMax:51200,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'500 shots (CIPA)', batteryScore:3, batteryRating:500,
    cards:'2× UHS-II SD', weight:'607g', weightVal:607,
    mount:'Fujifilm X-Mount', price:'~$1,000 (discounted)', priceVal:1000, launch:2020,
    niche:'IBIS-Equipped Hybrid',
    nicheDesc:'First X-T camera with IBIS. Excellent 4K/60p 10-bit, great film simulations, and finally stabilised for handheld video. The definitive version of the X-T formula for hybrid shooters.',
    nicheTags:['Hybrid','IBIS','Film Simulation','Video','Travel'],
    tagline:'IBIS finally joins the X-T family. The hybrid workhorse.'
  },
  {
    id:'fuji-xt5', brand:'Fujifilm', model:'X-T5', year:2022,
    sensor:'40.2MP APS-C X-Trans BSI CMOS', mp:40.2, sensorSize:'APS-C', sensorType:'X-Trans BSI',
    burst:15, burstType:'e-shutter', video:'6.2K/30p (APS-C equivalent)', videoScore:4,
    ibis:'7-stop', ibisStops:7, afPoints:'425 phase-detect', afSystem:'Phase Detect + AI',
    isoRange:'125–12,800 (exp. 64–51,200)', isoMax:51200,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ 3-Way Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'580 shots (CIPA)', batteryScore:4, batteryRating:580,
    cards:'2× UHS-II SD', weight:'557g', weightVal:557,
    mount:'Fujifilm X-Mount', price:'~$1,700', priceVal:1700, launch:2022,
    niche:'High-Res Compact APS-C',
    nicheDesc:'40MP APS-C — more resolution than many full-frame cameras. Classic dial controls, excellent film simulations, compact body. The photo-first X-T5 is a joy to use for stills photographers.',
    nicheTags:['High-Res APS-C','Landscape','Street','Film Simulation','Compact'],
    tagline:'40 megapixels in an APS-C body. Resolution without compromise.'
  },
  {
    id:'fuji-xh2', brand:'Fujifilm', model:'X-H2', year:2022,
    sensor:'40.2MP APS-C X-Trans BSI CMOS', mp:40.2, sensorSize:'APS-C', sensorType:'X-Trans BSI',
    burst:20, burstType:'e-shutter', video:'8K/30p Apple ProRes internal', videoScore:5,
    ibis:'7-stop', ibisStops:7, afPoints:'425 phase-detect', afSystem:'Phase Detect + AI',
    isoRange:'125–12,800 (exp. 64–51,200)', isoMax:51200,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'680 shots (CIPA)', batteryScore:4, batteryRating:680,
    cards:'1× CFexpress B + 1× SD', weight:'660g', weightVal:660,
    mount:'Fujifilm X-Mount', price:'~$2,000', priceVal:2000, launch:2022,
    niche:'8K APS-C Video Beast',
    nicheDesc:'The only APS-C camera offering internal 8K Apple ProRes RAW. 40MP + 8K makes this Fujifilm\'s most capable hybrid. Excellent battery life and EVF resolution rarely seen at this price.',
    nicheTags:['8K','Apple ProRes','Video','High-Res','Hybrid'],
    tagline:'8K Apple ProRes in an APS-C body. Nothing else does this.'
  },
  {
    id:'fuji-xh2s', brand:'Fujifilm', model:'X-H2S', year:2022,
    sensor:'26.1MP APS-C Stacked X-Trans CMOS', mp:26.1, sensorSize:'APS-C', sensorType:'Stacked X-Trans',
    burst:40, burstType:'e-shutter pre-capture', video:'6.2K/30p + 4K/120p 10-bit', videoScore:5,
    ibis:'7-stop', ibisStops:7, afPoints:'425 phase-detect + subject detection', afSystem:'Phase Detect + AI',
    isoRange:'160–12,800 (exp. 80–51,200)', isoMax:51200,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'580 shots (CIPA)', batteryScore:4, batteryRating:580,
    cards:'1× CFexpress B + 1× SD', weight:'660g', weightVal:660,
    mount:'Fujifilm X-Mount', price:'~$2,500', priceVal:2500, launch:2022,
    niche:'Fujifilm Sports & Speed',
    nicheDesc:'Stacked sensor brings 40fps, pre-capture, and near-zero rolling shutter to Fujifilm for the first time. Outstanding for sports and wildlife photographers who want Fujifilm\'s colour science with serious speed.',
    nicheTags:['Sports','Wildlife','40fps','Pre-Capture','Speed'],
    tagline:'Fujifilm\'s speed demon — 40fps with the colour science you love.'
  },
  {
    id:'fuji-x100vi', brand:'Fujifilm', model:'X100VI', year:2024,
    sensor:'40.2MP APS-C X-Trans BSI CMOS', mp:40.2, sensorSize:'APS-C', sensorType:'X-Trans BSI',
    burst:20, burstType:'e-shutter', video:'6.2K/30p', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'425 phase-detect + subject detection', afSystem:'Phase Detect + AI',
    isoRange:'125–12,800 (exp. 64–51,200)', isoMax:51200,
    evf:'3.69M dot OVF/EVF Hybrid', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'450 shots (CIPA)', batteryScore:2, batteryRating:450,
    cards:'1× SD', weight:'521g', weightVal:521,
    mount:'Fixed 35mm f/2 Equivalent (23mm f/2)', price:'~$1,600', priceVal:1600, launch:2024,
    niche:'Iconic Fixed-Lens Street',
    nicheDesc:'The most sought-after compact camera of 2024-2025. 40MP + 8-stop IBIS + AI AF in a fixed-lens retro body. The go-to for street, travel, and documentary photographers who want one perfect camera.',
    nicheTags:['Street','Travel','Documentary','Compact','Fixed Lens','Cult Classic'],
    tagline:'The most coveted camera in the world — one perfect lens, forever.'
  },
  {
    id:'fuji-gfx100sii', brand:'Fujifilm', model:'GFX 100S II', year:2024,
    sensor:'102MP Medium Format Stacked BSI CMOS', mp:102, sensorSize:'Medium Format (44×33mm)', sensorType:'Stacked BSI CMOS',
    burst:8, burstType:'e-shutter', video:'8K/30p 4:2:0 10-bit', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'Phase Detect + AI (full coverage)', afSystem:'AI Phase Detect',
    isoRange:'80–12,800 (exp. 40–102,400)', isoMax:102400,
    evf:'9.44M dot OLED', evfScore:5, screen:'3.2″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~400 shots', batteryScore:2, batteryRating:400,
    cards:'1× CFexpress B + 1× SD', weight:'~1,030g', weightVal:1030,
    mount:'Fujifilm GFX Mount', price:'~$7,500', priceVal:7500, launch:2024,
    niche:'Medium Format Speed & Resolution',
    nicheDesc:'102MP medium format sensor with stacked speed — 8fps and much better autofocus than previous GFX cameras. The most advanced medium format camera from Fujifilm. 16-bit colour depth.',
    nicheTags:['Medium Format','102MP','Commercial','Landscape','Fine Art','16-bit'],
    tagline:'102 megapixels at 8fps. Medium format finally has speed.'
  },
  {
    id:'fuji-gfx100s', brand:'Fujifilm', model:'GFX 100S', year:2021,
    sensor:'102MP Medium Format BSI CMOS', mp:102, sensorSize:'Medium Format (44×33mm)', sensorType:'BSI CMOS',
    burst:5, burstType:'e-shutter', video:'4K/30p', videoScore:2,
    ibis:'6-stop', ibisStops:6, afPoints:'Phase Detect', afSystem:'Phase Detect',
    isoRange:'100–12,800 (exp. 50–102,400)', isoMax:102400,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.2″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'460 shots (CIPA)', batteryScore:3, batteryRating:460,
    cards:'2× UHS-II SD', weight:'900g', weightVal:900,
    mount:'Fujifilm GFX Mount', price:'~$4,000 (discounted)', priceVal:4000, launch:2021,
    niche:'Accessible Medium Format',
    nicheDesc:'Made 102MP medium format accessible for the first time at $5,999 launch. Landscape and studio photographers who previously needed a Hasselblad found an alternative here.',
    nicheTags:['Medium Format','Landscape','Studio','Commercial','102MP'],
    tagline:'102 megapixels made accessible. The medium format democratiser.'
  },
  // ── PANASONIC ──
  {
    id:'pana-s5ii', brand:'Panasonic', model:'Lumix S5 II', year:2023,
    sensor:'24.2MP FF BSI CMOS', mp:24.2, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:9, burstType:'e-shutter', video:'4K/60p 10-bit 4:2:2 (open gate / anamorphic)', videoScore:5,
    ibis:'5-stop', ibisStops:5, afPoints:'Phase Hybrid AF (first for Lumix)', afSystem:'Phase Detect',
    isoRange:'100–51,200 (exp. 50–204,800)', isoMax:204800,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'370 shots (CIPA)', batteryScore:2, batteryRating:370,
    cards:'2× UHS-II SD', weight:'740g', weightVal:740,
    mount:'Leica L-Mount', price:'~$2,000', priceVal:2000, launch:2023,
    niche:'Video-First Full-Frame',
    nicheDesc:'Panasonic\'s most accomplished L-Mount camera. Phase detect AF finally arrived with the S5 II. Open gate, anamorphic modes, V-Log, and 4K/60p 10-bit — the filmmaker\'s full-frame camera.',
    nicheTags:['Video','Open Gate','Filmmaking','Anamorphic','L-Mount'],
    tagline:'The filmmaker\'s full-frame — built for cinema, capable of everything.'
  },
  {
    id:'pana-g9ii', brand:'Panasonic', model:'Lumix G9 II', year:2023,
    sensor:'25.2MP MFT BSI CMOS', mp:25.2, sensorSize:'Micro Four Thirds', sensorType:'BSI CMOS',
    burst:75, burstType:'e-shutter blackout-free', video:'5.8K/30p + 4K/120p 10-bit', videoScore:5,
    ibis:'8-stop', ibisStops:8, afPoints:'Phase Hybrid AF', afSystem:'Phase Detect + AI',
    isoRange:'100–25,600 (exp. 100–25,600)', isoMax:25600,
    evf:'3.68M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'680 shots (CIPA)', batteryScore:4, batteryRating:680,
    cards:'2× UHS-II SD', weight:'658g', weightVal:658,
    mount:'Micro Four Thirds Mount', price:'~$1,700', priceVal:1700, launch:2023,
    niche:'MFT Speed King',
    nicheDesc:'75fps blackout-free burst on a $1,700 Micro Four Thirds body. Phase AF finally brought to Panasonic. Excellent for wildlife — the 2× crop gives extra reach. Outstanding battery life.',
    nicheTags:['Wildlife','75fps','Sports','MFT','Reach','Battery'],
    tagline:'75 frames per second. Micro Four Thirds at its fastest.'
  },
  {
    id:'pana-gh6', brand:'Panasonic', model:'Lumix GH6', year:2022,
    sensor:'25.2MP MFT BSI CMOS', mp:25.2, sensorSize:'Micro Four Thirds', sensorType:'BSI CMOS',
    burst:14, burstType:'e-shutter', video:'5.7K/60p + 4K/120p 10-bit + ProRes', videoScore:5,
    ibis:'7.5-stop', ibisStops:7.5, afPoints:'Phase Hybrid AF', afSystem:'Phase Detect + AI',
    isoRange:'100–25,600 (exp. 100–25,600)', isoMax:25600,
    evf:'3.68M dot OLED', evfScore:3, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'380 shots (CIPA)', batteryScore:2, batteryRating:380,
    cards:'2× UHS-II SD', weight:'739g', weightVal:739,
    mount:'Micro Four Thirds Mount', price:'~$2,000', priceVal:2000, launch:2022,
    niche:'MFT Video Pro',
    nicheDesc:'ProRes RAW HQ internal recording in a $2,000 Micro Four Thirds body. 5.7K/60p, 4K/120p, and active cooling for unlimited recording. The filmmaker\'s MFT camera of choice.',
    nicheTags:['ProRes RAW','Video','MFT','5.7K','Unlimited Recording'],
    tagline:'ProRes RAW internal recording — in a Micro Four Thirds body.'
  },
  // ── OM SYSTEM ──
  {
    id:'om-om1', brand:'OM System', model:'OM-1', year:2022,
    sensor:'20.4MP MFT Stacked BSI CMOS', mp:20.4, sensorSize:'Micro Four Thirds', sensorType:'Stacked BSI CMOS',
    burst:120, burstType:'e-shutter blackout-free (20fps RAW)', video:'4K/60p 10-bit', videoScore:4,
    ibis:'8-stop', ibisStops:8, afPoints:'Phase Detect AI', afSystem:'AI Phase Detect',
    isoRange:'200–102,400 (exp. 100–102,400)', isoMax:102400,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'IP53 Rated + Freeze Proof', weatherScore:5,
    battery:'520 shots (CIPA)', batteryScore:3, batteryRating:520,
    cards:'2× UHS-II SD', weight:'599g', weightVal:599,
    mount:'Micro Four Thirds Mount', price:'~$2,200', priceVal:2200, launch:2022,
    niche:'Wildlife & Weather Warrior',
    nicheDesc:'IP53 dust/splash/freeze resistance up to -10°C. 120fps burst, outstanding AI wildlife tracking, Live ND (up to 64 stops equivalent), and the most computational photography features of any camera. Unmatched in adverse conditions.',
    nicheTags:['Wildlife','Weather','IP53','120fps','Live ND','Computational'],
    tagline:'IP53 rated. -10°C. 120fps. The camera that goes where others can\'t.'
  },
  {
    id:'om-om1ii', brand:'OM System', model:'OM-1 Mark II', year:2024,
    sensor:'20.4MP MFT Stacked BSI CMOS', mp:20.4, sensorSize:'Micro Four Thirds', sensorType:'Stacked BSI CMOS',
    burst:120, burstType:'e-shutter blackout-free', video:'4K/60p 10-bit', videoScore:4,
    ibis:'8.5-stop', ibisStops:8.5, afPoints:'Phase Detect AI (improved)', afSystem:'AI Phase Detect',
    isoRange:'200–102,400 (exp. 100–102,400)', isoMax:102400,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'IP53 Rated + Freeze Proof -10°C', weatherScore:5,
    battery:'600 shots (CIPA)', batteryScore:4, batteryRating:600,
    cards:'2× UHS-II SD', weight:'599g', weightVal:599,
    mount:'Micro Four Thirds Mount', price:'~$2,200', priceVal:2200, launch:2024,
    niche:'Best MFT Ever Made',
    nicheDesc:'Improved OM-1 with better AF, 8.5-stop IBIS, and longer battery. 120fps burst, IP53, Live ND, handheld high-res mode. The definitive Micro Four Thirds camera for serious wildlife and outdoor work.',
    nicheTags:['Wildlife','IP53','120fps','MFT Best','Outdoor','Computational'],
    tagline:'The greatest Micro Four Thirds camera ever made.'
  },
  // ── HASSELBLAD ──
  {
    id:'hassy-x1dii', brand:'Hasselblad', model:'X1D II 50C', year:2019,
    sensor:'50MP Medium Format BSI CMOS', mp:50, sensorSize:'Medium Format (44×33mm)', sensorType:'BSI CMOS',
    burst:2.7, burstType:'mechanical (leaf shutter)', video:'None', videoScore:0,
    ibis:'None', ibisStops:0, afPoints:'Phase Detect', afSystem:'Phase Detect',
    isoRange:'100–25,600 (exp. 100–25,600)', isoMax:25600,
    evf:'3.69M dot OLED', evfScore:3, screen:'3.6″ Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'400 shots (CIPA)', batteryScore:2, batteryRating:400,
    cards:'2× UHS-II SD', weight:'766g', weightVal:766,
    mount:'Hasselblad XCD Mount', price:'~$5,750', priceVal:5750, launch:2019,
    niche:'Compact Medium Format Entry',
    nicheDesc:'The world\'s first truly compact mirrorless medium format camera when launched. 50MP, beautiful Hasselblad colour science, touchscreen interface. No video, no IBIS, but the image quality is extraordinary.',
    nicheTags:['Medium Format','Portrait','Studio','Landscape','Compact MF'],
    tagline:'Medium format photography in a compact, walkable form.'
  },
  {
    id:'hassy-x2d', brand:'Hasselblad', model:'X2D 100C', year:2022,
    sensor:'100MP Medium Format BSI CMOS', mp:100, sensorSize:'Medium Format (44×33mm)', sensorType:'BSI CMOS',
    burst:3, burstType:'mechanical (leaf shutter)', video:'None', videoScore:0,
    ibis:'7-stop', ibisStops:7, afPoints:'Phase Detect (294 zones)', afSystem:'Phase Detect',
    isoRange:'64–25,600 (exp. 64–25,600)', isoMax:25600,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.6″ Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'420 shots', batteryScore:2, batteryRating:420,
    cards:'CFexpress B + 1TB Internal SSD', weight:'895g', weightVal:895,
    mount:'Hasselblad XCD Mount', price:'~$7,400 (discounted)', priceVal:7400, launch:2022,
    niche:'100MP Medium Format + IBIS',
    nicheDesc:'First Hasselblad with IBIS. 100MP with Hasselblad Natural Colour Solution, 1TB internal SSD, and 15 stops of dynamic range. The benchmark for still image quality.',
    nicheTags:['100MP','Medium Format','Landscape','Portrait','Commercial','Fine Art'],
    tagline:'100 megapixels. 1TB internal. The benchmark for image quality.'
  },
  {
    id:'hassy-x2dii', brand:'Hasselblad', model:'X2D II 100C', year:2025,
    sensor:'100MP Medium Format BSI CMOS', mp:100, sensorSize:'Medium Format (44×33mm)', sensorType:'BSI CMOS',
    burst:3, burstType:'mechanical + e-shutter (leaf shutter)', video:'None — stills only', videoScore:0,
    ibis:'10-stop', ibisStops:10, afPoints:'425 PDAF + LiDAR + AF-C (continuous)', afSystem:'PDAF + LiDAR + AI',
    isoRange:'50–25,600 (exp. 50–25,600)', isoMax:25600,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.6″ 1400-nit OLED Tilt Touchscreen',
    weather:'Weather Sealed', weatherScore:3,
    battery:'~400 shots', batteryScore:2, batteryRating:400,
    cards:'CFexpress B + 1TB Internal SSD', weight:'730g', weightVal:730,
    mount:'Hasselblad XCD Mount', price:'~$7,399', priceVal:7399, launch:2025,
    niche:'Ultimate Stills Camera',
    nicheDesc:'The finest stills camera ever made by Hasselblad. 100MP + 10-stop IBIS + LiDAR AF + HDR pipeline + AF-C tracking. For photographers who demand the absolute maximum in still image quality.',
    nicheTags:['100MP','Medium Format','10-stop IBIS','LiDAR AF','End-to-End HDR','Finest Stills Ever'],
    tagline:'The finest still photograph camera on planet Earth.'
  },
  // ── LEICA ──
  {
    id:'leica-sl2', brand:'Leica', model:'SL2', year:2019,
    sensor:'47.3MP FF BSI CMOS', mp:47.3, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:20, burstType:'e-shutter', video:'4K/30p 10-bit 4:2:2', videoScore:3,
    ibis:'None', ibisStops:0, afPoints:'Phase Detect / Contrast Detect', afSystem:'Hybrid AF',
    isoRange:'50–50,000 (exp. 50–100,000)', isoMax:100000,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.2″ Tilt Touchscreen',
    weather:'IP54 Weather Sealed', weatherScore:4,
    battery:'340 shots (CIPA)', batteryScore:1, batteryRating:340,
    cards:'2× UHS-II SD', weight:'835g', weightVal:835,
    mount:'Leica L-Mount', price:'~$6,000', priceVal:6000, launch:2019,
    niche:'Luxury Full-Frame',
    nicheDesc:'47.3MP, IP54 weather sealing, and hand-assembled in Germany. The ultimate expression of Leica\'s L-Mount system. Immaculate build quality and colour rendering. For those who value craftsmanship.',
    nicheTags:['Luxury','Portrait','Commercial','IP54','L-Mount'],
    tagline:'47 megapixels hand-assembled in Wetzlar, Germany.'
  },
  {
    id:'leica-sl3', brand:'Leica', model:'SL3', year:2024,
    sensor:'60MP FF BSI CMOS', mp:60, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:15, burstType:'e-shutter', video:'8K/30p + 4K/60p', videoScore:4,
    ibis:'None (lens IS)', ibisStops:0, afPoints:'Phase Detect AI', afSystem:'AI Phase Detect',
    isoRange:'50–200,000 (exp. 50–200,000)', isoMax:200000,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.2″ Tilt Touchscreen',
    weather:'IP54 Weather Sealed', weatherScore:4,
    battery:'~300 shots', batteryScore:1, batteryRating:300,
    cards:'2× UHS-II SD', weight:'835g', weightVal:835,
    mount:'Leica L-Mount', price:'~$7,000', priceVal:7000, launch:2024,
    niche:'Ultimate Luxury Resolution',
    nicheDesc:'60MP full-frame with 8K video, AI autofocus, IP54 sealing, and ISO 200,000. The pinnacle of Leica\'s L-Mount system. Extraordinary colour science and build quality. For photographers who settle for nothing.',
    nicheTags:['60MP','8K','IP54','Luxury','L-Mount','ISO 200K'],
    tagline:'60 megapixels. 8K. IP54. Made in Germany. The pinnacle.'
  },
  {
    id:'leica-q3', brand:'Leica', model:'Q3', year:2023,
    sensor:'60MP FF BSI CMOS', mp:60, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:15, burstType:'e-shutter', video:'8K/30p', videoScore:4,
    ibis:'None', ibisStops:0, afPoints:'Phase Detect', afSystem:'Phase Detect',
    isoRange:'50–100,000 (exp. 50–100,000)', isoMax:100000,
    evf:'5.76M dot OLED', evfScore:4, screen:'3.0″ Vari-Angle Touchscreen',
    weather:'IP52 Weather Sealed', weatherScore:4,
    battery:'~300 shots', batteryScore:1, batteryRating:300,
    cards:'1× SD + 64GB Internal', weight:'743g', weightVal:743,
    mount:'Fixed 28mm f/1.7 Summilux', price:'~$6,000', priceVal:6000, launch:2023,
    niche:'Fixed-Lens Luxury Compact',
    nicheDesc:'60MP full-frame with Leica\'s legendary 28mm f/1.7 Summilux — a fixed lens that cannot be swapped. For street, travel, and documentary photographers who want the ultimate compact full-frame experience.',
    nicheTags:['60MP','Fixed Lens','Street','Luxury Compact','Documentary'],
    tagline:'60MP, Summilux optics, fixed forever. Perfection in a compact.'
  },
  {
    id:'leica-m11', brand:'Leica', model:'M11', year:2022,
    sensor:'60MP FF BSI CMOS', mp:60, sensorSize:'Full-Frame', sensorType:'BSI CMOS',
    burst:4.5, burstType:'mechanical only', video:'None', videoScore:0,
    ibis:'None', ibisStops:0, afPoints:'Manual Focus Only', afSystem:'Rangefinder Manual Focus',
    isoRange:'64–50,000 (exp. 64–50,000)', isoMax:50000,
    evf:'Optional M-EVF', evfScore:1, screen:'2.95″ Fixed Touchscreen',
    weather:'Limited Sealing', weatherScore:1,
    battery:'700 shots (CIPA)', batteryScore:4, batteryRating:700,
    cards:'64GB Internal + SD', weight:'530g', weightVal:530,
    mount:'Leica M-Mount (rangefinder)', price:'~$9,000', priceVal:9000, launch:2022,
    niche:'Rangefinder Artisan',
    nicheDesc:'The ultimate expression of rangefinder photography. Manual focus only. No video. No autofocus. 60MP. The slowest and most deliberate way to take a photograph. And often the most rewarding.',
    nicheTags:['Rangefinder','Manual Focus','Street','Deliberate','Luxury','60MP'],
    tagline:'60 megapixels. No autofocus. No video. Pure photography.'
  }
];

// ══════════════════════════════════════════════
//  SPEC DEFINITIONS
// ══════════════════════════════════════════════
const DEFINITIONS = {
  mp: 'Megapixels — the total number of pixels on the sensor. More MP = more detail in photos, more flexibility to crop, and larger print capability. However, more MP can mean noisier images in low light.',
  sensorSize: 'Physical size of the image sensor. Larger sensors capture more light, producing cleaner images with more background blur. Medium Format > Full-Frame > APS-C > Micro Four Thirds.',
  sensorType: 'The architecture of the sensor. Stacked sensors have on-chip memory for faster readout, reducing rolling shutter. BSI (Back-Side Illuminated) improves light collection efficiency.',
  burst: 'Frames per second — how many photos the camera can capture each second. Essential for sports, wildlife, and action. Electronic shutter (e-shutter) allows faster speeds than mechanical.',
  video: 'Maximum video recording capability. Higher resolution and frame rate = more detail and smoother footage. 10-bit captures more colour information than 8-bit for better editing latitude.',
  ibis: 'In-Body Image Stabilisation — the camera sensor physically compensates for hand movement. Measured in stops: 5 stops = 32× more hand-shake correction than no IBIS.',
  af: 'Autofocus system — how the camera locks and tracks focus. Phase-detect AF uses split pixels for fast, predictable tracking. AI-based systems can recognise and follow specific subjects.',
  iso: 'Sensitivity range — how the camera performs in low light. A higher maximum ISO allows shooting in darker conditions, though very high ISOs introduce noise/grain.',
  evf: 'Electronic Viewfinder resolution — higher dot count = sharper, more detailed preview when looking through the viewfinder. Expressed in millions of dots.',
  screen: 'Rear LCD screen type. Vari-angle screens flip out and rotate for flexible framing. Tilt screens angle up/down. Fixed screens do not move.',
  weather: 'Protection against dust and moisture. Ratings range from basic dust resistance to IP-rated full weather sealing. Essential for outdoor and field photography.',
  battery: 'CIPA-rated shot count per charge. Real-world usage typically yields more shots. Lower CIPA = heavier electronic shutter usage during testing.',
  cards: 'Memory card slots and card types. CFexpress is faster than SD and handles larger files. Dual slots allow backup recording for critical shoots.',
  weight: 'Body weight including battery. Heavier cameras are more stable; lighter cameras cause less fatigue during long shoots.',
  mount: 'The lens mount standard. Determines which lenses are natively compatible. Larger mounts generally support faster apertures and more lens variety.',
  price: 'Approximate launch retail price (body only, USD). Prices typically decrease after launch.',
};

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let selectedA = null;
let selectedB = null;

document.getElementById('camera-count').textContent = CAMERAS.length;

// ══════════════════════════════════════════════
//  AUTOCOMPLETE
// ══════════════════════════════════════════════
function setupAutocomplete(inputId, dropdownId, side) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (q.length === 0) { dropdown.classList.remove('open'); return; }
    const results = CAMERAS.filter(c =>
      (c.brand + ' ' + c.model).toLowerCase().includes(q) ||
      c.model.toLowerCase().includes(q) ||
      c.brand.toLowerCase().includes(q)
    ).sort((a, b) => b.year - a.year);
    renderDropdown(results, dropdown, side);
  });

  input.addEventListener('focus', () => {
    const q = input.value.toLowerCase().trim();
    if (q.length > 0) {
      const results = CAMERAS.filter(c =>
        (c.brand + ' ' + c.model).toLowerCase().includes(q)
      );
      renderDropdown(results, dropdown, side);
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

function renderDropdown(cameras, dropdown, side) {
  if (cameras.length === 0) {
    dropdown.innerHTML = '<div class="no-results">No cameras found. Try a different search.</div>';
    dropdown.classList.add('open');
    return;
  }
  dropdown.innerHTML = cameras.map(c => `
    <div class="dropdown-item" onclick="selectCamera('${c.id}', '${side}')">
      <span>
        <span class="item-brand">${c.brand}</span>
        &nbsp;${c.model}
      </span>
      <span class="item-year">${c.year}</span>
    </div>
  `).join('');
  dropdown.classList.add('open');
}

function selectCamera(id, side) {
  const cam = CAMERAS.find(c => c.id === id);
  if (!side || !cam) return;

  const dropdown = document.getElementById('dropdown-' + side);
  const input = document.getElementById('search-' + side);
  const card = document.getElementById('card-' + side);
  const nameEl = document.getElementById('card-' + side + '-name');
  const metaEl = document.getElementById('card-' + side + '-meta');

  if (side === 'a') selectedA = cam;
  else selectedB = cam;

  input.value = cam.brand + ' ' + cam.model;
  dropdown.classList.remove('open');

  nameEl.textContent = cam.brand + ' ' + cam.model;
  metaEl.textContent = cam.year + ' · ' + cam.sensorSize + ' · ' + cam.mp + 'MP · ' + cam.mount;
  card.classList.add('visible');

  if (selectedA && selectedB) renderComparison();
  else hideComparison();
}

function clearCamera(side) {
  if (side === 'a') selectedA = null;
  else selectedB = null;

  document.getElementById('search-' + side).value = '';
  document.getElementById('card-' + side).classList.remove('visible');
  hideComparison();
}

// ══════════════════════════════════════════════
//  COMPARISON RENDER
// ══════════════════════════════════════════════
function hideComparison() {
  document.getElementById('comparison-result').classList.remove('visible');
  document.getElementById('empty-state').style.display = 'block';
}

function renderComparison() {
  const a = selectedA, b = selectedB;

  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('comparison-result').classList.add('visible');
  document.getElementById('th-a-name').textContent = a.brand + ' ' + a.model;
  document.getElementById('th-b-name').textContent = b.brand + ' ' + b.model;

  // Hero cards
  document.getElementById('hero-cards').innerHTML = `
    <div class="hero-card cam-a fade-in">
      <div class="hero-brand">${a.brand}</div>
      <div class="hero-model">${a.model}</div>
      <div class="hero-tagline">"${a.tagline}"</div>
      <div class="hero-stats">
        <div class="hero-stat cam-a"><div class="hero-stat-val">${a.mp}</div><div class="hero-stat-lbl">Megapixels</div></div>
        <div class="hero-stat cam-a"><div class="hero-stat-val">${a.burst}</div><div class="hero-stat-lbl">fps Burst</div></div>
        <div class="hero-stat cam-a"><div class="hero-stat-val">${a.ibis}</div><div class="hero-stat-lbl">IBIS</div></div>
        <div class="hero-stat cam-a"><div class="hero-stat-val">${a.year}</div><div class="hero-stat-lbl">Released</div></div>
        <div class="hero-stat cam-a"><div class="hero-stat-val">${a.price.replace('~','')}</div><div class="hero-stat-lbl">Price</div></div>
        <div class="hero-stat cam-a"><div class="hero-stat-val">${a.sensorSize.split(' ')[0]}</div><div class="hero-stat-lbl">Sensor</div></div>
      </div>
    </div>
    <div class="hero-card cam-b fade-in">
      <div class="hero-brand">${b.brand}</div>
      <div class="hero-model">${b.model}</div>
      <div class="hero-tagline">"${b.tagline}"</div>
      <div class="hero-stats">
        <div class="hero-stat cam-b"><div class="hero-stat-val">${b.mp}</div><div class="hero-stat-lbl">Megapixels</div></div>
        <div class="hero-stat cam-b"><div class="hero-stat-val">${b.burst}</div><div class="hero-stat-lbl">fps Burst</div></div>
        <div class="hero-stat cam-b"><div class="hero-stat-val">${b.ibis}</div><div class="hero-stat-lbl">IBIS</div></div>
        <div class="hero-stat cam-b"><div class="hero-stat-val">${b.year}</div><div class="hero-stat-lbl">Released</div></div>
        <div class="hero-stat cam-b"><div class="hero-stat-val">${b.price.replace('~','')}</div><div class="hero-stat-lbl">Price</div></div>
        <div class="hero-stat cam-b"><div class="hero-stat-val">${b.sensorSize.split(' ')[0]}</div><div class="hero-stat-lbl">Sensor</div></div>
      </div>
    </div>
  `;

  // Spec rows
  const rows = [
    { label:'Megapixels', def:'mp', aVal:a.mp+'MP', bVal:b.mp+'MP', aNum:a.mp, bNum:b.mp, higher:'a' },
    { label:'Sensor Size', def:'sensorSize', aVal:a.sensorSize, bVal:b.sensorSize, aNum:sensorScore(a.sensorSize), bNum:sensorScore(b.sensorSize), higher:'a' },
    { label:'Sensor Type', def:'sensorType', aVal:a.sensorType, bVal:b.sensorType, aNum:sensorTypeScore(a.sensorType), bNum:sensorTypeScore(b.sensorType), higher:'a' },
    { label:'Burst Speed', def:'burst', aVal:a.burst+'fps — '+a.burstType, bVal:b.burst+'fps — '+b.burstType, aNum:a.burst, bNum:b.burst, higher:'a' },
    { label:'Video Capability', def:'video', aVal:a.video, bVal:b.video, aNum:a.videoScore, bNum:b.videoScore, higher:'a' },
    { label:'Image Stabilisation', def:'ibis', aVal:a.ibis, bVal:b.ibis, aNum:a.ibisStops, bNum:b.ibisStops, higher:'a' },
    { label:'Autofocus System', def:'af', aVal:a.afPoints, bVal:b.afPoints, aNum:afScore(a), bNum:afScore(b), higher:'a' },
    { label:'ISO Range', def:'iso', aVal:a.isoRange, bVal:b.isoRange, aNum:a.isoMax, bNum:b.isoMax, higher:'a' },
    { label:'EVF Resolution', def:'evf', aVal:a.evf, bVal:b.evf, aNum:a.evfScore, bNum:b.evfScore, higher:'a' },
    { label:'Screen Type', def:'screen', aVal:a.screen, bVal:b.screen, aNum:0, bNum:0, higher:'tie' },
    { label:'Weather Sealing', def:'weather', aVal:a.weather, bVal:b.weather, aNum:a.weatherScore, bNum:b.weatherScore, higher:'a' },
    { label:'Battery Life', def:'battery', aVal:a.battery, bVal:b.battery, aNum:a.batteryRating, bNum:b.batteryRating, higher:'a' },
    { label:'Card Slots', def:'cards', aVal:a.cards, bVal:b.cards, aNum:0, bNum:0, higher:'tie' },
    { label:'Body Weight', def:'weight', aVal:a.weight, bVal:b.weight, aNum:a.weightVal, bNum:b.weightVal, higher:'b' },
    { label:'Lens Mount', def:'mount', aVal:a.mount, bVal:b.mount, aNum:0, bNum:0, higher:'tie' },
    { label:'Launch Price', def:'price', aVal:a.price, bVal:b.price, aNum:a.priceVal, bNum:b.priceVal, higher:'b' },
    { label:'Release Year', def:'mount', aVal:a.year.toString(), bVal:b.year.toString(), aNum:a.year, bNum:b.year, higher:'a' },
  ];

  let winsA = 0, winsB = 0, ties = 0;

  const tbody = document.getElementById('spec-tbody');
  tbody.innerHTML = rows.map(row => {
    let winner = 'tie';
    if (row.higher !== 'tie') {
      if (row.aNum > row.bNum) winner = row.higher === 'a' ? 'a' : 'b';
      else if (row.bNum > row.aNum) winner = row.higher === 'a' ? 'b' : 'a';
    }
    if (winner === 'a') winsA++;
    else if (winner === 'b') winsB++;
    else ties++;

    const aClass = winner === 'a' ? 'win win-a' : 'neutral';
    const bClass = winner === 'b' ? 'win win-b' : 'neutral';
    const badgeA = winner === 'a' ? '<span class="win-badge a">WINS</span>' : '';
    const badgeB = winner === 'b' ? '<span class="win-badge b">WINS</span>' : '';

    return `
      <tr class="spec-row">
        <td>
          <div class="spec-label-cell">
            <span class="spec-label-text">${row.label}</span>
            <div class="info-icon">i
              <div class="tooltip">${DEFINITIONS[row.def] || 'Specification comparison metric.'}</div>
            </div>
          </div>
        </td>
        <td class="spec-val ${aClass}">${row.aVal}${badgeA}</td>
        <td class="spec-val ${bClass}">${row.bVal}${badgeB}</td>
      </tr>
    `;
  }).join('');

  // Win tally
  document.getElementById('win-tally').innerHTML = `
    <div class="tally-side cam-a">
      <div class="tally-num">${winsA}</div>
      <div class="tally-label">${a.brand} ${a.model}</div>
      <div class="tally-wins">categories won</div>
    </div>
    <div class="tally-center">
      <div>${ties}</div>
      <div style="font-size:0.65rem;letter-spacing:1px">TIED</div>
    </div>
    <div class="tally-side cam-b">
      <div class="tally-num">${winsB}</div>
      <div class="tally-label">${b.brand} ${b.model}</div>
      <div class="tally-wins">categories won</div>
    </div>
  `;

  // Niche
  document.getElementById('niche-grid').innerHTML = `
    <div class="niche-card cam-a">
      <div class="niche-header">
        <div class="niche-cam-name">${a.brand} ${a.model}</div>
        <div class="niche-crown">NICHE</div>
      </div>
      <div class="niche-title">${a.niche}</div>
      <div class="niche-desc">${a.nicheDesc}</div>
      <div class="niche-tags">${a.nicheTags.map(t => `<span class="niche-tag cam-a">${t}</span>`).join('')}</div>
    </div>
    <div class="niche-card cam-b">
      <div class="niche-header">
        <div class="niche-cam-name">${b.brand} ${b.model}</div>
        <div class="niche-crown">NICHE</div>
      </div>
      <div class="niche-title">${b.niche}</div>
      <div class="niche-desc">${b.nicheDesc}</div>
      <div class="niche-tags">${b.nicheTags.map(t => `<span class="niche-tag cam-b">${t}</span>`).join('')}</div>
    </div>
  `;

  // Verdict
  const overall = winsA > winsB ? a : winsB > winsA ? b : null;
  const loser = overall === a ? b : a;
  let verdictHTML = '';
  if (overall) {
    verdictHTML = `The <strong>${overall.brand} ${overall.model}</strong> wins <strong>${Math.max(winsA,winsB)} of ${rows.length} categories</strong> in this comparison. `;
    verdictHTML += `It excels as a <strong>${overall.niche}</strong> camera — ${overall.nicheDesc} `;
    verdictHTML += `<br><br>The <strong>${loser.brand} ${loser.model}</strong> wins ${Math.min(winsA,winsB)} categories and earns its place as a <strong>${loser.niche}</strong>. ${loser.nicheDesc}`;
    verdictHTML += `<br><br>Choose the <strong>${overall.brand} ${overall.model}</strong> if you want the most capable camera across the widest range of shooting scenarios. Choose the <strong>${loser.brand} ${loser.model}</strong> if its specific niche aligns perfectly with what you shoot.`;
  } else {
    verdictHTML = `These cameras are remarkably evenly matched — ${winsA} wins each. Both the <strong>${a.brand} ${a.model}</strong> and <strong>${b.brand} ${b.model}</strong> offer compelling arguments. Your decision should come down to: <strong>${a.niche}</strong> vs <strong>${b.niche}</strong>. Identify which niche matches your shooting style and you have your answer.`;
  }
  document.getElementById('verdict-text').innerHTML = verdictHTML;
}

function sensorScore(size) {
  if (size.includes('Medium')) return 4;
  if (size.includes('Full')) return 3;
  if (size.includes('APS')) return 2;
  return 1;
}

function sensorTypeScore(type) {
  if (type.includes('Global')) return 5;
  if (type.includes('Stacked')) return 4;
  if (type.includes('Partially')) return 3;
  if (type.includes('BSI')) return 2;
  return 1;
}

function afScore(cam) {
  let s = 0;
  if (cam.afSystem.includes('AI')) s += 3;
  if (cam.afSystem.includes('Phase')) s += 2;
  if (cam.afSystem.includes('LiDAR')) s += 1;
  if (cam.afSystem.includes('Manual')) s = 0;
  return s;
}

// Init
setupAutocomplete('search-a', 'dropdown-a', 'a');
setupAutocomplete('search-b', 'dropdown-b', 'b');
