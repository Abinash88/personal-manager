'use client'

import Div from '@/lib/Div'
import React, { useContext, useState } from 'react'
import { cn } from '@/lib/utils';

import dynamic from 'next/dynamic';
import GlobalTopSearch from '../PasswordComponent/SmallComponent/GlobalTopSearch';
import PageTitle from '@/components/UI/page-title';
import MyContext from '@/context/MyContext';
import SingleApp from '../PasswordComponent/single-password';
import { MyAppDataTypes } from '@/Data/Types';
import { notesData } from '@/Data/StaticData';
import { StaticNotesDataTypes } from '@/BackendLib/lib/types';
import SingleNotes from './single-notes';
import SingleNotePopup from './single-note-popup';
const PopUpForm = dynamic(() => import('./PopupForm'))
const MainTodo = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [text, setText] = useState('')
  const [notePopup, setNotePopup] = useState<StaticNotesDataTypes>()

  return (
    <Div className="w-full h-full ">
      <Div className="w-full px-6 flex items-center  h-[50px]">
        <PageTitle title="Notes" />
      </Div>
      <Div className="h-[calc(100vh-100px)] bg-background rounded-tr-lg">
        <Div className="w-full px-6 py-4   ">
          <GlobalTopSearch setText={setText} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
          <Div className={cn(`w-full fixed z-20 h-full transition-all ${isOpenPopup ? 'right-[0px]' : 'right-[-150%]'} top-0 `)}>
            <Div className="w-full h-full ">
              <PopUpForm
                closeModelBox={setIsOpenPopup}
              />
            </Div>
          </Div>
        </Div>
        <Div className="w-full px-6 h-[calc(100vh-160px)]  overflowstyle overflow-y-auto">
          {notesData?.map((data: StaticNotesDataTypes) =>
          (
            <SingleNotes setNotePopup={setNotePopup} data={data} />
          )
          )}
        </Div>
        {notePopup &&
          <SingleNotePopup setNotePopup={setNotePopup}  notePopup={notePopup} />
        }
      </Div>
    </Div>
  )
}

export default MainTodo