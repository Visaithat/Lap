import { Phone } from 'lucide-react';
import { T } from '@/components/i18n';

/**
 * Fixed bottom-right red pill — mobile only (hidden via the
 * `.lap-emergency-floating` rule in tokens.css at >= 768px).
 */
export function EmergencyHotline() {
  return (
    <a
      href="tel:1819"
      className="lap-emergency-floating"
      aria-label="Emergency hotline 1819"
    >
      <Phone className="h-5 w-5" aria-hidden />
      <T lo="ແຈ້ງເຫດ 1819" en="Hotline 1819" />
    </a>
  );
}
