import React,{ useEffect, useState } from "react";
import { Chrono } from "react-chrono";

export default function Roadmap() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
      }, []); // Run once after the initial render

    const items = [{
    title: "March 2024",
    cardTitle: "Future Plans",
    cardDetailedText: "Exploration of AI-driven development features, expanded library of templates.",
    },
    {
    title: "March 2024",
    cardTitle: "Q2 Enhancements",
    cardDetailedText: "Enhanced API integrations, performance optimizations for high-volume applications.",
    },
    {
    title: "March 2024",
    cardTitle: "Q1 Enhancements",
    cardDetailedText: "Introduction of new components, improved UI customization options.",
    }];
    
    return isClient ? (
    
    <div >
      <Chrono items={items} mode="VERTICAL_ALTERNATING" 
      theme={{
              secondary: "rgb(230, 230, 230)", 
              cardBgColor: "rgb(239,239,255)", 
              titleColorActive: "rgb(0,0,0)"
            }}

      fontSizes={{
        cardSubtitle: '1.3rem',
        cardText: '1.8rem',
        cardTitle: '1.5rem',
        title: '1rem',
      }}
     />
    </div>
    ) : null;
};