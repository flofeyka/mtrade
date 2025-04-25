export default function LandingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-self-center w-full p-5">
      {children}
    </div>
  );
}
