import SearchForm from "../components/SearchForm";

export default function HomeView() {
    return (
        <>
            <main className="bg-gray-100 lg:py-10 pb-14 pt-4 min-h-[calc(100dvh-85px)] bg-no-repeat lg:bg-home lg:bg-home-xl bg-right-top px-[10%] res-padding">

                <h1 className="text-4xl text-center text-balance font-black lg:text-4xl mb-8 lg:w-[60%] mx-auto">
                    Todas tus <span className="text-orange">Redes Sociales </span> de artista en un enlace
                </h1>

                <div className="flex items-center justify-center flex-col lg:flex-row gap-10">

                    <div className="basis-[50%] flex flex-col gap-4">
                        <p className="text-slate-800 text-2xl mb-5 text-center lg:text-left text-pretty">Spotify, Youtube, Amazon Music, Instagram y todos los enlaces que necesitas para compartir tu proyecto musical con el mundo</p>

                        <p className="text-slate-800 text-2xl text-center lg:text-left font-bold">¿Cómo funciona?</p>

                        <p className="text-slate-800 text-xl text-center lg:text-left">
                            1. Comprueba que tu nickname está disponible
                        </p>
                        <p className="text-slate-800 text-xl text-center lg:text-left">
                            2. Crea tu cuenta en menos de 1 minuto
                        </p>
                        <p className="text-slate-800 text-xl text-center lg:text-left">
                            3. Añade tus enlaces
                        </p>
                        <p className="text-slate-800 text-xl text-center lg:text-left">
                            4. Comparte tu arte con el mundo
                        </p>
                    </div>
                    
                    <img src="/mlink_illustration.svg" className="w-[100%] lg: basis-[60%] first-letter:w-full h-auto object-cover max-w-[300px] lg:max-w-[500px] order-first lg:order-none" />
                    
                </div>


                <div className="mx-0 md:mx-[20%] mt-[50px]">
                    <h3 className="text-dark text-2xl font-black text-center mb-6">
                        COMPRUEBA SI TU NOMBRE ARTÍSTICO ESTÁ DISPONIBLE
                    </h3>
                    <SearchForm />
                </div>

            </main>
        </>
    )
}
