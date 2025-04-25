import { useEffect, useState } from "react";

export function MiniMapComponent() {
    const [iframeSrc, setIframeSrc] = useState("");

    useEffect(() => {
        const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
        <style>
          html, body, #map {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([6.5244, 3.3792], 10);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
          var marker = L.marker([6.5244, 3.3792]).addTo(map);
          marker.bindPopup("Property Location").openPopup();
        </script>
      </body>
      </html>
    `;

        const blob = new Blob([html], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        setIframeSrc(url);

        return () => URL.revokeObjectURL(url); // Cleanup
    }, []);

    return (
        <div style={{ flex: 1, minHeight: 150 }}>
            {iframeSrc && (
                <iframe
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    title="Mini Map"
                />
            )}
        </div>
    );
}
