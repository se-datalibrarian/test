import fs from 'fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'public/data/')

/**
 * Read data from a csv file stored in "public/data" and return the data as a string
 * 
 * @param fileName Name of the file to parse (must be located in "public/data/")
 * @returns A string containing the unparsed text from the CSV file
 */
export function getCsvData(fileName: string): string {
  const fileData = fs.readFileSync(dataDirectory + fileName, 'utf8')
  return fileData
}