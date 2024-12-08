// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <div className="w-full px-4 md:px-8 flex flex-wrap md:flex-nowrap gap-4 mt-8 bg-slate-200">
//       {/* Left Image */}
//       <div className="w-full md:w-1/2">
//         <img
//           src="/image\Ads 1.png"
//           alt="Left side"
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Right Image */}
//       <div className="w-full md:w-1/2">
//         <img
//           src="/image\Ads 2.png"
//           alt="Right side"
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>
//       <div className="w-full md:w-1/2 md:mx-auto mt-6 mb-8">
//          <div className="flex gap-4 justify-center">
//            {/* First Image */}
//            <div className="w-full md:w-1/2">
//            <img
//                src="/image/Pick - Up (1).png"
//                alt="Bottom Left"
//                className="w-full h-auto object-cover rounded-lg shadow-md"
//              />
//            </div>

//            {/* Second Image */}
//            <div className="w-full md:w-1/2">
//              <img
//                src="/image/Drop - Off (1).png"
//                alt="Bottom Right"
//                className="w-full h-auto object-cover rounded-lg shadow-md"
//              />
//            </div>
//          </div>
//     </div>
//   );
// };

// export default HeroSection;


// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <div className="w-full px-4 md:px-8 flex flex-wrap md:flex-nowrap gap-4 mt-8 bg-slate-200">
//       {/* Left Image */}
//       <div className="w-full md:w-1/2">
//         <img
//           src="/image/Ads 1.png" // Fixed the path by replacing the backslash
//           alt="Left side"
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Right Image */}
//       <div className="w-full md:w-1/2">
//         <img
//           src="/image/Ads 2.png" // Fixed the path by replacing the backslash
//           alt="Right side"
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//         />
//       </div>

//       {/* Bottom Images (Two more images) */}
//       <div className="w-full md:w-1/2 md:mx-auto mt-6 mb-8">
//         <div className="flex gap-4 justify-center">
//           {/* First Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/image/Pick - Up (1).png"
//               alt="Bottom Left"
//               className="w-full h-auto object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Second Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/image/Drop - Off (1).png"
//               alt="Bottom Right"
//               className="w-full h-auto object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// import React from "react";

// const HeroSection: React.FC = () => {
//   return (
//     <div className="w-full px-4 md:px-8 flex flex-wrap gap-4 mt-8 bg-slate-200">
//       {/* Top Images (Left and Right) */}
//       <div className="flex w-full gap-4">
//   {/* Left Image */}
//   <div className="w-full md:w-1/2">
//     <img
//       src="/image/Ads 1.png" // Fixed the path by replacing the backslash
//       alt="Left side"
//       className="w-full h-auto object-cover rounded-lg shadow-md"
//     />
//   </div>

//   {/* Right Image */}
//   <div className="w-full md:w-1/2">
//     <img
//       src="/image/Ads 2.png" // Fixed the path by replacing the backslash
//       alt="Right side"
//       className="w-full h-auto object-cover rounded-lg shadow-md"
//     />
//   </div>
// </div>


//       {/* Bottom Images (Two more images) */}
//       <div className="w-full mt-6">
//         <div className="flex gap-4 justify-center">
//           {/* First Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/image/Pick - Up (1).png"
//               alt="Bottom Left"
//               className="w-full h-auto object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Second Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/image/Drop - Off (1).png"
//               alt="Bottom Right"
//               className="w-full h-auto object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import Image from "next/image"; // Import the Image component from next/image

const HeroSection: React.FC = () => {
  return (
    <div className="w-full px-4 md:px-8 flex flex-wrap gap-4 mt-8 bg-slate-200">
      {/* Top Images (Left and Right) */}
      <div className="flex w-full gap-4">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/image/Ads 1.png" // Fixed the path by replacing the backslash
            alt="Left side"
            width={500} // Set an appropriate width for the image
            height={300} // Set an appropriate height for the image
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/image/Ads 2.png" // Fixed the path by replacing the backslash
            alt="Right side"
            width={500} // Set an appropriate width for the image
            height={300} // Set an appropriate height for the image
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Bottom Images (Two more images) */}
      <div className="w-full mt-6">
        <div className="flex gap-4 justify-center">
          {/* First Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/image/Pick - Up (1).png"
              alt="Bottom Left"
              width={500} // Set an appropriate width for the image
              height={300} // Set an appropriate height for the image
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Second Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/image/Drop - Off (1).png"
              alt="Bottom Right"
              width={500} // Set an appropriate width for the image
              height={300} // Set an appropriate height for the image
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
