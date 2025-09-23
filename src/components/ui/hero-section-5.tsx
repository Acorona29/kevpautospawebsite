'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Phone, Instagram, Star } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold text-white">
                                    Kev's Auto Spa
                                </h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-gray-200">
                                    Professional automotive care services that transform your vehicle with meticulous attention to detail and premium products.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base bg-blue-600 hover:bg-blue-700">
                                        <a href="tel:760-844-9066">
                                            <Phone className="mr-2 h-4 w-4" />
                                            <span className="text-nowrap">Book Appointment</span>
                                            <ChevronRight className="ml-1" />
                                        </a>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base text-white hover:bg-white/10">
                                        <a href="https://www.instagram.com/kevs.autospa?igsh=cGI0MmVibGJieXR1" target="_blank" rel="noopener noreferrer">
                                            <Instagram className="mr-2 h-4 w-4" />
                                            <span className="text-nowrap">View Our Work</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-white/10 sm:aspect-video lg:rounded-[3rem]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="size-full object-cover opacity-60"
                                src="/src/IMG_6653 copy.MOV">
                            </video>
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6 border-gray-300">
                                <p className="text-end text-sm text-gray-600">Trusted by car enthusiasts</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">5-Star Service</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="text-2xl font-bold text-blue-600">10+</div>
                                        <span className="text-sm text-gray-600">Years Experience</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="text-2xl font-bold text-blue-600">500+</div>
                                        <span className="text-sm text-gray-600">Cars Detailed</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="text-2xl font-bold text-blue-600">100%</div>
                                        <span className="text-sm text-gray-600">Satisfaction</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-gray-600">Mobile Service</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Instagram className="w-4 h-4 text-blue-600" />
                                        <span className="text-sm text-gray-600">@kevs.autospa</span>
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-gray-50 absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-gray-50 absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-black/20 backdrop-blur-2xl border border-white/10')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-md group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/20 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-white/20 text-white hover:bg-white/10">
                                    <a href="https://www.instagram.com/kevs.autospa?igsh=cGI0MmVibGJieXR1" target="_blank" rel="noopener noreferrer">
                                        <Instagram className="mr-2 h-4 w-4" />
                                        <span>Follow</span>
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700">
                                    <a href="tel:760-844-9066">
                                        <Phone className="mr-2 h-4 w-4" />
                                        <span>Call Now</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('text-2xl font-bold text-white', className)}>
            Kev's<span className="text-blue-400">Auto</span>Spa
        </div>
    )
}