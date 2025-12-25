export default function OrnamentStrip() {
  return (
    <div
      className="h-3 w-full opacity-70"
      style={{
        backgroundImage: "url(/patterns/ornament.svg)",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "auto 100%",
      }}
      aria-hidden="true"
    />
  );
}
