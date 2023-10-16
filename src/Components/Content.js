import "./Content.css";
import { useNavigate } from "react-router-dom";
function Content({ movies, genres }) {
  const navigate = useNavigate();

  // Group movies by genre
  const groupedMovies = {};
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!groupedMovies[genre]) {
        groupedMovies[genre] = [];
      }
      groupedMovies[genre].push(movie);
    });
  });

  console.log(groupedMovies)

  return (
    <div className="row">
      {genres.map((genre) => (
        <div key={genre}>
          <h2>{genre}</h2>
          <div className="rail">
            {groupedMovies[genre] &&
              groupedMovies[genre].map((movie) => (
                <div className="inner">
                  <img id={movie.id} onClick={() => navigate(`/details/${movie.id}`)}
                    className="poster"
                    onError={(e) => {
                      e.target.src =
                        "https://avatars.mds.yandex.net/i?id=71493716d56d08ae0bdd88c50f30e326-5855935-images-thumbs&n=13";
                    }}
                    alt="poster"
                    src={movie.posterUrl}
                  />
                  <div className="titleMovies"><p className="title2">{movie.title}</p></div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
