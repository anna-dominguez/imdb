import Image from 'next/image'

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  )

  return await res.json()
}

export default async function MoviePage({ params }) {
  const movieId = params.id
  const movie = await getMovie(movieId)

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          width={500}
          height={300}
          alt="Movie poster"
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          placeholder="blur"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          blurDataURL="spinner.svg"
        />
      </div>
    </div>
  )
}
