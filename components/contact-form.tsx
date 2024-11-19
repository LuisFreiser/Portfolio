"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { useState } from "react";

const ContactForm = () => {
  const [sucessForm, setSucessForm] = useState(false);

  const formSchema = z.object({
    username: z.string().min(1, { message: "Please enter your name" }).max(50),
    email: z.string().email({ message: "Please enter your email" }),
    message: z.string().min(1, { message: "Please enter a message" }).max(300),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      setSucessForm(true);
    }
  };

  return (
    <Form {...form}>
      {sucessForm && (
        <h4 className="text-green-500">Mensaje Enviado con Exito ✔</h4>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Form Fields para el User Name */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Form Fields para el Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Your Email"
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Form Fields para el Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your Message"
                  {...field}
                  className="dark:bg-slate-800"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
