import { useEffect, useState } from 'react';
const DakeModeButton = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
        <label onChange={() => setIsDarkMode(!isDarkMode)} className="relative inline-block h-6 w-10 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900" >
          <input className="peer sr-only" id="AcceptConditions" type="checkbox" />
          <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-5 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent" />
        </label>
  );
}

export default DakeModeButton;
