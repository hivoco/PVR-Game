import Image from "next/image";

export default function Header({ text,className }) {
  return (
    <div className="relative ">
      <Image
        src="/png/header.png"
        alt="Description"
        width={327}
        height={130}
        // className="w-full h-auto"
        className={`w-auto h-[16vh] mx-auto ${className}`}
        priority={true}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-white  text-center text-4xl bg-transparent"
          style={{
            textShadow:`0px 0px 3.81px #FFFFFF`}}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
