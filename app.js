/**
 * Apex Auto & Machine Works - Interactive Logic & Dual-Language Support (Hindi / English)
 */

// Dual-Language Dictionary
const translations = {
  hi: {
    timing: "सोमवार - रविवार: सुबह 09:00 - रात 10:00 (रोजाना)",
    address_short: "दमोह रोड, गढ़ाकोटा, जिला सागर (म.प्र.)",
    logo_title: 'सिंघई <span class="highlight">ऑटो</span> पार्ट्स',
    logo_subtitle: "ऑटो पार्ट्स, सर्विस & इलेक्ट्रिकल्स • गढ़ाकोटा",
    nav_home: "होम",
    nav_services: "सेवाएं",
    nav_parts: "ऑटो पार्ट्स",
    nav_machine: "मशीन व इलेक्ट्रिकल्स",
    nav_booking: "सर्विस बुकिंग",
    nav_reviews: "रिव्यूज",
    nav_contact: "संपर्क व मैप",
    cta_book_now: "सर्विस बुक करें",
    hero_badge: "गढ़ाकोटा का 100% विश्वसनीय ऑटो पार्ट्स & सर्विस सेंटर",
    hero_title: "सिंघई ऑटो पार्ट्स: टू-व्हीलर सर्विसिंग, असली पार्ट्स और मशीन रिपेयरिंग!",
    hero_desc: "गढ़ाकोटा (दमोह रोड) में बाइक की जनरल सर्विसिंग, इंजन बोरिंग, ओरिजिनल स्पेयर पार्ट्स, खराद (लेथ) मशीनरी कार्य, वेल्डिंग एवं इलेक्ट्रिक मोटर रिवाइंडिंग का एक संपूर्ण भरोसेमंद प्रतिष्ठान।",
    hero_cta_book: "तुरंत सर्विस स्लॉट बुक करें",
    hero_cta_wa: "व्हाट्सएप पर संपर्क करें",
    stat_exp: "वर्षों का अनुभव",
    stat_bikes: "संतुष्ट ग्राहक & गाड़ियां",
    stat_parts: "ओरिजिनल पार्ट्स गारंटी",
    top_rated: "गढ़ाकोटा टॉप वर्कशॉप",
    hl1_t: "मोबिल ऑयल & फिल्टर चेंज",
    hl1_d: "Castrol, Motul, Shell 100% असली ग्रेड",
    hl2_t: "खराद & मशीनरी वेल्डिंग वर्क",
    hl2_d: "लेथ मशीन, ड्रिलिंग, थ्रेडिंग, इंजन बोरिंग",
    hl3_t: "क्विक पिकअप & डिलीवरी",
    hl3_d: "आस-पास के एरिया में ऑन-डिमांड सुविधा",
    trust_note: "ईमानदार काम, वाजिब रेट और गारंटीड संतुष्टि!",
    feat_1_t: "एक्सपर्ट मैकेनिक",
    feat_1_d: "हर तरह की स्पोर्ट्स, कम्यूटर और स्कूटी स्पेशलिस्ट",
    feat_2_t: "सभी ओरिजिनल पार्ट्स स्टॉक",
    feat_2_d: "Hero, Bajaj, Honda, TVS, Yamaha, Royal Enfield",
    feat_3_t: "मशीन व लेथ वर्कशॉप",
    feat_3_d: "इंजन बोरिंग, टर्निंग, थ्रेड रिपेयर, मोटर रिवाइंडिंग",
    feat_4_t: "उचित व पारदर्शी रेट्स",
    feat_4_d: "कोई छुपा हुआ चार्ज नहीं, बिलिंग के साथ काम",
    services_sub: "वर्कशॉप सुविधाएं",
    services_head: "टू-व्हीलर सर्विसिंग और मेंटेनेंस पैकेज",
    services_desc: "आपकी बाइक का माइलेज और परफॉर्मेंस हमेशा रहे टॉप क्लास। हम आधुनिक टूल्स और कम्प्यूटरीकृत चेकअप के साथ सर्विस करते हैं।",
    srv_1_t: "फुल जनरल सर्विसिंग",
    srv_1_d: "वाशिंग, कार्बोरेटर/FI क्लीनिंग, स्पार्क प्लग चेक, चेन ल्यूब, ब्रेक एडजस्टमेंट व फुल बॉडी टाइटनिंग।",
    srv_1_p1: "माइलेज और पिकअप ट्यूनिंग",
    srv_1_p2: "हाई-प्रेशर वाटर वाश & पॉलिश",
    srv_1_p3: "25+ पॉइंट सेफ्टी इंस्पेक्शन",
    srv_2_t: "इंजन ओवरहाल & बोरिंग",
    srv_2_d: "धुआं फेंकना, इंजन की आवाज, ऑयल लीकेज, पिस्टन-सिलेंडर बोरिंग और क्लच प्लेट रिप्लेसमेंट का पक्का इलाज।",
    srv_2_p1: "ओरिजिनल पिस्टन & वाल्व फिटिंग",
    srv_2_p2: "क्रैंक अलाइनमेंट & बेयरिंग चेंज",
    srv_2_p3: "6 महीने तक परफॉर्मेंस सपोर्ट",
    srv_3_t: "इलेक्ट्रिकल & बैटरी चेक",
    srv_3_d: "सेल्फ स्टार्ट रिपेयर, वायरिंग शॉर्टेज फिक्सिंग, डिजिटल मीटर, हेडलाइट/हॉर्न अपग्रेड और एक्साइड/अमरोन बैटरी टेस्टिंग।",
    srv_3_p1: "सेल्फ मोटर & रिले सर्विस",
    srv_3_p2: "बैटरी हेल्थ और चार्जिंग टेस्ट",
    srv_3_p3: "LED हेडलैम्प इंस्टॉलेशन",
    srv_4_t: "टायर, ब्रेक & सस्पेंशन वर्क",
    srv_4_d: "डिस्क ब्रेक पैड, ड्रम शू, शॉक-एब्जॉर्बर (कमानी/शॉकर) रिपेयर व ऑयल सील चेंज, ट्यूबलेस पंचर और व्हील अलाइनमेंट।",
    srv_4_p1: "फ्रंट फोर्क शॉक-ऑयल रिफिल",
    srv_4_p2: "डिस्क ब्रेक फ्लुइड ब्लीडिंग",
    srv_4_p3: "रिम बेंड और स्पोक टाइटनिंग",
    srv_5_t: "फोम वाशिंग & टेफ्लॉन कोटिंग",
    srv_5_d: "स्नो फोम शैम्पू वाश, अंडरबॉडी डीग्रेसिंग, स्क्रैच रिमूवल, 3M टेफ्लॉन वैक्स और सिरेमिक स्प्रे कोटिंग।",
    srv_5_p1: "गहन डीजल/केमिकल डीग्रेसिंग",
    srv_5_p2: "शो-रूम जैसी नई चमक",
    srv_5_p3: "जंग (रस्ट) रोधक कोटिंग",
    srv_6_t: "इमरजेंसी ब्रेकडाउन सहायता",
    srv_6_d: "रास्ते में बाइक बंद होने, पंक्चर होने या स्टार्ट न होने पर क्विक ऑन-रोड असिस्टेंस और टोइंग सपोर्ट।",
    srv_6_p1: "लोकल एरिया में 20 मिनट में पहुंच",
    srv_6_p2: "जंप-स्टार्ट & फ्यूल डिलीवरी",
    srv_6_p3: "ऑन-स्पॉट पंक्चर सॉल्यूशन",
    starts_from: "शुरुआती",
    book_srv: "बुक करें",
    inspection: "इंस्पेक्शन उपरांत",
    emergency_call: "तत्काल कॉल करें",
    call_now: "कॉल करें",
    most_popular: "सबसे लोकप्रिय",
    parts_sub: "ओरिजिनल ऑटो पार्ट्स",
    parts_head: "सभी प्रमुख ब्रांड्स के जेन्युइन स्पेयर पार्ट्स",
    parts_desc: "डुप्लीकेट पार्ट्स से बचें! हम केवल विश्वसनीय और अधिकृत कंपनियों के सीलबंद पार्ट्स ही बेचते हैं और लगाते हैं।",
    tab_all: "सभी पार्ट्स (All)",
    tab_engine: "इंजन & ऑयल",
    tab_brakes: "ब्रेक & ट्रांसमिशन",
    tab_electrical: "इलेक्ट्रिकल & बैटरी",
    tab_body: "बॉडी व एक्सेसरीज",
    part_1_t: "प्रीमियम 4T इंजन ऑयल",
    part_1_c: "Castrol, Motul, Shell, HP 20W40 / 10W40",
    part_2_t: "डिस्क पैड व ब्रेक शू",
    part_2_c: "Endurance, KBX, Bosch - पल्सर, एक्टिवा, अपाचे, शाइन",
    part_3_t: "चेन स्प्रोकेट किट (Drive Chain)",
    part_3_c: "Rolon, Diamond, OEM किट - सभी मॉडल्स",
    part_4_t: "टू-व्हीलर बैटरियां",
    part_4_c: "Exide Xplore, Amaron Pro Bike Rider (2.5L/4L/5L)",
    part_5_t: "क्लच प्लेट & प्रेशर प्लेट किट",
    part_5_c: "MK, FCC, Hero/Bajaj Genuine Clutches",
    part_6_t: "स्पार्क प्लग (इरिडियम/नॉर्मल)",
    part_6_c: "NGK, Champion, Bosch ओरिजिनल स्पार्क प्लग",
    part_7_t: "हेडलाइट, इंडिकेटर व साइड ग्लास",
    part_7_c: "Lumax, Minda, Uno OEM फिटिंग व फिनिश",
    part_8_t: "एयर फिल्टर व ऑयल फिल्टर",
    part_8_c: "साफ हवा से मिलेगा 20% बेहतर माइलेज",
    inquire: "पूछताछ",
    brands_supported: "सपोर्टेड बाइक ब्रांड्स & पार्ट्स पार्टनर",
    mach_sub: "विशेषज्ञ मशीनरी एवं खराद कार्य",
    mach_head: "मशीन रिपेयरिंग, लेथ (खराद) एवं इंडस्ट्रियल वर्क्स",
    mach_desc: "टू-व्हीलर के अलावा हमारे पास हाई-प्रिसिजन लेथ मशीन, इलेक्ट्रिक मोटर रिवाइंडिंग और विभिन्न प्रकार की कृषि व घरेलू मशीनों की रिपेयरिंग की बेहतरीन व्यवस्था है।",
    mach_card1_t: "खराद (Lathe) मशीन एवं टर्निंग कार्य",
    mach_card1_d: "बाइक इंजन ब्लॉक बोरिंग, स्लीव फिटिंग, क्रैंक शाफ्ट रिपेयर, थ्रेड (चूड़ी) काटना, बुश बनाना एवं मेटल टर्निंग का सटीक काम।",
    mach_card2_t: "आर्क, गैस और आर्गन वेल्डिंग",
    mach_card2_d: "टूटे हुए बाइक चेसिस, साइलेंसर, फुट-रेस्ट, भारी मशीनरी पार्ट्स, एल्यूमीनियम कास्टिंग व लोहे के पार्ट्स की मजबूत वेल्डिंग।",
    mach_card3_t: "इलेक्ट्रिक मोटर व पंप रिपेयरिंग",
    mach_card3_d: "सबमर्सिबल पंप, पानी की मोटर, चक्की मोटर, इंडस्ट्रियल 3-फेज मोटर रिवाइंडिंग, बेयरिंग बदलना और सील रिपेयर।",
    mach_card4_t: "कृषि एवं वर्कशॉप पावर टूल्स रिपेयर",
    mach_card4_d: "एंगल ग्राइंडर, ड्रिल मशीन, कटर, जनरेटर, थ्रेशर के पुर्जे व चारा काटने वाली मशीन (कुट्टी मशीन) की संपूर्ण रिपेयरिंग।",
    strip1_t: "प्रिसिजन गेज नाप",
    strip1_d: "0.01 mm तक की एक्यूरेसी के साथ काम",
    strip2_t: "ऑन-टाइम डिलीवरी",
    strip2_d: "कम से कम समय में मशीनरी तैयार",
    strip3_t: "मजबूती की गारंटी",
    strip3_d: "हैवी ड्यूटी मेटल्स और कॉपर वायर इस्तेमाल",
    book_sub: "आसान और तेज़ बुकिंग",
    book_head: "ऑनलाइन सर्विस या रिपेयर स्लॉट बुक करें",
    book_desc: "वर्कशॉप पर भीड़ में इंतजार करने से बचें! अपना विवरण भरें, स्लॉट बुक करें और तय समय पर प्राथमिकता सेवा पाएं।",
    perk1_t: "जीरो वेटिंग टाइम",
    perk1_d: "पहले से स्लॉट बुक होने पर तुरंत काम शुरू",
    perk2_t: "फ्री 25-पॉइंट चेकअप",
    perk2_d: "ऑनलाइन बुकिंग पर मुफ़्त सामान्य डायग्नोसिस",
    perk3_t: "व्हाट्सएप पर स्टेटस अपडेट",
    perk3_d: "गाड़ी तैयार होते ही आपको मैसेज मिल जाएगा",
    urgent_help: "बाइक रास्ते में खराब है?",
    form_title: "सर्विस बुकिंग फॉर्म",
    lbl_name: "आपका पूरा नाम *",
    lbl_phone: "मोबाइल नंबर (WhatsApp) *",
    lbl_category: "काम का प्रकार चुनें *",
    lbl_vehicle: "बाइक मॉडल / मशीन का नाम",
    lbl_date: "पसंदीदा तारीख",
    lbl_notes: "समस्या या विवरण (वैकल्पिक)",
    btn_submit_booking: "WhatsApp पर बुकिंग कन्फर्म करें",
    booking_privacy: "आपका नंबर सुरक्षित है। हम कोई स्पैम नहीं करते।",
    toast_head: "बुकिंग तैयार!",
    toast_sub: "हम आपको व्हाट्सएप पर जोड़ रहे हैं...",
    opt_bike_gen: "बाइक जनरल सर्विसिंग",
    opt_bike_eng: "बाइक इंजन व बोरिंग काम",
    opt_bike_elec: "बाइक वायरिंग व बैटरी",
    opt_mach_lathe: "लेथ मशीन / खराद काम",
    opt_mach_motor: "इलेक्ट्रिक मोटर रिवाइंडिंग",
    opt_mach_weld: "वेल्डिंग व फैब्रिकेशन",
    opt_parts_buy: "स्पेयर पार्ट्स की खरीदारी",
    rev_sub: "⭐ गूगल मैप्स लाइव समीक्षा",
    rev_head: "सिंघई ऑटो पार्ट्स गूगल मैप्स रेटिंग व समीक्षाएं",
    rev_desc: "हमारे सभी ग्राहकों एवं वाहन स्वामियों की वास्तविक रेटिंग्स व समीक्षाएं सीधे गूगल मैप्स पर सत्यापित हैं।",
    google_rating_label: "उत्कृष्ट ग्राहक संतुष्टि एवं भरोसेमंद सेवा",
    google_prompt_text: "गढ़ाकोटा व सागर जिले के बाइक राइडर्स, गैराज मैकेनिकों एवं वर्कशॉप स्वामियों के वास्तविक अनुभव पढ़ने या अपनी समीक्षा साझा करने के लिए गूगल मैप्स पर पधारें।",
    btn_view_google_reviews: "गूगल मैप्स पर सभी लाइव रिव्यू देखें",
    btn_write_google_review: "अपनी रेटिंग / रिव्यू दर्ज करें",
    contact_sub: "हमसे मिलें",
    contact_head: "वर्कशॉप का पता और संपर्क सूत्र",
    contact_desc: "आप कभी भी हमारे वर्कशॉप पर आ सकते हैं या नीचे दिए गए नंबरों पर सीधे संपर्क कर सकते हैं।",
    c_addr_t: "वर्कशॉप का पता",
    c_addr_d: "सिंघई ऑटो पार्ट्स एवं इलेक्ट्रिकल्स, दमोह रोड, गढ़ाकोटा, जिला सागर (म.प्र.) - 470229",
    c_call_t: "कॉल व पूछताछ",
    c_wa_t: "व्हाट्सएप सहायता",
    c_time_t: "खुलने का समय",
    c_time_d: "सोमवार से रविवार: 09:00 AM - 10:00 PM (रोजाना खुला)",
    call_workshop: "वर्कशॉप पर कॉल करें",
    get_directions: "गूगल मैप पर लोकेशन देखें",
    faq_sub: "अक्सर पूछे जाने वाले सवाल",
    faq_head: "आम सवाल और उनके जवाब",
    faq_q1: "बाइक की सामान्य सर्विसिंग में कितना समय लगता है?",
    faq_a1: "सामान्य सर्विसिंग (वाशिंग, ऑयल चेंज, फिल्टर क्लीनिंग और ट्यूनिंग) में आमतौर पर 1.5 से 2 घंटे का समय लगता है। अगर आप पहले से स्लॉट बुक करके आते हैं तो गाड़ी और भी जल्दी हैंडओवर कर दी जाती है।",
    faq_q2: "क्या आप ओरिजिनल (कंपनी) स्पेयर पार्ट्स ही इस्तेमाल करते हैं?",
    faq_a2: "जी हां, 100%! हम Hero, Bajaj, Honda, TVS, Yamaha आदि के अधिकृत ओरिजिनल पार्ट्स और Castrol/Motul जैसे प्रमाणित ऑयल ही इस्तेमाल करते हैं। आप पार्ट का बारकोड व सील स्वयं चेक कर सकते हैं।",
    faq_q3: "मशीन रिपेयरिंग और लेथ वर्क में क्या-क्या काम होता है?",
    faq_a3: "हमारे पास आधुनिक लेथ मशीन और वेल्डिंग प्लांट है। हम टू-व्हीलर इंजन बोरिंग, क्रैंक अलाइनमेंट, चूड़ी बनाना, बुश कटिंग, समर्सिबल व पानी की मोटर रिवाइंडिंग, और कृषि मशीनरी (कुट्टी मशीन आदि) की रिपेयरिंग करते हैं।",
    faq_q4: "क्या पिकअप और ड्रॉप की सुविधा उपलब्ध है?",
    faq_a4: "जी हां, गढ़ाकोटा एवं आस-पास के 5-10 किलोमीटर के दायरे में पिकअप और ड्रॉप की सुविधा न्यूनतम चार्ज पर उपलब्ध है।",
    f_links: "त्वरित लिंक",
    f_services: "प्रमुख सेवाएं",
    f_contact_info: "संपर्क एवं समय",
    all_rights: "सर्वाधिकार सुरक्षित।",
    float_wa: "WhatsApp पर बात करें",
    float_call: "कॉल करें"
  },
  en: {
    timing: "Mon - Sun: 09:00 AM - 10:00 PM (Daily Open)",
    address_short: "Damoh Road, Garhakota, Dist. Sagar (M.P.)",
    logo_title: 'Singhai <span class="highlight">Auto</span> Parts',
    logo_subtitle: "Auto Parts, Service & Electricals • Garhakota",
    nav_home: "Home",
    nav_services: "Services",
    nav_parts: "Auto Parts",
    nav_machine: "Machine & Electricals",
    nav_booking: "Book Service",
    nav_reviews: "Reviews",
    nav_contact: "Contact & Map",
    cta_book_now: "Book Slot",
    hero_badge: "Garhakota's Trusted Two-Wheeler & Machine Workshop",
    hero_title: "Singhai Auto Parts: Bike Servicing, Genuine Spares & Machine Repairs!",
    hero_desc: "Located on Damoh Road, Garhakota. Your one-stop shop for two-wheeler tuning, engine boring, authentic spare parts, precision lathe work, welding, and electric motor rewinding.",
    hero_cta_book: "Book Service Slot Now",
    hero_cta_wa: "Chat on WhatsApp",
    stat_exp: "Years Experience",
    stat_bikes: "Bikes Repaired & Serviced",
    stat_parts: "Genuine Spare Parts",
    top_rated: "Top-Rated Workshop",
    hl1_t: "Mobil Oil & Filter Replacement",
    hl1_d: "Castrol, Motul, Shell 100% genuine grades",
    hl2_t: "Lathe Machining & Precision Welding",
    hl2_d: "Lathe turning, drilling, threading, engine cylinder boring",
    hl3_t: "Quick Pickup & Drop",
    hl3_d: "On-demand doorstep facility in nearby localities",
    trust_note: "Honest workmanship, fair prices & guaranteed customer delight!",
    feat_1_t: "Master Mechanics",
    feat_1_d: "Specialists in commuter, sports bikes, and automatic scooters",
    feat_2_t: "Original Parts Stock",
    feat_2_d: "Hero, Bajaj, Honda, TVS, Yamaha, Royal Enfield spares",
    feat_3_t: "Lathe & Machinery Setup",
    feat_3_d: "Engine boring, metal turning, thread fixing, electric motor rewinding",
    feat_4_t: "Fair & Honest Pricing",
    feat_4_d: "Transparent estimates, no hidden charges, genuine bill",
    services_sub: "Workshop Offerings",
    services_head: "Two-Wheeler Servicing & Maintenance Packages",
    services_desc: "Ensure peak performance, higher mileage, and safety for your bike with computer-assisted diagnostic tools and experienced hands.",
    srv_1_t: "Full General Servicing",
    srv_1_d: "Thorough washing, carburetor/FI cleaning, spark plug check, chain lube, brake tuning & full body tightening.",
    srv_1_p1: "Mileage & acceleration optimization",
    srv_1_p2: "High-pressure snow foam wash & polish",
    srv_1_p3: "25+ comprehensive point safety check",
    srv_2_t: "Engine Overhaul & Cylinder Boring",
    srv_2_d: "Fix smoke exhaust, engine knocking, oil leakage, piston ring fitting and clutch rebuild with factory precision.",
    srv_2_p1: "Genuine piston & valve sets",
    srv_2_p2: "Crank alignment & bearing overhaul",
    srv_2_p3: "6-month smooth running assurance",
    srv_3_t: "Electrical & Battery Diagnostics",
    srv_3_d: "Self-starter rebuild, wire short circuit diagnosis, digital meter fix, LED lighting upgrades, Exide/Amaron batteries.",
    srv_3_p1: "Starter motor & relay service",
    srv_3_p2: "Battery voltage & load test",
    srv_3_p3: "High-output LED headlamp fitting",
    srv_4_t: "Brakes, Tires & Suspension Overhaul",
    srv_4_d: "Disc pads, drum shoes, shocker oil seal overhaul, tubeless puncture fixes, rim truing and balance.",
    srv_4_p1: "Fork oil & hydraulic damper service",
    srv_4_p2: "DOT4 brake fluid bleeding",
    srv_4_p3: "Wheel rim bend correction",
    srv_5_t: "Snow Foam Wash & Teflon Polish",
    srv_5_d: "Complete dirt degreasing, scratch removal, 3M Teflon wax and hydrophobic ceramic protective coat.",
    srv_5_p1: "Underbody grease removal",
    srv_5_p2: "Showroom-grade high gloss shine",
    srv_5_p3: "Anti-rust chassis protective coating",
    srv_6_t: "Emergency Roadside Assistance",
    srv_6_d: "Stuck on the road? Immediate on-site roadside repair, towing assistance and breakdown troubleshooting.",
    srv_6_p1: "Prompt arrival within local limits",
    srv_6_p2: "Jump-start & fuel delivery",
    srv_6_p3: "On-the-spot tubeless puncture solution",
    starts_from: "Starts at",
    book_srv: "Book Now",
    inspection: "On Inspection",
    emergency_call: "Urgent Call",
    call_now: "Call Us",
    most_popular: "Most Popular",
    parts_sub: "Genuine Auto Parts",
    parts_head: "Authentic Spare Parts for All Leading Brands",
    parts_desc: "Avoid fake duplicate spares! We stock sealed, genuine components directly sourced from authorized distributors.",
    tab_all: "All Parts",
    tab_engine: "Engine & Lubricants",
    tab_brakes: "Brakes & Drive",
    tab_electrical: "Electrical & Batteries",
    tab_body: "Body & Accessories",
    part_1_t: "Premium 4T Engine Oil",
    part_1_c: "Castrol, Motul, Shell, HP 20W40 / 10W40",
    part_2_t: "Disc Pads & Brake Shoes",
    part_2_c: "Endurance, KBX, Bosch - Pulsar, Activa, Apache, Shine",
    part_3_t: "Drive Chain & Sprocket Kits",
    part_3_c: "Rolon, Diamond, Heavy-Duty OEM kits for all bikes",
    part_4_t: "Two-Wheeler Sealed Batteries",
    part_4_c: "Exide Xplore, Amaron Pro Rider (2.5L/4L/5L) with warranty",
    part_5_t: "Clutch Plate & Pressure Assembly",
    part_5_c: "MK, FCC, Genuine friction plates for maximum grip",
    part_6_t: "Spark Plugs (Iridium / Standard)",
    part_6_c: "NGK, Champion, Bosch high-ignition spark plugs",
    part_7_t: "Headlamps, Indicators & Mirrors",
    part_7_c: "Lumax, Uno Minda OEM grade fit & crystal finish",
    part_8_t: "Air & Oil Filter Elements",
    part_8_c: "Clean airflow delivers up to 20% better fuel economy",
    inquire: "Inquire",
    brands_supported: "Supported Bike Brands & Spares Partners",
    mach_sub: "Machinery & Lathe Engineering",
    mach_head: "Lathe Machining, Welding & Machine Repairs",
    mach_desc: "Beyond bikes, we operate a fully equipped lathe workshop for high-precision metal turning, electric motor rewinding, and repair of workshop machinery.",
    mach_card1_t: "Precision Lathe Machining & Turning",
    mach_card1_d: "Engine block re-boring, cylinder sleeving, crankshaft straightening, custom bush making & precision threading.",
    mach_card2_t: "Arc, Gas & Argon Welding",
    mach_card2_d: "Heavy-duty structural welding for bike frames, exhaust silencers, industrial brackets, cast iron and aluminum.",
    mach_card3_t: "Electric Motor & Pump Overhauls",
    mach_card3_d: "Submersible pump servicing, domestic water pumps, flour mill motors, 3-phase industrial motor rewinding.",
    mach_card4_t: "Agricultural & Workshop Power Tools",
    mach_card4_d: "Angle grinders, rotary hammer drills, generators, chaff cutters (kutty machine), and farming tool repairs.",
    strip1_t: "Micrometer Precision",
    strip1_d: "Tolerances down to 0.01 mm for perfect fit",
    strip2_t: "On-Time Handover",
    strip2_d: "Fast turnaround minimizing downtime",
    strip3_t: "Heavy-Duty Quality",
    strip3_d: "Top-grade metals and 99.9% pure copper coils",
    book_sub: "Quick & Easy Appointment",
    book_head: "Book Your Service or Repair Slot Online",
    book_desc: "Avoid the queue! Fill your details, select preferred timing, and enjoy priority service at our workshop.",
    perk1_t: "Zero Waiting Time",
    perk1_d: "Dedicated bay allocated when you arrive on schedule",
    perk2_t: "Complimentary 25-Point Check",
    perk2_d: "Free comprehensive inspection with every online booking",
    perk3_t: "WhatsApp Status Alerts",
    perk3_d: "Live status message as soon as your bike/machine is ready",
    urgent_help: "Broken down on the road?",
    form_title: "Service Appointment Form",
    lbl_name: "Your Full Name *",
    lbl_phone: "Mobile Number (WhatsApp) *",
    lbl_category: "Select Service Type *",
    lbl_vehicle: "Bike Model or Machine Name",
    lbl_date: "Preferred Date",
    lbl_notes: "Issue Details (Optional)",
    btn_submit_booking: "Confirm Booking on WhatsApp",
    booking_privacy: "We respect your privacy. No spam guarantee.",
    toast_head: "Booking Initiated!",
    toast_sub: "Connecting you to our WhatsApp assistant...",
    opt_bike_gen: "Bike General Servicing",
    opt_bike_eng: "Bike Engine Overhaul & Boring",
    opt_bike_elec: "Bike Wiring & Electrical Check",
    opt_mach_lathe: "Lathe Machining / Turning",
    opt_mach_motor: "Electric Motor Rewinding",
    opt_mach_weld: "Welding & Fabrication",
    opt_parts_buy: "Spare Parts Purchase",
    rev_sub: "⭐ Google Maps Live Reviews",
    rev_head: "Singhai Auto Parts Google Maps Ratings & Reviews",
    rev_desc: "All customer and vehicle owner ratings are authentic, verified directly on our official Google Maps profile.",
    google_rating_label: "Outstanding Customer Satisfaction & Reliability",
    google_prompt_text: "Read authentic feedback from bike riders, mechanics, and workshop owners across Garhakota, or write your own verified review on Google Maps.",
    btn_view_google_reviews: "View Real Reviews on Google Maps",
    btn_write_google_review: "Write a Review on Google",
    contact_sub: "Visit Us",
    contact_head: "Workshop Location & Contact Info",
    contact_desc: "Feel free to visit our facility or call us directly for inquiries and estimates.",
    c_addr_t: "Workshop Address",
    c_addr_d: "Singhai Auto Parts & Electricals, Damoh Road, Garhakota, Dist. Sagar, Madhya Pradesh - 470229",
    c_call_t: "Phone & Inquiries",
    c_wa_t: "WhatsApp Support",
    c_time_t: "Working Hours",
    c_time_d: "Mon - Sun: 09:00 AM - 10:00 PM (Open 7 Days)",
    call_workshop: "Call Workshop",
    get_directions: "View on Google Maps",
    faq_sub: "Frequently Asked Questions",
    faq_head: "Clear Answers to Common Questions",
    faq_q1: "How much time does a standard bike service take?",
    faq_a1: "A regular service (pressure wash, fresh engine oil, filter clean, brake adjustments, chain lube) takes about 1.5 to 2 hours. Pre-booked slots receive priority handling.",
    faq_q2: "Do you supply 100% original company spare parts?",
    faq_a2: "Absolutely! We only install certified genuine spares from Hero, Bajaj, Honda, TVS, Yamaha, etc., along with branded lubricants like Castrol and Motul. You are welcome to inspect holograms and barcodes.",
    faq_q3: "What types of machinery and lathe work do you handle?",
    faq_a3: "We handle engine block boring, crankshaft balancing, threading, lathe turning, welding (iron/aluminum), domestic water motor and agricultural motor rewinding, and chaff cutter (kutty machine) repairs.",
    faq_q4: "Is pickup and drop facility available?",
    faq_a4: "Yes, we provide pickup and drop service within a 5 km radius at a nominal fee. You can request pickup via phone or WhatsApp.",
    f_links: "Quick Links",
    f_services: "Top Services",
    f_contact_info: "Contact & Hours",
    all_rights: "All rights reserved.",
    float_wa: "Chat on WhatsApp",
    float_call: "Call Us"
  }
};

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('singhai_lang', lang);
  document.documentElement.lang = lang;
  const dict = translations[lang];

  // Update text for all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update button label
  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'hi' ? 'English' : 'हिंदी';
  }

  // Update Select options
  const selectCategory = document.getElementById('serviceCategory');
  if (selectCategory) {
    selectCategory.querySelectorAll('option').forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      if (key && dict[key]) {
        opt.textContent = dict[key];
      }
    });
  }

  // Update input placeholders if needed
  const nameInput = document.getElementById('customerName');
  if (nameInput) {
    nameInput.placeholder = lang === 'hi' ? 'जैसे: राहुल शर्मा' : 'e.g. Rahul Sharma';
  }
  const phoneInput = document.getElementById('customerPhone');
  if (phoneInput) {
    phoneInput.placeholder = lang === 'hi' ? '10 अंकों का मोबाइल नंबर' : '10-digit mobile number';
  }
  const notesInput = document.getElementById('problemNotes');
  if (notesInput) {
    notesInput.placeholder = lang === 'hi' 
      ? 'गाड़ी या मशीन में क्या खराबी आ रही है, यहां लिखें...' 
      : 'Describe the issue with your bike or machine...';
  }
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  // Set default date to today in booking input
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }

  // Apply default language (English)
  const savedLang = localStorage.getItem('singhai_lang') || 'en';
  applyLanguage(savedLang);

  // Language switch event
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'hi' ? 'en' : 'hi';
      applyLanguage(nextLang);
    });
  }

  // Mobile navigation drawer toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // Auto Parts Filtering
  const filterBtns = document.querySelectorAll('.tab-btn');
  const partCards = document.querySelectorAll('.part-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      partCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      // Close other accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Booking Form Submission via WhatsApp
  const bookingForm = document.getElementById('serviceBookingForm');
  const bookingToast = document.getElementById('bookingToast');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('customerName').value.trim();
      const phone = document.getElementById('customerPhone').value.trim();
      const category = document.getElementById('serviceCategory').value;
      const vehicle = document.getElementById('vehicleModel').value.trim() || 'Not specified';
      const date = document.getElementById('preferredDate').value;
      const notes = document.getElementById('problemNotes').value.trim() || 'None';

      const whatsappNumber = "917389024644"; // Shopkeeper's WhatsApp number

      const msgHindi = `*नई सर्विस बुकिंग:*%0A` +
        `👤 *ग्राहक:* ${name}%0A` +
        `📞 *मोबाइल:* ${phone}%0A` +
        `🛠️ *सेवा प्रकार:* ${category}%0A` +
        `🏍️ *मॉडल/मशीन:* ${vehicle}%0A` +
        `📅 *तारीख:* ${date}%0A` +
        `📝 *समस्या विवरण:* ${notes}%0A%0A` +
        `_कृपया समय व स्लॉट कन्फर्म करें।_`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${msgHindi}`;

      // Show friendly confirmation toast then redirect
      if (bookingToast) {
        bookingToast.classList.add('active');
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
          bookingToast.classList.remove('active');
          bookingForm.reset();
        }, 1200);
      } else {
        window.open(whatsappUrl, '_blank');
      }
    });
  }

  // Intersection Observer for Scroll Animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }

  // Active section spy on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*='${sectionId}']`);
      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });
});
