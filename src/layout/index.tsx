import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className=" mt-10 mb-10 px-8">{children}</main>
      <Footer />
    </>
  );
};
