export default function Newsletter() {
  return (
    <section className="mx-auto px-2 bg-primary/35 flex flex-col items-center justify-center text-center h-[20rem]">
      <div className="space-y-4">
        <h2 className="font-lobster text-6xl">Deliciousness to your inbox</h2>
        <p className="text-lg leading-relaxed">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="join">
          <input
            className="input input-bordered join-item w-[20rem]"
            placeholder="Example@email.com"
          />
          <button className="btn join-item btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
