import { useContext, useEffect, useState } from 'react'
import { BooksContext } from './../context/context'
import { type LibraryElement } from '../types'
import { library as InitialLibrary } from './../mocks/books.json'
export function useSetBooks () {
  const initialBooks: LibraryElement[] = JSON.parse(localStorage.getItem('__library__'))
  const { setLibrary, library, readingBooks, setReadingBooks } = useContext(BooksContext)
  const addReading = (isbn: string) => {
    const index = library.findIndex(ele => ele.book.ISBN === isbn)

    const newLibrary = [...library]
    newLibrary[index].toRead = !(newLibrary[index]?.toRead)
    setLibrary(newLibrary)
    window.localStorage.setItem('__library__', JSON.stringify(newLibrary))
    setReadingBooks(newLibrary.filter(ele => ele.toRead))
  }

  return { library, readingBooks, addReading }
}
