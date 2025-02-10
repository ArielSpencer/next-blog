"use client";

import BannerHome from "@/components/BannerHome";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <div className="min-h-[72vh]">
      <BannerHome />
      <BlogList />
    </div>
  );
}
