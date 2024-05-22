"use client";
import React from 'react';

interface IProps{
    bgColor: string;
    children?: React.ReactNode;
}

export default function NotificationsCard(props:IProps) {
  return (
    <div className={`w-[229px] rounded-[11px] border border-[#2A2B2A] py-[20px] px-[25px] bg-[${props.bgColor}]`}>
        <div className="flex flex-col gap-[15px]">
            <p className='font-bold'>John Doe</p>
            <div className='flex justify-between'>
                <div>
                    <span className='font-bold'>Date:</span><br /><span>20 March</span>
                </div>
                <div>
                    <span className='font-bold'>Time:</span><br /><span>9:45:20 AM</span>
                </div>
            </div>
            {props.children}
        </div>
    </div>
  )
}
