// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function SpecifPage() {
//   const { startPage } = useParams();
//   const [ayahs, setAyahs] = useState([]); // Store verses in state

//   useEffect(() => {
//     const getPageDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://api.alquran.cloud/v1/page/${startPage}/quran-uthmani`
//         );

//         // Extract ayahs from response
//         if (response.data?.data?.ayahs) {
//           setAyahs(response.data.data.ayahs);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getPageDetails();
//   }, [startPage]);

//   return (
//     <>
//       <div>
//         {ayahs.map((ayah, index) => {
//           const specialPhrase = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";

//           const startsWithBismillah = ayah.text.startsWith(specialPhrase);
//           const restOfVerse = startsWithBismillah
//             ? ayah.text.slice(specialPhrase.length).trim()
//             : ayah.text;

//           return (
//             <div key={ayah.number} className="verse-container-read">
//               <div className="arabic-verse-container-read">
//                 <div className="arabic-txt-readnumber-c">
//                   <p className="arabic-text-readnumber">{index + 1}</p>
//                 </div>
//                 <div className="arabic-txt-readverse-c">
//                   <p className="arabic-text-read">
//                     {startsWithBismillah && (
//                       <span className="bismillah-text-read">
//                         {specialPhrase}
//                       </span>
//                     )}
//                     {restOfVerse && ` ${restOfVerse}`}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import changePage from "../../assets/changePage.png";

export default function SpecifPage() {
  const { startPage } = useParams();
  const [currPage, setCurrPage] = useState(+startPage);
  const [verses, setVerses] = useState([]);

  const handleNext = () => {
    setCurrPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrPage((prev) => prev - 1);
  };

  useEffect(() => {
    const getPageDetails = async () => {
      try {
        const response = await axios.get(
          `http://api.alquran.cloud/v1/page/${currPage}/quran-uthmani`
        );
        setVerses(response.data.data.ayahs); // Storing the list of ayahs
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getPageDetails();
  }, [currPage]);

  return (
    <>
      <div className="page-quran-container">
        {verses.map((ayah, index) => (
          <span key={ayah.number} className="page-quran-verse">
            {ayah.text}
            <span className="page-ayah-number">({ayah.numberInSurah})</span>
          </span>
        ))}
      </div>
      <div className="next-container">
        <img
          src={changePage}
          alt="prev"
          className="prev-img"
          onClick={handlePrev}
        />
        <p className="currpage-no">{currPage}</p>
        <img
          src={changePage}
          alt="next"
          className="next-img"
          onClick={handleNext}
        />
      </div>
    </>
  );
}
