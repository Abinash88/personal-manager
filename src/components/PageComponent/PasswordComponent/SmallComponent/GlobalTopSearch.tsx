import Button, { InputField } from '@/components/ui/UiItems'
import Div from '@/lib/Div'
import React from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { AiOutlinePlus } from "react-icons/ai";


const GlobalTopSearch = ({ setText, offCheckList = true, Drawer }:
    {
        Drawer?: React.ReactNode,
        setText: React.Dispatch<React.SetStateAction<string>>
        offCheckList?: boolean;
    }) => {

    return (
        <Div>
            <Div className="w-full flex items-center  gap-3 pr-4">
                {offCheckList && <input type='checkbox' className='rounded-sm border w-5 h-5 bg-input' />}
                <div>
                    {Drawer}
                </div>
                <Button
                    onClick={() => { }} size="md" variant={'outline'}
                    className="text-[11px] flex gap-2 ">
                    <span>More</span>
                    <FaChevronDown className="text-[12px] text-gray-60" />
                </Button>
                <Div className="flex items-center gap-2">
                    <InputField onChange={(e) => { setText(e.target.value) }} type="search" className="w-[300px] placeholder:text-[11px] bg-white" placeholder="Search Password..." />
                </Div>
            </Div>
        </Div>
    )
}

export default GlobalTopSearch