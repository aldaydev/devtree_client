import type { PublicUserData, SocialNetwork } from "../types";

type HandleDataProps = {
    data: PublicUserData
}

export default function PublicUserData({ data } : HandleDataProps) {

    const links : SocialNetwork[] = JSON.parse(data.links).filter((link : SocialNetwork) => link.enabled);

    const appleMusic : string = "APPLE MUSIC";

    return (
        <main className="space-y-6 text-white">
            <header className="space-y-6 text-white">
                <p className="text-4xl text-center font-black">
                    {data.username}
                </p>

                {data.image &&
                    <img src={data.image} alt={`Foto de ${data.name}`} className="max-w-[250px] mx-auto"/>
                }

                <p className="text-lg text-center font-bold text-balance">
                    {data.description}
                </p>
            </header>
            

            <div className="mt-20 flex flex-col gap-6">
                {
                    links.length ? 
                    links.map(link => (
                        <a 
                            key={link.name}
                            href={link.url}
                            className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img 
                                src={`/social/icon_${link.name}.svg`}
                                alt={`Icono de ${link.name}`}
                                className="max-w-12"
                            />
                            <p className="text-black font-bold text-lg">
                                {
                                link.name === 'applemusic'
                                ?
                                appleMusic
                                :
                                link.name.toUpperCase()
                                }
                            </p>
                        </a>
                    ))
                    : 
                    <p className="text-center">Este perfil aún no tiene enlaces</p>
                }
            </div>

            
        </main>
    )
}
