"use client";

import BannerHome from "@/components/BannerHome";
import BlogList from "@/components/BlogList";

const page = () => {
  return (
    <div className="min-h-[72vh]">
    <BannerHome />
    <BlogList />
    </div>
  )
}

export default page;