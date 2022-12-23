import Head from "next/head";
import { Nav } from "../../components/nav";

const reviews = () => {
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
            <div className="">
               <h1 className="text-3xl text-center">
               В разработке
               </h1>
               <h2 className="text-xl text-center">
               Здесь будут отзывы посетителей
               </h2>
            </div>
         </main>
      </>
   );
};

export default reviews;