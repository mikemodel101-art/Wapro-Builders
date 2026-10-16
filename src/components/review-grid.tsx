import ReviewRail from "@/components/review-rail";

/**
 * Compatibility shim.
 * The old static review grid was replaced by the animated sliding rail
 * (src/components/review-rail.tsx). This module is kept as a thin alias so
 * that any lingering copy of the old file in a git remote gets overwritten
 * with something that always compiles against the current review data shape.
 */
export default ReviewRail;
