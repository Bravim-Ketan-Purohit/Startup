import React from "react";
import { motion } from "framer-motion";

const Service3 = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mt-10 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative inline-block text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-4"
            >
              Service 3
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-800 text-3xl font-extrabold mb-6"
            >
              Fully personalized social media app with community build feature.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-800 text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            <div className="space-y-4">
              <button className="mr-4 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md font-medium text-lg">
                Live Preview
              </button>
              <button className="bg-gray-300 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium text-lg">
                Get Quote
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Your SVG component or image goes here */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="645.13137"
                height="529.53662"
                viewBox="0 0 645.13137 529.53662"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M364.36116,686.88548a3.61323,3.61323,0,0,1-2.61866-6.26262c.09111-.36213.15647-.62217.24758-.9843q-.0489-.11821-.09837-.23628a9.70311,9.70311,0,0,0-17.89849.06652c-2.92739,7.05051-6.65446,14.11307-7.57216,21.5678a28.70515,28.70515,0,0,0,.50391,9.87234A115.086,115.086,0,0,1,326.456,663.11a111.0799,111.0799,0,0,1,.689-12.392q.57079-5.05966,1.58377-10.0473a116.41944,116.41944,0,0,1,23.087-49.34152,30.98262,30.98262,0,0,0,12.88557-13.36893,23.63324,23.63324,0,0,0,2.14932-6.45821c-.62728.08228-1.26488.13369-1.89217.17479-.19542.01023-.40108.02055-.5965.03087l-.0737.0033a3.5799,3.5799,0,0,1-2.9401-5.83225q.40627-.5.81306-.99948c.41139-.51423.833-1.01814,1.24433-1.53228a1.782,1.782,0,0,0,.1337-.15432c.47312-.58619.94608-1.16206,1.41921-1.74825a10.35167,10.35167,0,0,0-3.39367-3.28044c-4.74083-2.77661-11.28132-.85358-14.70585,3.43476-3.43477,4.28826-4.0826,10.30438-2.88976,15.66218a41.48466,41.48466,0,0,0,5.73842,12.793c-.25716.32912-.52454.64792-.78162.977a117.17182,117.17182,0,0,0-12.22972,19.37481,48.70916,48.70916,0,0,0-2.908-22.62447c-2.78346-6.71479-8.00064-12.37-12.595-18.17495-5.51857-6.97261-16.83489-3.9296-17.80714,4.90927q-.0141.12837-.02756.25665,1.02361.57749,2.004,1.22586a4.9011,4.9011,0,0,1-1.976,8.91908l-.09994.01543a48.7655,48.7655,0,0,0,1.28543,7.29124A50.2099,50.2099,0,0,0,329.572,623.69226c.40108.20565.79193.41131,1.193.60673a119.59684,119.59684,0,0,0-6.43767,30.296,113.433,113.433,0,0,0,.08228,18.31542l-.03087-.216a29.974,29.974,0,0,0-10.23241-17.3076c-7.87437-6.46853-18.99939-8.8505-27.49445-14.04994a5.62528,5.62528,0,0,0-8.61571,5.47252q.01707.11352.03474.227a32.92535,32.92535,0,0,1,3.69183,1.779q1.02363.57761,2.004,1.22585a4.90116,4.90116,0,0,1-1.976,8.91917l-.1.01535c-.072.01031-.1337.02063-.20558.03094a48.80783,48.80783,0,0,0,8.97768,14.05786,50.25446,50.25446,0,0,0,36.44572,15.9913h.01032a119.56213,119.56213,0,0,0,8.03167,23.447h28.69167c.10291-.3188.19542-.64792.288-.96672a32.59917,32.59917,0,0,1-7.93915-.473c2.12877-2.61214,4.25747-5.24483,6.38625-7.85688a1.78294,1.78294,0,0,0,.13369-.15424c1.07978-1.33685,2.16988-2.66347,3.24966-4.00032l.00058-.00165a47.75072,47.75072,0,0,0-1.39916-12.16412Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#f2f2f2"
                />
                <path
                  d="M835.43412,686.88548a3.61323,3.61323,0,0,0,2.61865-6.26262c-.09111-.36213-.15647-.62217-.24758-.9843q.0489-.11821.09837-.23628a9.70311,9.70311,0,0,1,17.89849.06652c2.92739,7.05051,6.65447,14.11307,7.57216,21.5678a28.7054,28.7054,0,0,1-.5039,9.87234A115.08614,115.08614,0,0,0,873.33924,663.11a111.07991,111.07991,0,0,0-.689-12.392q-.5708-5.05966-1.58377-10.0473a116.4192,116.4192,0,0,0-23.087-49.34152,30.9826,30.9826,0,0,1-12.88556-13.36893,23.6336,23.6336,0,0,1-2.14933-6.45821c.62729.08228,1.26489.13369,1.89217.17479.19543.01023.40108.02055.59651.03087l.07369.0033a3.57989,3.57989,0,0,0,2.9401-5.83225q-.40627-.5-.813-.99948c-.4114-.51423-.833-1.01814-1.24434-1.53228a1.7836,1.7836,0,0,1-.13369-.15432c-.47313-.58619-.94609-1.16206-1.41922-1.74825a10.35176,10.35176,0,0,1,3.39367-3.28044c4.74083-2.77661,11.28133-.85358,14.70586,3.43476,3.43476,4.28826,4.0826,10.30438,2.88976,15.66218a41.48513,41.48513,0,0,1-5.73842,12.793c.25715.32912.52454.64792.78161.977a117.17121,117.17121,0,0,1,12.22973,19.37481,48.70929,48.70929,0,0,1,2.908-22.62447c2.78346-6.71479,8.00064-12.37,12.595-18.17495,5.51857-6.97261,16.83488-3.9296,17.80713,4.90927q.01411.12837.02757.25665-1.02363.57749-2.004,1.22586a4.9011,4.9011,0,0,0,1.976,8.91908l.09994.01543a48.7668,48.7668,0,0,1-1.28544,7.29124,50.20988,50.20988,0,0,1-24.99983,31.46837c-.40108.20565-.79193.41131-1.193.60673a119.598,119.598,0,0,1,6.43767,30.296,113.43525,113.43525,0,0,1-.08228,18.31542l.03086-.216a29.97408,29.97408,0,0,1,10.23241-17.3076c7.87438-6.46853,18.9994-8.8505,27.49446-14.04994a5.62528,5.62528,0,0,1,8.61571,5.47252q-.01708.11352-.03474.227a32.92633,32.92633,0,0,0-3.69184,1.779q-1.02362.57761-2.004,1.22585a4.90116,4.90116,0,0,0,1.976,8.91917l.1.01535c.072.01031.13369.02063.20557.03094a48.80758,48.80758,0,0,1-8.97767,14.05786,50.25446,50.25446,0,0,1-36.44572,15.9913h-.01032a119.56344,119.56344,0,0,1-8.03167,23.447H836.15309c-.10291-.3188-.19542-.64792-.288-.96672a32.59925,32.59925,0,0,0,7.93916-.473c-2.12878-2.61214-4.25747-5.24483-6.38625-7.85688a1.78139,1.78139,0,0,1-.1337-.15424c-1.07978-1.33685-2.16987-2.66347-3.24965-4.00032l-.00058-.00165a47.75027,47.75027,0,0,1,1.39916-12.16412Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#f2f2f2"
                />
                <polygon
                  points="202.721 514.442 209.667 514.442 212.973 487.648 202.721 487.648 202.721 514.442"
                  fill="#9e616a"
                />
                <path
                  d="M477.88787,694.91553l11.09785-.66239v4.7548l10.551,7.28693a2.97,2.97,0,0,1-1.68767,5.41408l-13.21241,0-2.27736-4.70323-.8892,4.70323h-4.9816Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <polygon
                  points="115.658 508.54 122.112 511.109 135.092 487.438 125.567 483.646 115.658 508.54"
                  fill="#9e616a"
                />
                <path
                  d="M392.74529,688.513l10.55593,3.48905-1.75853,4.41766,7.10788,10.67247a2.97,2.97,0,0,1-3.57037,4.406l-12.27557-4.88652-.37642-5.212-2.5656,4.04088-4.62838-1.84241Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M466.1528,619.94528,454.56932,565.889l-18.088,60.06112L407.84,682.90371l-.15174.3022-9.07261-4.88478c-1.28041-23.1256,1.76059-44.79611,12.883-63.74547l5.26673-52.01153c.16139-1.77723,4.09006-43.49961,16.53-50.89851l3.64318-8.30711,36.23478-8.94915.13181.14853a27.70142,27.70142,0,0,1,6.6376,13.913L490.77,574.06273l.00611.03665-2.90311,45.7578,3.97112,67.5076h-14.3689Q464.14156,662.27631,466.1528,619.94528Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M643.12091,399.36639c0,15.36356,22.81411,42.344,27.81817,27.81819,6.12643-17.78383,19.19469-29.05712,27.81821-27.8182,15.20742,2.18481-12.45464-27.81817-27.8182-27.81817A27.81818,27.81818,0,0,0,643.12091,399.36639Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <path
                  d="M637.27762,312.24693c-3.60772,14.934,12.45462,27.81819,27.81818,27.81819A27.81818,27.81818,0,0,0,692.914,312.24694c0-15.36356-20.70757-14.19916-27.8182-27.81818C656.95574,268.83805,645.0326,280.14549,637.27762,312.24693Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <path
                  d="M508.72529,311.07828a27.81819,27.81819,0,0,0,27.81819,27.81819c15.36356,0,28.26471-12.46113,27.81819-27.8182-.93541-32.1713-13.39851-44.77754-27.8182-27.81817C526.59158,294.96475,508.72529,295.71472,508.72529,311.07828Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <path
                  d="M506.388,399.36638c-12.98238-5.61225,9.56482,23.1491,27.81817,27.8182,14.88433,3.80734,27.8182-12.45463,27.8182-27.81819a27.81818,27.81818,0,0,0-27.81819-27.81818C518.8426,371.54821,520.49022,405.46274,506.388,399.36638Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <path
                  d="M819.41821,219.71588H365.1252a1.807,1.807,0,0,1,0-3.61318h454.293a1.807,1.807,0,0,1,0,3.61318Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#cacaca"
                />
                <ellipse
                  cx="118.61519"
                  cy="10.82345"
                  rx="10.58751"
                  ry="10.82345"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="155.19021"
                  cy="10.82345"
                  rx="10.58751"
                  ry="10.82345"
                  fill="#3f3d56"
                />
                <ellipse
                  cx="191.76523"
                  cy="10.82345"
                  rx="10.58751"
                  ry="10.82345"
                  fill="#3f3d56"
                />
                <path
                  d="M797.39694,187.91439H771.416a1.96761,1.96761,0,0,0,0,3.93445h25.981a1.96761,1.96761,0,0,0,0-3.93445Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#3f3d56"
                />
                <path
                  d="M797.39694,195.29876H771.416a1.96762,1.96762,0,0,0,0,3.93446h25.981a1.96762,1.96762,0,0,0,0-3.93446Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#3f3d56"
                />
                <path
                  d="M797.39694,202.67343H771.416a1.96762,1.96762,0,0,0,0,3.93446h25.981a1.96762,1.96762,0,0,0,0-3.93446Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#3f3d56"
                />
                <path
                  d="M667.82658,299.6213H630.61669a5.88879,5.88879,0,0,0-5.88884,5.88874v37.21a5.88887,5.88887,0,0,0,5.88884,5.88883h37.20989a5.88887,5.88887,0,0,0,5.88884-5.88883V305.51A5.88879,5.88879,0,0,0,667.82658,299.6213Zm-6.98684,12.56253h-4.26718c-2.91352,0-3.48062,1.37947-3.48062,3.41624v4.3187h6.94828l-.90227,6.78084h-6.059v17.68184a20.9816,20.9816,0,0,1-7.83809-.01863V326.69961h-5.55635v-6.78084h5.6596V314.9041c0-5.99477,4.16392-9.26908,9.52662-9.26908,2.57835,0,5.33729.19345,5.969.28354Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#6c63ff"
                />
                <path
                  d="M574.75022,299.6213h-37.2099a5.88879,5.88879,0,0,0-5.88883,5.88874v37.21a5.88887,5.88887,0,0,0,5.88883,5.88883h37.2099a5.88887,5.88887,0,0,0,5.88883-5.88883V305.51A5.88879,5.88879,0,0,0,574.75022,299.6213Zm-18.605,37.55713a13.06335,13.06335,0,1,1,13.06335-13.06335A13.06336,13.06336,0,0,1,556.14527,337.17843Zm14.69627-26.1267a3.26584,3.26584,0,1,1,3.26583-3.26583A3.26587,3.26587,0,0,1,570.84154,311.05173Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#6c63ff"
                />
                <path
                  d="M676.79115,387.50826a7.25843,7.25843,0,0,1,7.0851,8.58349l13.90266,9.04629-3.43681,9.78942-19.45382-13.05087a7.29775,7.29775,0,0,1,1.90287-14.36833Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#ffb6b6"
                />
                <path
                  d="M681.74295,411.29605l9.92273-11.4566,12.82174,5.9463,26.20094,20.85158c3.43487.40138,29.49893,3.76515,29.01991,13.337a7.75087,7.75087,0,0,1-2.771,5.85848c-4.11378,3.39576-11.243,2.43206-11.50942,2.39268l-17.05708-.8535c-.89231.21509-10.15161,2.34217-15.05274-.70182C711.83132,445.74657,681.74295,411.29605,681.74295,411.29605Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#3f3d56"
                />
                <polygon
                  points="432.925 518.689 424.798 518.688 420.932 487.341 432.926 487.341 432.925 518.689"
                  fill="#ffb6b6"
                />
                <path
                  d="M712.43192,711.79828l-26.20525-.001v-.33146a10.20036,10.20036,0,0,1,10.19982-10.19965h.00064l4.78674-3.63147,8.931,3.632,2.28756.00009Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <polygon
                  points="522.127 512.328 514.293 514.492 502.22 485.305 513.782 482.112 522.127 512.328"
                  fill="#ffb6b6"
                />
                <path
                  d="M803.65705,704.60154l-25.2595,6.9766-.08825-.31948a10.20037,10.20037,0,0,1,7.11579-12.5473l.00062-.00017,3.647-4.77491,9.57565,1.1229,2.205-.609Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M710.71755,514.21056l61.41041,3.13318.02.05559a60.47155,60.47155,0,0,1,2.48654,31.90287v0l1.87991,15.66592,9.39955,48.87767,12.53274,62.66368s16.29256,4.38646-5.0131,11.9061-16.91919,3.13318-13.786-2.50655-15.3526-69.24337-15.3526-69.24337l-22.55892-50.75758-21.93229,52.6375-2.50655,58.27722s6.57969,7.833-12.21942,10.96614-17.85915-2.81986-13.47269-7.20632,8.14628-62.66368,8.14628-62.66368l4.38646-55.144S702.88459,530.81643,710.71755,514.21056Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M770.76505,442.6193l-4.93772-12.95064-15.90024-15.66085L729.78972,412.427l-14.79966,13.25085-4.18519,13.18165c5.489,25.41579,5.37658,48.82412-2.40084,71.50228a11.42846,11.42846,0,0,0,8.83338,15.05992c22.81286,3.83361,65.2933,9.58187,62.36726-1.3612-3.87067-14.47582-17.337-45.63348-12.34856-62.10887a77.33834,77.33834,0,0,0,3.40408-17.62909Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#3f3d56"
                />
                <circle
                  cx="459.03843"
                  cy="204.16905"
                  r="17.97244"
                  fill="#ffb6b6"
                />
                <path
                  d="M731.56815,406.429l13.69963-.69878c1.75537-.08954,3.67125-.24458,4.948-1.45254a7.496,7.496,0,0,0,1.55291-2.57973c1.26653-2.9419,2.5331-5.88388,3.76727-8.8395,1.70712-4.08828,3.38372-8.40492,2.948-12.81382a8.15425,8.15425,0,0,0-2.3703-5.34505,4.52673,4.52673,0,0,0-5.50173-.55749,9.30292,9.30292,0,0,0-4.61782-6.70481,14.25728,14.25728,0,0,0-8.1316-1.724,19.62574,19.62574,0,0,0-11.17672,4.40509,24.25989,24.25989,0,0,1-2.85131,2.25946,4.476,4.476,0,0,1-3.47994.64388,2.51848,2.51848,0,0,1-1.84876-2.74506,4.84559,4.84559,0,0,0-1.23944,6.397,4.47141,4.47141,0,0,1-4.37-.517,5.34263,5.34263,0,1,0,5.60281,9.043c.83146,1.16458.52183,2.74719.4135,4.174s.27433,3.20008,1.64985,3.59444c1.85957.53313,3.36582-1.97075,5.30013-1.94407a2.90879,2.90879,0,0,1,2.30676,1.48648,8.58619,8.58619,0,0,1,.9234,2.6958l2.47559,11.14495"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M639.80365,435.02465a35.29393,35.29393,0,0,1-19.2761-5.71362l-2.88631-1.8761,3.42132.37953c.89619.09966,1.86175.15787,2.86877.17222a23.97334,23.97334,0,0,0,13.00355-3.82157,13.53829,13.53829,0,0,1-9.98967-8.98983l-.42816-1.32037,1.36183.26711a11.37141,11.37141,0,0,0,1.8769.21129,13.23964,13.23964,0,0,1-7.18229-11.74139v-1.3985l1.21751.53819a11.21339,11.21339,0,0,0,2.28034.96955,13.42253,13.42253,0,0,1-1.609-15.63313l.5948-1.02615.74629.9209a34.08836,34.08836,0,0,0,21.78926,12.3338,1.64178,1.64178,0,0,0,1.31718-.39308,1.68494,1.68494,0,0,0,.57966-1.27253,13.14267,13.14267,0,0,1,22.45422-9.37572,24.23451,24.23451,0,0,0,7.15837-2.81137l1.87451-1.10987-.6833,2.06826a13.29564,13.29564,0,0,1-3.10478,5.11483,24.38989,24.38989,0,0,0,3.65812-1.27014l2.53947-1.11625-1.53006,2.31383a26.04727,26.04727,0,0,1-5.98949,6.39613v1.18c0,17.69819-13.462,36.00394-35.99039,36.00394Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#6c63ff"
                />
                <path
                  d="M655.94236,422.42316a7.25841,7.25841,0,0,1,7.49055,8.23205L677.7554,439.021l-2.961,9.94367-20.0602-12.09813a7.29775,7.29775,0,0,1,1.20818-14.44334Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#ffb6b6"
                />
                <path
                  d="M672.80666,453.64046l-10.6974-11.57613,7.41568-11.0869,7.9921,6.70571,8.7384,2.09073,12.33014,4.67514c1.71665-3.00208,15.03537-25.65737,23.652-21.46185a7.75087,7.75087,0,0,1,4.30186,4.84709c1.50978,5.11614-2.17335,11.29584-2.3141,11.52547l-7.47634,15.355c-.15219.90517-1.82791,10.25669-6.55054,13.57085a5.97166,5.97166,0,0,1-4.69033,1.03639c-14.67512-2.77547-25.01584-7.06756-30.29232-12.527A16.08207,16.08207,0,0,1,672.80666,453.64046Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#3f3d56"
                />
                <path
                  d="M482.52588,408.8861c-1.64651-3.54181.96683-7.49574,1.89938-11.30855,1.74018-7.1146-3.16331-14.81736-9.80962-17.28261-6.64631-2.4652-14.28416-.40478-19.99351,3.90906-5.59677,4.22886-9.5314,6.22108-13.3867,12.19621-1.29281,2.00363-2.66181,8.22463-2.90642,10.6244-.24467,2.39977.99679,5.14958,3.26039,5.67585a2.62352,2.62352,0,0,0,2.71168,3.78248c4.33253-.83677,12.29,1.46371,12.29,1.46371q11.12872.63705,22.25742,1.27414c1.901.10881,3.87371.20767,5.58177-.84257a3.79456,3.79456,0,0,0,1.81672-2.6002C486.68109,412.96773,483.661,411.328,482.52588,408.8861Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M488.12836,439.87466l-1.62343,10.806-2.57455,17.12088-.43623,6.34345-3.20394,46.49244-8.824,6.78775a26.23318,26.23318,0,0,1-34.85337-2.55745l-10.71525-5.1588c5.74274-5.64973,4.67481-31.83289,4.67481-31.83289l-.06439-51.427,14.52486-4.88454,4.78441-9.41862h17.1638l4.29094,10.01221,7.78809,3.56147,3.54715,1.63058Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <circle
                  cx="181.67382"
                  cy="217.57174"
                  r="14.51204"
                  fill="#9e616a"
                />
                <path
                  d="M450.81689,398.25142a18.57141,18.57141,0,0,1-10.71218-3.37956L440,394.79852v0a14.11569,14.11569,0,0,1,14.1157-14.11569h5.762a14.00375,14.00375,0,0,1,13.98783,14.04928,3.22582,3.22582,0,0,1-3.18531,3.17973l-19.5323.33671C451.03761,398.25046,450.92689,398.25142,450.81689,398.25142Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <path
                  d="M493.2965,469.709l-13.14518.10755-.966,23.39694-10.68045,13.07573a7.1476,7.1476,0,1,0,8.2547,8.11209l14.71317-20.39614Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#9e616a"
                />
                <path
                  d="M423.98494,470.40826l-13.47505-6.29906-14.71415,18.21658-16.368,4.13956a7.1476,7.1476,0,1,0,1.79743,11.43308l23.968-7.6168Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#9e616a"
                />
                <path
                  d="M466.3694,416.19566l5.02437-6.26819a3.62748,3.62748,0,0,0,1.00808-2.021c.0264-.76629-.69562-1.58654-1.42379-1.34641-.67567.22282-4.56976-9.53334-5.28122-9.53133-.73753.00208-.97828-.98115-.98761-1.71863-.03538-2.79449,2.23615.20624,2.98705-2.4857s3.67826-.37742,6.20116-1.57966,5.95087-.65616,7.51049,1.66289c1.15638,1.71945,1.11353,3.95352.96013,6.02a94.53164,94.53164,0,0,1-2.15825,14.242c-.26549,1.151-.66059,2.43716-1.72127,2.957a4.09929,4.09929,0,0,1-1.83886.27478l-7.73594-.03814"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#2f2e41"
                />
                <circle
                  cx="200.98934"
                  cy="196.86537"
                  r="7.15158"
                  fill="#2f2e41"
                />
                <path
                  d="M494.50755,469.48222c-.77238,1.3445-2.41723,1.88087-3.919,2.29563-2.03107.565-2.62462,1.13712-4.65568,1.70208-.80814.22886-1.62343.45771-2.43867.66509a34.49973,34.49973,0,0,1-4.06926.83677c-1.15143.16447-2.51021.16447-3.26112-.72948a3.75843,3.75843,0,0,1-.565-2.596q.43986-16.47723.88679-32.9545l.62218.21458a8.096,8.096,0,0,1,.87252-.50062,9.79447,9.79447,0,0,1,4.627-1.06558,9.40619,9.40619,0,0,1,2.71048.42192,9.84537,9.84537,0,0,1,6.10743,5.59254,17.19688,17.19688,0,0,1,1.00124,6.21473c.00716.32183.00716.64366.01428.96545.0429,2.74622-1.35162,5.49245-1.30871,8.23863a6.45467,6.45467,0,0,0,.31467,2.28136c.286.72947.84388,1.33734,1.05842,2.09541.21454.7509-.13588,1.78073-.91542,1.838a3.00109,3.00109,0,0,1,2.91785,4.484Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <path
                  d="M430.568,436.51119a9.73434,9.73434,0,0,1,8.851,12.10948,19.54668,19.54668,0,0,1-3.46454,6.36774l-4.80671,6.69a6.40532,6.40532,0,0,0-1.10734,2.01581c-.20222.75862-.12235,1.581-.39934,2.31557s-1.16906,1.35076-1.83158.9295a3.00429,3.00429,0,0,1-.32282,5.34231c-1.42629.62243-3.0647.067-4.5181-.48916l-5.90281-2.259a48.96534,48.96534,0,0,1-6.12273-2.66857c-1.02175-.561-2.11229-1.36861-2.185-2.53195-.05659-.90551.70919-1.60112,1.09314-2.42315,4.80737-10.2924,11.87654-18.48208,20.65695-25.4607Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#e6e6e6"
                />
                <path
                  d="M437.47409,498.4681c0-5.75517-4.24138-10.39211-9.54656-10.39211-7.10532-.34095-14.33349-.46364-21.72524-.46364h-2.30481c-7.3781,0-14.63349.12269-21.72524.46364-5.22336,0-9.46474,4.65059-9.46474,10.41941-.3273,4.56868-.46373,9.12371-.45008,13.63795s.12278,9.12371.43643,13.638c0,5.76882,4.24138,10.44654,9.46473,10.44654,7.44635.341,15.09722.49112,22.87087.49112s15.41086-.13652,22.88443-.49112c5.23692,0,9.54656-4.67772,9.54656-10.44654.3-4.56868.45-9.12371.43634-13.70621-.01365-4.58216-.12269-9.11005-.42285-13.63794Zm-38.63632,26.28035v-25.1756l18.575,12.57415Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#6c63ff"
                />
                <path
                  d="M921.375,714.461l-642.75.30733a1.19069,1.19069,0,0,1,0-2.38137l642.75-.30733a1.19069,1.19069,0,0,1,0,2.38137Z"
                  transform="translate(-277.43432 -185.23169)"
                  fill="#cacaca"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service3;