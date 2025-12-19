import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-semibold">Post #{id}</h2>
      <p className="mt-2">
        This is the content for blog post {id}.
      </p>
    </div>
  );
}