export const metadata = {
  title: "maconha.world ~ jardim",
  description: "#TT"
}

export default function Jardineiro() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 p-4 lg:px-[12rem] lg:py-[4.20rem] overflow-auto">
      <header>
        <div className="flex gap-4">
          <img className="w-[124px] h-[124px] rounded-lg" src="/jardineiro/profile.gif" />

          <div className="flex flex-col gap-4 my-auto">
            <h1 className="text-2xl font-bold">Dedé</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/tEX5c9a.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/JNhljfr.jpeg" />
            </div>
          </div>

          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/0Xnpfs6.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/5bQW3Lo.jpeg" />
            </div>
          </div>

          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/SAIJuNG.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/b8uWlvp.jpeg" />
            </div>
          </div>

          <div className="grid gap-4 h-fit">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/54KcRs9.jpeg" />
            </div>

            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://i.imgur.com/diQXKVM.jpeg" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
