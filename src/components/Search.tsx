import { useState } from "react"
import './Search.css'

export const Search = ({ defaultValue, onChange, label, placeholder }: {
  defaultValue?: string;
  onChange: (newVal: string) => void;
  label: string;
  placeholder: string
}) => {
  const [search, setSearch] = useState(defaultValue || '')

  const handleChange = (val: string) => {
    setSearch(val)
    onChange(val)
  }

  return (
    <label className="Search">
      <span>{label}</span>
      <input
        className='Search__input'
        placeholder={placeholder}
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  )
}