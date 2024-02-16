import React,{ useEffect, useState } from "react";
import { Chrono } from "react-chrono";

export default function ChangeLog() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
      }, []); // Run once after the initial render

    const items = [{
    title: "Feb 2024",
    cardTitle: "Change 1",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
    title: "Dec 2023",
    cardTitle: "Change 2",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    }
    ];
    
    return isClient ? (
    
    <div >
      <Chrono items={items} mode="VERTICAL" 
      theme={{
              secondary: "rgb(230, 230, 230)", 
              cardBgColor: "rgb(239,239,255)", 
              titleColorActive: "rgb(0,0,0)"
            }}

      fontSizes={{
        cardSubtitle: '1.3rem',
        cardText: '1rem',
        cardTitle: '1.7rem',
        title: '1rem',
      }}
     />
    </div>
    ) : null;
};