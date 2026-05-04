'use client';

import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { Button, Card, Input, useToast } from '@/components/ui';
import { T, useLang } from '@/components/i18n';
import { cn } from '@/lib/cn';

const schema = z.object({
  name: z.string().min(2, 'required'),
  phone: z.string().min(6, 'required'),
  email: z.string().email('email'),
  topic: z.enum(['vehicle', 'loan', 'third-party', 'claim', 'other']),
  message: z.string().min(10, 'short'),
});

type FormValues = z.infer<typeof schema>;

const TOPICS: Array<{ value: FormValues['topic']; lo: string; en: string }> = [
  { value: 'vehicle', lo: 'ປະກັນໄພລົດ', en: 'Vehicle Insurance' },
  { value: 'loan', lo: 'ປະກັນໄພເງິນກູ້', en: 'Loan Insurance' },
  { value: 'third-party', lo: 'ປະກັນໄພບຸກຄົນທີ່ສາມ', en: 'Third-Party' },
  { value: 'claim', lo: 'ສິນທົດແທນ', en: 'Claim' },
  { value: 'other', lo: 'ອື່ນໆ', en: 'Other' },
];

const errorText: Record<string, { lo: string; en: string }> = {
  required: { lo: 'ຈຳເປັນຕ້ອງປ້ອນ', en: 'This field is required' },
  email: { lo: 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ', en: 'Please enter a valid email' },
  short: {
    lo: 'ກະລຸນາພິມຂໍ້ຄວາມຢ່າງໜ້ອຍ 10 ຕົວອັກສອນ',
    en: 'Please enter at least 10 characters',
  },
};

function FieldError({ code }: { code?: string }) {
  if (!code || !errorText[code]) return null;
  return (
    <p className="text-lap-danger-600 mt-1.5 text-xs">
      <T lo={errorText[code].lo} en={errorText[code].en} />
    </p>
  );
}

export function ContactForm() {
  const { lang } = useLang();
  const { toast } = useToast();
  const topicId = useId();
  const messageId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { topic: 'vehicle' },
  });

  const onSubmit = async (values: FormValues) => {
    const topic = TOPICS.find((t) => t.value === values.topic);
    const topicText = lang === 'lo' ? topic?.lo : topic?.en;

    const subject = `[LAP Contact] ${topicText} — ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Topic: ${topicText}`,
      '',
      'Message:',
      values.message,
    ].join('\n');

    const url =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=Contract@lap.com.la` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(url, '_blank', 'noopener,noreferrer');

    toast({
      title: <T lo="ເປີດ Gmail ແລ້ວ" en="Gmail opened" />,
      description: (
        <T
          lo="ກະລຸນາກົດສົ່ງໃນ Gmail ເພື່ອສົ່ງຂໍ້ຄວາມ."
          en="Please click Send in Gmail to deliver the message."
        />
      ),
      tone: 'success',
    });
    reset();
  };

  return (
    <Card className="p-6 md:p-8">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        aria-label="Contact form"
      >
        <h2 className="lap-h2 mb-2">
          <T lo="ສົ່ງຂໍ້ຄວາມ" en="Send a message" />
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label={<T lo="ຊື່" en="Name" />}
            placeholder={lang === 'lo' ? 'ຊື່ ແລະ ນາມສະກຸນ' : 'Full name'}
            autoComplete="name"
            error={<FieldError code={errors.name?.message} />}
            {...register('name')}
          />
          <Input
            label={<T lo="ເບີໂທ" en="Phone" />}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="020 …"
            error={<FieldError code={errors.phone?.message} />}
            {...register('phone')}
          />
        </div>

        <Input
          label={<T lo="ອີເມວ" en="Email" />}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={<FieldError code={errors.email?.message} />}
          {...register('email')}
        />

        <div className="flex flex-col">
          <label htmlFor={topicId} className="lap-label">
            <T lo="ຫົວຂໍ້" en="Topic" />
          </label>
          <select
            id={topicId}
            className={cn(
              'lap-input',
              errors.topic &&
                'border-lap-danger-600 focus:border-lap-danger-600',
            )}
            {...register('topic')}
          >
            {TOPICS.map((t) => (
              <option key={t.value} value={t.value}>
                {lang === 'lo' ? t.lo : t.en}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor={messageId} className="lap-label">
            <T lo="ຂໍ້ຄວາມ" en="Message" />
          </label>
          <textarea
            id={messageId}
            rows={5}
            className={cn(
              'lap-input',
              errors.message &&
                'border-lap-danger-600 focus:border-lap-danger-600',
            )}
            placeholder={
              lang === 'lo'
                ? 'ບອກພວກເຮົາວ່າພວກເຮົາສາມາດຊ່ວຍຫຍັງ...'
                : 'Tell us how we can help...'
            }
            {...register('message')}
          />
          <FieldError code={errors.message?.message} />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          <T
            lo={isSubmitting ? 'ກຳລັງສົ່ງ...' : 'ສົ່ງຂໍ້ຄວາມ'}
            en={isSubmitting ? 'Sending...' : 'Send message'}
          />
          <Send className="h-4 w-4" aria-hidden />
        </Button>
      </form>
    </Card>
  );
}
