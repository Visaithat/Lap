import Image from 'next/image';
import { Card } from '@/components/ui';
import { T } from '@/components/i18n';
import { LoginForm } from '@/components/sections/LoginForm';

export const metadata = { title: 'Login' };

export default function LoginPage() {
  return (
    <div className="from-lap-primary-700 to-lap-primary-900 flex min-h-screen items-center justify-center bg-gradient-to-br px-4 py-12">
      <div className="w-full max-w-md">
        <Card className="p-8">
          <div className="mb-8 text-center">
            <Image
              src="/img/lap-logo.png"
              alt="Lanexang Assurance logo"
              width={64}
              height={64}
              priority
              className="mx-auto mb-5 h-16 w-16"
            />
            <h1 className="lap-h2 mb-2"><T lo="ປະຕູລູກຄ້າ" en="Customer Portal" /></h1>
            <p className="text-lap-ink-600 text-sm"><T lo="ເຂົ້າເຖິງກົມທະບຽນ ແລະ ການຮຽກຮ້ອງຄ່າສິນທົດແທນ" en="Access your policies and claims" /></p>
          </div>
          <LoginForm />
        </Card>
      </div>
    </div>
  );
}
