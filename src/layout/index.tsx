import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-5 mb-10 px-8">{children}</main>
      <Footer />
    </div>
  );
};
