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
// import sgMail from '@sendgrid/mail'



export default function ContactDialog() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { toast } = useToast();
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    // sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Kirim pesan ke Supabase
            const { data, error } = await supabaseConfig
                .from('messages')
                .insert([{ name: capitalizedName, email, message }]);

            if (error) {
                console.error('Error submitting message:', error.message);
                return;
            }

            console.log('Message submitted successfully:', data);

            // await sgMail.send({
            //     to: 'zkyxentertain@gmail.com',
            //     from: email,
            //     subject: 'Contact Message Jeky',
            //     text: message,
            // });

            toast({
                title: `${capitalizedName} Send Message Successful`,
                description: 'Your message has been sent to Zaky Irsyad Rais! You will receive a reply within a few moments.',
            });

            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error handling form submission:', error.message);
        }
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Get in Touch</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Get in Touch</DialogTitle>
                    <DialogDescription>
                        Send Me Messages and I Will Reply from ur Email.
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" placeholder="Example" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3 capitalize" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                            Message
                        </Label>
                        <Textarea placeholder="Type your message here." className="col-span-3" value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>

    )
}
