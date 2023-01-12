/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic"

import { url } from "inspector";
import Head from "next/head";
import { Nav } from "../components/nav";

import back from "./endless-constellation.svg";
import yaroslavl from "./yaroslavl.png";
import panda from "./1F43C.svg";
import darkBear from "./1F43B.svg";
import teddyBear from "./1F9F8.svg";
import customer1 from "./rev1.jpg";
import customer2 from "./rev2.jpg";
import customer3 from "./rev3.jpg";
import memBear from "./memBear.png";
import memHard from "./memHard.png";
import memStone from "./memStone.png";

import {
   CheckBadgeIcon,
} from "@heroicons/react/24/outline"

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const products = [
   {
      id: 'Item1',
      href: '/routesAndPrices',
      imageSrc: memBear,
      imageAlt: 'Мем с мишкой',
      name: 'Квест-Медведь',
      price: '800р',
   },
   {
      id: 'Item2',
      href: '/routesAndPrices',
      imageSrc: memHard,
      imageAlt: 'Мем с Сталоне',
      name: 'Хард-Квест',
      price: '800р',
   },
   {
      id: 'Item3',
      href: '/routesAndPrices',
      imageSrc: memStone,
      imageAlt: 'Мем с памятниками',
      name: 'Памятный Квест',
      price: '800р',
   },
]

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
            <div className="relative p-2 lg:px-8"
               style={{ backgroundImage: `url(${back.src})` }}
            >
               <div className="mx-auto max-w-full sm:pb-36 sm: lg:pt-8">

                  <div>
                     <div className="bg-white leading-10 mx-5 lg:mx-32 border-darkblue-700 border-2">
                        <div className="flex items-center justify-center">
                           <p className="text-center text-darkblue-300 font-bold">Готовность к приключениям загружается...                     </p>
                           <svg aria-hidden="true" className="w-6 h-6 ml-1 mb-1 text-darkblue-600 animate-spin fill-darkblue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                           </svg>

                        </div>
                        <h1 className="text-3xl text-center font-extrabold leading-10">
                           Что за квест вам предстоит пройти?
                        </h1>
                        <h2 className="text-xl text-center font-bold leading-9">
                           Давайте узнаем!
                        </h2>
                     </div>
                     <div className="grid gap-12 pt-10 pb-7 text-center grid-flow-row auto-rows-max lg:grid-flow-col lg:grid-rows-2">
                        <div className="bg-darkblue-400 text-white">
                           <p className="font-bold p-2">
                              4 увлекательных сценария,
                           </p>
                           <p className="px-2">
                              если сложно выбрать - тест&nbsp;
                              <Link href="/routesAndPrices" className=" text-darkblue-600">&quot;Какой квест вам подходит&quot;</Link>
                           </p>
                        </div>
                        <div className="bg-darkblue-400 text-white">
                           <p className="font-bold p-2">
                              Большое количество шуток и познавательной информации,
                           </p>
                           <p className="px-2">
                              у нас даже есть мемы
                           </p>
                        </div>
                        <div className="bg-darkblue-400 text-white col-span-2 row-span-2 order-first lg:order-none">
                           <Image alt="Ярославль" src={yaroslavl} className="object-contain" />
                        </div>
                        <div className="bg-darkblue-400 text-white">
                           <p className="font-bold p-2">
                              От 1 до 3 часов путешествия,
                           </p>
                           <p className="px-2">
                              но можно растянуть и на подольше
                           </p>
                        </div>
                        <div className="bg-darkblue-400 text-white">
                           <p className="font-bold p-2">
                              Нужен только телефон и готовность к приключениям!
                           </p>
                           <p>

                           </p>

                        </div>
                     </div>
                     <div className="flex justify-center">
                        <button className="bg-gold-300 font-bold py-2 px-4 border-b-4 border-b-gold-500 rounded text-darkblue-400 ">Уже готов купить за 800 рублей</button>
                     </div>
                     <div className="flex justify-center">
                        <p className="md:text-xs lg:text-sm pt-1 bg-white">цена для компании от 1 до 8 человек</p>
                     </div>
                  </div>

                  <div>
                     <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3">
                           {products.map((product) => (
                              <a key={product.id} href={product.href} className="group">
                                 <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <Image
                                       src={product.imageSrc}
                                       alt={product.imageAlt}
                                       width={80}
                                       height={80}
                                       className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                 </div>
                                 <div className="flex justify-between items-center">
                                 <h3 className="text-lg bg-white p-1 rounded-lg">{product.name}</h3>
                                 <p className="text-lg font-medium bg-white p-1 rounded-lg">{product.price}</p>
                                 </div>
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div>
                     <section className="mb-20 text-gray-700">
                        <div className="text-center bg-white md:max-w-xl lg:max-w-3xl mx-auto">
                           <h3 className="text-3xl font-bold mb-6 text-gray-800">Отзывы</h3>
                           <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                              Краткий обзор трех отзывов от наших клиентов. Если хотите почитать все отзывы - <Link href="/reviews" className="text-darkblue-300">переходите по ссылке</Link>.
                           </p>
                        </div>

                        <div className="grid bg-white md:grid-cols-3 gap-6 lg:gap-12 text-center">
                           <div className="mb-12 md:mb-0">
                              <div className="flex justify-center mb-6">
                                 <Image alt="Клиент №1"
                                    src={customer1}
                                    className="rounded-full shadow-lg w-32"
                                 />
                              </div>
                              <h5 className="text-xl font-semibold mb-4">Даша Гаврилова</h5>
                              <h6 className="font-semibold text-darkblue-100 mb-4">Квест-Медвед</h6>
                              <p className="mb-4">
                                 <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="quote-left"
                                    className="w-6 pr-2 inline-block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                 >
                                    <path
                                       fill="currentColor"
                                       d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path>
                                 </svg>
                                 Брали квест про медведей маленький. Все очень понравилось, прогулялись про центру города, нашли медведей которых раньше даже не замечали!)
                                 Проходили квест втроем с ребенком 10 лет, было очень интересно и познавательно. Узнали много сказок (о которых даже мама не слышала)
                                 Удобно то что нет ограничения по времени, и если проголодались/замерзли и еще какая необходимость отлучиться, это ВОЗМОЖНО, а игра не пострадает)
                                 Главное узнали что такое МЯК!!))
                                 Обязательно будем проходить еще такие квесты)
                                 Спасибо создателям! Первый раз пробовали такой вид квестов)
                              </p>
                           </div>
                           <div className="mb-12 md:mb-0">
                              <div className="flex justify-center mb-6">
                                 <Image alt="Клиент №2"
                                    src={customer2}
                                    className="rounded-full shadow-lg w-32"
                                 />
                              </div>
                              <h5 className="text-xl font-semibold mb-4">Владимир Бергер</h5>
                              <h6 className="font-semibold text-darkblue-100 mb-4">Хард-Квест</h6>
                              <p className="mb-4">
                                 <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="quote-left"
                                    className="w-6 pr-2 inline-block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                 >
                                    <path
                                       fill="currentColor"
                                       d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path></svg>Проходили хард-квест. Впервые были на городских квестах, все очень понравилось, собираемся теперь еще на медведей.
                              </p>
                           </div>
                           <div className="mb-0">
                              <div className="flex justify-center mb-6">
                                 <Image alt="Клиент №3"
                                    src={customer3}
                                    className="rounded-full shadow-lg w-32"
                                 />
                              </div>
                              <h5 className="text-xl font-semibold mb-4">Анна Володина</h5>
                              <h6 className="font-semibold text-darkblue-100 mb-4">Квест-Медвед</h6>
                              <p className="mb-4">
                                 <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="quote-left"
                                    className="w-6 pr-2 inline-block"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                 >
                                    <path
                                       fill="currentColor"
                                       d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                    ></path></svg>Хочу поблагодарить вашу команду за удобный формат квеста и за быстрое личное реагирование. Прогулка с гостями по городу приобрела направленность и цель, при этом в совершенно свободном временном графике, с паузами за фото, кофе, обед - очень удобно. Спасибо за скорые ответы и быструю организацию квеста (в тот же день)!
                              </p>
                           </div>
                        </div>
                     </section>
                  </div>

                  <div>

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
         <Script src='index.min.js' />
      </>
   );
};

export default Home;
