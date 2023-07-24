// context/todoContext.tsx
import { createContext, useState } from 'react'
import { library as InitialLibrary } from './../mocks/books.json'
import { type Library, type LibraryElement } from '../types'

export const BooksContext = createContext<LibraryElement[] | null>(null)

export const BooksProvider = ({ children }) => {
  const initialBooks: LibraryElement[] = localStorage.getItem('__library__') != null
    ? (JSON.parse(localStorage.getItem('__library__')) as LibraryElement[])
    : InitialLibrary
  const toReadBooks: LibraryElement[] = localStorage.getItem('__library__') != null
    ? (JSON.parse(localStorage.getItem('__library__')) as LibraryElement[]).filter(ele => ele.toRead)
    : []
  console.log('LOS LIROS INICIALES SON: ', initialBooks)
  const [library, setLibrary] = useState<LibraryElement[]>(initialBooks)
  const [readingBooks, setReadingBooks] = useState<LibraryElement[]>(
    toReadBooks
  )

  return (
    <BooksContext.Provider value={
      { library, readingBooks, setReadingBooks, setLibrary }
      }>
{ children }
    </BooksContext.Provider>
  )
}
