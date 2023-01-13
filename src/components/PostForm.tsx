import { useState, ChangeEvent } from "react"

type Props = {
    onAdd: (title: string, body: string) => void
}

export const PostForm = ({ onAdd }: Props) => {
    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('')

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }

    const handleAddClick = () => {
        if (addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText)
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <fieldset style={{ marginBottom: 15, display: 'flex', flexDirection: 'column', padding: 5 }}>
            <legend>Adicionar novo Post</legend>
            <input value={addTitleText}
                onChange={handleAddTitleChange}
                type="text"
                placeholder="Digite um titulo">
            </input>
            <textarea value={addBodyText}
                onChange={handleAddBodyChange}
            ></textarea>
            <button onClick={handleAddClick}>Adicionar</button>

        </fieldset>
    )

}