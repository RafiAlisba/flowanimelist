import Image from "next/image"

const Animelist = ({title, images}) => {
    return (
        <div className="grid grid-cols-3 gap-2 h-32">
            <div className="bg-indigo-500">
                <Image src={images} alt="..." width={600} height={400}/><h3>{title}</h3></div>

        </div>
    )
}

export default Animelist