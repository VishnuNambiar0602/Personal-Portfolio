// src/ai/flows/suggest-portfolio-description.ts
'use server';

/**
 * @fileOverview Generates a project or experience description for a portfolio website.
 *
 * - generatePortfolioDescription - A function that generates a description for a portfolio project or experience.
 * - GeneratePortfolioDescriptionInput - The input type for the generatePortfolioDescription function.
 * - GeneratePortfolioDescriptionOutput - The return type for the generatePortfolioDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioDescriptionInputSchema = z.object({
  prompt: z.string().describe('A prompt describing the project or experience.'),
});
export type GeneratePortfolioDescriptionInput = z.infer<typeof GeneratePortfolioDescriptionInputSchema>;

const GeneratePortfolioDescriptionOutputSchema = z.object({
  description: z.string().describe('A description of the project or experience.'),
});
export type GeneratePortfolioDescriptionOutput = z.infer<typeof GeneratePortfolioDescriptionOutputSchema>;

export async function generatePortfolioDescription(input: GeneratePortfolioDescriptionInput): Promise<GeneratePortfolioDescriptionOutput> {
  return generatePortfolioDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioDescriptionPrompt',
  input: {schema: GeneratePortfolioDescriptionInputSchema},
  output: {schema: GeneratePortfolioDescriptionOutputSchema},
  prompt: `You are a creative content writer who specializes in writing engaging and compelling descriptions for personal portfolio websites.

  Based on the user's prompt, create a description for a project or experience that will be displayed on their portfolio.

  Prompt: {{{prompt}}}`,
});

const generatePortfolioDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePortfolioDescriptionFlow',
    inputSchema: GeneratePortfolioDescriptionInputSchema,
    outputSchema: GeneratePortfolioDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
