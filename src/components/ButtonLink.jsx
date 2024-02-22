import React from 'react'
import { Button } from './ui/button'

export default function ButtonLink({ children, onClick }) {
    return (
        <Button variant="secondary" className=" w-full rounded-lg hover:bg-primary hover:text-secondary hover:font-semibold" onClick={onClick}>
            {children}
        </Button>
    )
}
