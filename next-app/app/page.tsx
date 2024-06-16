import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen sm:w-4/5 lg:w-3/6 bg-blue-300">
      <div className="mx-auto w-4/5 bg-red-300">
        <h1 className="text-3xl text-center p-5">Hello NextJs Docker Container</h1>
      </div>
      <div className="mx-auto w-5/6 bg-orange-200">
        <p className="mx-auto w-5/6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet adipisci placeat, aperiam laboriosam debitis vero consequatur voluptate. Quaerat reiciendis quo optio? Doloribus fuga cumque et quidem. Earum, adipisci eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet adipisci placeat, aperiam laboriosam debitis vero consequatur voluptate. Quaerat reiciendis quo optio? Doloribus fuga cumque et quidem. Earum, adipisci eius.</p>
      </div>
    </div>
  );
}
