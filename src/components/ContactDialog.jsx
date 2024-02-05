'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from './ui/textarea'
import { supabaseConfig } from '@/api/supabase'
import { useToast } from './ui/use-toast'
import { Resend } from 'resend'

export default function ContactDialog() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { toast } = useToast();
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kirim pesan ke Supabase
        const { data, error } = await supabaseConfig
            .from('messages')
            .insert([{ name: capitalizedName, email, message }]);

        setName('');
        setEmail('');
        setMessage('');


        if (error) {
            console.error('Error submitting message:', error.message);
        } else {
            console.log('Message submitted successfully:', data);

            const { data: resendData, error: resendError } = await resend.emails.send({
                from: email,
                to: ['zkyxentertain@gmail.com'],
                subject: 'Contact Message Jeky',
                react: message,
            });


            toast({
                title: `${capitalizedName} Send Message Successful`,
                description: 'Your message has been sent to Zaky Irsyad Rais!, you will receive a reply within a few moments',
            });
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" placeholder="Example" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3 capitalize" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                            Message
                        </Label>
                        <Textarea placeholder="Type your message here." className="col-span-3" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>

    )
}
