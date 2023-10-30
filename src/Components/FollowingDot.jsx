import { useState, useEffect } from 'react';


export default function FollowingDot() {
    const [position, setPosition] = useState({ x: 0, y: 0 });


    function handleCoordinates(e) {
        // console.log(e);
        setPosition({ x: e.pageX, y: e.pageY });
        console.log(document.body.style.cursor);
        // if (document.body.style.cursor === "pointer") {
        //     console.log('hello');
        // }
        // else {
        //     console.log('ponga pandit');
        // }
    }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => { handleCoordinates(e) });

        return () => window.removeEventListener('mousemove', (e) => { handleCoordinates(e) });
    }, []);


    return (
        <div style={{ transform: `translate(${position.x}px, ${position.y}px)` }} className='following-dot'></div>
    )
}