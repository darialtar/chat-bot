import Head from "next/head";
import { Nav } from "../../components/nav";

const buyQuest = () => {
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

         <main className="">
            <div className="">
               <h1 className="text-3xl text-center">
               В разработке
               </h1>
               <h2 className="text-xl text-center">
               Здесь будет информация о том, как приобрести квест
               </h2>
               <svg xmlns='http://www.w3.org/2000/svg' 
                           width='200' height='200' 
                           viewBox='0 0 200 200'
                           >
                              <rect fill='#487346' 
                              width='200' height='200' />
                              <g fill-opacity='1'>
                                 <polygon fill='#4c8e43' 
                                 points='100 57.1 64 93.1 71.5 100.6 100 72.1' />
                                 <polygon fill='#6aac5f' 
                                 points='100 57.1 100 72.1 128.6 100.6 136.1 93.1' />
                                 <polygon fill='#4c8e43' 
                                 points='100 163.2 100 178.2 170.7 107.5 170.8 92.4' />
                                 <polygon fill='#6aac5f' 
                                 points='100 163.2 29.2 92.5 29.2 107.5 100 178.2' />
                                 <path fill='#89CC7C' 
                                 d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z' />
                                 <polygon fill='#768c3a' 
                                 points='0 157.1 0 172.1 28.6 200.6 36.1 193.1' />
                                 <polygon fill='#96ac58' 
                                 points='70.7 200 70.8 192.4 63.2 200' />
                                 <polygon fill='#B6CC76' 
                                 points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5' />
                                 <polygon fill='#96ac58' 
                                 points='200 157.1 164 193.1 171.5 200.6 200 172.1' />
                                 <polygon fill='#768c3a' 
                                 points='136.7 200 129.2 192.5 129.2 200' />
                                 <polygon fill='#B6CC76' 
                                 points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200' />
                                 <polygon fill='#768c3a' 
                                 points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0' />
                                 <polygon fill='#B6CC76' 
                                 points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2' />
                                 <polygon fill='#96ac58' 
                                 points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0' />
                                 <polygon fill='#B6CC76' 
                                 points='0 63.2 63.2 0 27.8 0 0 27.8' />
                                 </g>
                                 </svg>


            </div>

         </main>
      </>
   );
};

export default buyQuest;