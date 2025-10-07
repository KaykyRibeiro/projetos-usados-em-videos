type Props = {
  name: string;
  idade: number
}
export default function components({ name, idade }: Props) {
 return (
   <div>
        <h1>Seu nome é {name}</h1>
        <h2>Idade: {idade}</h2>
   </div>
 );
}