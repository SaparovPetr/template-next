import { Metadata } from "next";
import Link from "next/link";

type Props = {
  posts: any[];
};

export const metadata: Metadata = {
  title: "Blog",
};

const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
