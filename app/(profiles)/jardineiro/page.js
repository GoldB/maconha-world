export const metadata = {
  title: "maconha.world ~ jardim",
  description: "#TT"
}

export default function Jardineiro() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 p-4 lg:px-[12rem] lg:py-[4.20rem] overflow-auto">
      <header>
        <div className="flex gap-4">
          <img className="w-[124px] h-[124px] rounded-lg" src="/jardineiro/profile.jpg" />

          <div className="flex flex-col gap-4 my-auto">
            <h1 className="text-2xl font-bold">Dedé</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/SQ0aOnw.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/HHbLmxE.jpeg" />
            </div>
          </div>

          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/Zz4jX5W.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/3IjzlKo.jpeg" />
            </div>
          </div>

          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/YljfaXq.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/fqMt584.jpeg" />
            </div>
          </div>

          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/UrajwTm.jpeg" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
