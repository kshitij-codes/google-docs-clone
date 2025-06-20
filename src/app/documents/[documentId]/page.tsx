import React from 'react'
import Editor from './editor'
import Toolbar from './toolbar'
import { Navbar } from './navbar'
import { Room } from './room'

const DocumentIdPage = () => {
  return (
    <Room>
      <div>
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] print:hidden h-[112px]">
          <Navbar />
          <Toolbar />
        </div>
        <div className='pt-[114px] print:pt-0'>
            <Editor />
        </div>
      </div>
    </Room>
  )
}

export default DocumentIdPage
