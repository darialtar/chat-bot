import Head from "next/head";
import { Nav } from "../../components/nav";

const freeQuest = () => {
   return (
      <>

         <Head>
            <title>Прохождение бесплатного квеста</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content="купить квест, квесты в Ярославле, городские квесты, пешие квесты, уличные квесты"></meta>
            <meta name="description" content="Квест-Степс (Quest-Steps) - городские (уличные) квесты в Ярославле!" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Nav></Nav>

         <main className="flex min-h-screen flex-col items-center justify-center bg-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
               <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                  Quests <span className="text-[hsl(280,100%,70%)]">&#128099;</span> Steps
               </h1>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-0 md:gap-0 flex max-w-xs flex-col gap-4 rounded-xl bg-second-green p-4 text-black hover:bg-white/20">
                  <h3 className="text-2xl font-bold">Прохождение квеста</h3>
                  <br></br>
                  <div className="text-lg">
                     Введите ваш ответ здесь.
                  </div>
                  <br></br>
                  <div>
                     <input>
                     </input>
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}

export default freeQuest;