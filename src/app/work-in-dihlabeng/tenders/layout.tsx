import { TenderNav } from "./_components/tender-nav";

export const metadata = {
  title: "Dihlabeng Municipality Tenders",
  description: "Developed by Visionary Theo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TenderNav />
      <main className="flex-1 pt-20">{children}</main>
    </>
  );
}
