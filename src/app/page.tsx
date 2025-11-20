'use client';

import { PulseView } from "@/components/token-table/PulseView";
import { Header } from "@/components/Header";
import { TableToolbar } from "@/components/token-table/TableToolbar";
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col lg:h-screen lg:overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col container mx-auto px-4 py-6 min-h-0 pb-14">
        <TableToolbar />
        <div className="flex-1 min-h-0">
          <PulseView />
        </div>
      </main>

      <div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}
