export type GalleryTile = {
  /** Masonry sizing so the grid isn't six uniform tiles. */
  span: "tall" | "wide" | "standard";
  /** Visual motif key used by the placeholder SVG artwork. */
  motif: "kitchen" | "bathroom" | "bedroom" | "living" | "detail" | "closet";
};

/** Paired positionally with `gallery.items` (alt text) in the messages files. */
export const galleryTiles: GalleryTile[] = [
  { span: "wide", motif: "kitchen" },
  { span: "standard", motif: "bathroom" },
  { span: "tall", motif: "bedroom" },
  { span: "standard", motif: "living" },
  { span: "standard", motif: "detail" },
  { span: "wide", motif: "closet" },
];
