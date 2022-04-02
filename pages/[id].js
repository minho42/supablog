import { supabase } from "../utils/supabase";

export const getServerSideProps = async ({ params }) => {
  const { data: post, error } = await supabase.from("posts").select("*").eq("id", params.id).single();

  if (error) {
    throw new Error(error);
  }

  return {
    props: {
      post,
    },
  };
};

export default function PostPage({ post }) {
  return (
    <div className="">
      <h1 className="font-semibold">{post.title}</h1>
      <p className="">{post.content}</p>
    </div>
  );
}
