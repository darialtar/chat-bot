import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import bearRobo from '../bearRobo.jpg'

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

         <main className="flex min-h-screen flex-col items-center justify-center bg-white p-10">
            {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
               <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
                  Quests <span className="text-[hsl(280,100%,70%)]">&#128099;</span> Steps
               </h1>
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-0 md:gap-0 max-w-xs flex-col rounded-xl bg-seventh-darkblue p-4 text-white">
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
            </div> */}
               <div className="flex flex-col flex-grow w-full max-w-4xl bg-seventh-darkblue/10 shadow-xl rounded-lg border-seventh-darkblue/25 border-solid border-2 overflow-hidden">
                  <div className="flex flex-col flex-grow h-0 p-5 overflow-auto">
                     <div className="flex w-full mt-2 space-x-3 max-w-sm sm:max-w-xl">
                        <Image alt="Робот-мишка" src={bearRobo} className="flex-shrink-0 h-10 w-10 rounded-full"/>
                        <div>
                           <div className="bg-seventh-darkblue p-3 rounded-r-lg rounded-bl-lg">
                              <p className="text-sm text-white">Приветствуем испытателей нашего тест-квеста! Данный квест создан для того, чтобы дать нашим участникам представление о городских квестах вообще и показать, как происходит процесс стандартного квеста.
                                 <br></br>
                                 Все ваши приключения в дальнейшем будут происходить на улицах нашего славного города: наш бот так же, как и сейчас, будет присылать вам задания; вам же нужно будет найти загаданное место, прийти туда и ответить на вопрос, как-то с этим местом связанный. После правильного ответа бот даст вам новое задание и вы сможете отправиться дальше.
                                 <br></br>
                                 А сейчас, чтобы вы сами могли попробовать всё и разобраться, мы отправимся в маленький квест по... вашему дому! Напишите боту &quot;тест-квест вперёд&quot;, чтобы начать.
                                 <br></br>
                                 ВНИМАНИЕ! Несколько советов по работе с ботом. Все команды следует писать в точности так, как указано в задании, без каких-либо знаков препинания (без точек, запятых, кавычек и проч.; разрешается использовать знак тире, если того требует ответ, например если он выглядит как &quot;абра-кадабра&quot;). 
                                 <br></br>
                                 ЭТО ВАЖНО! Если бот не принимает вашу команду, попробуйте повторить её. Если это не помогает, значит ваш ответ неверный или вы вводите его некорректно.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-gray-300 p-4">
                     <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"></input>
                  </div>
               </div>
         </main>
      </>
   )
}

export default freeQuest;