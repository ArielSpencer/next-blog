import { connectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server")
import { writeFile } from "fs/promises";

const LoadDB = async () => {
  await connectDB();
}
LoadDB();

export async function GET(request) {

  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }

}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `public/images/${timestamp}-${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/images/${timestamp}-${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    image: `${imgUrl}`,
    alt: `${formData.get("alt")}`,
    author: `${formData.get("author")}`,
    authorImg: `${formData.get("authorImg")}`,
    readingTime: `${formData.get("readingTime")}`,
  }

  await BlogModel.create(blogData);
  console.log("Blog Created");

  return NextResponse.json({ success: true, message: "Post Adicionado" })
}