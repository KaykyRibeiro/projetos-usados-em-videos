import { useState } from "react";

export default function components() {
    const [nome, setNome] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setNome("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Formulário enviado com sucesso, ${nome}!`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64">
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <div className="flex gap-2">
                    <button type="submit">Enviar</button>

                    <button onClick={handleClick}>Limpar</button>
                </div>
            </form>
            <p className="mt-4 border p-2">Nome: {nome}</p>
        </div>
        
    );
}