import ClientComponentAuth from "@/components/client-component-auth";
import ServerComponentAuth from "@/components/server-component-auth";
import { buttonVariants } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="space-y-2 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="flex gap-2">
            {" "}
            <Link
              href={"https://twitter.com/devdeck101"}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Twitter
            </Link>
            <Link
              href={"https://www.instagram.com/developerdeck101_"}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Instagram
            </Link>
            <Link
              href={"https://www.tiktok.com/@developerdeck101"}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no TikTok
            </Link>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            O melhor de Next.js 13, Next-Auth, Prisma e Shadcn-ui.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Canal YT @DeveloperDeck101 está focado no conteúdo mais atualizado
            de desenvolvimento web. Me segue nas redes sociais e compartilha.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Entrar
            </Link>
            <Link
              href="https://github.com/devdeck101"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
            {user !== undefined && (
              <Link
                href="/api/auth/signout"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Sair
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* Components */}
            <ClientComponentAuth />
            <ServerComponentAuth />
          </div>
        </div>
      </section>
    </div>
  );
}
