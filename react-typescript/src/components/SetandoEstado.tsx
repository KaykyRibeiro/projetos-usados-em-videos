import { useState } from "react";

type Props = {
  name: string;
  idade?: number;
};

export default function Pessoa({ name, idade = 0 }: Props) {
  const [maisIdade, setMaisIdade] = useState<number>(idade);

  return (
    <div>
      <p>Meu nome é {name}</p>
      <p>Minha idade é {maisIdade}</p>
      <button onClick={() => setMaisIdade(maisIdade + 1)}>
        Mais Idade
      </button>
    </div>
  );
}
