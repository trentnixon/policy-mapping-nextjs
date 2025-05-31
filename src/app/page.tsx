'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-2xl py-12">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>shadcn/ui Test</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Input placeholder="Type something..." />
          </div>
        </CardContent>
      </Card>
      <h1 className="text-4xl font-bold text-center text-foreground mb-4">Policy Mapping App</h1>
      <p className="text-lg text-center text-muted-foreground max-w-xl mx-auto mb-8">
        Welcome! This is the starting point for your policy mapping project. Use the navigation or
        features below to get started.
      </p>
      <div className="w-full max-w-md mx-auto p-6 border rounded-lg bg-background shadow">
        <p className="text-center text-sm text-muted-foreground">
          [Feature area placeholder: Add your first feature here!]
        </p>
      </div>
    </div>
  );
}
