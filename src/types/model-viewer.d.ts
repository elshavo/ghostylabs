declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        "auto-rotate"?: boolean | string;
        "camera-controls"?: boolean | string;
        "shadow-intensity"?: string;
        "environment-image"?: string;
        exposure?: string;
        poster?: string;
        loading?: string;
        reveal?: string;
        ar?: boolean | string;
      },
      HTMLElement
    >;
  }
}
