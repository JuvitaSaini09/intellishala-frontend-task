import MyTestsContainer from "@/components/MyTestsContainer";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden bg-page">
      <Sidebar />
      <section className="min-w-0 flex-1 overflow-y-auto">
        <MyTestsContainer />
      </section>
    </main>
  )
}
