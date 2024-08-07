import LeftSidebar from "@/components/shared/LeftSidebar";
import MobileNav from "@/components/shared/MobileNav";
import RightSidebar from "@/components/shared/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col sm:px-10">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" alt="hamburger menu icon" width={30} height={30}/>
              <MobileNav/>
            </div>
            <div className="flex flex-col md:pb-14">
              Toast Notifications
              {children}
            </div>
          </div>
        </section>
        <RightSidebar/>
      </main>
    </div>
  );
}
