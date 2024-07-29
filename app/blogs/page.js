import BlogCard from "./blogCard";
import stack from "@/utils/contentstack";

export default async function BlogsPage() {
  const blogContentType = stack.ContentType('blog');
  const response = await blogContentType.Query().toJSON().find();
  const blogEntries = response[0] || [];
  const cardDetails = blogEntries.map((entry) => ({
    image: entry.image ? entry.image.url : "",
    title: entry.title,
    description: entry.short_description,
    button: "Read more",
    blogId: entry.uid,
  }));

  return (
    <main>
      <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
        {cardDetails.map((props) => (
          <BlogCard key={props.blogId} {...props} />
        ))}
      </div>
    </main>
  );
}
