export default function Noise() {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.0] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,100%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "20%",
      }}
    ></div>
  );
}
