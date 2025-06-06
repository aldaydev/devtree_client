import SearchForm from "../components/SearchForm";

export default function HomeView() {
    return (
        <>
            <main className="bg-gray-100 lg:py-10 pt-4 min-h-[calc(100dvh-85px)] bg-no-repeat lg:bg-home lg:bg-home-xl bg-right-top px-[10%] res-padding">

                <div className="flex items-center">
                    <div className="basis-[50%] flex flex-col gap-10">   
                        <h1 className="text-4xl text-center text-balance font-black lg:text-5xl">
                            Todas tus <span className="text-orange">Redes Sociales </span> de artista en un enlace
                        </h1>

                        <p className="text-slate-800 text-xl">Únete a la comunidad de developers compatiendo tus perfiles de GitHub, LinkedIn, Youtube, Instagram, Facebook y más</p>
                    </div>
                    <div className="basis-[50%] flex justify-end">
                        <img src="/mlink_illustration.svg" className="w-full h-auto object-cover max-w-[300px] lg:max-w-[500px] "/>
                    </div>
                </div>

                
                <div className="mx-[10%] md:mx-[15%] mt-[50px]">
                    <h3 className="text-dark text-3xl font-black text-center mb-6">
                        ¿ESTÁ MI NOMBRE ARTÍSTICO DISPONIBLE?
                    </h3>
                    <SearchForm/>
                </div>
                
            </main>
        </>
    )
}
