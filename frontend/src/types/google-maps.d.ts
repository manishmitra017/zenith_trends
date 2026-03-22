interface Window {
  google: {
    maps: {
      Map: new (
        element: HTMLElement,
        options: google.maps.MapOptions
      ) => google.maps.Map;
      Marker: new (options: google.maps.MarkerOptions) => google.maps.Marker;
    };
  };
}

declare namespace google.maps {
  interface MapOptions {
    center: { lat: number; lng: number };
    zoom: number;
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
    styles?: Array<{
      featureType?: string;
      stylers: Array<Record<string, string>>;
    }>;
  }
  interface Map {}
  interface MarkerOptions {
    position: { lat: number; lng: number };
    map: Map;
    title?: string;
  }
  interface Marker {}
}
