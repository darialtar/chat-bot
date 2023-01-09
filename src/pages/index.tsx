import { url } from "inspector";
import Head from "next/head";
import { Nav } from "../components/nav";

import back from "./endless-constellation.svg";
import panda from "./1F43C.svg";
import darkBear from "./1F43B.svg";
import teddyBear from "./1F9F8.svg";

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
               <div className="mx-auto max-w-4xl pt-4 pb-2 sm:pt-8 sm:pb-14">
                  <div>
                     <div>
                        <h1 className="bg-white rounded-t-lg border-solid border-4 border-seventh-darkblue text-4xl font-bold tracking-tight sm:text-center sm:text-6xl ">
                           que[ST]eps - городские квесты в Ярославле
                        </h1>
                        <p className="bg-white rounded-b-lg border-solid border-4 border-seventh-darkblue mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                           Квест-Степс (Quest-Steps) - городские (уличные) квесты в Ярославле! Вы можете выбрать различные виды приключений: квест-ориентирование или гайд-квест с загадками. Со временем мы будем придумывать и организовывать для вас что-то новое: наш город достаточно большой и в нём много всего интересного!
                           <br></br>
                           <br></br>
                           Прохождение квестов не привязано ко времени: вы можете начать своё приключение рано утром или поздней ночью, можете остановиться на середине маршрута и продолжить на следующий день. Для комфортного выполнения квестов вам понадобятся заряженные энергией смартфоны, заряженные едой организмы, желание походить по городу и готовность к приключениям.
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center">
                           <Link
                              href="/routesAndPrices"
                              className="bg-seventh-darkblue align-bottom rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sixth-gold md:mx-1 lg:mx-2"
                           >
                              Выбрать квест
                              <span className="inline-block align-bottom">
                              <Image alt="Панда" src={panda} className="pl-1" width={35} />
                              </span>
                           </Link>
                           <Link
                              href="/reviews"
                              className="bg-sixth-gold inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-third-brown ring-1 ring-fifth-red md:mx-1 lg:mx-2 hover:ring-gray-900/20"
                           >
                              Почитать отзывы
                              <span className="inline-block align-bottom">
                                 <Image alt="Бурый медведь" src={darkBear} className="pl-1" width={35} />
                              </span>
                           </Link>
                        </div>
                     </div>

                     <div className="hidden sm:flex sm:justify-center mt-5">
                        <div className="relative overflow-hidden border-dotted border-2 border-seventh-darkblue py-0.5 px-4 text-base leading-7 bg-white">
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
            </div>
         </main>
      </>
   );
};

export default Home;
