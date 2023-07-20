import { useState, ChangeEvent } from "react"

export const useInput = (initialValue?: string) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clear = () => {
        setValue('')
    }

    return {
        value,
        onChange,
        clear,
    }
}