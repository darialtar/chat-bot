import { url } from "inspector";
import Head from "next/head";
import { Nav } from "../components/nav";

import back from "./endless-constellation.svg";
import yaroslavl from "./yaroslavl.png";
import panda from "./1F43C.svg";
import darkBear from "./1F43B.svg";
import teddyBear from "./1F9F8.svg";
import checkMark from "./2705.svg";

import {
   CheckBadgeIcon,
} from "@heroicons/react/24/outline"

import Link from "next/link";
import Image from "next/image";

const Home = () => {

   return (
      <>
         <Head>
            <title>Городские квесты в Ярославле</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content="купить квест, квесты в Ярославле, городские квесты, пешие квесты, уличные квесты"></meta>
            <meta name="description" content="Квест-Степс (Quest-Steps) - городские (уличные) квесты в Ярославле!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Nav></Nav>

         <main>
            <div className="relative px-6 lg:px-8"
               style={{ backgroundImage: `url(${back.src})` }}
            >
               <div className="mx-auto max-w-full pt-4 pb-2 sm:pt-8 sm:pb-36">
                  <div className="bg-darkblue-400 rounded-sm border-solid mt-2 flex text-white flex-col lg:flex-row">
                     <div className="grow basis-48">
                        <Image alt="Ярославль" src={yaroslavl} className="" />
                     </div>
                     <div className="grow basis-48 text-center p-4">
                        <p className="text-lg">
                           <p className="text-center">
                           В чем особенности наших квестов? Давайте разберёмся!
                           </p>
                           <ul className="space-y-1 text-left py-3">
                              <li className="flex items-center">
                                 <CheckBadgeIcon className="h-8 w-8 flex-shrink-0 text-white" />
                                 <p className="ml-2">
                                    4 увлекательных сценария,
                                 </p>
                              </li>
                              <p className="text-xs text-right">
                                 если сложно выбрать - тест &quot;Какой квест вам больше подходит&quot;
                              </p>
                              <li className="flex items-center">
                                 <CheckBadgeIcon className="h-8 w-8 flex-shrink-0 text-white" />
                                 <p className="ml-2">
                                    От 1 до 3 часов путешествия,
                                 </p>
                              </li>
                              <p className="text-xs text-right">но можно растянуть и на подольше</p>
                              <li className="flex items-center">
                                 <CheckBadgeIcon className="h-8 w-8 flex-shrink-0 text-white" />
                                 <p className="ml-2">Большое количество шуток и познавательной информации,</p>
                              </li>
                              <p className="text-xs text-right">у нас даже есть мемы</p>
                              <li className="flex items-center">
                                 <CheckBadgeIcon className="h-8 w-8 flex-shrink-0 text-white" />
                                 <p className="ml-2">Нужен только телефон и готовность к приключениям!</p>
                              </li>
                           </ul>
                        </p>
                        <button className="bg-gold-300 font-bold py-2 px-4 border-b-4 border-b-gold-500 rounded text-darkblue-400">Уже готов купить за 800 рублей</button>
                        <p className="text-sm">цена для компании от 1 до 8 человек</p>
                     </div>
                  </div>

                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                     <Link
                        href="/routesAndPrices"
                        className="bg-darkblue-400 align-bottom rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-gold-300 md:mx-1 lg:mx-2"
                     >
                        Выбрать квест
                        <span className="inline-block align-bottom">
                           <Image alt="Панда" src={panda} className="pl-1" width={35} />
                        </span>
                     </Link>
                     <Link
                        href="/reviews"
                        className="bg-gold-300 inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-brown-400 ring-1 ring-darkblue-300 md:mx-1 lg:mx-2"
                     >
                        Почитать отзывы
                        <span className="inline-block align-bottom">
                           <Image alt="Бурый медведь" src={darkBear} className="pl-1" width={35} />
                        </span>
                     </Link>
                  </div>

                  <div className="hidden sm:flex sm:justify-center mt-5">
                     <div className="relative overflow-hidden border-dotted border-2 border-darkblue-400 py-0.5 px-4 text-base leading-7 bg-white">
                        <Link href="/bears" className="font-semibold align-middle">
                           Ещё больше мишек!
                           <span className="inline-block align-bottom">
                              <Image alt="Медвежонок" src={teddyBear} className="pl-1 pb-0.5" width={33} />
                           </span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default Home;
