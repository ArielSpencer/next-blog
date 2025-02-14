import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await connectDB();
};
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

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    image: formData.get("image"),
    alt: formData.get("alt"),
    author: formData.get("author"),
    authorImg: formData.get("authorImg"),
    readingTime: formData.get("readingTime"),
    content: formData.get("content")
  };

  await BlogModel.create(blogData);

  return NextResponse.json({ success: true, message: "Post Adicionado" });
}