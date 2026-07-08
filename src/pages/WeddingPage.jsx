import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

// weddingData... (kept same as your provided code)
const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Pune, Maharashtra",
    caption: [
      "Amruta & Amey’s wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
"From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
    ],
  images: [
      img("Amruta_Amey/img233.webp"),
  img("Amruta_Amey/img200.webp"),
  img("Amruta_Amey/img202.webp"),
  img("Amruta_Amey/img203.webp"),
  img("Amruta_Amey/img204.webp"),
  img("Amruta_Amey/img205.webp"),
  img("Amruta_Amey/img206.webp"),
  img("Amruta_Amey/img207.webp"),
  img("Amruta_Amey/img208.webp"),
  img("Amruta_Amey/img209.webp"),
  img("Amruta_Amey/img213.webp"),
  img("Amruta_Amey/img216.webp"),
  img("Amruta_Amey/img218.webp"),

  img("Amruta_Amey/img221.webp"),
  img("Amruta_Amey/img223.webp"),
  img("Amruta_Amey/img225.webp"),
  img("Amruta_Amey/img229.webp"),
  img("Amruta_Amey/img232.webp"),
  img("Amruta_Amey/img234.webp"),
  img("Amruta_Amey/img235.webp"),
  img("Amruta_Amey/img236.webp"),
  img("Amruta_Amey/img237.webp"),
  img("Amruta_Amey/img238.webp"),
  img("Amruta_Amey/img239.webp"),

  img("Amruta_Amey/img240.webp"),
  img("Amruta_Amey/img241.webp"),
  img("Amruta_Amey/img242.webp"),
  img("Amruta_Amey/img243.webp"),
  img("Amruta_Amey/img244.webp"),
  img("Amruta_Amey/img245.webp"),
  img("Amruta_Amey/img246.webp"),
  img("Amruta_Amey/img247.webp"),
  img("Amruta_Amey/img248.webp"),
  img("Amruta_Amey/img249.webp"),
  img("Amruta_Amey/img250.webp"),
  img("Amruta_Amey/img251.webp"),

  img("Amruta_Amey/img252.webp"),
  img("Amruta_Amey/img253.webp"),
  img("Amruta_Amey/img254.webp"),
  img("Amruta_Amey/img255.webp"),
  img("Amruta_Amey/img256.webp"),
  img("Amruta_Amey/img257.webp"),
  img("Amruta_Amey/img258.webp"),
  img("Amruta_Amey/img259.webp"),
  img("Amruta_Amey/img260.webp"),
  img("Amruta_Amey/img261.webp"),
  img("Amruta_Amey/img262.webp"),
  img("Amruta_Amey/img263.webp"),

  img("Amruta_Amey/img264.webp"),
  img("Amruta_Amey/img265.webp"),
  img("Amruta_Amey/img266.webp"),
  img("Amruta_Amey/img267.webp"),
  img("Amruta_Amey/img269.webp"),
  img("Amruta_Amey/img270.webp"),
]
  },
  "abhimanyu-manisha": {
    couple: "Abhimanyu & Manisha",
    location: "Pune, Maharashtra",
    caption: [
      "Abhimanyu and Manisha’s wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second. As the celebrations moved ahead the baraat brought in a different kind of energy that pulled everyone together and turned it into a full celebration.",
      "When the ceremony began everything slowed down and felt calm and meaningful. In between it all they stayed present sharing real moments with their people. Nothing felt forced or planned it just flowed naturally. It was warm honest and truly a reflection of them."
    ],
    images: [
      img("Abhimanyu_Manisha/img613.webp"),
      img("Abhimanyu_Manisha/img600.webp"),
      img("Abhimanyu_Manisha/img601.webp"),
      img("Abhimanyu_Manisha/img602.webp"),
      img("Abhimanyu_Manisha/img603.webp"),
      img("Abhimanyu_Manisha/img604.webp"),
      img("Abhimanyu_Manisha/img605.webp"),
      img("Abhimanyu_Manisha/img606.webp"),
      img("Abhimanyu_Manisha/img607.webp"),
      img("Abhimanyu_Manisha/img608.webp"),
      img("Abhimanyu_Manisha/img609.webp"),
      img("Abhimanyu_Manisha/img610.webp"),
      img("Abhimanyu_Manisha/img611.webp"),
      img("Abhimanyu_Manisha/img612.webp"),
      img("Abhimanyu_Manisha/img614.webp"),
      img("Abhimanyu_Manisha/img615.webp"),
      img("Abhimanyu_Manisha/img616.webp"),
      img("Abhimanyu_Manisha/img617.webp"),
      img("Abhimanyu_Manisha/img618.webp"),
      img("Abhimanyu_Manisha/img624.webp"),
      img("Abhimanyu_Manisha/img620.webp"),
      img("Abhimanyu_Manisha/img621.webp"),
      img("Abhimanyu_Manisha/img622.webp"),
      img("Abhimanyu_Manisha/img623.webp"),
    ]
  },
  "bhakti-sourabh": {
    couple: "Bhakti & Sourabh",
    location: "Jodhpur, Rajasthan",
    caption: [
      "Bhakti and Sourabh’s wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings filled with music and dance.",
      "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people. Nothing felt overdone yet everything felt complete. It was a celebration full of warmth energy and connection that stayed consistent from start to finish."
    ],
    images: [
      img("Bhakti_Sourabh/img356.webp"),
  img("Bhakti_Sourabh/img301.webp"),
  img("Bhakti_Sourabh/img303.webp"),
  img("Bhakti_Sourabh/img304.webp"),
  img("Bhakti_Sourabh/img307.webp"),
  img("Bhakti_Sourabh/img308.webp"),
  img("Bhakti_Sourabh/img309.webp"),
  img("Bhakti_Sourabh/img310.webp"),
  img("Bhakti_Sourabh/img311.webp"),
  img("Bhakti_Sourabh/img312.webp"),
  img("Bhakti_Sourabh/img313.webp"),
  img("Bhakti_Sourabh/img314.webp"),
  img("Bhakti_Sourabh/img315.webp"),

  img("Bhakti_Sourabh/img316.webp"),
  img("Bhakti_Sourabh/img317.webp"),
  img("Bhakti_Sourabh/img318.webp"),
  img("Bhakti_Sourabh/img319.webp"),
  img("Bhakti_Sourabh/img320.webp"),
  img("Bhakti_Sourabh/img321.webp"),
  img("Bhakti_Sourabh/img322.webp"),
  img("Bhakti_Sourabh/img323.webp"),
  img("Bhakti_Sourabh/img324.webp"),
  img("Bhakti_Sourabh/img326.webp"),
  img("Bhakti_Sourabh/img327.webp"),
  img("Bhakti_Sourabh/img328.webp"),

  img("Bhakti_Sourabh/img329.webp"),
  img("Bhakti_Sourabh/img330.webp"),
  img("Bhakti_Sourabh/img331.webp"),
  img("Bhakti_Sourabh/img332.webp"),
  img("Bhakti_Sourabh/img333.webp"),
  img("Bhakti_Sourabh/img334.webp"),
  img("Bhakti_Sourabh/img335.webp"),
  img("Bhakti_Sourabh/img336.webp"),
  img("Bhakti_Sourabh/img337.webp"),
  img("Bhakti_Sourabh/img338.webp"),
  img("Bhakti_Sourabh/img339.webp"),
  img("Bhakti_Sourabh/img340.webp"),

  img("Bhakti_Sourabh/img341.webp"),
  img("Bhakti_Sourabh/img342.webp"),
  img("Bhakti_Sourabh/img343.webp"),
  img("Bhakti_Sourabh/img344.webp"),
  img("Bhakti_Sourabh/img345.webp"),
  img("Bhakti_Sourabh/img346.webp"),
  img("Bhakti_Sourabh/img347.webp"),
  img("Bhakti_Sourabh/img348.webp"),
  img("Bhakti_Sourabh/img349.webp"),
  img("Bhakti_Sourabh/img350.webp"),
  img("Bhakti_Sourabh/img351.webp"),
  img("Bhakti_Sourabh/img352.webp"),

  img("Bhakti_Sourabh/img353.webp"),
  img("Bhakti_Sourabh/img354.webp"),
  img("Bhakti_Sourabh/img355.webp"),
  
  img("Bhakti_Sourabh/img357.webp"),
  img("Bhakti_Sourabh/img358.webp"),
  img("Bhakti_Sourabh/img359.webp"),
]
  },
  "Rohan-preksha": {
    couple: "Rohan & Preksha",
    location: "Pushkar, Rajasthan",
    caption: [
      "Rohan and Preksha’s wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner. From playful haldi moments to laughter that carried through the mehendi, everything felt alive.",
      "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them. Even during the ceremony, there was a lightness that stayed. It felt fun, spontaneous and completely true to who they are."
    ],
 images: [
      img("Rohan_Preksha/img538.webp"),
  img("Rohan_Preksha/img500.webp"),
  img("Rohan_Preksha/img501.webp"),
  img("Rohan_Preksha/img502.webp"),
  img("Rohan_Preksha/img503.webp"),
  img("Rohan_Preksha/img504.webp"),
  img("Rohan_Preksha/img505.webp"),
  img("Rohan_Preksha/img506.webp"),
  img("Rohan_Preksha/img507.webp"),
  img("Rohan_Preksha/img508.webp"),
  img("Rohan_Preksha/img509.webp"),
  img("Rohan_Preksha/img510.webp"),
  img("Rohan_Preksha/img511.webp"),

  img("Rohan_Preksha/img512.webp"),
  img("Rohan_Preksha/img513.webp"),
  img("Rohan_Preksha/img514.webp"),
  img("Rohan_Preksha/img515.webp"),
  img("Rohan_Preksha/img516.webp"),
  img("Rohan_Preksha/img517.webp"),
  img("Rohan_Preksha/img518.webp"),
  img("Rohan_Preksha/img519.webp"),
  img("Rohan_Preksha/img520.webp"),
  img("Rohan_Preksha/img521.webp"),
  img("Rohan_Preksha/img522.webp"),
  img("Rohan_Preksha/img523.webp"),

  img("Rohan_Preksha/img524.webp"),
  img("Rohan_Preksha/img525.webp"),
  img("Rohan_Preksha/img526.webp"),
  img("Rohan_Preksha/img527.webp"),
  img("Rohan_Preksha/img528.webp"),
  img("Rohan_Preksha/img529.webp"),
  img("Rohan_Preksha/img530.webp"),
  img("Rohan_Preksha/img531.webp"),
  img("Rohan_Preksha/img532.webp"),
  img("Rohan_Preksha/img533.webp"),
  img("Rohan_Preksha/img534.webp"),
  img("Rohan_Preksha/img535.webp"),

  img("Rohan_Preksha/img536.webp"),
  img("Rohan_Preksha/img537.webp"),
  
  img("Rohan_Preksha/img539.webp"),
  img("Rohan_Preksha/img540.webp"),
  img("Rohan_Preksha/img541.webp"),
  img("Rohan_Preksha/img542.webp"),
  img("Rohan_Preksha/img543.webp"),
  img("Rohan_Preksha/img544.webp"),
  img("Rohan_Preksha/img545.webp"),
  img("Rohan_Preksha/img546.webp"),
  img("Rohan_Preksha/img547.webp"),
  img("Rohan_Preksha/img548.webp"),
  img("Rohan_Preksha/img549.webp"),
  img("Rohan_Preksha/img550.webp"),
]
  },
  "Chaitrali_Shubham": {
    couple: "Chaitrali & Shubham",
    location: "Pune, Maharashtra",
    caption: [
      "Chaitrali and Shubham’s wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way. There was laughter in the louder moments and a quiet kind of emotion that stayed in the background throughout.",
      "What stood out was how effortlessly everything came together. Nothing felt rushed or overdone. Just two people surrounded by their families, celebrating in a way that felt familiar, comforting, and truly their own."
    ],
    images: [
      img("Chaitrali_Shubham/img401.webp"),
      img("Chaitrali_Shubham/img402.webp"),
      img("Chaitrali_Shubham/img403.webp"),
      img("Chaitrali_Shubham/img404.webp"),
      img("Chaitrali_Shubham/img405.webp"),
      img("Chaitrali_Shubham/img406.webp"),
      img("Chaitrali_Shubham/img407.webp"),
      img("Chaitrali_Shubham/img408.webp"),
      img("Chaitrali_Shubham/img409.webp"),
      img("Chaitrali_Shubham/img411.webp"),
      img("Chaitrali_Shubham/img412.webp"),
      img("Chaitrali_Shubham/img413.webp"),
      img("Chaitrali_Shubham/img414.webp"),
      img("Chaitrali_Shubham/img415.webp"),
      img("Chaitrali_Shubham/img416.webp"),
      img("Chaitrali_Shubham/img417.webp"),
      img("Chaitrali_Shubham/img418.webp"),
      img("Chaitrali_Shubham/img419.webp"),
      img("Chaitrali_Shubham/img420.webp"),
      img("Chaitrali_Shubham/img421.webp"),
      img("Chaitrali_Shubham/img422.webp"),
      img("Chaitrali_Shubham/img423.webp"),
      img("Chaitrali_Shubham/img424.webp"),
      img("Chaitrali_Shubham/img425.webp"),
      img("Chaitrali_Shubham/img426.webp"),
      img("Chaitrali_Shubham/img427.webp"),
      img("Chaitrali_Shubham/img428.webp"),
      img("Chaitrali_Shubham/img429.webp"),
      img("Chaitrali_Shubham/img430.webp"),
      img("Chaitrali_Shubham/img432.webp"),
      img("Chaitrali_Shubham/img434.webp"),
      img("Chaitrali_Shubham/img435.webp"),
      img("Chaitrali_Shubham/img436.webp"),
      img("Chaitrali_Shubham/img438.webp"),
      img("Chaitrali_Shubham/img439.webp"),
    ]
  },
  "Aishwarya_Sanmay": {
    couple: "Aishwarya & Sanmay",
    location: "Pune, Maharashtra",
    caption: [
      "Aishwarya and Sanmay’s wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout. There was always something happening, yet it never felt overwhelming.",
      "What stood out was how naturally they moved through it all. Whether it was laughter during the smaller moments or the quiet pauses they shared, everything felt real. It wasn’t about the scale or the setup, but about how present they were with each other and everyone around them."
    ],
    images: [
      img("Aishwarya_Sanmay/img38.webp"),
  img("Aishwarya_Sanmay/img0.webp"),
  img("Aishwarya_Sanmay/img1.webp"),
  img("Aishwarya_Sanmay/img3.webp"),
  img("Aishwarya_Sanmay/img4.webp"),
  img("Aishwarya_Sanmay/img5.webp"),
  img("Aishwarya_Sanmay/img6.webp"),
  img("Aishwarya_Sanmay/img9.webp"),
  img("Aishwarya_Sanmay/img11.webp"),
  img("Aishwarya_Sanmay/img12.webp"),
  img("Aishwarya_Sanmay/img13.webp"),
  img("Aishwarya_Sanmay/img15.webp"),
  img("Aishwarya_Sanmay/img17.webp"),
  img("Aishwarya_Sanmay/img18.webp"),
  img("Aishwarya_Sanmay/img19.webp"),
  img("Aishwarya_Sanmay/img20.webp"),
  img("Aishwarya_Sanmay/img22.webp"),
  img("Aishwarya_Sanmay/img23.webp"),
  img("Aishwarya_Sanmay/img25.webp"),
  img("Aishwarya_Sanmay/img26.webp"),
  img("Aishwarya_Sanmay/img27.webp"),
  img("Aishwarya_Sanmay/img28.webp"),
  img("Aishwarya_Sanmay/img29.webp"),
  img("Aishwarya_Sanmay/img30.webp"),
  img("Aishwarya_Sanmay/img31.webp"),
  img("Aishwarya_Sanmay/img32.webp"),
  img("Aishwarya_Sanmay/img33.webp"),
  img("Aishwarya_Sanmay/img35.webp"),
  img("Aishwarya_Sanmay/img36.webp"),
  
  img("Aishwarya_Sanmay/img39.webp"),
  img("Aishwarya_Sanmay/img40.webp"),
  
  img("Aishwarya_Sanmay/img42.webp"),
  img("Aishwarya_Sanmay/img43.webp"),
  img("Aishwarya_Sanmay/img44.webp"),
  img("Aishwarya_Sanmay/img45.webp"),
  img("Aishwarya_Sanmay/img47.webp"),
  img("Aishwarya_Sanmay/img48.webp"),
  img("Aishwarya_Sanmay/img50.webp"),
  img("Aishwarya_Sanmay/img51.webp"),
  img("Aishwarya_Sanmay/img52.webp"),
  img("Aishwarya_Sanmay/img53.webp"),
  img("Aishwarya_Sanmay/img54.webp"),
  img("Aishwarya_Sanmay/img55.webp"),
  img("Aishwarya_Sanmay/img56.webp"),
  img("Aishwarya_Sanmay/img57.webp"),
  img("Aishwarya_Sanmay/img58.webp"),
  img("Aishwarya_Sanmay/img59.webp"),
  img("Aishwarya_Sanmay/img60.webp"),
  img("Aishwarya_Sanmay/img61.webp"),
  img("Aishwarya_Sanmay/img62.webp"),
  img("Aishwarya_Sanmay/img63.webp"),
  img("Aishwarya_Sanmay/img64.webp"),
  img("Aishwarya_Sanmay/img65.webp"),
  img("Aishwarya_Sanmay/img66.webp"),
  img("Aishwarya_Sanmay/img67.webp"),
  img("Aishwarya_Sanmay/img68.webp"),
  img("Aishwarya_Sanmay/img69.webp"),
  img("Aishwarya_Sanmay/img70.webp"),
  img("Aishwarya_Sanmay/img71.webp"),
  img("Aishwarya_Sanmay/img72.webp"),
  img("Aishwarya_Sanmay/img73.webp"),
  img("Aishwarya_Sanmay/img74.webp"),
  img("Aishwarya_Sanmay/img75.webp"),
  img("Aishwarya_Sanmay/img76.webp"),
  img("Aishwarya_Sanmay/img77.webp"),
  img("Aishwarya_Sanmay/img78.webp"),
  img("Aishwarya_Sanmay/img80.webp"),
  img("Aishwarya_Sanmay/img81.webp"),
  img("Aishwarya_Sanmay/img82.webp"),
  img("Aishwarya_Sanmay/img84.webp"),
  img("Aishwarya_Sanmay/img85.webp"),
]
  },
   "Atish_Shweta": {
    couple: "Atish & Shweta",
    location: "Pune, Maharashtra",
    caption: [
      "Atish and Shweta's wedding was filled with moments that kept everyone involved. One ritual led to another, family members stepped in with advice, laughter followed almost every tradition and there was always a reaction worth watching.",
      "Between all the ceremonies and celebrations, they found time to exchange glances that said more than the words around them."
    ],
  images: [
  img("Atish_Shweta/img4001.webp"),
  img("Atish_Shweta/img4002.webp"),
  img("Atish_Shweta/img4003.webp"),
  img("Atish_Shweta/img4004.webp"),
  img("Atish_Shweta/img4005.webp"),
  img("Atish_Shweta/img4006.webp"),
  img("Atish_Shweta/img4007.webp"),
  img("Atish_Shweta/img4008.webp"),
  img("Atish_Shweta/img4009.webp"),
  img("Atish_Shweta/img4010.webp"),
  img("Atish_Shweta/img4011.webp"),
  img("Atish_Shweta/img4012.webp"),
  img("Atish_Shweta/img4013.webp"),
  img("Atish_Shweta/img4014.webp"),
  img("Atish_Shweta/img4015.webp"),
  img("Atish_Shweta/img4016.webp"),
  img("Atish_Shweta/img4017.webp"),
  img("Atish_Shweta/img4018.webp"),
  img("Atish_Shweta/img4019.webp"),
  img("Atish_Shweta/img4020.webp"),
  img("Atish_Shweta/img4021.webp"),
  img("Atish_Shweta/img4022.webp"),
  img("Atish_Shweta/img4023.webp"),
  img("Atish_Shweta/img4024.webp"),
  img("Atish_Shweta/img4025.webp"),
  img("Atish_Shweta/img4026.webp"),
  img("Atish_Shweta/img4027.webp"),
  img("Atish_Shweta/img4028.webp"),
  img("Atish_Shweta/img4029.webp"),
  img("Atish_Shweta/img4030.webp"),
  img("Atish_Shweta/img4031.webp"),
  img("Atish_Shweta/img4032.webp"),
  img("Atish_Shweta/img4033.webp"),
  img("Atish_Shweta/img4034.webp"),
  img("Atish_Shweta/img4035.webp"),
  img("Atish_Shweta/img4036.webp"),
  img("Atish_Shweta/img4037.webp"),
  img("Atish_Shweta/img4038.webp"),
  img("Atish_Shweta/img4039.webp"),
  img("Atish_Shweta/img4040.webp"),
  img("Atish_Shweta/img4041.webp"),
  img("Atish_Shweta/img4042.webp"),
  ]   
},

  "Gaurav_Chinmaee": {
    couple: "Gaurav & Chinmaee",
    location: "Pune, Maharashtra",
    caption: [
      "Gaurav and Chinmaee's wedding in Pune was filled with warmth, laughter and moments shared with their closest people. From the bright haldi celebrations to the wedding ceremony, every part of the day felt joyful and relaxed.",
      "Surrounded by family and friends, they embraced each moment as it came, making the celebration feel genuine, memorable and truly their own."
    ],
  images: [
  img("Gaurav_Chinmaee/img901.webp"),
  img("Gaurav_Chinmaee/img902.webp"),
  img("Gaurav_Chinmaee/img903.webp"),
  img("Gaurav_Chinmaee/img904.webp"),
  img("Gaurav_Chinmaee/img905.webp"),
  img("Gaurav_Chinmaee/img906.webp"),
  img("Gaurav_Chinmaee/img907.webp"),
  img("Gaurav_Chinmaee/img908.webp"),
  img("Gaurav_Chinmaee/img909.webp"),
  img("Gaurav_Chinmaee/img910.webp"),
  img("Gaurav_Chinmaee/img911.webp"),
  img("Gaurav_Chinmaee/img912.webp"),
  img("Gaurav_Chinmaee/img913.webp"),
  img("Gaurav_Chinmaee/img914.webp"),
  img("Gaurav_Chinmaee/img915.webp"),
  img("Gaurav_Chinmaee/img916.webp"),
  img("Gaurav_Chinmaee/img917.webp"),
  img("Gaurav_Chinmaee/img918.webp"),
  img("Gaurav_Chinmaee/img919.webp"),
  img("Gaurav_Chinmaee/img920.webp"),
  img("Gaurav_Chinmaee/img921.webp"),
  img("Gaurav_Chinmaee/img922.webp"),
  img("Gaurav_Chinmaee/img923.webp"),
  img("Gaurav_Chinmaee/img924.webp"),
  img("Gaurav_Chinmaee/img925.webp"),
  img("Gaurav_Chinmaee/img926.webp"),
  img("Gaurav_Chinmaee/img927.webp"),
  img("Gaurav_Chinmaee/img928.webp"),
  img("Gaurav_Chinmaee/img929.webp"),
  img("Gaurav_Chinmaee/img930.webp"),
  img("Gaurav_Chinmaee/img931.webp"),
  img("Gaurav_Chinmaee/img932.webp"),
  img("Gaurav_Chinmaee/img933.webp"),
  img("Gaurav_Chinmaee/img934.webp"),
  img("Gaurav_Chinmaee/img935.webp"),
  img("Gaurav_Chinmaee/img936.webp"),
  img("Gaurav_Chinmaee/img937.webp"),
  img("Gaurav_Chinmaee/img938.webp"),
  ]
},

  "Raj_Suhasini": {
    couple: "Raj & Suhasini",
    location: "Pune, Maharashtra",
    caption: [
      "Raj and Suhasini's celebrations began with a cheerful haldi where family and friends filled the day with colour and laughter. The energy carried into the sangeet, with music, dancing and unforgettable performances.",
      "By the wedding day, the excitement had settled into meaningful moments, bringing everyone together for a celebration that felt complete from start to finish."
    ],
    images: [
  img("Raj_Suhasini/img2001.webp"),
  img("Raj_Suhasini/img2002.webp"),
  img("Raj_Suhasini/img2003.webp"),
  img("Raj_Suhasini/img2004.webp"),
  img("Raj_Suhasini/img2005.webp"),
  img("Raj_Suhasini/img2006.webp"),
  img("Raj_Suhasini/img2007.webp"),
  img("Raj_Suhasini/img2008.webp"),
  img("Raj_Suhasini/img2009.webp"),
  img("Raj_Suhasini/img2010.webp"),
  img("Raj_Suhasini/img2011.webp"),
  img("Raj_Suhasini/img2012.webp"),
  img("Raj_Suhasini/img2013.webp"),
  img("Raj_Suhasini/img2014.webp"),
  img("Raj_Suhasini/img2015.webp"),
  img("Raj_Suhasini/img2016.webp"),
  img("Raj_Suhasini/img2017.webp"),
  img("Raj_Suhasini/img2018.webp"),
  img("Raj_Suhasini/img2019.webp"),
  img("Raj_Suhasini/img2020.webp"),
  img("Raj_Suhasini/img2021.webp"),
  img("Raj_Suhasini/img2022.webp"),
  img("Raj_Suhasini/img2023.webp"),
  img("Raj_Suhasini/img2024.webp"),
  img("Raj_Suhasini/img2025.webp"),
  img("Raj_Suhasini/img2026.webp"),
  img("Raj_Suhasini/img2027.webp"),
  img("Raj_Suhasini/img2028.webp"),
  img("Raj_Suhasini/img2029.webp"),
  img("Raj_Suhasini/img2030.webp"),
  img("Raj_Suhasini/img2031.webp"),
  img("Raj_Suhasini/img2032.webp"),
  img("Raj_Suhasini/img2033.webp"),
  img("Raj_Suhasini/img2034.webp"),
  img("Raj_Suhasini/img2035.webp"),
  img("Raj_Suhasini/img2036.webp"),
  img("Raj_Suhasini/img2037.webp"),
  img("Raj_Suhasini/img2038.webp"),
  img("Raj_Suhasini/img2039.webp"),
  img("Raj_Suhasini/img2040.webp"),
  img("Raj_Suhasini/img2041.webp"),
  img("Raj_Suhasini/img2042.webp"),
  img("Raj_Suhasini/img2043.webp"),
  img("Raj_Suhasini/img2044.webp"),
  img("Raj_Suhasini/img2045.webp"),
  img("Raj_Suhasini/img2046.webp"),
  img("Raj_Suhasini/img2047.webp"),
  ]
},

  "Shruti_Harjot": {
    couple: "Shruti & Harjot",
    location: "Pune, Maharashtra",
    caption: [
      "Harjot and Shruti's celebrations brought together three very different moods. The haldi was filled with cheerful moments and family traditions, while the sangeet gave everyone a reason to let loose and celebrate.",
      "By the wedding day, the pace had slowed, allowing them to take in each ritual, each glance and each moment shared with the people around them."
    ],
images: [
  img("Shruti_Harjot/img3001.webp"),
  img("Shruti_Harjot/img3002.webp"),
  img("Shruti_Harjot/img3003.webp"),
  img("Shruti_Harjot/img3004.webp"),
  img("Shruti_Harjot/img3005.webp"),
  img("Shruti_Harjot/img3006.webp"),
  img("Shruti_Harjot/img3007.webp"),
  img("Shruti_Harjot/img3008.webp"),
  img("Shruti_Harjot/img3009.webp"),
  img("Shruti_Harjot/img3010.webp"),
  img("Shruti_Harjot/img3011.webp"),
  img("Shruti_Harjot/img3012.webp"),
  img("Shruti_Harjot/img3013.webp"),
  img("Shruti_Harjot/img3014.webp"),
  img("Shruti_Harjot/img3015.webp"),
  img("Shruti_Harjot/img3016.webp"),
  img("Shruti_Harjot/img3017.webp"),
  img("Shruti_Harjot/img3018.webp"),
  img("Shruti_Harjot/img3019.webp"),
  img("Shruti_Harjot/img3020.webp"),
  img("Shruti_Harjot/img3021.webp"),
  img("Shruti_Harjot/img3022.webp"),
  img("Shruti_Harjot/img3023.webp"),
  img("Shruti_Harjot/img3024.webp"),
  img("Shruti_Harjot/img3025.webp"),
  img("Shruti_Harjot/img3026.webp"),
  img("Shruti_Harjot/img3027.webp"),
  img("Shruti_Harjot/img3028.webp"),
  img("Shruti_Harjot/img3029.webp"),
  img("Shruti_Harjot/img3030.webp"),
  img("Shruti_Harjot/img3031.webp"),
  img("Shruti_Harjot/img3032.webp"),
  img("Shruti_Harjot/img3033.webp"),
  img("Shruti_Harjot/img3034.webp"),
  img("Shruti_Harjot/img3035.webp"),
  img("Shruti_Harjot/img3036.webp"),
  img("Shruti_Harjot/img3037.webp"),
  img("Shruti_Harjot/img3038.webp"),
  img("Shruti_Harjot/img3039.webp"),
  img("Shruti_Harjot/img3040.webp"),
  img("Shruti_Harjot/img3041.webp"),
  img("Shruti_Harjot/img3042.webp"),
  img("Shruti_Harjot/img3043.webp"),
  img("Shruti_Harjot/img3044.webp"),
  img("Shruti_Harjot/img3045.webp"),
  img("Shruti_Harjot/img3046.webp"),
  img("Shruti_Harjot/img3047.webp"),
  img("Shruti_Harjot/img3048.webp"),
  img("Shruti_Harjot/img3049.webp"),
  img("Shruti_Harjot/img3050.webp"),
  img("Shruti_Harjot/img3051.webp"),
  img("Shruti_Harjot/img3052.webp"),
  img("Shruti_Harjot/img3053.webp"),
  img("Shruti_Harjot/img3054.webp"),
  img("Shruti_Harjot/img3055.webp"),
  img("Shruti_Harjot/img3056.webp"),
  img("Shruti_Harjot/img3057.webp"),
  img("Shruti_Harjot/img3058.webp"),
  img("Shruti_Harjot/img3059.webp"),
  img("Shruti_Harjot/img3060.webp"),
  img("Shruti_Harjot/img3061.webp"),
  img("Shruti_Harjot/img3062.webp"),
  img("Shruti_Harjot/img3063.webp"),
 ]
  },  
  "Atharva_Haritha": {
    couple: "Atharva & Haritha",
    location: "Pune, Maharashtra",
    caption: [
      "Atharva and Haritha's wedding was a joyful celebration filled with laughter, family and meaningful moments. From the fun-filled haldi to the wedding ceremony, every part of the day felt warm and genuine.",
      "Surrounded by their loved ones, they enjoyed every moment together making it a beautiful wedding celebration in Pune that reflected who they are."
    ],
images: [
  img("Atharva_Haritha/img801.webp"),
  img("Atharva_Haritha/img802.webp"),
  img("Atharva_Haritha/img803.webp"),
  img("Atharva_Haritha/img804.webp"),
  img("Atharva_Haritha/img805.webp"),
  img("Atharva_Haritha/img806.webp"),
  img("Atharva_Haritha/img807.webp"),
  img("Atharva_Haritha/img808.webp"),
  img("Atharva_Haritha/img809.webp"),
  img("Atharva_Haritha/img810.webp"),
  img("Atharva_Haritha/img811.webp"),
  img("Atharva_Haritha/img812.webp"),
  img("Atharva_Haritha/img813.webp"),
  img("Atharva_Haritha/img814.webp"),
  img("Atharva_Haritha/img815.webp"),
  img("Atharva_Haritha/img816.webp"),
  img("Atharva_Haritha/img817.webp"),
  img("Atharva_Haritha/img818.webp"),
  img("Atharva_Haritha/img819.webp"),
  img("Atharva_Haritha/img820.webp"),
  img("Atharva_Haritha/img821.webp"),
  img("Atharva_Haritha/img822.webp"),
  img("Atharva_Haritha/img823.webp"),
  img("Atharva_Haritha/img824.webp"),
  img("Atharva_Haritha/img825.webp"),
  img("Atharva_Haritha/img826.webp"),
  img("Atharva_Haritha/img827.webp"),
  img("Atharva_Haritha/img828.webp"),
  img("Atharva_Haritha/img829.webp"),
  img("Atharva_Haritha/img830.webp"),
  img("Atharva_Haritha/img831.webp"),
  img("Atharva_Haritha/img832.webp"),
  img("Atharva_Haritha/img833.webp"),
  img("Atharva_Haritha/img834.webp"),
  img("Atharva_Haritha/img835.webp"),
  img("Atharva_Haritha/img836.webp"),
  img("Atharva_Haritha/img837.webp"),
  img("Atharva_Haritha/img838.webp"),
  img("Atharva_Haritha/img839.webp"),
  img("Atharva_Haritha/img840.webp"),
  img("Atharva_Haritha/img841.webp"),
  img("Atharva_Haritha/img842.webp"),
  img("Atharva_Haritha/img843.webp"),
  img("Atharva_Haritha/img844.webp"),
  img("Atharva_Haritha/img845.webp"),
  img("Atharva_Haritha/img846.webp"),
  img("Atharva_Haritha/img847.webp"),
  img("Atharva_Haritha/img848.webp"),
  img("Atharva_Haritha/img849.webp"),
  img("Atharva_Haritha/img850.webp"),
  img("Atharva_Haritha/img851.webp"),
  img("Atharva_Haritha/img852.webp"),
  img("Atharva_Haritha/img853.webp"),
   ]
},

  "Nina_Parth": {
    couple: "Nina & Parth",
    location: "Pune, Maharashtra",
    caption: [
      "Nina and Parth's wedding never had a quiet moment. The haldi was filled with fun, the wedding brought everyone together and the celebrations carried on well into the evening.",
      "Wherever you looked, there were people dancing, laughing and creating moments that made the entire wedding feel alive from start to finish."
    ],
images: [
  img("Nina_Parth/img1001.webp"),
  img("Nina_Parth/img1002.webp"),
  img("Nina_Parth/img1003.webp"),
  img("Nina_Parth/img1004.webp"),
  img("Nina_Parth/img1005.webp"),
  img("Nina_Parth/img1006.webp"),
  img("Nina_Parth/img1007.webp"),
  img("Nina_Parth/img1008.webp"),
  img("Nina_Parth/img1009.webp"),
  img("Nina_Parth/img1010.webp"),
  img("Nina_Parth/img1011.webp"),
  img("Nina_Parth/img1012.webp"),
  img("Nina_Parth/img1013.webp"),
  img("Nina_Parth/img1014.webp"),
  img("Nina_Parth/img1015.webp"),
  img("Nina_Parth/img1016.webp"),
  img("Nina_Parth/img1017.webp"),
  img("Nina_Parth/img1018.webp"),
  img("Nina_Parth/img1019.webp"),
  img("Nina_Parth/img1020.webp"),
  img("Nina_Parth/img1021.webp"),
  img("Nina_Parth/img1022.webp"),
  img("Nina_Parth/img1023.webp"),
  img("Nina_Parth/img1024.webp"),
  img("Nina_Parth/img1025.webp"),
  img("Nina_Parth/img1026.webp"),
  img("Nina_Parth/img1027.webp"),
  img("Nina_Parth/img1028.webp"),
  img("Nina_Parth/img1029.webp"),
  img("Nina_Parth/img1030.webp"),
  img("Nina_Parth/img1031.webp"),
  img("Nina_Parth/img1032.webp"),
  img("Nina_Parth/img1033.webp"),
  img("Nina_Parth/img1034.webp"),
  img("Nina_Parth/img1035.webp"),
  img("Nina_Parth/img1036.webp"),
 ]
  },

  "Anuja_Shubhang": {
    couple: "Anuja & Shubhang",
    location: "Pune, Maharashtra",
    caption: [
      "Shubhang and Anuja's celebrations started with a haldi where family members took centre stage, filling every moment with laughter and playful traditions.",
      "The sangeet brought a different energy, with performances, dancing and a packed dance floor. By the wedding day, the focus shifted to meaningful rituals, bringing everyone together for a celebration rooted in tradition."
    ],
images: [
  img("Anuja_Shubhang/img701.webp"),
  img("Anuja_Shubhang/img702.webp"),
  img("Anuja_Shubhang/img703.webp"),
  img("Anuja_Shubhang/img704.webp"),
  img("Anuja_Shubhang/img705.webp"),
  img("Anuja_Shubhang/img706.webp"),
  img("Anuja_Shubhang/img707.webp"),
  img("Anuja_Shubhang/img708.webp"),
  img("Anuja_Shubhang/img709.webp"),
  img("Anuja_Shubhang/img710.webp"),
  img("Anuja_Shubhang/img711.webp"),
  img("Anuja_Shubhang/img712.webp"),
  img("Anuja_Shubhang/img713.webp"),
  img("Anuja_Shubhang/img714.webp"),
  img("Anuja_Shubhang/img715.webp"),
  img("Anuja_Shubhang/img716.webp"),
  img("Anuja_Shubhang/img717.webp"),
  img("Anuja_Shubhang/img718.webp"),
  img("Anuja_Shubhang/img719.webp"),
  img("Anuja_Shubhang/img720.webp"),
  img("Anuja_Shubhang/img721.webp"),
  img("Anuja_Shubhang/img722.webp"),
  img("Anuja_Shubhang/img723.webp"),
  img("Anuja_Shubhang/img724.webp"),
  img("Anuja_Shubhang/img725.webp"),
  img("Anuja_Shubhang/img726.webp"),
  img("Anuja_Shubhang/img727.webp"),
  img("Anuja_Shubhang/img728.webp"),
  img("Anuja_Shubhang/img729.webp"),
  img("Anuja_Shubhang/img730.webp"),
  img("Anuja_Shubhang/img731.webp"),
  img("Anuja_Shubhang/img732.webp"),
  img("Anuja_Shubhang/img733.webp"),
  img("Anuja_Shubhang/img734.webp"),
  img("Anuja_Shubhang/img735.webp"),
  img("Anuja_Shubhang/img736.webp"),
  img("Anuja_Shubhang/img737.webp"),
  img("Anuja_Shubhang/img738.webp"),
  img("Anuja_Shubhang/img739.webp"),
  img("Anuja_Shubhang/img740.webp"),
  img("Anuja_Shubhang/img741.webp"),
  img("Anuja_Shubhang/img742.webp"),
  img("Anuja_Shubhang/img743.webp"),
  img("Anuja_Shubhang/img744.webp"),
  img("Anuja_Shubhang/img745.webp"),
  img("Anuja_Shubhang/img746.webp"),
  img("Anuja_Shubhang/img747.webp"),
  img("Anuja_Shubhang/img748.webp"),
  img("Anuja_Shubhang/img749.webp"),
  img("Anuja_Shubhang/img750.webp"),
  img("Anuja_Shubhang/img751.webp"),
  img("Anuja_Shubhang/img752.webp"),
  img("Anuja_Shubhang/img753.webp"),
  img("Anuja_Shubhang/img754.webp"),
  img("Anuja_Shubhang/img755.webp"),
  img("Anuja_Shubhang/img756.webp"),
  img("Anuja_Shubhang/img757.webp"),
  img("Anuja_Shubhang/img758.webp"),
  img("Anuja_Shubhang/img759.webp"),
  img("Anuja_Shubhang/img760.webp"),
  img("Anuja_Shubhang/img761.webp"),
  img("Anuja_Shubhang/img762.webp"),
  img("Anuja_Shubhang/img763.webp"),
  img("Anuja_Shubhang/img764.webp"),
  img("Anuja_Shubhang/img765.webp"),
 ]
} 

};
export default function WeddingPage() {
  const { slug } = useParams();
  const wedding = weddingData[slug];
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleBack = () => {
    if (location.state?.from) navigate(location.state.from);
    else navigate("/");
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % wedding.images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + wedding.images.length) % wedding.images.length);
  };

  if (!wedding) return null;

  const heroImage = wedding.images[0];

  return (
    <div className="bg-white min-h-screen selection:bg-[#bba98a]/20">
      <Helmet>
        <title>{wedding.couple} | TILT SHIFT Films</title>
      </Helmet>

      {/* Floating Navigation (Back Button) */}
      <button 
        onClick={handleBack}
        className="fixed top-28 left-8 md:left-16 z-40 mix-blend-difference text-white font-sans text-[10px] tracking-[0.4em] uppercase hover:opacity-60 transition-opacity"
      >
        ← Back
      </button>

      {/* 1. HERO SECTION */}
      <section 
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <p className="font-sans text-[11px] tracking-[0.5em] uppercase text-white/90 mb-4">
            Wedding Story
          </p>
          <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight font-light">
            {wedding.couple}
          </h1>
        </div>
      </section>

      {/* 2. STORY DETAILS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <span className="inline-block font-sans text-[10px] tracking-[0.4em] uppercase text-[#bba98a] mb-8 font-medium">
          {wedding.location}
        </span>
        <div className="space-y-8">
          {wedding.caption.map((para, i) => (
            <p key={i} className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-700 font-light italic">
              {para}
            </p>
          ))}
        </div>
        {/* <div className="mt-16 flex justify-center">
          <div className="w-[1px] h-20 bg-neutral-200"></div>
        </div> */}
      </section>

      {/* 3. DYNAMIC MASONRY GALLERY */}
      <section className="max-w-full mx-auto px-1 pb-32">
        <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {wedding.images.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid w-full group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden transition-all duration-700 ease-in-out bg-neutral-100">
                <img
                  src={src}
                  alt={`${wedding.couple} moment ${index + 1}`}
                  className="w-full h-auto block object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX POPUP */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button - Top Right */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 border rounded-full text-white/70 hover:text-white transition-all z-[10000] p-2"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 md:left-8 text-white border rounded-full hover:text-white transition-all p-4 z-[10000]"
            onClick={prevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-4 md:right-8 text-white border rounded-full hover:text-white transition-all p-4 z-[10000]"
            onClick={nextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-2 md:p-10 select-none">
            <img 
              src={wedding.images[currentIndex]} 
              className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500"
              alt="Full screen view"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
          
          {/* Image Counter (Optional but elegant) */}
          <div className="absolute bottom-8 text-white/40 font-sans text-[10px] tracking-[0.2em] uppercase">
            {currentIndex + 1} / {wedding.images.length}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-20 border-t border-neutral-100 text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
        >
          ↑ Back to top
        </button>
      </footer>
    </div>
  );
}
