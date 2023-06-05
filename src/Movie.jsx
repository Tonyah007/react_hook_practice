import { Link, useSearchParams } from "react-router-dom";

export default function MoviePage() {
  const [params] = useSearchParams();

return (
    <main className="movie_page">
    <Link to="/">Home</Link>

     <iframe
        width="560"
        height="315"
        src={params.get("embedUrl")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}
