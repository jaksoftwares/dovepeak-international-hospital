import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeTab={''} onTabChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <main className="py-8">
        {/* Hospital main content goes here */}
      </main>
    </div>
  );
}

export default App;