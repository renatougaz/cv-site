import Accent from "../util/Accent";
function Home() {
  return (
    <div id="home" className="p-6 flex flex-row h-full snap-center">
      <div className="flex flex-col flex-1 justify-center items-center">
        <p>Hey my name is {Accent("Renato")}</p>
        <p>I'm a {Accent("Software Engineer")}</p>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <p>Wanna get to know me?</p>
      </div>
    </div>
  );
}
export default Home;
