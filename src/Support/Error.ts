export default function error(message?: string): void
{
    throw new Error(message);
}