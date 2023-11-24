import Image from "next/image";
import { Inter } from "next/font/google";
import AppWrapper from "@/components/AppWrapper";
import ErrorButton from "@/components/ErrorButton";
import Header from "@/components/Header";
import PageCountSelect from "@/components/PageCountSelect";
import Results from "@/components/Results";
import Search from "@/components/Search";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppWrapper>
      <Header>
        <Search />
        <PageCountSelect />
      </Header>
      <Results />

      <ErrorButton />
    </AppWrapper>
  );
}
