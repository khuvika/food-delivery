import Left from "./_components/left";
import Right from "./_components/right";

export default function forgetPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
        <Left />
      </div>
      <Right />
    </div>
  );
}
