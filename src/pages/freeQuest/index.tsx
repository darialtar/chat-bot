import Head from "next/head";
import Image from "next/image";
import { Nav } from "../../components/nav";
import bearRobo from '../bearRobo.jpg';
import back2 from "../endless-constellation.svg";

import { trpc } from "../../utils/trpc";
import { FormEventHandler, useEffect, useState } from "react";
import React from "react";

function useInterval(callback: unknown, delay: unknown) {
   const intervalRef = React.useRef();
   const callbackRef = React.useRef(callback);
 
   // Remember the latest callback:
   //
   // Without this, if you change the callback, when setInterval ticks again, it
   // will still call your old callback.
   //
   // If you add `callback` to useEffect's deps, it will work fine but the
   // interval will be reset.
 
   React.useEffect(() => {
     callbackRef.current = callback;
   }, [callback]);
 
   // Set up the interval:
 
   React.useEffect(() => {
     if (typeof delay === 'number') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
 
       // Clear interval if the components is unmounted or the delay changes:
       return () => window.clearInterval(intervalRef.current);
     }
   }, [delay]);
   
   // Returns a ref to the interval ID in case you want to clear it manually:
   return intervalRef;
 }
 
 //create your forceUpdate hook
function useForceUpdate(){
   const [value, setValue] = useState(0); // integer state
   return () => setValue(value => value + 1); // update state to force render
   // An function that increment 👆🏻 the previous state like here 
   // is better than directly setting `value + 1`
}


const FreeQuest = () => {
   const forceUpdate = useForceUpdate();
   const [messages, setMessages] = useState<(string | undefined)[]>([]);
   const [value, setValue] = useState<string>('');

   const [flag, setFlag] = useState<boolean>(false);
   trpc.example.hello.useQuery({ text: value }, { 
      onSuccess(data) {
         appendMessage(data.greeting);
      },
      onSettled() {
         setValue('');
         setFlag(false);
      },
      enabled: flag,
   });

   const startMessages: string[] = [
      "Приветствуем испытателей нашего тест-квеста! Данный квест создан для того, чтобы дать нашим участникам представление о городских квестах вообще и показать, как происходит процесс стандартного квеста.",
      "Все ваши приключения в дальнейшем будут происходить на улицах нашего славного города: наш бот так же, как и сейчас, будет присылать вам задания; вам же нужно будет найти загаданное место, прийти туда и ответить на вопрос, как-то с этим местом связанный. После правильного ответа бот даст вам новое задание и вы сможете отправиться дальше.",
      "А сейчас, чтобы вы сами могли попробовать всё и разобраться, мы отправимся в маленький квест по... вашему дому! Напишите боту &quot;тест-квест вперёд&quot;, чтобы начать.",
      "ВНИМАНИЕ! Несколько советов по работе с ботом. Все команды следует писать в точности так, как указано в задании, без каких-либо знаков препинания (без точек, запятых, кавычек и проч.; разрешается использовать знак тире, если того требует ответ, например если он выглядит как &quot;абра-кадабра&quot;)",
      "ЭТО ВАЖНО! Если бот не принимает вашу команду, попробуйте повторить её. Если это не помогает, значит ваш ответ неверный или вы вводите его некорректно.",
   ];

   // const mmessages: (string | undefined) [] = [];

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i === startMessages.length) {
         clearInterval(interval);
         return;
        }

        console.log(startMessages[i]);
        appendMessage(startMessages[i]!);
        forceUpdate();
        i++;
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   // let i = 0;
   // eslint-disable-next-line react-hooks/rules-of-hooks
   // useInterval(() => {
   //    console.log(startMessages[i]);
   //    setMessages((msgs) => { 
   //       msgs.push(startMessages[i]); 
   //       // console.log(msgs);
   //       return msgs; 
   //    });
   //    i++;
   // }, 1000)

   const onSubmit: FormEventHandler<HTMLInputElement> = (data) => console.log(data);
   const appendMessage = (newMessage: string) => {
      messages.push(newMessage);
      setMessages(messages);
   }
   const sendMessage = () => {
      setFlag(true);
      appendMessage(value);
   }

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

         <main className="flex min-h-screen flex-col items-center justify-center p-10"
         style={{ backgroundImage: `url(${back2.src})` }}>
            <div className="flex flex-col flex-grow w-full max-w-4xl bg-white shadow-xl rounded-lg border-seventh-darkblue/25 border-solid border-2 overflow-hidden" >
               <div className="flex flex-col flex-grow h-0 p-5 overflow-auto">
                  <div className="flex w-full mt-2 space-x-3 max-w-sm sm:max-w-xl ">
                     <Image alt="Робот-мишка" src={bearRobo} className="flex-shrink-0 h-10 w-10 rounded-full" />
                     <div>
                        {messages.map((message, i) => (
                           <div key={i} className="bg-seventh-darkblue p-3 rounded-r-lg rounded-bl-lg mb-2 animate-show">
                              <p className="text-sm text-white">{message}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="px-4">
                  <input value={value} onChange={ev => setValue(ev.target.value)} onSubmit={onSubmit} className="flex items-center h-10 w-full rounded px-3 border-2 border-seventh-darkblue/25 text-sm" type="text" placeholder="Напишите ответ робо-мишке…"></input>
               </div>
               <div className="p-4 text-center">
               <button onClick={sendMessage} className="bg-eight-blue text-white font-bold py-2 px-4 border-b-4 border-b-seventh-darkblue rounded">Отправить</button>
               </div>
            </div>
         </main>
      </>
   )
}

export default FreeQuest;