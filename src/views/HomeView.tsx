import SearchForm from "../components/SearchForm";

export default function HomeView() {
    return (
        <>
            <main className="bg-gray-100 lg:py-10 pt-4 min-h-[calc(100dvh-85px)] bg-no-repeat lg:bg-home lg:bg-home-xl bg-right-top px-[10%] md:px-[15%]">

                <div className="flex items-center justify-center gap-[10px]">

                    <div className="lg:w-1/2 px-10 lg:p-0 space-y-6">
                        <h1 className="text-6xl font-black">
                            Todas tus <span className="text-orange">Redes Sociales </span> de artista en un enlace
                        </h1>

                        <p className="text-slate-800 text-xl">Únete a la comunidad de developers compatiendo tus perfiles de GitHub, LinkedIn, Youtube, Instagram, Facebook y más</p>
                    </div>

                    <div className="basis-[40%] flex justify-end ">
                        <img src="/mlink_illustration.svg" className="w-[80%] min-w-[300px] max-w-[600px]"/>
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
