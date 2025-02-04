import { blog_data } from "@/assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {

  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div
        className="flex justify-center gap-6 my-10"
      >
        <button
          onClick={() => setMenu("All")}
          className={menu === "All" ? 'bg-secondary text-writingLight py-2 px-4 rounded-sm' : "py-2 px-4 hover:bg-secondary hover:text-writingLight rounded-sm"}
        >
          All
        </button>

        <button
          onClick={() => setMenu("Programação")}
          className={menu === "Programação" ? 'bg-secondary text-writingLight py-2 px-4 rounded-sm' : "py-2 px-4 hover:bg-secondary hover:text-writingLight rounded-sm"}
        >
          Programação
        </button>

        <button
          onClick={() => setMenu("UX Design")}
          className={menu === "UX Design" ? 'bg-secondary text-writingLight py-2 px-4 rounded-sm' : "py-2 px-4 hover:bg-secondary hover:text-writingLight rounded-sm"}
        >
          UX Design
        </button>

        <button
          onClick={() => setMenu("SEO")}
          className={menu === "SEO" ? 'bg-secondary text-writingLight py-2 px-4 rounded-sm' : "py-2 px-4 hover:bg-secondary hover:text-writingLight rounded-sm"}
        >
          SEO
        </button>
      </div>
      <div
        className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24"
      >
        {blog_data.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
          return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} alt={item.alt} />
        })}
      </div>
    </div>
  )
}

export default BlogList;