import "server-only"

export const getDictionary = async (locale) => {
  const dictionary = await import(`./dictionaries/${locale}.json`)
  return dictionary.default
}
