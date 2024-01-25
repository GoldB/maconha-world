"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="fixed inset-0 bg-[url(/background.gif)] bg-cover text-white select-none overflow-auto leading-none">
      <div className="md:w-1/3 p-4 mx-auto flex flex-col gap-4 bg-black bg-opacity-80 backdrop-blur shadow-2xl">
        <iframe className="w-full h-[240px] md:h-[360px]" src="https://www.youtube-nocookie.com/embed/DV7w5RTjBfM" allow="autoplay"></iframe>

        <div className="flex justify-between text-2xl">
          <h1 className="hover:text-green-500">Bruninho</h1>

          <h2 className="text-green-500">trem tiroteio ™</h2>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 hover:text-green-500">
            <h3>Idade:</h3>
            <p>21</p>
          </div>

          <div className="flex gap-2 hover:text-green-500">
            <h3>Signo:</h3>
            <p>Áries</p>
          </div>

          <div className="flex gap-2 hover:text-green-500">
            <h3>Cidade:</h3>
            <p>Curitiba - PR</p>
          </div>

          <div className="flex gap-2 underline">
            <Link className="text-[#E1306C] focus:text-green-500 hover:text-green-500" href="https://instagram.com/vulgo_mec" target="_blank">
              Instagram
            </Link>

            <Link className="text-[#7289DA] focus:text-green-500 hover:text-green-500" href="https://discord.com/users/makonheiro" target="_blank">
              Discord
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="hover:text-green-500">Títulos:</h3>

            <ul className="pl-4">
              <li className="hover:text-green-500">- 2x VAC ban</li>
              <li className="hover:text-green-500">- 1x ban por toxicidade</li>
              <li className="hover:text-green-500">- 1x ban por atitude ilegal/crime</li>
              <li className="hover:text-green-500">- 2x ban por gordofobia</li>
              <li className="hover:text-green-500">- 1x preso por agiotagem</li>
              <li className="hover:text-green-500">- 2x de férias com o ex</li>
              <li className="hover:text-green-500">- 1x banheira do gugu</li>
              <li className="hover:text-green-500">- 3x ban no quebrando o tabu</li>
              <li className="hover:text-green-500">- 2x votou em PT</li>
              <li className="hover:text-green-500">- 1x ameaçado de b.o virtual</li>
              <li className="hover:text-green-500">- 14x ameaçado de doxing</li>
              <li className="hover:text-green-500">- 1x mulher convertida em trans <a href="https://imgur.com/a/dnRVxkh" target="_blank" className="underline">(pandinhasz)</a></li>
              <li className="hover:text-green-500">- Dono do maior fã clube Péricles Faria F.C.</li>
              <li className="hover:text-green-500">- Preso pela Policia Ambiental em 2018 por rinha de galo</li>
              <li className="hover:text-green-500">- Inimigo n. 1 da trupe fantasma</li>
              <li className="hover:text-green-500">- Pro-player de clash royale - 2018 ~ 2019</li>
              <li className="hover:text-green-500">- Pro-player de Habblive - 2015 ~ 2019</li>
              <li className="hover:text-green-500">- Pro-player de Habblet - 2019 ~ hoje</li>
              <li className="hover:text-green-500">- Primeiro brasileiro a perder o no fap september - 2019 (00:00:02 a.m.)</li>
              <li className="hover:text-green-500">- 1st Soletrando - 2007 Caldeirão do Huck</li>
              <li className="hover:text-green-500">- 1st Campeonato Brasileiro de Par ou Ímpar - 2011 Araraquara</li>
              <li className="hover:text-green-500">- 4st Campeonato Catarinense de Guerra de Dedão - 2012</li>
              <li className="hover:text-green-500">- 2st Campeonato Mundial de Ioiô - 2013 Tokyo</li>
              <li className="hover:text-green-500">- 1st Desafio Brasileiro de parkour deitado - 2014 Guarujá</li>
              <li className="hover:text-green-500">- 1st Copa Brasileira de Futebol de Mesa (Botão) - 2014 Mauá</li>
              <li className="hover:text-green-500">- 1st Campeonato Mineiro de Quebra Cabeça - 2014 Belo Horizonte</li>
              <li className="hover:text-green-500">- 3st Campeonato Brasileiro de Podar Roseiras - 2014 Rio Branco, Acre</li>
              <li className="hover:text-green-500">- 7st Campeonato Mundial de Bolinhas de Gude - 2015 Suécia</li>
              <li className="hover:text-green-500">- 2x Vice Campeão Bocha Street Cup - 2015 e 2016</li>
              <li className="hover:text-green-500">- 2st Desafio Latino-Americano de subir capa do FF - 2016 Buenos Aires</li>
              <li className="hover:text-green-500">- 1st Campeonato Brasileiro de Peteca - 2016 RJ</li>
              <li className="hover:text-green-500">- 1st Copa Steal The Drink - 2016 Habblive - Categoria: ATK</li>
              <li className="hover:text-green-500">- 1st Copa Steal The Drink - 2016 Habblive - Categoria: DEF (dupla Morduk)</li>
              <li className="hover:text-green-500">- 2st Copa Steal The Drink - 2017 Habblive - Categoria: ATK</li>
              <li className="hover:text-green-500">- 2st Copa Steal The Drink - 2017 Habblive - Categoria: DEF (dupla akzl)</li>
              <li className="hover:text-green-500">- 1st Interclasse - 2017 - Categoria: Bingo</li>
              <li className="hover:text-green-500">- 2st Interclasse - 2017 - Categoria: Guerra de dedão</li>
              <li className="hover:text-green-500">- 2st Campeonato de Just Dance - 2017 Piritiba</li>
              <li className="hover:text-green-500">- 2st Campeonato Mineiro de Racha de Rua (Gol Quadrado) - 2017 Alvorada</li>
              <li className="hover:text-green-500">- 1st Campeonato de Canastra no boteco do Zézão - 2018 Passo Fundo</li>
              <li className="hover:text-green-500">- 2st Campeonato de Bocha no boteco do Zézão - 2018 Passo Fundo</li>
              <li className="hover:text-green-500">- 1st Campeonato Gol a gol - 2019 Porto Alegre</li>
              <li className="hover:text-green-500">- 1st Desafio Internacional de Entrega de Pizza (CG150) - 2019 SP</li>
              <li className="hover:text-green-500">- 1st Campeonato Serra Gaucha de Fifa19 - 2019 Gramado</li>
              <li className="hover:text-green-500">- 1st copinha caixa d&apos;agua de baforar lolo sem desmaiar - 2019</li>
              <li className="hover:text-green-500">- 4st Duelo de quebra de asa na BR-101 - 2020 Torres</li>
              <li className="hover:text-green-500">- 3st Desafio mais anéis de fumaça com narguilé em menor tempo - 2020 Chapecó</li>
              <li className="hover:text-green-500">- 1st Desafio de podada de Volvo fh16 na rodovia - 2020 Cunha Porã</li>
              <li className="hover:text-green-500">- 2st Copa Cirrose - 2020 Casa do Cocielo</li>
              <li className="hover:text-green-500">- 2st Vice campeao do Arrancadão de Mandioca - 2021 Aratiba</li>
              <li className="hover:text-green-500">- 1st Copa free fire valendo chinelo - 2021</li>
              <li className="hover:text-green-500">- 1st Sorteio do Xis do Edson - 2022 Erechim</li>
              <li className="hover:text-green-500">- 1st Torneio Kicke o Mais Feio - 2022 Habblet</li>
              <li className="hover:text-green-500">- 3st Campeonato de Truco no boteco do avelino - 2023 Aratiba</li>
              <li className="hover:text-green-500">- 8st Campeonato Nacional de Grau de Trator - 2023 RJ</li>
              <li className="hover:text-green-500">- 1st Campeonato mundial de bater tazo - 2023 França</li>
              <li className="hover:text-green-500">- 1st Torneio Kicke o Mais Feio - 2023 Habblet</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="mx-auto text-2xl">~ todos meus haters parecem com o <a href="https://chaves.fandom.com/pt-br/wiki/Nhonho" target="_blank" className="underline">Nhonho</a> ~</h2>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            className="w-full"
            src="/1.jpg"
            alt="1"
            width={1152}
            height={2048}
          />

          <video className="w-full" width={960} height={1706} autoPlay muted loop>
            <source src="1m.mp4" type="video/mp4" />
          </video>

          <Image
            className="w-full"
            src="/2.jpg"
            alt="2"
            width={480}
            height={852}
          />

          <video className="w-full" width={720} height={1280} autoPlay muted loop>
            <source src="2.mp4" type="video/mp4" />
          </video>

          <video className="w-full" width={480} height={854} autoPlay muted loop>
            <source src="3.mp4" type="video/mp4" />
          </video>
        </div>

        <footer>
          <p className="opacity-10">&copy; 2023 Trem Tiroteio. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main >
  );
}
