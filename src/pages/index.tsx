import { url } from "inspector";
import Head from "next/head";
import { Nav } from "../components/nav";
import back from "./hollowed-boxes.svg";

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
            // style={{ backgroundImage: `url(${back.src})` }}
            >
               <div className="mx-auto max-w-4xl pt-4 pb-2 sm:pt-8 sm:pb-14">
                  <div>
                     <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl ">
                           que[ST]eps - городские квесты в Ярославле
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                           Квест-Степс (Quest-Steps) - городские (уличные) квесты в Ярославле! Вы можете выбрать различные виды приключений: квест-ориентирование или гайд-квест с загадками. Со временем мы будем придумывать и организовывать для вас что-то новое: наш город достаточно большой и в нём много всего интересного!
                           <br></br>
                           <br></br>
                           Прохождение квестов не привязано ко времени: вы можете начать своё приключение рано утром или поздней ночью, можете остановиться на середине маршрута и продолжить на следующий день. Для комфортного выполнения квестов вам понадобятся заряженные энергией смартфоны, заряженные едой организмы, желание походить по городу и готовность к приключениям.
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center">
                           <a
                              href="/chat-bot/routesAndPrices"
                              className="bg-seventh-darkblue inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sixth-gold hover:bg-indigo-700 md:mx-1 lg:mx-2 hover:ring-indigo-700"
                           >
                              Выбрать квест
                              <span className="text-indigo-200" aria-hidden="true">
                                 &nbsp;🐻‍❄️
                              </span>
                           </a>
                           <a
                              href="/chat-bot/reviews"
                              className="bg-sixth-gold inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-third-brown ring-1 ring-fifth-red md:mx-1 lg:mx-2 hover:ring-gray-900/20"
                           >
                              Почитать отзывы
                              <span className="text-gray-400" aria-hidden="true">
                                 &nbsp;🐻
                              </span>
                           </a>
                        </div>
                     </div>
                     <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                        <svg
                           className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                           viewBox="0 0 1155 678"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                              fillOpacity=".3"
                              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                           />
                           <defs>
                              <linearGradient
                                 id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                 x1="1155.49"
                                 x2="-78.208"
                                 y1=".177"
                                 y2="474.645"
                                 gradientUnits="userSpaceOnUse"
                              >
                                 <stop stopColor="#0000FF" />
                                 <stop offset={1} stopColor="#000083" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                     <div className="hidden sm:flex sm:justify-center mt-6">
                        <div className="relative overflow-hidden border-dotted border-2 border-seventh-darkblue py-1 px-4 text-base leading-6 bg-white">
                           <a href="/chat-bot/bears" className="font-semibold text-indigo-600">
                              <span className="text-gray-600">
                                 Ещё больше мишек! { } 🧸
                              </span>
                           </a>
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
