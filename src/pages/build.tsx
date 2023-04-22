import Contact from '@/components/buildpage/Contact'
import DevRes from '@/components/buildpage/DevRes'
import Dig from '@/components/buildpage/Dig'
import GettingStarted from '@/components/buildpage/GettingStarted'
import Source from '@/components/buildpage/Source'
import React from 'react'

export default function build() {
  return (
    <div className="min-h-screen">
        <DevRes/>
        <GettingStarted/>
        <Dig/>
        <Source/>
        <Contact/>
    </div>
  )
}
