import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import bearRobo from '../bearRobo.jpg';
import back2 from "../endless-constellation.svg";

const payedQuest = () => {
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

         <main className="flex min-h-screen flex-col items-center justify-center p-10"
         style={{ backgroundImage: `url(${back2.src})` }}>
            <div className="flex flex-col flex-grow w-full max-w-4xl bg-white shadow-xl rounded-lg border-seventh-darkblue/25 border-solid border-2 overflow-hidden">
               <div className="flex flex-col flex-grow h-0 p-5 overflow-auto">
                  <div className="flex w-full mt-2 space-x-3 max-w-sm sm:max-w-xl ">
                     <Image alt="Робот-мишка" src={bearRobo} className="flex-shrink-0 h-10 w-10 rounded-full" />
                     <div>
                        <div className="bg-seventh-darkblue p-3 rounded-r-lg rounded-bl-lg mb-2 animate-show">
                           <p className="text-sm text-white">
                               Введите ваш промокод, чтобы начать квест.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="px-4">
                  <input className="flex items-center h-10 w-full rounded px-3 text-sm border-2 border-seventh-darkblue/25" type="text" placeholder="Напишите ответ робо-мишке…"></input>
               </div>
               <div className="p-4 text-center">
               <button className="bg-eight-blue text-white font-bold py-2 px-4 border-b-4 border-b-seventh-darkblue rounded">Отправить</button>
               </div>
            </div>
         </main>
      </>
   );
};

export default payedQuest;