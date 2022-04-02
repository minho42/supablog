import { supabase } from "../utils/supabase";
import Link from "next/link";

export const getStaticProps = async () => {
  const { data: posts, error } = await supabase.from("posts").select("*");
  if (error) {
    throw new Error(error);
  }
  console.log(posts);

  return {
    props: { posts },
  };
};

export default function Blog({ posts }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-full items-center justify-start space-y-3">
        <h1 className="">Posts</h1>

        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="underline">
              <h1>
                <Link href={`/${post.id}`}>
                  <a className="">📖 {post.title}</a>
                </Link>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
