'use client';

import Image from 'next/image';
import { useState } from 'react';
import { T } from '@/components/i18n';
import { Card, Pill, StaggerGroup, StaggerItem } from '@/components/ui';
import type { Person } from '@/data/board';
import { PersonModal } from './PersonModal';

type PersonGridProps = {
  people: Person[];
  /**
   * When true, the first person renders as a wide horizontal "hero" card
   * (used for the Chairman on the Board page). The remaining people fall
   * into a responsive grid underneath. Defaults to false to preserve the
   * Management page layout.
   */
  featured?: boolean;
  /**
   * Card style for the photo. `avatar` shows a centered circular portrait
   * (default — used for the board cards). `portrait` shows a tall card
   * with a full-body shot standing on a gradient backdrop, suited to the
   * executive headshots on the Management page.
   */
  variant?: 'avatar' | 'portrait';
};

type CardLikeProps = {
  person: Person;
  onOpen: (person: Person) => void;
};

function PortraitFrame({ person, size = 'md' }: { person: Person; size?: 'md' | 'lg' }) {
  const dimensions =
    size === 'lg'
      ? 'aspect-square w-full max-w-[240px] sm:max-w-[260px]'
      : 'aspect-square w-full max-w-[180px] sm:max-w-[200px]';
  const sizes =
    size === 'lg'
      ? '(min-width: 1024px) 260px, (min-width: 640px) 240px, 70vw'
      : '(min-width: 768px) 200px, 60vw';

  return (
    <div
      className={`relative mx-auto ${dimensions} flex items-center justify-center`}
    >
      {person.photoSrc ? (
        <Image
          src={person.photoSrc}
          alt={person.nameEn}
          fill
          sizes={sizes}
          className="object-contain"
          priority={size === 'lg'}
        />
      ) : (
        <div className="bg-lap-primary-50 text-lap-primary-700 flex h-full w-full items-center justify-center rounded-full text-4xl font-bold">
          <span aria-hidden>{person.initials}</span>
        </div>
      )}
    </div>
  );
}

function PersonCard({ person, onOpen }: CardLikeProps) {
  return (
    <Card
      interactive
      role="button"
      tabIndex={0}
      aria-label={`${person.nameEn} — ${person.roleEn}`}
      onClick={() => onOpen(person)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(person);
        }
      }}
      className="group flex h-full cursor-pointer flex-col items-center p-5 text-center focus-visible:outline-none"
    >
      <div className="mb-3 w-full">
        <PortraitFrame person={person} />
      </div>
      <h3 className="lap-h3 mb-2 transition-colors group-hover:text-lap-primary-700">
        <T lo={person.nameLo} en={person.nameEn} />
      </h3>
      <Pill>
        <T lo={person.roleLo} en={person.roleEn} />
      </Pill>
    </Card>
  );
}

function PortraitPersonCard({ person, onOpen }: CardLikeProps) {
  return (
    <Card
      interactive
      role="button"
      tabIndex={0}
      aria-label={`${person.nameEn} — ${person.roleEn}`}
      onClick={() => onOpen(person)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(person);
        }
      }}
      className="group flex h-full cursor-pointer flex-col overflow-hidden p-0 focus-visible:outline-none"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-lap-primary-50 via-white to-lap-accent-50/60">
        {person.photoSrc ? (
          <Image
            src={person.photoSrc}
            alt={person.nameEn}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-lap-primary-700">
            {person.initials}
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-3 px-6 py-6 text-center">
        <h3 className="lap-h3 transition-colors group-hover:text-lap-primary-700">
          <T lo={person.nameLo} en={person.nameEn} />
        </h3>
        <Pill>
          <T lo={person.roleLo} en={person.roleEn} />
        </Pill>
      </div>
    </Card>
  );
}

function FeaturedPersonCard({ person, onOpen }: CardLikeProps) {
  return (
    <Card
      interactive
      role="button"
      tabIndex={0}
      aria-label={`${person.nameEn} — ${person.roleEn}`}
      onClick={() => onOpen(person)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(person);
        }
      }}
      className="group relative cursor-pointer overflow-hidden p-6 md:p-8 focus-visible:outline-none"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lap-primary-50/70 via-white to-lap-accent-50/40"
      />
      <div className="relative grid items-center gap-6 md:grid-cols-[auto,1fr] md:gap-10">
        <PortraitFrame person={person} size="lg" />
        <div className="text-center md:text-left">
          <span className="lap-eyebrow mb-4">
            <T lo="ປະທານສະພາ" en="Chair of the Board" />
          </span>
          <h2 className="lap-h1 mt-3 mb-4 transition-colors group-hover:text-lap-primary-700">
            <T lo={person.nameLo} en={person.nameEn} />
          </h2>
          <div className="mb-5 flex justify-center md:justify-start">
            <Pill>
              <T lo={person.roleLo} en={person.roleEn} />
            </Pill>
          </div>
          <p className="text-lap-ink-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            <T lo={person.bioLo} en={person.bioEn} />
          </p>
        </div>
      </div>
    </Card>
  );
}

/**
 * Responsive grid of person cards. Click / Enter / Space on any card opens
 * `PersonModal` with that person's details. When `featured` is true, the
 * first person is rendered as a wide hero card and the rest fall into a
 * compact 2/4-column grid (used on the Board page so the Chairman reads
 * with more weight).
 */
export function PersonGrid({
  people,
  featured = false,
  variant = 'avatar',
}: PersonGridProps) {
  const [selected, setSelected] = useState<Person | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (person: Person) => {
    setSelected(person);
    setOpen(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
  };

  const CardComponent = variant === 'portrait' ? PortraitPersonCard : PersonCard;

  if (featured && people.length > 0) {
    const [first, ...rest] = people;
    return (
      <>
        <StaggerGroup className="space-y-8" stagger={0.12}>
          <StaggerItem>
            <FeaturedPersonCard person={first} onOpen={handleOpen} />
          </StaggerItem>
          {rest.length > 0 && (
            <StaggerItem>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {rest.map((person) => (
                  <CardComponent
                    key={person.id}
                    person={person}
                    onOpen={handleOpen}
                  />
                ))}
              </div>
            </StaggerItem>
          )}
        </StaggerGroup>
        <PersonModal
          person={selected}
          open={open}
          onOpenChange={handleOpenChange}
        />
      </>
    );
  }

  return (
    <>
      <StaggerGroup
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.1}
      >
        {people.map((person) => (
          <StaggerItem key={person.id}>
            <CardComponent person={person} onOpen={handleOpen} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <PersonModal
        person={selected}
        open={open}
        onOpenChange={handleOpenChange}
      />
    </>
  );
}
