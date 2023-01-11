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
                  <h1 className="text-3xl text-center">
                     В разработке
                  </h1>
                  <h2 className="text-xl text-center">
                     Здесь будет информация о маршрутах и ценах
                  </h2>
               </div>
            </div>
         </main>
      </>
   );
};

export default routesAndPrices;