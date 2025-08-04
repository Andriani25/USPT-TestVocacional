export const cellPhones: string[] = [
    "https://wa.link/1v81us",
    "https://wa.link/207ecl",
    "https://wa.link/e0cvru",
    "https://wa.link/itb8n9",
    "https://wa.link/txzs7p"
]

export function getRandomCellphone() {

  let randomNum = Math.floor(Math.random() * 5)

  return cellPhones[randomNum]
}
