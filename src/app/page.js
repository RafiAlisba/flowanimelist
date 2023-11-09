import Animelist from "@/app/components/Animelist"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)

  const anime = await response.json()

  return (
    <div>
    <h1>Paling Populer</h1>
    {anime.data.map(data => { <Animelist title={data.title} images={data.images.webp.images_url}/>
    })}
    </div>
  )
}