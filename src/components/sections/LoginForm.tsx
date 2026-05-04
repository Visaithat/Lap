'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { T, useLang } from '@/components/i18n';

const schema = z.object({
  user: z.string().min(3, 'required'),
  password: z.string().min(1, 'required'),
  remember: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

const errorText: Record<string, { lo: string; en: string }> = {
  required: { lo: 'ຈຳເປັນຕ້ອງປ້ອນ', en: 'This field is required' },
};

function FieldError({ code }: { code?: string }) {
  if (!code || !errorText[code]) return null;
  return (
    <p className="text-lap-danger-600 mt-1.5 text-xs">
      <T lo={errorText[code].lo} en={errorText[code].en} />
    </p>
  );
}

export function LoginForm() {
  const router = useRouter();
  const { lang } = useLang();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  // TODO: wire to backend endpoint
  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 300));
    router.push('/');
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        aria-label="Login form"
      >
        <Input
          label={<T lo="ອີເມວ ຫຼື ເບີໂທ" en="Email or phone" />}
          placeholder={lang === 'lo' ? 'you@example.com' : 'you@example.com'}
          autoComplete="username"
          error={<FieldError code={errors.user?.message} />}
          {...register('user')}
        />
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="lap-label !mb-0">
              <T lo="ລະຫັດຜ່ານ" en="Password" />
            </span>
            <Link
              href="/contact"
              className="text-lap-primary-700 text-xs font-medium hover:underline"
            >
              <T lo="ລືມລະຫັດ?" en="Forgot?" />
            </Link>
          </div>
          <Input
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            error={<FieldError code={errors.password?.message} />}
            {...register('password')}
          />
        </div>
        <label className="text-lap-ink-600 flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="border-lap-border text-lap-primary-700 h-4 w-4 rounded"
            {...register('remember')}
          />
          <T lo="ຈົດຈຳຂ້ອຍ" en="Remember me" />
        </label>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center"
        >
          <T
            lo={isSubmitting ? 'ກຳລັງເຂົ້າ...' : 'ເຂົ້າສູ່ລະບົບ'}
            en={isSubmitting ? 'Signing in...' : 'Sign in'}
          />
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </form>

      <div className="text-lap-ink-400 my-6 flex items-center gap-3 font-mono text-xs">
        <span className="bg-lap-border h-px flex-1" />
        <span>OR</span>
        <span className="bg-lap-border h-px flex-1" />
      </div>

      <p className="text-lap-ink-600 text-center text-sm">
        <T lo="ບໍ່ມີບັນຊີ?" en="No account?" />
        <Link
          href="/contact"
          className="text-lap-primary-700 ml-1 font-semibold hover:underline"
        >
          <T lo="ຕິດຕໍ່ສາຂາ" en="Visit a branch" />
        </Link>
      </p>

      <p className="text-lap-ink-400 mt-6 text-center font-mono text-xs">
        [demo — no real authentication]
      </p>
    </>
  );
}
