'use client';
import { useId, useState } from 'react';
import toast from 'react-hot-toast';
import { Button, FadeIn } from '.';

function TextInput({ label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-gray-500/20 bg-transparent px-6 pb-4 pt-12 text-base/6 text-white ring-2 ring-transparent transition focus:outline-none focus:ring-blue-400 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-white transition-all duration-200 peer-focus:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-90 peer-focus:scale-90 peer-focus:font-semibold peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:text-blue-400"
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        person_name: e.currentTarget.person_name.value,
        email: e.currentTarget.email.value,
        company: e.currentTarget.company.value,
        message: e.currentTarget.message.value,
      }),
    })
      .then((res) => {
        toast.success('Email sent!');
        const target = e.target as HTMLFormElement;
        target.reset();
      })
      .catch((err) => {
        toast.error('Something went wrong, please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <FadeIn className="mt-10">
      <form className="py-10" method="POST" onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-gray-900/20">
          <TextInput label="Name" name="person_name" autoComplete="name" required />
          <TextInput label="Email" type="email" name="email" autoComplete="email" required />
          <TextInput label="Company" name="company" autoComplete="organization" required />
          <TextInput label="Message" name="message" required />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="mt-6" variant="secondary" disabled={loading}>
            Send
          </Button>
        </div>
      </form>
    </FadeIn>
  );
}
