import React, { useEffect, useState } from 'react';

interface HeaderProps {
    pageHeading: string;
    pageSubheading: string;
}

const Header: React.FC<HeaderProps> = ({ pageHeading, pageSubheading }) => {
    const [animatedHeading, setAnimatedHeading] = useState<string>('');

    useEffect(() => {
        // Function to generate a random character
        const randomChar = () => String.fromCharCode(Math.floor(Math.random() * 74) + 48);

        let animationTimeout: NodeJS.Timeout;

        // Start the animation with a delay of 500ms
        animationTimeout = setTimeout(() => {
            // Initialize with random characters
            let tempHeading = Array.from({ length: pageHeading.length }, randomChar);
            setAnimatedHeading(tempHeading.join(''));

            // Animate each character to its target
            const timeouts: NodeJS.Timeout[] = tempHeading.map((_, index) => {
                return setTimeout(() => {
                    tempHeading[index] = pageHeading[index];
                    setAnimatedHeading(tempHeading.join(''));
                }, index * 45); // Delay each character animation
            });

            // Cleanup timeouts on unmount
            return () => {
                timeouts.forEach(clearTimeout);
            };
        }, 350); // Initial delay

        // Cleanup the initial animation timeout on unmount
        return () => {
            clearTimeout(animationTimeout);
        };
    }, [pageHeading]);

    return (
        <header className='lg:fixed lg:left-4 lg:top-2 mt-[5rem] lg:mt-0 lg:w-10/12 w-full bg-[#fafafa] dark:bg-[#070707] transition-colors duration-200 ease-in-out'>
            <h1 className='uppercase text-5xl lg:text-7xl'>{animatedHeading}</h1>
            <h2 className=''>{pageSubheading}</h2>
        </header>
    );
};

export default Header;
