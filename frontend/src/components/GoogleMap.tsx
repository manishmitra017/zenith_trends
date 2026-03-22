"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/content";

const MAPS_QUERY = encodeURIComponent(siteConfig.address);

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    // Avoid loading the script twice
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=__initGoogleMap`;
    script.async = true;
    script.defer = true;

    (window as unknown as Record<string, () => void>).__initGoogleMap = () => {
      initMap();
    };

    document.head.appendChild(script);

    return () => {
      delete (window as unknown as Record<string, unknown>).__initGoogleMap;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  function initMap() {
    if (!mapRef.current || !window.google) return;

    const location = { lat: -37.8652, lng: 144.7438 }; // Williams Landing

    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 14,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "water",
          stylers: [{ color: "#d4e4f7" }],
        },
      ],
    });

    new window.google.maps.Marker({
      position: location,
      map,
      title: "Zenith Trends",
    });

    setLoaded(true);
  }

  // Fallback when no API key
  if (!apiKey) {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl border border-slate-200 bg-slate-200">
        <div className="text-center">
          <MapPin className="mx-auto mb-2 h-8 w-8 text-slate-400" />
          <p className="text-sm font-medium text-slate-500">
            Williams Landing, VIC 3027
          </p>
          <a
            href={`https://maps.google.com/?q=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs font-semibold text-[#7C3AED] hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div
        ref={mapRef}
        className="h-56 w-full bg-slate-200"
        style={{ minHeight: 224 }}
      />
      {loaded && (
        <a
          href={`https://maps.google.com/?q=${MAPS_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white px-4 py-2.5 text-center text-xs font-semibold text-[#7C3AED] transition-colors hover:bg-slate-50 hover:underline"
        >
          Open in Google Maps
        </a>
      )}
    </div>
  );
}
