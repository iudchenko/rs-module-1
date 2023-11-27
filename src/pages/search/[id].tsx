import AppWrapper from "@/components/AppWrapper";
import Details from "@/components/Details";
import ErrorButton from "@/components/ErrorButton";
import Header from "@/components/Header";
import PageCountSelect from "@/components/PageCountSelect";
import Results from "@/components/Results";
import Search from "@/components/Search";

export default function Page() {
  return (
    <AppWrapper>
      <Header>
        <Search />
        <PageCountSelect />
      </Header>
      <Results />
      <ErrorButton />
      <Details />
    </AppWrapper>
  );
}
