const Home = () => {
   // 👇️ redirect to external URL
   if (typeof window !== 'undefined') {
      window.location.replace('https://chat-bot-tan.vercel.app');
   }
   return (
      <>
         <main>
            Страница переехала на Vercel: <a href="https://chat-bot-tan.vercel.app">https://chat-bot-tan.vercel.app</a>
         </main>
      </>
   );
};

export default Home;
