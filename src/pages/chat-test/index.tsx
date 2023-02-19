import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import { Nav } from "../../components/nav";
import { api } from "~/utils/api";
import { type NextPage } from "next";

const startMessages: string[] = [
  "Приветствуем испытателей нашего тест-квеста! Данный квест создан для того, чтобы дать нашим участникам представление о городских квестах вообще и показать, как происходит процесс стандартного квеста.",
  "Все ваши приключения в дальнейшем будут происходить на улицах нашего славного города: наш бот так же, как и сейчас, будет присылать вам задания; вам же нужно будет найти загаданное место, прийти туда и ответить на вопрос, как-то с этим местом связанный. После правильного ответа бот даст вам новое задание и вы сможете отправиться дальше.",
  "А сейчас, чтобы вы сами могли попробовать всё и разобраться, мы отправимся в маленький квест по... вашему дому! Напишите боту 'тест-квест вперёд', чтобы начать.",
  "ВНИМАНИЕ! Несколько советов по работе с ботом. Все команды следует писать в точности так, как указано в задании, без каких-либо знаков препинания (без точек, запятых, кавычек и проч.; разрешается использовать знак тире, если того требует ответ, например если он выглядит как &quot;абра-кадабра&quot;)",
  "ЭТО ВАЖНО! Если бот не принимает вашу команду, попробуйте повторить её. Если это не помогает, значит ваш ответ неверный или вы вводите его некорректно.",
];

const FreeQuest: NextPage = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const [messagesToRender, setMessagesToRender] = useState<string[]>([]);
  const [renderIndex, setRenderIndex] = useState<number>(0);

  const { data, isFetched } = api.messages.getByCodeAndQuest1.useQuery();

  useEffect(() => {
    console.log("get request");
    console.log(data);
    if (data && data.length > 0) {
      setMessages(data.map((e) => e.text));
    } else if (isFetched) {
      setMessagesToRender(startMessages);
    }
  }, [data, isFetched]);

  useEffect(() => {
    console.log(`render ${renderIndex}/${messagesToRender.length}`);
    if (renderIndex >= messagesToRender.length) {
      return;
    }
    const append = () => {
      setMessages(messagesToRender.slice(0, renderIndex + 1));
      setRenderIndex(renderIndex + 1);
    };
    setTimeout(append, 500);
  }, [messagesToRender, renderIndex]);

  return (
    <>
      <Head>
        <title>Chat test</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keywords"
          content="купить квест, квесты в Ярославле, городские квесты, пешие квесты, уличные квесты"
        ></meta>
        <meta
          name="description"
          content="Квест-Степс (Quest-Steps) - городские (уличные) квесты в Ярославле!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav></Nav>

      <main
        className="flex min-h-screen flex-col items-center justify-center p-10"
        style={{ backgroundImage: `url("/images/endless-constellation.svg")` }}
      >
        <div className="flex w-full max-w-4xl flex-grow flex-col overflow-hidden rounded-lg border-2 border-solid border-darkblue-400/25 bg-white shadow-xl">
          <div className="flex h-0 flex-grow flex-col overflow-auto p-5">
            <div className="mt-2 flex w-full max-w-sm space-x-3 sm:max-w-xl ">
              <Image
                alt="Робот-мишка"
                src="/images/bearRobo.jpg"
                width={20}
                height={20}
                className="h-10 w-10 flex-shrink-0 rounded-full"
              />
              <div>
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className="mb-2 animate-show rounded-r-lg rounded-bl-lg bg-darkblue-400 p-3"
                  >
                    <p className="text-sm text-white">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-4">
            <input
              value={value}
              onChange={(ev) => setValue(ev.target.value)}
              // onSubmit={onSubmit}
              className="flex h-10 w-full items-center rounded border-2 border-darkblue-400/25 px-3 text-sm"
              type="text"
              placeholder="Напишите ответ робо-мишке…"
            ></input>
          </div>
          <div className="p-4 text-center">
            <button
              // onClick={sendMessage}
              className="bg-eight-blue rounded border-b-4 border-b-darkblue-400 py-2 px-4 font-bold text-white"
            >
              Отправить
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default FreeQuest;
