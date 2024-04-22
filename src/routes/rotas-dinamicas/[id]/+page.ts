
// Fazendo glitch para evitar erro ao buildar SSG
// Dessa forma o builder vai entender que existe apenas um possível id e finalizará com sucesso
export function entries() {
  return [
    { id: '1' },
  ]
}