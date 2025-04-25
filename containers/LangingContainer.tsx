export default function LandingContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-self-center pt-[25px]">
      {children}
    </div>
  );
}
