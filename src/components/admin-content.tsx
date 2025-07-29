"use client";

export default function AdminContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center p-8 bg-card rounded-lg shadow-lg">
        <h1 className="text-4xl font-headline font-bold mb-4">Welcome Admin!</h1>
        <p className="text-lg text-muted-foreground">You have successfully logged in.</p>
      </div>
    </div>
  );
}