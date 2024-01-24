"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { Information } from "./information";

export function Aside() {
  const segment = useSelectedLayoutSegment();
  const el = segment === "post" ? <div>post anchors</div> : <Information />;
  return <aside>{el}</aside>;
}
