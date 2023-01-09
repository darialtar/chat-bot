import { Popover, Transition } from "@headlessui/react"
import {
   Bars3Icon,
   XMarkIcon,
   BuildingOffice2Icon,
   ChatBubbleBottomCenterTextIcon,
   MapIcon,
   QuestionMarkCircleIcon,
   SparklesIcon,
   StarIcon
} from "@heroicons/react/24/outline"
import { Fragment } from "react";
import brodsky from '../pages/brodsky.png';
import logo from '../pages/bear.png';
import teddyBear from "../pages/1F9F8.svg";
import tree from "../pages/1F332.svg";
import Image from "next/image";
import Link from "next/link"

const aboutQuests = [
   {
      name: 'О городских квестах',
      description: 'Выясните, что же такое городские квесты и чем они отличаются от привычных эскейп-румов',
      href: '/',
      icon: BuildingOffice2Icon,
   },
   {
      name: 'Маршруты и цены',
      description: 'Определитесь, какой квест вам больше всего подходит',
      href: '/routesAndPrices',
      icon: MapIcon,
   },
   {
      name: 'Отзывы',
      description: "Ознакомитесь с отзывами клиентов, уже прошедших различные квесты",
      href: '/reviews',
      icon: ChatBubbleBottomCenterTextIcon,
   },
]
const callsToAction = [
   { 
      name: 'Почему вы обижаете Бродского?', 
      href: '/brodsky', 
      icon: QuestionMarkCircleIcon 
   },
]
const resources = [
   {
      name: 'Пройти бесплатный квест',
      description: 'Познакомитесь с чат-ботом и интерфейсом прохождения квестов',
      href: '/freeQuest',
      icon: StarIcon,
   },
   {
      name: 'Пройти купленный квест',
      description: 'Окунитесь в мир увелкательных и познавательных прогулок по Ярославлю',
      href: '/payedQuest',
      icon: SparklesIcon,
   },
]
const update = [
   { id: 1, name: 'Озвучка всех квестов', href: '/voicing' },
   { id: 2, name: 'Новый Хард-Квест-2', href: '/hardQuest2' },
   { id: 3, name: 'Новый Freedom-Квест', href: '/freedomQuest' },
]

function classNames(...classes: any[]) {
   return classes.filter(Boolean).join(' ')
}

