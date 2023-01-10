import Head from "next/head";
import { Nav } from "../../components/nav";
import back from "../endless-constellation.svg";
import yaroslavl from "../yaroslavl.png";

import Image from "next/image";
import Link from "next/link";

const routesAndPrices = () => {
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
            <div className="relative p-10"
               style={{ backgroundImage: `url(${back.src})` }}>
               <div className="">
                  
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
                     <div className="bg-darkblue-400 text-white col-span-2 row-span-2">
                        <Image alt="Ярославль" src={yaroslavl} className="object-contain " />
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
            </div>
         </main>
      </>
   );
};

export default routesAndPrices;