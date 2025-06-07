import { Toaster } from 'sonner'
import { DndContext, type DragEndEvent, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import NavigationTabs from './NavigationTabs'
import { Link, Outlet } from 'react-router-dom'
import type { SocialNetwork, User } from '../types'
import { useEffect, useState } from 'react'
import DevTreeLink from './DevTreeLink'
import { useQueryClient } from '@tanstack/react-query'

type DevTreeProps = {
    data: User
}

export default function DevTree({data}: DevTreeProps) {

    const [enabledLinks, setEnabledLinks] = useState<SocialNetwork[]>(JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled));

    useEffect(() => {
        setEnabledLinks(JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled))
    }, [data])

    const queryClient = useQueryClient();

    const handleDragEnd = (e: DragEndEvent) => {

        const { active, over } = e;

        if(over && over.id){
            const prevIndex = enabledLinks.findIndex(link => link.id === active.id)
            const newIndex = enabledLinks.findIndex(link => link.id === over.id)

            const order = arrayMove(enabledLinks, prevIndex, newIndex );

            const disabledLinks: SocialNetwork[] = JSON.parse(data.links).filter((link: SocialNetwork) => !link.enabled)

            setEnabledLinks(order);

            const links = [...order, ...disabledLinks];

            console.log(links);

            queryClient.setQueryData(['user'], (prevData: User) => {
                return {
                    ...prevData,
                    links: JSON.stringify(links)
                }
            })

        }
        
    }

    return (
        <>
            <div className="bg-gray-100 min-h-[calc(100dvh-85px)] py-10 res-padding">
                <main className="mx-auto">

                    <nav className='flex items-baseline justify-between'>
                        <NavigationTabs />

                        <div className="flex justify-end">
                            <Link
                                className="font-bold text-right text-dark text-xl hover:text-slate-500 transition-all"
                                to={`/${data.username}`}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Ver perfil
                            </Link>
                        </div>
                    </nav>
                    

                    <div className="flex flex-col lg:flex-row gap-8 mt-7">
                        <div className="flex-1 ">
                            <Outlet />
                        </div>

                        
                        <div className="basis-[42%] w-full lg:w-96 min-w-[300px] bg-dark px-5 py-10 space-y-4 relative">

                            <div className='w-full absolute top-1 left-0'>
                                <p className='text-green text-lg text-center font-bold'>- PREVIEW -</p>
                            </div>
                            
                            
                            <p className='text-4xl text-center font-bold text-white'>{data.username}</p>

                            {data.image ?
                            <img src={data.image} alt='Imagen Perfil' className='mx-auto max-w-[250px]'/>
                            :
                            <div className='bg-green-light min-h-[200px] flex items-center justify-center mx-4'>
                                <p className='font-bold text-pretty text-center px-6'>*Aquí irá tu imagen cuando la agreges. Recuerda que debe ser en formato 1:1 y con un límite de 250x250px y 500kb</p>
                            </div>
                            }

                            {
                                data.description ?
                                    <p className='text-center text-lg text-white'>{data.description}</p>
                                    :
                                    <p className='text-center text-lg text-white text-pretty'>*Aquí irá tu descripción si la agregas. Recuerda que hay un límite de 120 caracteres</p>
                            }
                            
                            {
                                enabledLinks.length > 0 ?
                                <DndContext
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <div className='mt-20 flex flex-col gap-5'>
                                    <SortableContext
                                        items={enabledLinks}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {
                                            enabledLinks.map((link) => (
                                                <DevTreeLink 
                                                    key={link.name} 
                                                    link={link}
                                                />
                                            ))
                                        }
                                    </SortableContext>
                                    
                                </div>
                            </DndContext>
                            :
                            <div className='bg-white rounded-lg p-4'>
                                <p className='text-dark font-bold text-center'>*Tus enlaces irán aquí cuando los agregues</p>
                            </div>
                            
                            }
                            
                            

                        </div>
                    </div>
                </main>
            </div>
            <Toaster position="top-right" />
        </>
    )
}
