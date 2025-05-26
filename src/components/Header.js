import Image from "next/image";

export default function Header({ text }) {
  return (
    <div className="relative inline-block ">
      <Image
        src="/png/header.png"
        alt="Description"
        width={327}
        height={130}
        className="block"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-white  text-center text-4xl bg-transparent"
          style={{
            textShadow: `
              0px 0px 3.81px rgba(255, 255, 255, 1),
              0px 0px 7.62px rgba(255, 255, 255, 1)
            `,
          }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
