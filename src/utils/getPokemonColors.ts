import { typeColors } from "@/constants/typeColors"
import type { PokemonType } from "@/constants/typeColors"

export const getPokemonColor = (type: string): string => {
  return typeColors[type as PokemonType] || "#A8A8A8"
}

export const getPokemonBgColor = (type: string): string => {
  const color = getPokemonColor(type)
  return color + "99"
}
