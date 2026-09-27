import axios from "axios"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

const getSpriteUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

export const getPokemonDetail = async (nameOrId) => {
  const { data } = await api.get(`/pokemon/${String(nameOrId).trim().toLowerCase()}`)

  return {
    id: data.id,
    name: data.name,
    login: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((t) => t.type.name),
    stats: data.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    avatar:
      data.sprites?.other?.["official-artwork"]?.front_default ||
      data.sprites?.front_default ||
      getSpriteUrl(data.id),
  }
}

export const formatTypes = (types) => {
  if (!Array.isArray(types)) return ""
  return types
    .map((t) => (typeof t === "string" ? t : t?.type?.name || t?.name || ""))
    .filter(Boolean)
    .join(" / ")
}

export default api