export const Nav = () => {
   return (
      <div>
         <div className="h-banner w-full h-full font-bold text-white bg-gradient-to-t from-seventh-darkblue/70 to-seventh-darkblue pointer-events-auto top-0 z-40 overflow-y-hidden">
            <div className="w-full p-2 h-full flex items-center justify-center">
               <span className="pr-4 text-sm sm:text-base">Не слушай Бродского - выходи из комнаты</span>
               <Link href="/brodsky">
                  <Image alt="Недовольный Бродский" src={brodsky} className="" width={70} />
               </Link>
            </div>
         </div>
         <Popover className="relative bg-white border-b-2 border-seventh-darkblue">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
               <div className="flex justify-between items-center py-1 md:space-x-10">
                  <div className="flex justify-start">
                     <Link href="/">
                        <Image alt="Рычащий мишка" src={logo} className="" width={80} />
                     </Link>
                  </div>
                  <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                     <Popover className="relative">
                        {({ open }) => (
                           <>
                              <Popover.Button

                                 className={classNames(
                                    open ? 'text-gray-900' : 'text-black',
                                    'group inline-flex items-center rounded-md bg-white text-base font-medium focus:outline-none hover:text-seventh-darkblue'
                                 )}
                              >
                                 <span className="">О квестах</span>
                                 <span className="transition ease-in-out delay-100 hover:rotate-180 duration-200 rotatable ml-1 h-6 w-5">
                                 <Image alt="Ель" src={tree}/>
                                 </span>
                              </Popover.Button>

                              <Transition
                                 as={Fragment}
                                 enter="transition ease-out duration-200"
                                 enterFrom="opacity-0 translate-y-1"
                                 enterTo="opacity-100 translate-y-0"
                                 leave="transition ease-in duration-150"
                                 leaveFrom="opacity-100 translate-y-0"
                                 leaveTo="opacity-0 translate-y-1"

                              >
                                 <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 border-none">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 border-none">
                                       <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                          {aboutQuests.map((item) => (
                                             <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-start rounded-lg p-3"
                                             >
                                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                <div className="ml-4">
                                                   <p className="text-base font-medium text-black">{item.name}</p>
                                                   <p className="mt-1 text-sm text-black">{item.description}</p>
                                                </div>
                                             </a>
                                          ))}
                                       </div>
                                       <div className="space-y-6 bg-seventh-darkblue text-white px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                          {callsToAction.map((item) => (
                                             <div key={item.name} className="flow-root">
                                                <a
                                                   href={item.href}
                                                   className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                                >
                                                   <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                   <span className="ml-3">{item.name}</span>
                                                </a>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 </Popover.Panel>
                              </Transition>
                           </>
                        )}
                     </Popover>

                     <Link href="/buyQuest" className="text-base font-medium text-black hover:text-seventh-darkblue">
                        Купить квест
                     </Link>

                     <Popover className="relative">
                        {({ open }) => (
                           <>
                              <Popover.Button
                                 className={classNames(
                                    open ? 'text-gray-900' : 'text-black',
                                    'group inline-flex items-center rounded-md bg-white text-base font-medium focus:outline-none hover:text-seventh-darkblue'
                                 )}
                              >
                                 <span className="">Пройти квест</span>
                                 <span className="transition ease-in-out delay-100 hover:rotate-180 rotatable stayrotate ml-0.5 h-6 w-5">
                                 <Image alt="Ель" src={tree}/>
                                 </span>
                              </Popover.Button>

                              <Transition
                                 as={Fragment}
                                 enter="transition ease-out duration-200"
                                 enterFrom="opacity-0 translate-y-1"
                                 enterTo="opacity-100 translate-y-0"
                                 leave="transition ease-in duration-150"
                                 leaveFrom="opacity-100 translate-y-0"
                                 leaveTo="opacity-0 translate-y-1"
                              >
                                 <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                       <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                          {resources.map((item) => (
                                             <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                             >
                                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                <div className="ml-4">
                                                   <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                   <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                </div>
                                             </a>
                                          ))}
                                       </div>
                                       <div className="bg-seventh-darkblue text-white sm:px-8 sm:py-4">
                                          <div>
                                             <h3 className="underline decoration-dotted underline-offset-2 text-base font-medium">Запланированные обновления</h3>
                                             <ul role="list" className="mt-2 space-y-4">
                                                {update.map((post) => (
                                                   <li key={post.id} className="truncate text-base">
                                                      <Link href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                         {post.name}
                                                      </Link>
                                                   </li>
                                                ))}
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </Popover.Panel>
                              </Transition>
                           </>
                        )}
                     </Popover>

                     <Link href="/bears" className="text-base font-medium text-gray-500 hover:text-gray-900">
                     <Image alt="Медвежонок" src={teddyBear} className="" width={24} />
                     </Link>
                  </Popover.Group>

                  <div className=""></div>
                  <div className="-my-2 -mr-2 md:hidden">
                     <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                     </Popover.Button>
                  </div>
               </div>
            </div>

            <Transition
               as={Fragment}
               enter="duration-200 ease-out"
               enterFrom="opacity-0 scale-95"
               enterTo="opacity-100 scale-100"
               leave="duration-100 ease-in"
               leaveFrom="opacity-100 scale-100"
               leaveTo="opacity-0 scale-95"
            >
               <Popover.Panel focus className="z-50 absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                  <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-20">
                     <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                           <div>
                              <Image alt="Рычащий мишка" src={logo} className="h-8 w-auto" />
                           </div>
                           <div className="-mr-2">
                              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                 <span className="sr-only">Close menu</span>
                                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                           </div>
                        </div>
                        <div className="mt-6">
                           <nav className="grid gap-y-8">
                              {aboutQuests.map((item) => (
                                 <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                 >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                 </a>
                              ))}
                           </nav>
                        </div>
                     </div>
                     <div className="space-y-6 py-6 px-5">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                           {resources.map((item) => (
                              <a
                                 key={item.name}
                                 href={item.href}
                                 className="text-base font-medium text-gray-900 hover:text-gray-700"
                              >
                                 {item.name}
                              </a>
                           ))}

                        </div>
                        <div>
                           <a
                              href="#"
                              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-seventh-darkblue shadow-sm hover:bg-indigo-700"
                           >
                              Купить квест
                           </a>
                           <p className="mt-6 text-center text-base font-medium text-gray-500">
                              Остались вопросы?{' '}
                              <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                                 Связаться
                              </Link>
                           </p>
                        </div>
                     </div>
                  </div>
               </Popover.Panel>
            </Transition>
         </Popover>
      </div>
   )
}