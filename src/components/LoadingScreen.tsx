
// import React, { useEffect, useState } from 'react';

// const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
//   const [progress, setProgress] = useState(0);
//   const [currentText, setCurrentText] = useState(0);
  
//   const loadingTexts = [
//     "Initializing Splendenslab...",
//     "Loading Advanced Technologies...",
//     "Preparing Your Experience...",
//     "Almost Ready..."
//   ];

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(onComplete, 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 50);

//     const textInterval = setInterval(() => {
//       setCurrentText(prev => (prev + 1) % loadingTexts.length);
//     }, 800);

//     return () => {
//       clearInterval(progressInterval);
//       clearInterval(textInterval);
//     };
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="particle animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 4 + 2}px`,
//               height: `${Math.random() * 4 + 2}px`,
//               animationDelay: `${Math.random() * 4}s`,
//               animationDuration: `${Math.random() * 3 + 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="text-center z-10">
//         {/* Company Logo/Name */}
//         <div className="mb-8">
//           <h1 className="text-6xl font-bold text-gradient mb-4">
//             Splendenslab
//           </h1>
//           <div className="flex items-center justify-center space-x-2">
//             <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//             <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
//             <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
//           </div>
//         </div>

//         {/* Loading Animation */}
//         <div className="mb-8">
//           <div className="relative w-32 h-32 mx-auto mb-6">
//             <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
//             <div 
//               className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"
//               style={{ animationDuration: '1s' }}
//             ></div>
//             <div 
//               className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-500 border-l-indigo-500 animate-spin"
//               style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
//             ></div>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-2xl font-bold text-white">{progress}%</span>
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-80 mx-auto mb-6">
//           <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
//             <div 
//               className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Loading Text */}
//         <div className="h-8">
//           <p className="text-lg text-slate-300 loading-text" key={currentText}>
//             {loadingTexts[currentText]}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;
import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Splendenslab...",
    "Loading Advanced Technologies...",
    "Preparing Your Experience...",
    "Almost Ready..."
  ];

  // ✅ Speak only once: "Welcome to Splendenslab"
useEffect(() => {
  const welcome = new SpeechSynthesisUtterance("Welcome to Splendenslab");
  welcome.lang = 'en-US';
  welcome.volume = 0.5;      // Softer voice
  welcome.pitch = 1.6;       // Higher pitch for a "lovely" feel
  welcome.rate = 0.9;        // Slightly slower to sound gentle
  speechSynthesis.cancel();  // Stop any current speech
  speechSynthesis.speak(welcome);
}, []);


  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gradient mb-4">Splendenslab</h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>

        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin" />
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-500 border-l-indigo-500 animate-spin" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{progress}%</span>
            </div>
          </div>
        </div>

        <div className="w-80 mx-auto mb-6">
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="h-8">
          <p className="text-lg text-slate-300 loading-text" key={currentText}>
            {loadingTexts[currentText]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
