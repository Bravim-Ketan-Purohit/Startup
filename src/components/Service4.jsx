import React from "react";
import { motion } from "framer-motion";

const Service4 = () => {
  return (
    <div className="bg-gray-900 py-16 rounded-3xl max-w-[95%] m-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mt-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative inline-block text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"
            >
              Service 4
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-3xl font-extrabold mb-6"
            >
              Something WEB-3 #BLOCKCHAIN
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            <div className="space-y-4">
              <button className="bg-yellow-500 mr-4 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium text-lg">
                Learn More
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-6 py-3 rounded-md font-medium text-lg">
                Get Quote
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width="423.87628"
                height="532.80415"
                viewBox="0 0 423.87628 532.80415"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M474.45263,687.75846a3.61324,3.61324,0,0,1-2.61866-6.26263c.09111-.36213.15647-.62217.24758-.9843q-.0489-.11821-.09837-.23627a9.70311,9.70311,0,0,0-17.89849.06651c-2.92739,7.05051-6.65447,14.11307-7.57216,21.5678a28.70547,28.70547,0,0,0,.5039,9.87235A115.08618,115.08618,0,0,1,436.5475,663.983a111.08,111.08,0,0,1,.689-12.392q.5708-5.05966,1.58377-10.0473a116.41943,116.41943,0,0,1,23.087-49.34152,30.98252,30.98252,0,0,0,12.88556-13.36892,23.63333,23.63333,0,0,0,2.14933-6.45822c-.62729.08228-1.26489.1337-1.89217.17479-.19543.01024-.40108.02055-.59651.03087l-.07369.0033a3.57989,3.57989,0,0,1-2.9401-5.83225q.40628-.5.81305-.99948c.4114-.51423.833-1.01813,1.24434-1.53228a1.78188,1.78188,0,0,0,.13369-.15432c.47313-.58619.94609-1.16206,1.41922-1.74825a10.35187,10.35187,0,0,0-3.39367-3.28044c-4.74083-2.77661-11.28133-.85357-14.70586,3.43477-3.43476,4.28825-4.0826,10.30437-2.88976,15.66218a41.48523,41.48523,0,0,0,5.73842,12.793c-.25715.32911-.52454.64791-.78161.977a117.1705,117.1705,0,0,0-12.22972,19.37481,48.70929,48.70929,0,0,0-2.908-22.62447c-2.78346-6.71479-8.00064-12.37-12.595-18.17495-5.51856-6.97261-16.83488-3.9296-17.80713,4.90927q-.01412.12837-.02756.25666,1.02362.57749,2.004,1.22585a4.9011,4.9011,0,0,1-1.976,8.91908l-.09994.01543a48.76657,48.76657,0,0,0,1.28544,7.29124,50.20986,50.20986,0,0,0,24.99983,31.46837c.40108.20566.79193.41131,1.193.60674a119.59713,119.59713,0,0,0-6.43766,30.296,113.434,113.434,0,0,0,.08227,18.31541l-.03086-.216a29.97408,29.97408,0,0,0-10.23241-17.3076c-7.87438-6.46853-18.9994-8.8505-27.49446-14.04993a5.62527,5.62527,0,0,0-8.61571,5.47251q.01709.11352.03474.227a32.92549,32.92549,0,0,1,3.69184,1.779q1.02362.57761,2.004,1.22586a4.90115,4.90115,0,0,1-1.976,8.91916l-.1.01535c-.072.01031-.13369.02063-.20557.031a48.80788,48.80788,0,0,0,8.97767,14.05785A50.25446,50.25446,0,0,0,437,689.92891h.01031a119.56344,119.56344,0,0,0,8.03167,23.447h28.69167c.10291-.3188.19543-.64792.288-.96672a32.59875,32.59875,0,0,1-7.93916-.473c2.12878-2.61214,4.25748-5.24482,6.38625-7.85688a1.78139,1.78139,0,0,0,.1337-.15424c1.07978-1.33685,2.16987-2.66347,3.24965-4.00032l.00058-.00165a47.75037,47.75037,0,0,0-1.39916-12.16412Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#f2f2f2"
                />
                <path
                  d="M725.54737,687.75846a3.61324,3.61324,0,0,0,2.61866-6.26263c-.09111-.36213-.15647-.62217-.24758-.9843q.0489-.11821.09837-.23627a9.70311,9.70311,0,0,1,17.89849.06651c2.92739,7.05051,6.65447,14.11307,7.57216,21.5678a28.70547,28.70547,0,0,1-.5039,9.87235A115.08618,115.08618,0,0,0,763.4525,663.983a111.08,111.08,0,0,0-.689-12.392q-.57079-5.05966-1.58377-10.0473a116.41943,116.41943,0,0,0-23.087-49.34152,30.98252,30.98252,0,0,1-12.88556-13.36892,23.63333,23.63333,0,0,1-2.14933-6.45822c.62729.08228,1.26489.1337,1.89217.17479.19543.01024.40108.02055.59651.03087l.07369.0033a3.57989,3.57989,0,0,0,2.9401-5.83225q-.40628-.5-.813-.99948c-.4114-.51423-.833-1.01813-1.24434-1.53228a1.78188,1.78188,0,0,1-.13369-.15432c-.47313-.58619-.94609-1.16206-1.41922-1.74825a10.35187,10.35187,0,0,1,3.39367-3.28044c4.74083-2.77661,11.28133-.85357,14.70586,3.43477,3.43476,4.28825,4.0826,10.30437,2.88976,15.66218a41.48523,41.48523,0,0,1-5.73842,12.793c.25715.32911.52454.64791.78161.977a117.1705,117.1705,0,0,1,12.22972,19.37481,48.70929,48.70929,0,0,1,2.908-22.62447c2.78346-6.71479,8.00064-12.37,12.595-18.17495,5.51856-6.97261,16.83488-3.9296,17.80713,4.90927q.01412.12837.02756.25666-1.02361.57749-2.004,1.22585a4.9011,4.9011,0,0,0,1.976,8.91908l.09994.01543a48.76657,48.76657,0,0,1-1.28544,7.29124,50.20986,50.20986,0,0,1-24.99983,31.46837c-.40108.20566-.79193.41131-1.193.60674a119.59713,119.59713,0,0,1,6.43766,30.296,113.434,113.434,0,0,1-.08227,18.31541l.03086-.216a29.97408,29.97408,0,0,1,10.23241-17.3076c7.87438-6.46853,18.9994-8.8505,27.49446-14.04993a5.62527,5.62527,0,0,1,8.61571,5.47251q-.01709.11352-.03474.227a32.92549,32.92549,0,0,0-3.69184,1.779q-1.02361.57761-2.004,1.22586a4.90115,4.90115,0,0,0,1.976,8.91916l.1.01535c.072.01031.13369.02063.20557.031a48.80788,48.80788,0,0,1-8.97767,14.05785A50.25446,50.25446,0,0,1,763,689.92891h-.01031a119.56321,119.56321,0,0,1-8.03167,23.447H726.26635c-.10291-.3188-.19543-.64792-.288-.96672a32.59875,32.59875,0,0,0,7.93916-.473c-2.12878-2.61214-4.25748-5.24482-6.38625-7.85688a1.78139,1.78139,0,0,1-.1337-.15424c-1.07978-1.33685-2.16987-2.66347-3.24965-4.00032l-.00058-.00165a47.75037,47.75037,0,0,1,1.39916-12.16412Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#f2f2f2"
                />
                <polygon
                  points="95.525 514.522 103.913 518.096 121.692 487.445 109.312 482.17 95.525 514.522"
                  fill="#a0616a"
                />
                <polygon
                  points="164.839 522.46 173.956 522.459 178.294 487.291 164.837 487.292 164.839 522.46"
                  fill="#a0616a"
                />
                <path
                  d="M552.57973,715.56863l28.03732-.00106V715.213a10.9135,10.9135,0,0,0-10.9129-10.91274h-.00068l-5.12137-3.88534-9.55536,3.88593-2.44748.00009Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M478.48705,704.20872,504.28,715.2004l.139-.32619a10.91352,10.91352,0,0,0-5.76059-14.31765l-.00062-.00026-3.188-5.58221-10.31387-.17158-2.25155-.95951Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M561.84435,497.92253,575.701,582.2971l-3.771,12.57327,4.94839,8.90485-7.26683,78.20391,2.94976,6.49418-8.24162,5.08284H547.54911l-.89-70.79862-4.14262-10.39477V606.634l-8.43315-43.17135-.89958,53.613-2.69237,5.19324-24.11923,63.13834H487.56689l1.45444-11.20445h0c-3.36924-1.70583,5.05852-6.69143,5.86836-10.38l-2.769-6.23027,2.769-11.7683,6.378-32.72881-6.51658-38.80648,2.334-24.97791-1.21533-8.54429.09222-2.76335s3.2144-1.24011.14469-4.33583c-4.24981-24.09107.97842-29.3193.97842-29.3193L518.00961,492.102Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <circle
                  id="a947ada5-bf6f-4e8a-be72-c0404926012e"
                  data-name="ab6171fa-7d69-4734-b81c-8dff60f9761b"
                  cx="140.03783"
                  cy="184.20438"
                  r="19.00411"
                  fill="#a0616a"
                />
                <path
                  d="M504.27345,331.347a7.47842,7.47842,0,0,1-8.15889,8.058l-11.0421,24.17336-7.32789-11.70577,11.60924-21.1608a7.519,7.519,0,0,1,14.91964.63519Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#a0616a"
                />
                <path
                  d="M563.09,499.73937a1.78613,1.78613,0,0,1-2.15,1.99006c-9.95-2.15-51.01,3.00994-64.61,16.87a1.79625,1.79625,0,0,1-3.08-1.39c.24-2.98,4.57-16.46,4.57-16.46l1.32-8.4a1.947,1.947,0,0,0,0-.59l-1.21-6.95a1.82131,1.82131,0,0,0-.5-.96l-.41-.41a1.79855,1.79855,0,0,1,0-2.54l1.59-1.58a1.8408,1.8408,0,0,0,.51-1.51l-2.11-15.6c-.01-.03-.01-.07-.02-.1l-9.32-49.22a1.79837,1.79837,0,0,1,.99-1.95l15.84-7.57a1.767,1.767,0,0,0,.45-.3l11.06-10.26a1.85376,1.85376,0,0,1,1.2-.48l19.88-.15a1.81,1.81,0,0,1,1.43.7l6.05,7.87a1.79412,1.79412,0,0,0,.84.6l4.1,1.38995,11.84,4.02.55.19a1.784,1.784,0,0,1,1.2,1.62.85946.85946,0,0,1,.01.16l-2.96,61.25994a1.94039,1.94039,0,0,0,.14.79l1.42,3.31a1.805,1.805,0,0,1-.41,2c-.42.4-.9.86-1.2,1.2-.61.67.69,5.98.89,6.75a1.41426,1.41426,0,0,1,.04.2l.73,5.49006a1.784,1.784,0,0,1-.74,1.69,1.78919,1.78919,0,0,0-.32,2.62l1.6,1.89a1.90833,1.90833,0,0,1,.41.93Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#6c63ff"
                />
                <path
                  d="M523.23806,385.87587q-.12178-.26813-.24289-.5381c.03112.001.06192.00547.093.00628Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M590.903,493.48776a7.47845,7.47845,0,0,0-8.13818-8.07895l-10.98-24.20164-7.35792,11.68692,11.55487,21.19054a7.519,7.519,0,0,0,14.92122-.59687Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#a0616a"
                />
                <path
                  d="M576.02,468.0794l-.61005,1.14-6.43,12.01995-.9,1.68-6.28-8.65-20.61-28.38,2.93-17.8,5.39-22.3,7.99-.46,5.6,2.29h0a11.49887,11.49887,0,0,1,6.63994,12.7226L564.78,445.73937Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#6c63ff"
                />
                <path
                  d="M544.645,350.70238a10.69537,10.69537,0,0,0-1.8602-4.373,5.22957,5.22957,0,0,0-7.7914-.23681,5.73453,5.73453,0,0,0,.25219-2.69011,14.57115,14.57115,0,0,1-4.39877,1.30833l3.37232-3.52109-16.7868,1.54231c-1.73252.15918-3.60607.38462-4.87827,1.70081-1.27225,1.31613-1.34282,4.12544.26519,4.85933-3.16864-1.19326-6.80723.53876-8.89769,3.44068-2.09051,2.90187-2.86031,6.72972-3.00155,10.44312-.1831,4.81528.71432,9.94173,3.65351,13.48685,1.92195,2.31821,4.54268,3.76383,6.66972,5.84942l.06367.06288a18.90833,18.90833,0,0,0,18.30287,5.09863c.36268-.09969.72281-.21035,1.0847-.31354,1.809.8182,4.062-.30042,5.20391-2.11963,1.21769-1.93993,1.45817-4.42213,1.50974-6.78643a55.63473,55.63473,0,0,0-.56951-9.24482c-.50342-3.44634-.95725-7.85993,1.77222-9.591,2.125-1.34769,4.76529-.01776,6.90455,1.30182A35.52992,35.52992,0,0,0,544.645,350.70238Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M504.12144,438.67889l-12.66281-.914-21.977-26.90709L453.168,387.47484l3.75714-9.5056,17.75877-25.44207L474.5,350.3294l1.9652-.35426.0348-2.64574,1.63106.25915L482.5,341.3294l10,8-5.65545,16.61336L486.5,369.3294l-1.95653,3.373.95653,4.627-3.73966,3.54868-1.80059,5.2894c7.768,5.1087,15.13473,12.75186,22.3172,22.3172Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#6c63ff"
                />
                <polygon
                  points="288.635 284.344 287.262 297.074 288.07 313.768 251.094 309.375 247.619 284.344 252.046 284.387 288.635 284.344"
                  fill="#ffb6b6"
                />
                <path
                  d="M644.50115,426.10222l8.78628-5.27177,4.21257-6.501,13,2,15.89164,10.65282-.15567,24.16089-9.85315,25.05907-41.29551-5.27177-1.569-8.839s-11.42217-15.34139.87863-24.12767Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#6c63ff"
                />
                <path
                  d="M591.76649,354.35931a6.7071,6.7071,0,0,0,4.33508,9.32622l28.60677,53.97634L636.25506,408.75l-31.75033-50.25468a6.74344,6.74344,0,0,0-12.73824-4.136Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#ffb6b6"
                />
                <path
                  d="M638.69211,435.90075s-2.65087,2.351-6.4207-4.14078c-3.018-5.19718-18.06934-28.46927-20.20054-36.53663a5.269,5.269,0,0,1-5.21337-3.81418l16.16753-6.27524c3.51451,1.75726,2.53909,4.19285,1.64791,5.45287l6.02121,9.03178,20.02845,22.47649-10.08415,12.1403Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#6c63ff"
                />
                <polygon
                  points="307.814 515.476 299.73 515.476 295.882 484.294 307.814 484.294 307.814 515.476"
                  fill="#ffb6b6"
                />
                <path
                  d="M700.1424,713.08042h-5.79748l-1.03482-5.47351-2.65034,5.47351h-15.3763a3.45645,3.45645,0,0,1-1.96407-6.30079l12.279-8.48036v-5.53353l12.91543.77088Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <polygon
                  points="262.404 515.476 254.32 515.476 250.472 484.294 262.404 484.294 262.404 515.476"
                  fill="#ffb6b6"
                />
                <path
                  d="M654.73248,713.08042H648.935l-1.03483-5.47351-2.65033,5.47351H629.87353a3.45646,3.45646,0,0,1-1.96407-6.30079l12.27906-8.48036v-5.53353l12.91543.77088Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M699.36355,672.18387h-.08789l-1.55474-50.70041a13.25754,13.25754,0,0,0-.17395-12.52816l-.22259-.40294.57714-2.67532a17.04076,17.04076,0,0,0-.97381-10.25583l-1.45042-47.29409c5.18177-33.58223-19.513-55.48328-19.513-55.48328H638.97114l-2.64371,9.08318L633.5,504.3294l1.07036,3.63448L631.5,512.3294l-.47085,7.80126c-5.25036,51.15245-4.29769,100.99895,4.03388,149.29183l-.22713.11486a1.91928,1.91928,0,0,0-.7837,2.53064c.38494,1.11536,1.36006,1.7907,2.17792,1.50838l19.53662-.67952a1.91912,1.91912,0,0,0,.78369-2.53064c-.38494-1.11536-1.36005-1.79063-2.17791-1.50838l-1.32837.67187,2.83294-48.924-.31439-8.93627.64769-10.138,2.99461-45.60077,11.335,56.07609,11.57816,60.74142a2.12985,2.12985,0,0,0,1.4362,3.7086h15.80917a2.13645,2.13645,0,0,0,0-4.2729Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M739.87727,513.7051a6.70709,6.70709,0,0,0-4.60542-9.19574L705.102,451.39089l-11.28171,9.245,33.20345,49.30667a6.74344,6.74344,0,0,0,12.85352,3.76249Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#ffb6b6"
                />
                <path
                  d="M683.87655,426.94466s2.58113-2.42736,6.53881,3.95164c3.16842,5.10688,25.60786,34.553,27.97359,42.55474a5.269,5.269,0,0,1,5.32246,3.6604l-15.9775,6.74441c-3.5643-1.65394-5.2247-4.74775-4.37068-6.03324L697.081,468.9704l-23.55352-27.19248,8.45215-13.11177Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#6c63ff"
                />
                <path
                  d="M803.28255,714.84886a1.54861,1.54861,0,0,1-1.5533,1.55322H389.67908a1.55322,1.55322,0,0,1,0-3.10644H801.72925A1.54866,1.54866,0,0,1,803.28255,714.84886Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#ccc"
                />
                <path
                  d="M651.18156,379.26551c-5.37911,10.60226-1.86522,22.8831,8.11659,29.34115,10.79386,6.98343,24.80819,5.45434,29.34115-8.11659,5.04791-15.1126.90092-21.59579-8.11659-29.34115C669.95519,362.07222,656.9936,367.81,651.18156,379.26551Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M677.66066,402.884a17.031,17.031,0,0,1-27.09993-20.63521l.1478-.19411a17.031,17.031,0,0,1,26.94792,20.82613Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#ffb6b6"
                />
                <path
                  d="M645.96873,377.54889a23.27036,23.27036,0,0,0,9.8233,5.56614,10.17675,10.17675,0,0,1,2.58884-2.14543,10.88717,10.88717,0,0,0-.95006,3.074c1.64205,3.40778,8.34857,5.857,14.75834,8.36247L680.679,377.423l-11.23732-6.36736C660.41215,364.813,649.78234,367.47737,645.96873,377.54889Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M687.083,371.1677a5.23385,5.23385,0,0,1,4.94812.72258,11.02815,11.02815,0,0,1,3.23005,3.92876,28.16931,28.16931,0,0,1,2.92869,7.982c.48471,2.41669.40266,5.33849-1.76568,6.59966-1.80927,1.05235-4.39625.38974-6.05913-1.01467a13.46082,13.46082,0,0,1-3.411-5.30581,18.75208,18.75208,0,0,0-3.02073-5.5262l1.49809.6994a13.09241,13.09241,0,0,1-.6521-4.45959A4.319,4.319,0,0,1,687.083,371.1677Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <path
                  d="M667.64689,373.13142l12.05584,6.83116a14.12778,14.12778,0,0,1,5.32688,19.2565l0,0a21.929,21.929,0,0,1-28.0394,9.20182l11.01643-9.72506-14.94451,7.61439-3.19079-1.808C665.899,401.588,668.99079,389.0156,667.64689,373.13142Z"
                  transform="translate(-388.06186 -183.59792)"
                  fill="#2f2e41"
                />
                <polygon
                  points="163.162 0 123.5 66.033 163.297 89.529 163.162 0"
                  fill="#8c8c8c"
                />
                <polygon
                  points="202.998 66.033 163.162 0 163.297 89.529 202.998 66.033"
                  fill="#333"
                />
                <polygon
                  points="123.5 66.033 163.249 47.916 163.297 89.529 123.5 66.033"
                  fill="#383838"
                />
                <polygon
                  points="202.998 66.033 163.249 47.916 163.335 88.008 202.998 66.033"
                  fill="#141414"
                />
                <polygon
                  points="202.901 73.595 163.2 97.091 163.2 129.5 202.901 73.595"
                  fill="#333"
                />
                <polygon
                  points="123.498 73.595 163.2 97.091 163.2 129.5 123.498 73.595"
                  fill="#8c8c8c"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service4;
